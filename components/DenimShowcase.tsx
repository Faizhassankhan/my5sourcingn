import React, { Suspense, useLayoutEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, Environment, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- 3D Model Component ---
const Model = React.forwardRef<THREE.Group>((props, ref) => {
  const { nodes, materials } = useGLTF('/scene.gltf');

  const [colorMap, normalMap] = useTexture([
    '/denim_texture.png',
    '/denim_normal.png'
  ]);

  colorMap.flipY = false;
  colorMap.colorSpace = THREE.SRGBColorSpace;
  normalMap.flipY = false;

  const material = materials.Jeans_03 as THREE.MeshStandardMaterial;
  material.map = colorMap;
  material.normalMap = normalMap;
  
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        geometry={(nodes.Jeans_03_Jeans_03_0 as any).geometry}
        material={material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
});
Model.displayName = 'Model';

// --- Animation and Scene Setup ---
const SceneAnimator = ({ modelRef }: { modelRef: React.RefObject<THREE.Group> }) => {
  const { camera } = useThree();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // --- ANIMATION TWEAKS ---
      const animationConfig = {
        desktop: {
          rotationSpeed: Math.PI * 4, // Increased rotation
          startScale: 1.5,             // Larger initial scale
          endScale: 1.8,               // Larger final scale
          cameraZoom: 2.2,             // Closer camera
          modelEndY: -2,               // How far the model moves down
        },
        mobile: {
          rotationSpeed: Math.PI * 3,
          startScale: 1.2,
          endScale: 1.5,
          cameraZoom: 3.5,
          modelEndY: -2.5,
        }
      };

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.denim-showcase',
              start: "top top",
              endTrigger: '.driving-scroll-content',
              end: "bottom bottom",
              scrub: 1,
              pin: true,
            },
          });

          // --- Initial Setup (Desktop) ---
          camera.position.set(0, 0, 4); // Closer camera
          modelRef.current!.scale.set(animationConfig.desktop.startScale, animationConfig.desktop.startScale, animationConfig.desktop.startScale);
          modelRef.current!.position.set(0, -0.5, 0); // Start a bit higher

          // --- Animation Timeline (Desktop) ---
          tl.to(modelRef.current!.rotation, { y: animationConfig.desktop.rotationSpeed, ease: "none" }, 0)
            .to(camera.position, { z: animationConfig.desktop.cameraZoom, ease: "power1.inOut" }, 0)
            .to(modelRef.current!.position, { y: animationConfig.desktop.modelEndY, ease: "power1.inOut" }, 0) // Move down
            .to(modelRef.current!.scale, { 
              x: animationConfig.desktop.endScale, 
              y: animationConfig.desktop.endScale, 
              z: animationConfig.desktop.endScale,
              ease: "power1.inOut",
            }, 0);
        },

        "(max-width: 767px)": function() {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: '.denim-showcase',
              start: "top top",
              endTrigger: '.driving-scroll-content',
              end: "bottom bottom",
              scrub: 1,
              pin: true,
            },
          });

          // --- Initial Setup (Mobile) ---
          camera.position.set(0, 0, 5);
          modelRef.current!.scale.set(animationConfig.mobile.startScale, animationConfig.mobile.startScale, animationConfig.mobile.startScale);
          modelRef.current!.position.set(0, -0.8, 0);

          // --- Animation Timeline (Mobile) ---
          tl.to(modelRef.current!.rotation, { y: animationConfig.mobile.rotationSpeed, ease: "none" }, 0)
            .to(camera.position, { z: animationConfig.mobile.cameraZoom, ease: "power1.inOut" }, 0)
            .to(modelRef.current!.position, { y: animationConfig.mobile.modelEndY, ease: "power1.inOut" }, 0) // Move down
            .to(modelRef.current!.scale, {
              x: animationConfig.mobile.endScale,
              y: animationConfig.mobile.endScale,
              z: animationConfig.mobile.endScale,
              ease: "power1.inOut",
            }, 0);
        }
      });
    });

    return () => ctx.revert();
  }, [camera, modelRef]);

  return null;
};

// --- Main Showcase Component ---
const DenimShowcase = () => {
  const modelRef = useRef<THREE.Group>(null);

  return (
    // This section will be pinned by GSAP. We give it a background color to hide the content
    // scrolling behind it.
    <section className="denim-showcase h-screen w-full bg-gray-900">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center pointer-events-none p-8 pt-24">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Unmatched Durability
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Crafted for life's adventures. Our denim is built to last, combining timeless style with rugged performance.
        </p>
      </div>

      <Canvas className="w-full h-full">
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={3} color="#FFDDBB" />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model ref={modelRef} />
        </Suspense>
        
        <SceneAnimator modelRef={modelRef} />
      </Canvas>
    </section>
  );
};

useGLTF.preload('/scene.gltf');

export default DenimShowcase;