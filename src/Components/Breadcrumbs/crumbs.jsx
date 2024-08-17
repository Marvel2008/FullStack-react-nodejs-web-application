import {Link,useLocation} from "react-router-dom"
import "./crumbs.css"
import SectionWrapper from "../Section_wrapper/wrapper";
function Crumbs(){
    const location = useLocation();

    let currentLink=''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !=='')
    .map(crumb =>{
        currentLink += `/${crumb}`
        return(
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}<span className="symbol">&gt;</span></Link>
            </div>
        )
    })
    return(
            (crumbs)
    )
}

export default SectionWrapper("crumbs_section","container_breadcrumbs",Crumbs);