import React, { Component } from 'react';
import UserContext from "./UserContext";
import { useContext } from "react";

export default class userClass extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        userInfo: {
          name: "Dummy",
          location: "Default",
          avatar_url: "",
        }
      }
  }

  async componentDidMount() {
    //Best place to Make an API call
    
    //constructer called -> render called -> react updates the DOM and refs -> then ComponenntDiDMount is called therefore API calls take place

    //The reason why its best to make API calls

    const data = await fetch("https://api.github.com/users/aniketsinha2002");
    const json = await data.json();

    this.setState({
              userInfo:json,
            });
  }
    
    render() {
      return (
        <div className="user-card">
          <div className='flex'>
            Logged in User :
            <UserContext.Consumer>
              {
                ({loggedInUser}) => <h1 className='px-3 font-bold'>{loggedInUser}</h1>
              }
            </UserContext.Consumer>
          </div>
          <h1>Name: {this.state.userInfo.name}</h1>
          <h1>Location: {this.state.userInfo.location}</h1>
          <img src={this.state.userInfo.avatar_url} alt="" />
           
         </div>
    )
  }
}
