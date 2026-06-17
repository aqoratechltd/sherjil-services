"use client"

import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ParticleField } from "./ParticleField"
import { FloatingGrid } from "./FloatingGrid"

export default function HeroScene() {
  // To avoid unhandled disposals, we manage them cleanly in the components
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          performance={{ min: 0.5 }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#6EE7B7" />
          <pointLight position={[-5, -5, 5]} intensity={0.5} color="#60A5FA" />
          
          <ParticleField count={2000} />
          <FloatingGrid />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3} 
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
