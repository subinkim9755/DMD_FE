import React from 'react'
import Image from 'next/image'
import logo from '@/public/DumMoDem_Logo.png'
import Link from 'next/link'
function Logo() {
  return (
    <section className="flex flex-row items-center justify-center gap-4">
      {/* 클릭시 메인 페이지로 이동 */}
      <Link href="/">
        {/* 로고 이미지 영역 */}
        <div className="flex flex-row items-center justify-center rounded-full gap-4">
          <Image src={logo} alt="logo" width={100} height={100} className="cursor-pointer" />
          {/* 로고 텍스트 영역 */}
          <p className="text-3xl font-bold cursor-pointer text-gray-500 hover:text-gray-700"> DunMoDem</p>
        </div>
      </Link>
    </section>
  );
}

export default Logo;