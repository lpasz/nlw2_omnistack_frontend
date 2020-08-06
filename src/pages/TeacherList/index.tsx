import React, { useState, FormEvent } from 'react'
import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'



function TeacherList()
{
    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    const [ teacherItems, setTeacherItems ] = useState([])

    async function SearchTeachers(e: FormEvent)
    {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        console.log(response.data)
        setTeacherItems(response.data)
    }



    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers">
                    <Select name="subject"
                        labelText="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={
                            [
                                { value: "Artes", text: "Artes" },
                                { value: "Educação Física", text: "Educação Física" },
                                { value: "Química", text: "Química" },
                                { value: "Matemática", text: "Matemática" },
                                { value: "Português", text: "Português" },
                                { value: "Física", text: "Física" },
                                { value: "História", text: "História" },
                                { value: "Sociologia", text: "Sociologia" },
                            ]
                        }
                    />

                    <Select name="week_day"
                        labelText="Dia da Semana"
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
                        options={
                            [
                                { value: "0", text: "Domingo" },
                                { value: "1", text: "Segunda" },
                                { value: "2", text: "Terça" },
                                { value: "3", text: "Quarta" },
                                { value: "4", text: "Quinta" },
                                { value: "5", text: "Sexta" },
                                { value: "6", text: "Sábado" },
                            ]
                        }
                    />

                    <Input
                        type={"time"}
                        name="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        labelText="Hora:" />

                    <button type="submit" onClick={SearchTeachers}>
                        Buscar
                    </button>

                </form>
            </PageHeader>

            <main>
                {teacherItems.map((item: Teacher) =>
                {
                    return (
                        <TeacherItem
                            key={item.id}
                            teacherItem={item}
                        />)
                })}

            </main>
        </div>
    )
}

export default TeacherList