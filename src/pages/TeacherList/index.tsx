import React from 'react'
import './styles.css'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'



function TeacherList()
{
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers">

                    <div className="input-block">

                        <label htmlFor="subject">
                            Matéria:
                        </label>

                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">

                        <label htmlFor="week-day">
                            Dia da Semana:
                        </label>

                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">

                        <label htmlFor="hour">
                            Hora:
                        </label>

                        <input type="text" id="hour" />
                    </div>

                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    name={"Lucas Lopes Paszinski"}
                    class={"Programação"}
                    bio={`Hello this is a multiline test
                
                Hopefully will add the break on the line and it din't`}
                    price={150.50}

                />
            </main>
        </div>
    )
}

export default TeacherList