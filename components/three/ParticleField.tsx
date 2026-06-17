"use client"

import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticleFieldProps {
  count?: number
}

export function ParticleField({ count = 2000 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Generate random positions and phases
  const { positions, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const phs = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20     // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20 // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 // z
      phs[i] = Math.random() * Math.PI * 2        // phase
    }
    return { positions: pos, phases: phs }
  }, [count])

  // Optimization: use a shared material and geometry
  const geometry = useMemo(() => new THREE.BufferGeometry(), [])
  
  // Actually since it's an InstancedMesh we usually provide a base geometry like an Icosahedron or Sphere.
  // For small particles, an Icosahedron or a raw Box works great.
  const baseGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.015, 0), [])
  const material = useMemo(() => new THREE.MeshBasicMaterial({ 
    color: '#6EE7B7', 
    transparent: true, 
    opacity: 0.6 
  }), [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime * 0.2

    for (let i = 0; i < count; i++) {
      const idx = i * 3
      const phase = phases[i]
      
      // Calculate animated position
      const x = positions[idx] + Math.sin(time + phase) * 0.1
      const y = positions[idx + 1] + Math.cos(time + phase) * 0.1
      const z = positions[idx + 2]

      dummy.position.set(x, y, z)
      
      // Make particles pulse slightly
      const scale = 1 + Math.sin(time * 3 + phase) * 0.2
      dummy.scale.set(scale, scale, scale)
      
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  // Ensure disposal on unmount handled by r3f mostly, but we can manage arrays
  useEffect(() => {
    return () => {
      baseGeometry.dispose()
      material.dispose()
    }
  }, [baseGeometry, material])

  return (
    <instancedMesh
      ref={meshRef}
      args={[baseGeometry, material, count]}
      frustumCulled={false}
    />
  )
}
import { useEffect } from "react"
