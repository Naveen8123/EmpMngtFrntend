import AboutUs from "./AboutUsComponent";
import ContactUs from "./ContactUsComponent";
import MainCarousel from "./homeCarousel/MainCarousel";

const HomeComponent = () =>{
    return(
        <div>
           <MainCarousel/>
           <AboutUs/>
           <ContactUs/>
        </div>
    )
}
export default HomeComponent;