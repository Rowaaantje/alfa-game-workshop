import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AmbientLight, Camera, MeshBasicMaterial, PointLight } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { useWireframeUniforms } from "@react-three/drei/materials/WireframeMaterial";

function Stage() {
  const boxRef = useRef();

  useFrame((state, deltatime) => {
    boxRef.current.rotation.x += 0.02;
    boxRef.current.rotation.y += 0.02;
  });

  return (
    <Box ref={boxRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#EEC61F"/>
    </Box>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Canvas>
      <ambientLight />
      <spotLight intensity={3} rotation={[90, 90, 0]} />
      <Stage />
    </Canvas>
  );
}

export default App;
