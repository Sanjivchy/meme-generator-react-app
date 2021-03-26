import React, { Component } from 'react'
import Header from './Header'

class MemeGenetator extends Component {
    constructor(props) {
        super(props)
        this.state = {
         topText:"",
         bottomText:"",
         randomImg:"http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
        }
            this.hangleChange= this.hangleChange.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                const {memes}= response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }
hangleChange(event){
console.log("working")
}
    
    render() {
        return (
            <div>
               <Header/>

                <form className="meme-form">
                    <input type="text"
                    name="topText"
                    placeholder="Top text"
                    value={this.state.topText}
                    onChange={this.hangleChange}
                    />
                    <input
                     type="text" 
                     name="bottomText" 
                     placeholder="Bottom text"
                     value={this.state.bottomText}
                    onChange={this.hangleChange}
                    />
                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenetator
