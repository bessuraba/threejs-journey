import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

// Debug
const gui = new GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Textures
const manager = new THREE.LoadingManager()
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
};

manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};
const textureLoader = new THREE.TextureLoader(manager)
const colorTexture = textureLoader.load('/textures/door/color.jpg')
colorTexture.colorSpace = THREE.SRGBColorSpace
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/1.png')
matcapTexture.colorSpace = THREE.SRGBColorSpace
const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')

// Objects
// const material = new THREE.MeshBasicMaterial({ map: colorTexture })
// const material = new THREE.MeshNormalMaterial()

//Matcap material
// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

// MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial()

// MeshToonMaterial
// const material = new THREE.MeshToonMaterial()
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
// material.gradientMap = gradientTexture

// MeshStandardMaterial
// const material = new THREE.MeshStandardMaterial()
// material.metalness = 1
// material.roughness = 1
// material.map = colorTexture
// material.aoMap = ambientOcclusionTexture
// material.aoMapIntensity = 1
// // material.displacementMap = heightTexture
// // material.displacementScale = 0.02
// material.metalnessMap = metalnessTexture
// material.roughnessMap = roughnessTexture
// material.normalMap = normalTexture
// material.transparent = true
// material.alphaMap = alphaTexture

// MeshPhysicalMaterial
const material = new THREE.MeshPhysicalMaterial()
material.metalness = 1
material.roughness = 1
material.map = colorTexture
material.aoMap = ambientOcclusionTexture
material.aoMapIntensity = 1
// material.displacementMap = heightTexture
// material.displacementScale = 0.02
material.metalnessMap = metalnessTexture
material.roughnessMap = roughnessTexture
material.normalMap = normalTexture
material.transparent = true
material.alphaMap = alphaTexture

gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)

//Clearcoat
// material.clearcoat = 1
// material.clearcoatRoughness = 0



const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material
)
sphere.position.x = -1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 64, 128),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)

// Lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 1)
// scene.add(ambientLight)

// const pointLight = new THREE.PointLight(0xffffff, 30)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// Environment map
const rgbeLoader = new RGBELoader()
rgbeLoader.load('/textures/environmentMap/2k.hdr', environmentMap => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping
    scene.background = environmentMap
    scene.environment = environmentMap
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update object
    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = -0.15 * elapsedTime
    plane.rotation.x = -0.15 * elapsedTime
    torus.rotation.x = -0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()