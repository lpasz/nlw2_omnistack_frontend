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
    avatar: string,
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
                <img src={props.teacherItem.avatar} />
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