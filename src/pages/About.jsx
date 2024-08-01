import React from 'react'
import profil from "../assets/Woman icon.png"

const About = () => {
  return (
    <div>
        <div className='container text-center text-light border border-1 rounded-5 w-50'>
        <img width="300px" src={profil} alt="" />
            <h1>Ayse Ugurlu</h1>
            <h2>Full Stack Developer</h2>
            <p>Die Fragen wurden für meinen eigenen Interviewprozess zusammengestellt und abgelegt.</p>
            <p>Happy Coding 👩🏻‍💻 ©️ 2024</p>

        </div>
    </div>
  )
}

export default About