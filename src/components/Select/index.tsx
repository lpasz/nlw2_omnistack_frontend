import React, { SelectHTMLAttributes } from 'react'
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> 
{
    name: string
    labelText: string,
    options: Array<
        {
        value: string,
        text: string
        }
    >
}

const Select: React.FC<SelectProps> = ({ name, labelText, options,...rest }) => 
{
    return (
        <div className="select-block">

            <label htmlFor={name}>
                {labelText}
            </label>

            <select id={name} {...rest}>
                <option defaultValue ="" value="" disabled hidden  >
                    Selecione uma opção
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.text}
                    </option>))}
            </select>
        </div>
    )
}

export default Select;