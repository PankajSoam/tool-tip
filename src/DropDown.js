import React, { Component } from 'react'
import HoverOn from './HoverOn'
import './App.css'

class DropDown extends Component{

    constructor(props){
        super(props)

        this.state={
            position: "bottom"
        }
    }
    handleChange = (e) =>{
        this.setState({
          position: e.target.value
        })
        console.log(this.state.position)
      }

    render(){
        return(
            <div>
                <select className="dropdown"  onChange={this.handleChange}>

                    <option value="bottom">Bottom</option>
                    <option value="top">Top</option>
                    <option value="right">Right</option>
                    <option value="left">Left</option>

                </select>
                <HoverOn position = {this.state.position}/>

     
            </div>
        )
    }
}

export default DropDown