import { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

import { backgroundAnimation } from "./config/default"

export default function BackgroundParticlesComponent(){
    const [init, setInit ] = useState(false);

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
      }).then(() => {
          setInit(true)
      })
  }, [])

  const particlesLoaded = (container) => {}

  return (
    <>
      { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={backgroundAnimation}
        />
      }
    </>
  )
}
