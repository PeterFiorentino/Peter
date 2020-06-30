import React from 'react';
import logo from '../transparentLogo.png'




class Home extends React.Component{
    constructor(){
        super()
        this.state = {
       
        }
    }

    render() {
        return (
            <div id="home-page">
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div id="skills">
                <div>
                    <img className="skillIcon" src="https://clipartart.com/images/javascript-icon-clipart-6.png"></img>
                    <p className="skillP">Javascript</p>
                </div>
                <div>
                    <img className="skillIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
                    <p className="skillP">React</p>
                </div>
                <div>
                    <img className="skillIcon" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/full/html5.png"></img>
                    <p className="skillP">HTML</p>
                </div>  
                <div>
                    <img className="skillIcon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img>
                    <p className="skillP">Github</p>
                </div>
                <div>
                    <img className="skillIcon" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"></img>
                    <p className="skillP">Postgres</p>
                </div>
                
                <div>
                    <img className="skillIcon" src="https://cdn.iconscout.com/icon/free/png-512/ableton-10-569537.png"></img>
                    <p className="skillP">Ableton</p>
                </div>
                </div>
            </div>
        )}
}

export default Home