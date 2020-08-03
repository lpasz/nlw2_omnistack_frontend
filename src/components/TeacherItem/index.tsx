import React from 'react'
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

interface TeacherItemProps
{
    name: string,
    class: string,
    bio: string,
    price: number,
}

const TeacherItem: React.FC<TeacherItemProps> = (props) =>
{
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/42593470?s=460&u=d2fda126f88153661d82ba2973a6998275e4b53e&v=4" alt="lucas-paszinski" />
                <div>
                    <strong>
                        {props.name}
                            </strong>
                    <span>
                        {props.class}
                            </span>
                </div>
            </header>
            
            <p>
                {props.bio}
            </p>
            
            <footer>
                <p>
                    Preço/Hora
                             <strong>$ {props.price} pila</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem