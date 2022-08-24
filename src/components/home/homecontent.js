import "./homecontent.css";


const Homecontent= (props) => {
    return (
    <div className = "homecontent-container">
        <div className = "left">
            <img style = {{width: "200px", marginLeft: "auto", marginRight: "auto", display: "block"}} src = {props.src}/>
            <p style = {{textAlign : "center", marginTop: "5px"}}> {props.header}</p>
        </div>
        <div className = "right">
            <p className = "description"> {props.des}</p>
        </div>
    </div>
    )
}



export default Homecontent