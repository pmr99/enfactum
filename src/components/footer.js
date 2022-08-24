import Footerindiv from "./footerindiv"

const Footer = () => {
    return (
        <div style = {{marginTop: "40px"}} className = "partner blue">
            <div className = "partner-content">
            <Footerindiv main = "Singapore Address" sub = "161 Lavender Street, 03-02, Singapore 338750" />
            </div>
            <div className = "partner-content">
            <Footerindiv main = "Email" sub = "info@enfactum.com" />
            </div>
            <div className = "partner-content">
            <Footerindiv main = "Phone" sub = "+65 6396 5236" />
            </div>
        </div>
        )
    }

export default Footer

