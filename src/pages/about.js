import AboutUs from './../assets/about.png';
import TeamComp from '../components/teamcomp';
import Teaminfo from '../components/teaminfo';
import "./../components/teammember.css"


const About  = ()=> {

    return (
        <div>
            <h1 style = {{textAlign: "center"}}> About Us </h1>
            <h3 style = {{textAlign: "center"}}> We help to create better business outcomes.</h3>
            <img src = {AboutUs} style = {{width: "60%", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "30px"}} />
           <div className = "team-info">
            {Teaminfo.map((team)=> (
            <div className = "overall-container">
                <TeamComp props = {team}></TeamComp>
            </div>           
            ))
	        }
            </div>
            
        </div>

    )
}

export default About