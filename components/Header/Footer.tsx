import React from 'react'

function Footer() {
  return (

<section className="flex flex-row items-center justify-center w-full h-24 bg-white border-t border-gray-200">
    <div className="flex flex-row items-center justify-between w-full max-w-[1200px] px-4">
        <p className="text-3xl font-bold text-gray-500"> DunMoDem</p>
        <a href="https://dnfm.nexon.com/" target="_blank" >
        <p className="text-3xl font-bold underline cursor-pointer text-gray-500 hover:text-blue-700 hover:text-blue-500 "> 던파모바일 바로가기</p>
        </a>
        <a href="https://gall.dcinside.com/mgallery/board/lists/?id=dnfm" target="_blank" >
        <p className="text-3xl font-bold underline cursor-pointer text-gray-500 hover:text-blue-700 hover:text-blue-500 "> 던모갤 바로가기</p>
        </a>    </div>
</section>
  )
}

export default Footer