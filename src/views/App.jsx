import React from 'react'
import Content from '../components/layouts/Content'
import Menu from '../components/layouts/Menu'
import './App.css'
import { BrowserRouter } from  'react-router-dom' // essa importação mudou

const App = props => (
    <div className='App'>        
        <BrowserRouter>
            <Menu />
            <Content />
        </BrowserRouter>        
    </div>
)
export default App