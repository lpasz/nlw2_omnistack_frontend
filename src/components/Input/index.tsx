import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> 
{
    name:string
    labelText:string
}

const Input: React.FC<InputProps> = ({name, labelText, ...rest}) => 
{
    return (
        <div className="input-block">

            <label htmlFor={name}>
                {labelText}
            </label>

            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input;