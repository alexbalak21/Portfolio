import {Suspense, useEffect, useState} from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls, Preload, SpotLight, useGLTF} from "@react-three/drei"

import CanvasLoader from "../Loader"

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0} groundColor="black" />
      <pointLight intensity={0.8} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={1100} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={0.75} position={[0, -4.5, -1.5]} rotation={[0, -0.2, -0.05]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop="demand" shadows camera={{position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
