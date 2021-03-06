import React, { Component } from 'react'

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
            this.handleSubmit = this.handleSubmit.bind(this)

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
    const {name ,value}= event.target
    this.setState({
        [name]:value
    })


}
handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
}

    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
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
                <div className="meme">     
                     <img src={this.state.randomImg} alt=""/>
                     <h2 className="top">{this.state.topText}</h2>
                     <h2 className="bottom">{this.state.bottomText}</h2>

                </div>
            </div>
        )
    }
}

export default MemeGenetator
