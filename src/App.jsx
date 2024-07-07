import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Earth from "../public/Earth"
import "./App.css"
Suspense
function App() {
  return (
    <>
      <Canvas >
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>

    </>
  )
}

export default App