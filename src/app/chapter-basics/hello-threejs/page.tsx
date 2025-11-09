'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './page.module.scss'
import BackLink from '@/components/BackLink'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function HelloThreeJSPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cubeRef1 = useRef<THREE.Mesh | null>(null)
  const cubeRef2 = useRef<THREE.Mesh | null>(null)
  const cubeRef3 = useRef<THREE.Mesh | null>(null)
  const groupRef = useRef<THREE.Group | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const axesHelperRef = useRef<THREE.AxesHelper | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  useEffect(() => {
    if (!containerRef.current) return

    // Store container reference for cleanup
    const container = containerRef.current

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    sceneRef.current = scene

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Cube geometry and material
    const group = new THREE.Group()
    groupRef.current = group
    group.scale.y = 2
    group.rotation.y = 0.2
    scene.add(group)

    const cube1 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    cube1.position.x = - 1.5
    group.add(cube1)
    cubeRef1.current = cube1

    const cube2 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    cube2.position.x = 0
    group.add(cube2)
    cubeRef2.current = cube2

    const cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
    cube3.position.x = 1.5
    group.add(cube3)
    cubeRef3.current = cube3
    const axesHelper = new THREE.AxesHelper(2)
    scene.add(axesHelper)
    axesHelperRef.current = axesHelper

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(4, 4, 4)
    cameraRef.current = camera
    camera.lookAt(group.position)

    // Controls
    const controls = new OrbitControls(cameraRef.current!, rendererRef.current!.domElement)
    controls.enableDamping = true
    controls.update()
    controlsRef.current = controls


    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()
      if (groupRef.current) {
        groupRef.current.rotation.y = elapsedTime
      }
      controls.update()

      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(animate)
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

    const handleDoubleClick = () => {
      if(!document.fullscreenElement && rendererRef.current)
      {
        const canvas = rendererRef.current.domElement as HTMLCanvasElement & {
          webkitRequestFullscreen?: () => void
          mozRequestFullScreen?: () => void
          msRequestFullscreen?: () => void
        }
        if (canvas.requestFullscreen) {
          canvas.requestFullscreen()
        } else if (canvas.webkitRequestFullscreen) {
          canvas.webkitRequestFullscreen()
        } else if (canvas.mozRequestFullScreen) {
          canvas.mozRequestFullScreen()
        } else if (canvas.msRequestFullscreen) {
          canvas.msRequestFullscreen()
        }
      } else {
        const doc = document as Document & {
          webkitExitFullscreen?: () => void
        }
        if (doc.exitFullscreen) {
          doc.exitFullscreen()
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen()
        }
      }
    }
    window.addEventListener('dblclick', handleDoubleClick)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('dblclick', handleDoubleClick)
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (cubeRef1.current) {
        cubeRef1.current.geometry.dispose()
        ;(cubeRef1.current.material as THREE.Material).dispose()
      }

      if (cubeRef2.current) {
        cubeRef2.current.geometry.dispose()
        ;(cubeRef2.current.material as THREE.Material).dispose()
      }

      if (cubeRef3.current) {
        cubeRef3.current.geometry.dispose()
        ;(cubeRef3.current.material as THREE.Material).dispose()
      }

      if (rendererRef.current) {
        rendererRef.current.dispose()
        if (container && rendererRef.current.domElement) {
          container.removeChild(rendererRef.current.domElement)
        }
      }

      if (axesHelperRef.current) {
        axesHelperRef.current.dispose()
      }
      if (controlsRef.current) {
        controlsRef.current.dispose()
      }

      sceneRef.current = null
      cameraRef.current = null
      rendererRef.current = null
      cubeRef1.current = null
      cubeRef2.current = null
      cubeRef3.current = null
      groupRef.current = null
      axesHelperRef.current = null
      controlsRef.current = null
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

