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
      <div className="user-card bg-white px-4 rounded-lg shadow-md text-center">
        <div className="mb-4 flex flex-row justify-center">
          Logged in User : {" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
          </div>
          <h1 className='p-2'>Website Developed By -</h1>
          <div className='flex flex-row justify-center'>
            <h1 className="mb-2 text-lg font-bold">{this.state.userInfo.name}</h1>
            <h1 className="mb-2 text-lg px-2"> | {this.state.userInfo.location}</h1>
          </div>
        
        <img className="mx-auto rounded-lg" src={this.state.userInfo.avatar_url} alt="User Avatar" />
      </div>

    )
  }
}
