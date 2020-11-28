import { Field } from 'formik'
import React from 'react'

interface SelectProps {
  name?: string
  label: string
  data: { id: string; identifier: string }[]
}

const Select: React.FC<SelectProps> = ({ label, data, ...props }) => {
  return (
    <Field as="select" style={{ margin: '4px' }} {...props}>
      <option value="">{label}</option>
      {data.map((d, index) => (
        <option key={index} value={d.id}>
          {d.identifier}
        </option>
      ))}
    </Field>
  )
}

export default Select
