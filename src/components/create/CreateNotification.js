import React, { Component } from 'react';
import { addNotification } from "../../store/actions/notificationActions"
import { connect } from "react-redux";

export class CreateNotification extends Component {
  state = {
    title: "",
    message: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNotification(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div className="card z-depth-0 ">
            <div className="card-content">
              <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text">Crear notificación</h5>
                <div className="input-field">
                  <label htmlFor="title">Título</label>
                  <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea type="text" className="materialize-textarea" id="message" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <button className="waves-effect waves-light btn">Guardar</button>
                </div>
              </form>
              <div>
                {this.state.firstName}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNotification: (notification) => dispatch(addNotification(notification))
  }
}

export default connect(null, mapDispatchToProps)(CreateNotification)

