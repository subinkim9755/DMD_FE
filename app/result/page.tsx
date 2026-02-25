import React from 'react'
import Image from 'next/image'
import armorSet from '@/public/방어구세트.png'
import ItemBoxs from '@/components/resultPage/ItemBoxs'
function ResultPage() {
  return (
    <section className="flex flex-row items-start justify-center w-full min-h-full bg-white pt-4">

        <div className="flex flex-row items-start justify-center w-full max-w-[1200px] min-h-full px-4">
            <div className="flex flex-col items-start justify-start w-full">
                <ItemBoxs itemType="Armor" />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
            <Image src={armorSet} alt="armorSet" width={500} height={800}/>
            <p className="text-3xl font-bold text-gray-500">데미지</p>
            <p className="text-3xl font-bold text-gray-500">....????.....</p>
            </div>
            <div className="flex flex-col gap-10 items-start justify-start w-full">
                <ItemBoxs itemType="Weapon" />
                <ItemBoxs itemType="Accessory" />
                <ItemBoxs itemType="SpecialEquipment" />
            </div>
            
        </div>
    </section>
  )
}

export default ResultPage