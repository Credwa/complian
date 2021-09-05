import React from 'react';
import Particles from 'react-particles-js';

import Particle1 from 'common/assets/image/saas/particles/particle-a.svg';
import Particle2 from 'common/assets/image/saas/particles/particle-b.svg';
import Particle3 from 'common/assets/image/saas/particles/particle-c.svg';
import Particle4 from 'common/assets/image/saas/particles/particle-d.svg';
import Particle5 from 'common/assets/image/saas/particles/particle-e.svg';
import Particle6 from 'common/assets/image/saas/particles/particle-f.svg';

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 6,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Particle1}`,
                  width: 88,
                  height: 88,
                },
                {
                  src: `${Particle2}`,
                  width: 88,
                  height: 88,
                },
                {
                  src: `${Particle3}`,
                  width: 64,
                  height: 64,
                },
                {
                  src: `${Particle4}`,
                  width: 82,
                  height: 82,
                },
                {
                  src: `${Particle5}`,
                  width: 36,
                  height: 36,
                },
                {
                  src: `${Particle6}`,
                  width: 88,
                  height: 88,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 13,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;
