'use client'

import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'
import { toast } from 'react-toastify'
import { create } from 'zustand'
import { authApi } from '~/apis'
import { queryKeys } from '~/configs'
import { AuthException } from '~/exceptions'
import { handleError, httpClient } from '~/services'

interface State {
	accessToken: string | null
	userId: string | null
}

interface Action {
	setAccessToken: (accessToken: string | null) => void
	setUserId: (userId: string | null) => void
}

export const useAuthStore = create<State & Action>(set => ({
	accessToken: null,
	userId: null,
	setAccessToken: (accessToken: string | null) => set({ accessToken }),
	setUserId: (userId: string | null) => set({ userId }),
}))

export function useAuth() {
	const accessToken = useAuthStore(state => state.accessToken)
	const setAccessToken = useAuthStore(state => state.setAccessToken)
	const userId = useAuthStore(state => state.userId)
	const setUserId = useAuthStore(state => state.setUserId)

	const queryClient = useQueryClient()

	useEffect(() => {
		setAccessToken(localStorage.getItem('accessToken') ?? '')
		setUserId(localStorage.getItem('userId') ?? '')
	}, [setAccessToken, setUserId])

	useEffect(() => {
		if (!!accessToken) {
			httpClient.setAuthHeader(accessToken)
			localStorage.setItem('accessToken', accessToken)
		}
	}, [accessToken])

	const logIn = async (email: string, password: string) => {
		try {
			const { accessToken, userId } = await authApi.signIn(email, password)
			httpClient.setAuthHeader(accessToken)
			localStorage.setItem('accessToken', accessToken)
			localStorage.setItem('userId', userId)
			setAccessToken(accessToken)
			setUserId(userId)
		} catch (error) {
			handleError(error, res => {
				throw new AuthException(res.data.message)
			})
		}
	}

	const logOut = useCallback(() => {
		try {
			authApi.signOut()
		} catch (error) {
			localStorage.removeItem('accessToken')
			localStorage.removeItem('userId')
			queryClient.cancelQueries({ queryKey: queryKeys.me.gen(accessToken!) })
			httpClient.removeAuthHeader()
			setAccessToken('')
			setUserId('')
		} finally {
			localStorage.removeItem('accessToken')
			localStorage.removeItem('userId')
			queryClient.cancelQueries({ queryKey: queryKeys.me.gen(accessToken!) })
			httpClient.removeAuthHeader()
			setAccessToken('')
			setUserId('')
		}
	}, [accessToken, queryClient, setAccessToken, setUserId])

	useEffect(() => {
		httpClient.createAuthRefreshInterceptor(
			accessToken => {
				localStorage.setItem('accessToken', accessToken)
				httpClient.setAuthHeader(accessToken)
				setAccessToken(accessToken)
			},
			() => {
				logOut()
				toast.error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
			},
		)
	}, [logOut, setAccessToken])

	return {
		isLoggedIn: !!accessToken && !!userId,
		accessToken,
		logIn,
		logOut,
		userId,
	}
}
