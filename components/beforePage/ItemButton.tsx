import React from 'react'

interface ItemButtonProps {
    item: string
}

function ItemButton({ item }: ItemButtonProps) {
  return (
    <button className="flex flex-row items-center justify-center w-20 h-10 bg-gray-200 rounded-lg border border-gray-300">
        {item}
    </button>
)
}


export default ItemButton