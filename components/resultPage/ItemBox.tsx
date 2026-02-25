import React from 'react'
import Image from 'next/image'
import plusButton from '@/public/plusButton.png'

function ItemBox({ type }: { type: string }) {
  return (
    <section className="flex flex-row items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-35 h-35">
            <div className="flex flex-row items-center justify-center w-30 h-30 cursor-pointer hover:scale-110 transition-all duration-300 rounded-lg border border-gray-300">
                <button className="flex flex-row items-center justify-center w-30 h-30 cursor-pointer">
                    <Image src={plusButton} alt="Add Item Button" width={30} height={30} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default ItemBox