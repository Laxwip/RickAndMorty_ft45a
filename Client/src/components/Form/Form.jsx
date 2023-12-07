// import React, { useState } from 'react'
import "./Form.css"

export default function Form({userData, handleChange, handleSubmit, errors}) {
  return (
    <div className='form_contenedor_general'>
      <div className='form_contenedor'>
        <span className='form_bienvenido'>Welcome!</span>
        <form className='form_form' onSubmit={handleSubmit}>
          <div className='form_espaciado'>

          <label className='form_label_email' htmlFor = "email">Email:</label>
          <input 
            id="email"
            className="form_input_email" 
            type="email" 
            key="email"
            name='email' 
            value={userData.email} 
            onChange={handleChange}
            autoComplete="username"
            />
            <p className="form_p_error">{errors.email && errors.email}</p>
          </div>
          <br />

         <div className='form_espaciado'>

         <label className='form_label_password' htmlFor = "password" >Password:</label>
          <input 
            id="password"
            className="form_input_password" 
            type="password" 
            key="password"
            name='password' 
            value={userData.password} 
            onChange={handleChange}
            autoComplete="current-password"
            />
            <p className="form_p_error">{errors.password && errors.password}</p>
          <br/>
         </div>
          <button className="form_button" type='submit'
          disabled= {errors.email || errors.password ? true : false}>Entrar</button>
        </form>
      </div>
      
    </div>
  )
}
