import { Particles } from '@/components';
import profile from '@/assets/pfp.jpg';

const Hero = () => {
    return (
        <section className="w-full h-screen pt-header bg-gradient-home-r">
            <div className="h-screen w-full bg-background dark:bg-dot-white/[0.4] bg-dot-black relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className="supports-[backdrop-filter]:bg-background/70 h-full w-full flex items-center justify-center z-10">
                    <div className="max-w-6xl flex items-center justify-center gap-x-20">
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-bold py-6">
                                Software Engineer
                            </h1>
                            <p className="text-2xl sm:text-lg">
                                Hi, I'm Ali Sajad Khorami. A passionate Software
                                Engineering student at AAU.
                                <br />
                                📍Currently based in Aalborg, Denmark
                            </p>
                        </div>
                        <div
                            className="w-96 h-96 bg-no-repeat bg-cover rounded-full shadow-2xl"
                            style={{ backgroundImage: `url("${profile}")` }}
                        />
                    </div>
                </div>
            </div>
            <Particles />
        </section>
    );
};

export default Hero;
