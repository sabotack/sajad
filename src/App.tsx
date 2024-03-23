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
                <div className="w-full h-full bg-gray-900">
                    <h1 className="text-6xl text-white">Hello, I'm Sajad</h1>
                </div>
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
