import React from 'react';
import { Link } from 'react-router-dom';




class NavBar extends React.Component{
    constructor(){
        super()
        this.state = {
       
        }
    }

    render() {
        return (
            <div id="navBar">
                <Link to="/" id="navBarName">Peter Fiorentino</Link>
                <div id="NavBar-page">
                    <Link to="/projects" className="navBarLinks">Projects</Link>
                    <a href="https://www.linkedin.com/in/peter-fiorentino/" className="navBarLinks">LinkedIn</a>
                    <a href="https://github.com/PeterFiorentino" className="navBarLinks">GitHub</a>
                    <a href="https://docs.google.com/document/d/19CM4vR8GewcGisFbTzOctjcoNqThDNwTwYJQJtKuwss/edit?usp=sharing" className="navBarLinks">Résumé</a>
                    <Link to="/music" className="navBarLinks">Music</Link>
                </div>
            </div>
        )
    }
}

export default NavBar