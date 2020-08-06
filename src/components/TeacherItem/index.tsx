import React from 'react'
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'


export interface Teacher
{

    id: number,
    name: string,
    class: string,
    bio: string,
    cost: number,
    subject: string,
    whatsapp: number,

}
interface TeacherItemProps
{
    teacherItem: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = (props) =>
{
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/42593470?s=460&u=d2fda126f88153661d82ba2973a6998275e4b53e&v=4" alt="lucas-paszinski" />
                <div>
                    <strong>
                        {props.teacherItem.name}
                    </strong>
                    <span>
                        {props.teacherItem.class}
                    </span>
                </div>
            </header>

            <p>
                {props.teacherItem.bio}
            </p>

            <footer>
                <p>
                    Preço/Hora <br />
                    <strong>R${props.teacherItem.cost}</strong>
                </p>
                <a
                    href={`https://wa.me/${props.teacherItem.whatsapp}`}
                    onClick={
                        () => api.post(
                            'connections',
                            { user_id: props.teacherItem.id }
                        )
                    }
                >
                    <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem