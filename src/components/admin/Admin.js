import React, { Component } from 'react';
import UserAdmin from "./UserAdmin";
import DefaultInfo from "./DefaultInfo";

const USERS = "Usuarios";
const SETTINGS = "Configuración";
const OTHER = "Otras opciones";

const showSettings = (
  <div className="card-content">
    <span className="card-title">{SETTINGS}</span>
    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  </div>
);

const showOther = (
  <div className="card-content">
    <span className="card-title">{OTHER}</span>
    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
  </div>
);

export class Admin extends Component {
  state = {
    option: 0
  }

  handleChange = (e) => {
    this.setState({
      option: e.target.id
    })
  }

  showData = (props) => {
    if (props.option === USERS) { return <UserAdmin /> }
    else if (props.option === SETTINGS) { return showSettings }
    else if (props.option === OTHER) { return showOther }
    else { return <DefaultInfo/> }
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          {/* options menu */}
          <div className="col s12 m4">
            <ul className="collection with-header">
              <li className="collection-header"><h4>Opciones</h4></li>
              <li className="collection-item" onClick={this.handleChange} id={USERS}>{USERS}</li>
              <li className="collection-item" onClick={this.handleChange} id={SETTINGS}>{SETTINGS}</li>
              <li className="collection-item" onClick={this.handleChange} id={OTHER}>{OTHER}</li>
            </ul>
          </div>

          {/*  Information area, shonw depending of menu option selected*/}
          <div className="col s12 m8">
            <div className="card">
              {this.showData(this.state)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin
