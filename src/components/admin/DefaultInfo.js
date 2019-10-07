import React from 'react'

const USERS = "Usuarios";
const SETTINGS = "Configuración";
const OTHER = "Otras opciones";

const DefaultInfo = () => {
  return (
    
    <div className="card-content">
      <span className="card-title">Información</span>
      <p>Esta es la sección de administración</p>
      <h6 className="blue-text">{USERS}</h6>
      <ul>Permite ver los usuarios existentes, asi como agregar nuevos usuarios al sistema</ul>
      <h6 className="blue-text">{SETTINGS}</h6>
      <ul>Permite cambiar las configuraciones de  bla bla bla</ul>
      <h6 className="blue-text">{OTHER}</h6>
      <ul>Permite cambiar {OTHER} de bla bla bla</ul>
    </div>
  )
}

export default DefaultInfo
