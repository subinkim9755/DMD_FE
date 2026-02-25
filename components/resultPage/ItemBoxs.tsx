import React from 'react'
import ItemBox from './ItemBox'

export type ItemBoxsItemType = 'Weapon' | 'Armor' | 'Accessory' | 'SpecialEquipment'

const ITEM_COUNT: Record<ItemBoxsItemType, number> = {
  Weapon: 1,
  Armor: 5,
  Accessory: 3,
  SpecialEquipment: 3,
}

interface ItemBoxsProps {
  itemType: ItemBoxsItemType
}

function ItemBoxs({ itemType }: ItemBoxsProps) {
  const count = ITEM_COUNT[itemType]

  return (
    <section className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-wrap justify-start">
        {Array.from({ length: count }, (_, i) => (
          <ItemBox key={`${itemType}-${i}`} type={`${itemType}-${i + 1}`} />
        ))}
      </div>
    </section>
  )
}

export default ItemBoxs
