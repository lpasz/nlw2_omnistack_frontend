import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherForm'
import TeacherForm from './pages/TeacherList'

function Routes()
{
    return (
        <BrowserRouter>
            {/* exact make sure it's only '/' and not '/something' */}
            <Route path="/" exact component={Landing} /> 
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm}/> 
        </BrowserRouter>
    )
}

export default Routes
