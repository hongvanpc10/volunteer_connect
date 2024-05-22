'use client'
import {useRouter, usePathname} from 'next/navigation'

function Manage() {
    const router = useRouter()
    const path = usePathname()

    router.push(`${path}/edit`)
    
    return (
        <div></div>
    )
}

export default Manage