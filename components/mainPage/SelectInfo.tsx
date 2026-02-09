import React from 'react'
import DropDown from './DropDown'

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
      <DropDown options={info} key={type} value={value} onChange={onChange} />
    </div>
  )
}

export default SelectInfo