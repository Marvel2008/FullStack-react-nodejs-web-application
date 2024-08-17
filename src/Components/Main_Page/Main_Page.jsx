import Header from "../Header/header"
import CatalogSection from "../Catalog_section/catalog"
import About from "../About_us/about"
import Footer from "../Footer/footer"
import Slider from "../Slider/slider"
import Feedback from "../Feedback/feedback"
export default function MainPage(){
    return(
        <>
        <Header/>
        <CatalogSection/>
        <About />
        <Slider />
        <Feedback />
        <Footer/>
        </>
    )
}