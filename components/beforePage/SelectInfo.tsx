import React from 'react'
import DropDown from './DropDown'
import ItemSet from './ItemSet'
export interface SelectInfoProps {
  type: string
  info: string[]
  value?: string
  onChange?: (value: string) => void
}

const SelectInfo: React.FC<SelectInfoProps> = ({ type, info, value, onChange }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 w-full h-full">
      <p className="text-2xl font-bold text-gray-500 w-1/2">{type}</p>
      {type === '직업' ? (
        <DropDown options={info} key={type} value={value} onChange={onChange} />
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {info.map((item, index) => (
            <ItemSet
              key={index}
              itemSet={type}
              itemName={item}
              specialPart={['침식', '작열']}
            />
          ))}
        </div>
      )}
    </div>
  )}
export default SelectInfo