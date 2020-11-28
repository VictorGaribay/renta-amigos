import React from 'react'

interface SelectProps {
  label: string
  data: { id: number; identifier: string }[]
}

const Select: React.FC<SelectProps> = ({ label, data }) => {
  return (
    <select style={{ margin: '4px' }}>
      <option value="">{label}</option>
      {data.map((d, index) => (
        <option key={index} value={d.id}>
          {d.identifier}
        </option>
      ))}
    </select>
  )
}

export default Select
