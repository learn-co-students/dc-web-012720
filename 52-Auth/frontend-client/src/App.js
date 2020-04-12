import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

//when user clicks login, POST to localhost:3000/api/v1/login and send the credentails,
//update currentUser state to be the user that logged in

//when page load, I make a fetch if token exists, update the state

class App extends React.Component {
  constructor(){
    super()
    this.state = {currentUser: null}
  }

  componentDidMount(){
    if(localStorage.getItem("jwt")){
      fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Authentication": localStorage.getItem("jwt")
        }
      }).then(res => res.json())
      .then(json => {
        this.updateCurrentUser(json)
      })
    }else{
      console.log("there is no token")
    }
  }

  updateCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  render(){
    return (
      <Fragment>
        <Nav logged_in={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/profile" render={() => (
            this.state.currentUser ? <Profile currentUser={this.state.currentUser}/> :
            <Redirect to="/login"/>
          )} />
          <Route path="/login" render={() => (
            this.state.currentUser ? <Redirect to="/profile"/> :
            <LoginForm updateCurrentUser={this.updateCurrentUser}/>
          )} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
