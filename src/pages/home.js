import Homecontent from "../components/home/homecontent";
import Footer from "../components/footer";
import rocket from "../assets/rocket.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import placeholder from "../assets/placeholder.jpeg"


const Home = () => {
    return (
        <div>
            <h1 style = {{textAlign: "center", marginTop: "30px"}}> Enfactum </h1>
            <h3 style = {{textAlign: "center"}}> Insert brief description here </h3>
            <div className = "main-image">
                <img className ="home-image" style = {{width: "10%",  marginTop: "30px"}} src = {rocket} />
            </div>
            <div className = "home-body">
                <Homecontent src = {placeholder} header = "Boost Earned Marketing Assets" des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ">
                </Homecontent>
                <Homecontent src = {placeholder} header = "Optimising Paid Marketing" des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ">
                </Homecontent>
                <Homecontent src = {placeholder} header = "Build Marketing Assets" des = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ">
                </Homecontent>
            </div>
            
            <h1 style = {{textAlign: "center", marginTop: "30px", marginBottom: "30px"}}> Partnership </h1>
            
            <div className = "partner">
                <img className = "partner-pic" src = {p1}></img>
                <img className = "partner-pic" src = {p2}></img>
                <img className = "partner-pic" src = {p3}></img>
                <img className = "partner-pic" src = {p4}></img>
                <img className = "partner-pic" src = {p5}></img>
            </div>
        </div>
    )
}

export default Home