import React from 'react';
import choral from '../ChoralPic.png'
import hmd from '../HandMeDown.png'
import trading from '../TradingFloor.png'



class Projects extends React.Component{
    constructor(){
        super()
        this.state = {
       
        }
    }


    render() {
        return (
            <div id="Projects-page">
                <div id="choral" className="Project">
                    <img className="projectPic" src={choral} alt="Choral Landing Page"></img>
                    <div className="projectInfo">
                        <h3 className="projectTitle">Choral</h3>
                        <p className="projectAbout">A remote musical playground that allows users to upload original music and collaborate with each other.</p>
                        <a className="projectGit" href="https://github.com/PeterFiorentino/Choral">GitHub Repository</a>
                        <a className="projectDeployed" href="https://choral.herokuapp.com">Deployed Version</a>
                    </div>
                </div>
                <hr />
                <div id="choral" className="Project">
                    <img className="projectPic" src={hmd} alt="Choral Landing Page"></img>
                    <div className="projectInfo">
                        <h3 className="projectTitle">Hand Me Down</h3>
                        <p className="projectAbout">Social Media engagement web app aimed at tackling sustainability in the fashion industry.</p>
                        <a className="projectGit" href="https://github.com/PeterFiorentino/HandMeDown">GitHub Repository</a>
                        <a className="projectDeployed" href="https://handmedown.herokuapp.com">Deployed Version</a>
                    </div>
                </div>
                <hr />
                <div id="choral" className="Project">
                    <img className="projectPic" src={trading} alt="Choral Landing Page"></img>
                    <div className="projectInfo">
                        <h3 className="projectTitle">Trading Floor</h3>
                        <p className="projectAbout">Trading Floor is the easiest way to keep track of your stock portfolio as well as purchase new stocks.</p>
                        <a className="projectGit" href="https://github.com/PeterFiorentino/Trading-Floor">GitHub Repository</a>
                        <a className="projectDeployed" href="https://petefiorentinopart2.herokuapp.com/login">Deployed Version</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects