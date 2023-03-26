import React, { useCallback, useContext } from 'react';
import Particles from "react-particles";
import particlesConfig from './config/particles.config';
import aboutParticlesConfig from './config/aboutparticles.config';
import aboutParticlesConfigLightMode from './config/aboutparticleslightmode.config';
import particlesLightMode from './config/particleslightmode.config';
import { loadFull } from "tsparticles";
import { useRouter } from 'next/router'
import { Context } from "../_app";


function ParticlesBackground(props) {

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
                        aboutParticlesConfigLightMode
                        :
                        router.pathname === '/about' || router.pathname === '/projects'
                            ?
                            aboutParticlesConfig
                            :
                            theme.darkTheme === false
                                ?
                                particlesLightMode
                                :
                                particlesConfig
                }
            />


        </div>
    );
}

export default ParticlesBackground;