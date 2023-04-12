import React, { useCallback, useContext } from 'react';
import Particles from "react-particles";
// import  particlesConfig  from '../src/config/particles';
import aboutParticlesConfig  from '../src/config/aboutparticles';
import aboutParticlesConfigLightMode from '../src/config/aboutparticleslightmode';
import particlesLightMode from '../src/config/particleslightmode';
// import particlestest from '../src/config/particlestest';
import { loadFull } from "tsparticles";
import { useRouter } from 'next/router'
import { Context } from "../pages/_app";
import ThePartclesTest from "./ThePartclesTest"



function ParticlesBackground(props) {
    // const particle = particlesConfig()[0];
    // const particlestest1 = particlestest();
    const theparticlestest1 = ThePartclesTest()[0];
    const particleLightModeConfig = particlesLightMode()[0];
    const aboutParticel = aboutParticlesConfig()[0]
    const aboutParticelLight = aboutParticlesConfigLightMode()[0]
    const theme = useContext(Context)

    const router = useRouter()

    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    return (
        <div className="absolute w-full h-full z-0">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={
                    router.pathname === '/about' && theme.darkTheme === false || router.pathname === '/projects' && theme.darkTheme === false
                        ?
                        aboutParticelLight
                        :
                        router.pathname === '/about' || router.pathname === '/projects'
                            ?
                            aboutParticel
                            :
                            theme.darkTheme === false
                                ?
                                particleLightModeConfig
                                :
                                theparticlestest1
                }
            />


        </div>
    );
}

export default ParticlesBackground;