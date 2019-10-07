import React, { Component } from 'react'

export class UserAdmin extends Component {
  state = {
    userList:
      [
        {
          id: 1,
          name: "Marcopolo",
          lastName: "Ramos",
          lastName2: "Peña",
          email: "mpolox@gmail.com"
        },
        {
          id: 2,
          name: "Emilia",
          lastName: "Ramos",
          lastName2: "Galván",
          email: "emy@gmail.com"
        },
        {
          id: 3,
          name: "Alexandra",
          lastName: "Galván",
          lastName2: "Esparza",
          email: "alex@gmail.com"
        }
      ],
    addId: 4,
    addName: "",
    addLastName: "",
    addLastName2: "",
    addEmail: "",
    isValid: false
  }

  handleChange = (e) => {
    if (e.target.id === "addEmail") {
      this.setState({
        isValid: e.target.validity.valid
      })
    }

    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //is the email is valid
    if (this.state.isValid) {
      const newUser = {
        id: this.state.addId,
        name: this.state.addName,
        lastName: this.state.addLastName,
        lastName2: this.state.addLastName2,
        email: this.state.addEmail
      }
      const updatedList = [...this.state.userList, newUser];

      this.setState({
        userList: updatedList
      })
    }
  }

  render() {
    const users = this.state.userList;
    return (
      <div className="card-content">
        <span className="card-title">Usuarios</span>
        <ul className="collection">
          {users && users.map(user => {
            return (
              <li className="collection-item" key={user.email}>
                {user.name} {user.lastName} (
                                    <span className="blue-text">{user.email}</span>)
                            </li>
            )
          })}
        </ul>

        <div className="card z-depth-0 grey lighten-5">
          <div className="card-content">
            <form onSubmit={this.handleSubmit}>
              <h5 className="black-text">Agregar Usuario</h5>
              <div className="input-field">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="addName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="lastName1">Apellido paterno</label>
                <input type="text" id="addLastName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="lastName2">Apellido materno</label>
                <input type="text" id="addLastName2" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="addEmail">Email</label>
                <input className="validate" type="email" id="addEmail" maxLength="55" onChange={this.handleChange} />
                <span className="helper-text" data-error="correo incorrecto" data-success="right"></span>
              </div>
              <div className="input-field">
                <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserAdmin
