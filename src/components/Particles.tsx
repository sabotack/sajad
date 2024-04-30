import { useEffect, useState } from 'react';
import {
    Particles as TsParticles,
    initParticlesEngine,
} from '@tsparticles/react';
import { type Container } from '@tsparticles/engine';
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import useParticles from '@/hooks/useParticles';
import { parallaxParticles } from '@/constants';
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particles = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        })
            .then(() => {
                setInit(true);
            })
            .catch((e) => {
                console.error(e);
            });
    }, []);

    const options = useParticles(parallaxParticles);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
        await Promise.resolve(); // Add an await expression here
    };

    if (init) {
        return (
            <TsParticles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="h-screen w-full absolute top-0 left-0 pointer-events-none"
            />
        );
    }

    return <></>;
};

export default Particles;
