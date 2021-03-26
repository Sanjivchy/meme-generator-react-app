import React, { Component } from 'react'
import Header from './Header'

class MemeGenetator extends Component {
    constructor(props) {
        super(props)
        this.state = {
         topText:"",
         bottomText:"",
         randomImg:"http://i.imgflip.com/1bij.jpg"
        }
    }
    
    
    render() {
        return (
            <div>
                <Header/>
                <h1>meme generator</h1>
            </div>
        )
    }
}

export default MemeGenetator
