import React from 'react'
import ItemButton from './ItemButton'

export type ItemSetCategory = '방어구' | '악세서리' | '특수장비'

const SLOT_BY_CATEGORY: Record<ItemSetCategory, string[]> = {
  방어구: ['어꺠', '상의', '벨트', '하의', '신발'],
  악세서리: ['팔찌', '반지', '목걸이'],
  특수장비: ['마법석', '귀걸이', '보조장비'],
}

interface ItemSetProps {
  itemSet: ItemSetCategory | string
  itemName: string
  specialPart: string[]
}

function ItemSet({ itemSet, itemName, specialPart }: ItemSetProps) {
  const slots = SLOT_BY_CATEGORY[itemSet as ItemSetCategory] ?? SLOT_BY_CATEGORY['방어구']

  return (
    <section className="flex flex-row items-center gap-4 w-full h-40">
      <div className="flex flex-col items-center justify-center w-40 min-w-40 shrink-0 h-40">
        {itemSet}
      </div>

      <div className="flex flex-col items-center justify-center w-60 min-w-60 shrink-0 h-40">
        <p className="text-left break-words">{itemName}</p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-0 flex-1 h-full">
        <div className="flex flex-row items-center justify-center gap-2 w-full h-1/3">
          <p>{specialPart[0]}</p>
          {slots.map((slot) => (
            <ItemButton key={slot} item={slot} />
          ))}
        </div>
        <div className="flex flex-row items-center justify-center gap-2 w-full h-1/3">
          <p>{specialPart[1]}</p>
          {slots.map((slot) => (
            <ItemButton key={slot} item={slot} />
          ))}
        </div>
        <div className="flex flex-row items-center justify-center gap-2 w-full h-1/3">
          <p>일반</p>
          {slots.map((slot) => (
            <ItemButton key={slot} item={slot} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItemSet