import React from 'react'
import Logo from '../common/logo'
import Link from 'next/link'

function Header() {
    return (
        <section className="flex flex-row items-center justify-center  w-full h-30  bg-white border-b border-gray-200">
        <div className="flex flex-row items-center justify-between w-full max-w-[1200px] px-4">
            <Logo />
            <div className="flex flex-row items-center justify-center gap-10">
                <Link href="/signIn">
                <p className="text-3xl font-bold cursor-pointer text-gray-500 hover:text-gray-700"> 로그인</p> 
                </Link>
                <Link href="/signUp">
                <p className="text-3xl font-bold cursor-pointer text-gray-500 hover:text-gray-700"> 회원가입</p> 
                </Link>
               
            </div>
        </div>
    </section>
    )
}

export default Header