import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import ITFundamental from '../pages/ITFundamental'
import HtmlQuestions from '../pages/HtmlQuestions'
import CssQuestions from '../pages/CssQuestions'
import BootstrapQuestions from '../pages/BootstrapQuestions'
import SassQuestions from '../pages/SassQuestions'
import JavaScriptQuestions from '../pages/JavaScriptQuestions'
import ReactQuestions from '../pages/ReactQuestions'

const AppRouter = () => {
  return (
    <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/it-fundamental" element={<ITFundamental/>} />
          <Route path="/html" element={<HtmlQuestions/>}/>
          <Route path="/css" element={<CssQuestions/>}/>
          <Route path="/bootstrap" element={<BootstrapQuestions/>}/>
          <Route path="/sass" element={<SassQuestions/>}/>
          <Route path="/javascript" element={<JavaScriptQuestions/>}/>
          <Route path="/react" element={<ReactQuestions/>}/>
         </Routes>


    </BrowserRouter>
  )
}

export default AppRouter