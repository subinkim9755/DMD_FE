import React, { useEffect } from 'react'

export interface DropDownProps {
  options: string[]
  value?: string
  onChange?: (value: string) => void
}

const DropDown: React.FC<DropDownProps> = ({ options, value, onChange }) => {
  useEffect(() => {
    if (value === undefined && options[0] != null && onChange) {
      onChange(options[0])
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <select
      className="w-full h-10 border border-gray-300 rounded-md p-2"
      value={value ?? options[0]}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default DropDown