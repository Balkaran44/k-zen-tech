
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useIsMobile } from '@/hooks/use-mobile';

interface ParticlesBackgroundProps {
  className?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: isMobile ? 80 : 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#7855fc",
            },
            links: {
              color: "#7855fc",
              distance: isMobile ? 100 : 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: isMobile ? 0.6 : 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: isMobile ? 30 : 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: isMobile ? 2 : 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
