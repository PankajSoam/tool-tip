import React, { Component } from 'react'
import './App.css'

class HoverOn extends Component{
    constructor(props){
        super(props)
        this.state={
            hover:false
        }
    }
    
    mouseHoverTrue = () => {
        this.setState({
          hover: true
        })
      }
    mouseHoverfalse = () => {
        this.setState({
          hover: false
        })
      }

      render(){
        const classes = `tool-tip ${this.props.position}`

          return(
            <div className="wrapper">
            <h1 className="hover-on-element" onMouseEnter={this.mouseHoverTrue} onMouseLeave={this.mouseHoverfalse}>Press</h1>
    
            {this.state.hover && (<div className={classes}>Tool tip text</div>)}
    
          </div>
          )
      }
}

export default HoverOn