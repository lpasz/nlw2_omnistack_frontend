import React, { useState, useEffect, FormEvent } from 'react'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

function TeacherForm()
{
    const history = useHistory();

    const [ name, setName ] = useState('')
    const [ avatar, setAvatar ] = useState('')
    const [ whatsapp, setWhatsapp ] = useState('')
    const [ bio, setBio ] = useState('')

    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('')

    const [ scheduleItems, setScheduleItems ] = useState([ { week_day: "", from: "", to: "" } ]);

    function addNewEmptyItemOnSchedule()
    {
        const newEmptySchedule = { week_day: "", from: "", to: "" }

        setScheduleItems([ ...scheduleItems, newEmptySchedule ])
    }

    function handleCreateClass(e: FormEvent)
    {
        e.preventDefault()
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule: scheduleItems
        })
            .then(() =>
            {
                alert("Cadastro Realizado com sucesso!")
                history.push('/')
            })
            .catch(() => alert("Erro no cadastro!"))

            history.push('/')
    }

    function setScheduleItemValue(index: number, parameter: string, value: string)
    {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, inner_index) =>
        {
            if (inner_index === index)
            {
                return { ...scheduleItem, [ parameter ]: value }
            }
            return scheduleItem
        })
        setScheduleItems(updatedScheduleItems)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que voce quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>
                            Seus Dados
                        </legend>

                        <Input
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            labelText="Nome Completo"
                        />
                        <Input
                            name="avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                            labelText="Avatar"
                        />
                        <Input
                            name="whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                            labelText="Whatsapp"
                        />
                        <TextArea
                            name="bio"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                            labelText="Biografia"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Sobre a Aula
                    </legend>

                        <Select
                            name="subject"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            labelText="Matéria"
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
                        <Input
                            name="cost"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                            labelText="Custo da sua hora por aula"
                            type="number"
                            min="0.00"
                            step="0.01"
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type='button' onClick={addNewEmptyItemOnSchedule}>
                                + Novo Horário
                            </button>
                        </legend>
                        {scheduleItems.map((s, index) => (
                            <div className="schedule-item" key={index}>
                                <Select
                                    value={s.week_day}
                                    name="week_day"
                                    onChange={e => setScheduleItemValue(index, "week_day", e.target.value)}
                                    labelText="Dia da Semana"
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
                                    value={s.from}
                                    name='from'
                                    onChange={e => setScheduleItemValue(index, "from", e.target.value)}
                                    labelText="Das"
                                    type="time"
                                />
                                <Input
                                    value={s.to}
                                    name="to"
                                    onChange={e => setScheduleItemValue(index, "to", e.target.value)}
                                    labelText="Até"
                                    type="time"
                                />
                            </div>
                        ))}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="" />
                            Importante ! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro !
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm