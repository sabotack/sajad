// import { Particles } from '@/components';
import profile from '@/assets/pfp.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            id="about"
            className="w-full h-screen pt-header bg-gradient-home-r"
        >
            <div className="h-screen w-full bg-background dark:bg-dot-white/[0.4] bg-dot-black relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="supports-[backdrop-filter]:bg-background/70 h-full w-full flex flex-col items-center justify-center z-10">
                    <div className="px-8 flex items-center justify-center gap-x-20 flex-col xl:flex-row">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-6xl font-bold py-6 flex items-center justify-center xl:justify-normal">
                                Software Engineer
                                <img
                                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png"
                                    alt="Fire"
                                    width="60"
                                    height="60"
                                    className="ml-4"
                                />
                            </h1>
                            <p className="pb-8 md:text-lg text-center xl:text-left">
                                Hi, I'm Ali Sajad Khorami. A passionate Software
                                Engineering student at Aalborg University.
                                <br />
                                Currently based in Aalborg, Denmark 📍
                            </p>
                            <div className="my-4 flex gap-x-4">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/alikhorami/"
                                >
                                    <FaLinkedin size={32} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/sabotack/"
                                >
                                    <FaGithub size={32} />
                                </a>
                            </div>
                        </div>
                        <div
                            className="my-8 w-72 h-72 sm:w-96 sm:h-96 bg-no-repeat bg-cover rounded-full shadow-2xl align-middle"
                            style={{ backgroundImage: `url("${profile}")` }}
                        />
                    </div>
                    <div className="absolute bottom-4 animate-pulse text-sm md:text-base">
                        Scroll down to discover more
                    </div>
                </div>
            </div>
            {/* <Particles /> */}
        </section>
    );
};

export default Hero;
