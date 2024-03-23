import Navbar from '../../components';
import CoverBackground from '../../assets/unsplash-img.webp';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="w-full h-screen pt-header bg-gradient-home-r">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-home-b" />
                <div
                    className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center -z-10"
                    style={{ backgroundImage: `url(${CoverBackground})` }}
                />
            </section>
            <section className="w-full h-screen bg-gradient-home-r">
                <div className="w-full h-full bg-slate-800" />
            </section>
            <section id="test" className="w-full h-screen bg-gradient-home-r">
                <div className="w-full h-full bg-red-500" />
            </section>
        </>
    );
};

export default Home;
