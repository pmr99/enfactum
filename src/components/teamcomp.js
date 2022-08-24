import twitter from "./../assets/twitter.png"
import linkedin from "./../assets/linkedin.png"
import "./teammember.css"


const TeamComp = ({props}) => {
    return (
        <div>
            
            <img className = "pic" src = {props.pic}/>
            <div className = "details"> 
            <a href = {props.linkedin}>
            <img style = {{width: "40px"}} src = {linkedin} />
            </a>
            <a href = {props.twitter}>
            <img style = {{width: "40px"}} src = {twitter} />
            </a>
            </div> 
            <p style = {{textAlign:  "center", margin: "0px"}}> {props.name}</p>
            <p style = {{textAlign:  "center"}}> {props.role}</p>
        </div>
    )


}

export default TeamComp