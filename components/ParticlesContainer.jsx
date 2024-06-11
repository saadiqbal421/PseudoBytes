import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="fixed top-0 left-0 w-screen h-screen z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 500,
        interactivity: {
          events: {
            onClick: {
              enable: false,
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
              quantity: 100,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;