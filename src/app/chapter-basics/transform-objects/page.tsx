'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './page.module.scss'
import BackLink from '@/components/BackLink'

export default function HelloThreeJSPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cubeRef = useRef<THREE.Mesh | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Store container reference for cleanup
    const container = containerRef.current

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
    camera.position.z = 3
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Cube geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    cubeRef.current = cube

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight
        cameraRef.current.updateProjectionMatrix()
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      }
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (cubeRef.current) {
        cubeRef.current.geometry.dispose()
        ;(cubeRef.current.material as THREE.Material).dispose()
      }

      if (rendererRef.current) {
        rendererRef.current.dispose()
        if (container && rendererRef.current.domElement) {
          container.removeChild(rendererRef.current.domElement)
        }
      }

      sceneRef.current = null
      cameraRef.current = null
      rendererRef.current = null
      cubeRef.current = null
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className={styles.container} />
      <div className='absolute top-4 left-4'>
        <BackLink href="/chapter-basics" text="Back to Basics" />
      </div>
    </>
  )
}

