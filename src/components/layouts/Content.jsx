import React from 'react'
import './Content.css'
import { Routes, Route } from "react-router-dom"
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
import { Switch } from 'react-router-dom'

/* substitui switch por routes */
/* content e mostra a pagina */
const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/Param/:id" element={<Param />} />
            <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </main>

)

export default Content