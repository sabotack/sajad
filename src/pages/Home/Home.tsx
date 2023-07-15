import Navbar from "../../components/Navbar";
import CoverBackground from '../../assets/unsplash-img.webp'


function Home() {

    return (
        <>
            <Navbar/>
            <section className="w-screen h-screen pt-header bg-gradient-home-r">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-home-b"/>
                <div className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10" style={{backgroundImage: `url(${CoverBackground})`}}/>
            </section>
        </>
    )
}

export default Home;