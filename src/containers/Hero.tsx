// import { Particles } from '@/components';
import profile from '@/assets/pfp.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            id="about"
            className="w-full h-svh pt-header bg-gradient-home-r"
        >
            <div className="h-full w-full bg-background dark:bg-dot-white bg-dot-black relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="pt-16 supports-[backdrop-filter]:bg-background/70 h-full w-full flex flex-col items-center justify-center z-10">
                    <div className="px-8 flex items-center justify-center gap-x-20 flex-col xl:flex-row">
                        <div className="max-w-2xl">
                            <h1 className="text-2xl md:text-6xl font-bold py-6 flex items-center justify-center xl:justify-normal">
                                Software Engineer
                                <img
                                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png"
                                    alt="Fire"
                                    className="ml-4 w-10 h-10 md:w-16 md:h-16 hid"
                                />
                            </h1>
                            <p className="max-w-xl pb-8 md:text-lg text-sm text-center xl:text-left">
                                Hi, I'm Ali Sajad Khorami. A passionate Software
                                Engineering student at AAU.
                                <br />
                                Currently based in Aalborg, Denmark 📍
                            </p>
                            <div className="md:my-4 xl:justify-normal flex justify-center gap-x-4">
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
                            className="my-8 w-60 h-60 sm:w-96 sm:h-96 bg-no-repeat bg-cover rounded-full shadow-2xl align-middle"
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
