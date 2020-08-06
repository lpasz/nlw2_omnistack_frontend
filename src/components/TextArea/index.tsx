import React, { TextareaHTMLAttributes } from 'react'
import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> 
{
    name:string
    labelText:string
}

const TextArea: React.FC<TextAreaProps> = ({name, labelText, ...rest}) => 
{
    return (
        <div className="textarea-block">

            <label htmlFor={name}>
                {labelText}
            </label>

            <textarea id={name} {...rest}/>
        </div>
    )
}

export default TextArea;