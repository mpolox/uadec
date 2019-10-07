const initState = {
  notifications: [{
    id: 1,
    title: "Primera notificacion",
    text: "Este es el texto de la notificación",
    date: "11/Septiembre/2022"
  },
  {
    id: 2,
    title: "Segunda notificacion",
    text: "Este es el texto de la notificación",
    date: "22/Septiembre/2022"
  },
  {
    id: 3,
    title: "Tercera notificacion",
    text: "Este es el texto de la notificación",
    date: "33/Septiembre/2022"
  },
  {
    id: 4,
    title: "Cuarta notificacion",
    text: "Este es el texto de la notificación número cuatro",
    date: "44/Septiembre/2022"
  }
  ]
};

const notificationReducer = (state = initState, action) => {

  switch (action.type) {
    case "CREATE_NOTIFICATION":
      // let newState = state;
      // newState.notifications = [...state.notifications, action.notification ]
      // return newState
      return state;
    case "CREATE_NOTIFICATION_ERROR":
      return state;
    default:
      return state
  }
}

export default notificationReducer