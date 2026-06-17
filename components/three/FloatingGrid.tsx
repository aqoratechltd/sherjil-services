"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

const vertexShader = `
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 pos = position;
    // Animate Y displacement like a wave
    pos.z += sin(pos.x * 2.0 + uTime) * 0.2;
    pos.z += cos(pos.y * 2.0 + uTime) * 0.2;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  void main() {
    // Basic emissive green glow effect with falloff
    float dist = distance(vUv, vec2(0.5));
    float alpha = smoothstep(0.5, 0.0, dist) * 0.5;
    gl_FragColor = vec4(0.43, 0.9, 0.71, alpha); // #6EE7B7 equivalent
  }
`

export function FloatingGrid() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.5
    }
  })

  const geometry = useMemo(() => new THREE.PlaneGeometry(20, 20, 40, 40), [])

  useEffect(() => {
    return () => {
      geometry.dispose()
      if (materialRef.current) materialRef.current.dispose()
    }
  }, [geometry])

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 40, 40]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={true}
        transparent={true}
      />
    </mesh>
  )
}
