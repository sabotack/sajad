import { Header, Hero } from '@/containers';

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <section
                id="projects"
                className="w-full h-screen bg-gradient-home-r"
            >
                <div className="w-full h-full bg-gray-900" />
            </section>
            <section
                id="contact"
                className="w-full h-screen bg-gradient-home-r"
            >
                <div className="w-full h-full bg-red-500" />
            </section>
        </>
    );
};

export default App;
