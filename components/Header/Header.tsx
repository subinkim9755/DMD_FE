import React from 'react'
import Logo from '../common/logo'


function Header() {
    return (
        <section className="flex flex-row items-center justify-center  w-full h-30  bg-white border-b border-gray-200">
        <div className="flex flex-row items-center justify-between w-full max-w-[1200px] px-4">
            <Logo />
            <div className="flex flex-row items-center justify-center gap-4">
                <p className="text-3xl font-bold "> 로그인</p> 
                <p className="text-3xl font-bold "> 회원가입</p> 
            
            </div>
        </div>
    </section>
    )
}

export default Header