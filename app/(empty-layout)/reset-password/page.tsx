import { Metadata } from 'next'
import ResetPasswordForm from './components/reset-password-form'

export const metadata: Metadata = {
	title: 'Đặt lại mật khẩu',
}

export default function ForgetPasswordPage() {
	return <ResetPasswordForm />
}
