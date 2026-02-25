'use client';
import { motion} from "framer-motion";
import Spaceman from "../components/Spaceman";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import TextPressure from '../components/TextPressure';
import BlurText from '../components/BlurText';

import Image from "next/image";
const Background= "/images/background.webp"


export default function HeroSection() {
    const [scale, setScale] = useState(1);

     useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;

      if (width < 400) setScale(0.8);
      else if (width < 768) setScale(1);
      else setScale(1.1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);
  return (
    <section id="home"
      className=" relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-10">

      <Image
   src={Background}
    alt="Hero background"
    fill
    priority
    className="object-cover -z-10"
  />
      {/* LEFT TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-4 max-w-xl text-center md:text-left"
      >
        {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-100">
          Hi, I'm <span className="text-blue-500">Arshpreet Kaur</span>
        </h1> */}
        <p className="text-white text-4xl md:text-3xl sm:text-2xl font-semibold mt-4">Hi I'm</p>
  <div className="relative w-full max-w-xl">
  <TextPressure
   text={`Arshpreet Kaur`}
    flex
    width
    weight
    italic
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={46}
  />
</div>
{/* 
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
          Frontend & MERN Stack Developer creating clean UI, smooth UX, and modern web applications.
        </p> */}
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="text-gray-300 text-base sm:text-lg lg:text-xl tracking-wide leading-relaxed max-w-lg mt-6"
>
  Frontend & MERN Stack Developer creating clean UI, smooth UX, and modern web applications.
</motion.p>

      </motion.div>

      {/* RIGHT 3D MODEL SECTION */}
      <div
      className={` w-[320px] h-[350px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[520px] lg:w-[650px] lg:h-[650px] flex items-stretch justify-start`}
       >
        <Canvas camera={{ position: [0, 1.2, 4], fov: 40 }}>
          <ambientLight intensity={1.1} />
          <directionalLight intensity={1} position={[5, 5, 5]} />

          <OrbitControls enableZoom={false} enablePan={false} />

          <Suspense fallback={null}>
            {/* Scale changes by screen size */}
            <Spaceman 
                scale={0.23}
              position={[0, -1.5, 0]}
              
            />

            <Environment preset="sunset" />

            <ContactShadows
              position={[0, -1.8, 0]}
              opacity={0.4}
              scale={20}
              blur={1.5}
              far={5}

            />
          </Suspense>
        </Canvas>
       
      </div>
   
    </section>
  );
}
