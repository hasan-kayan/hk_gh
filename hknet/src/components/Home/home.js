import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './home.css';
import { Html } from '@react-three/drei';

const Box = () => {
  const ref = useRef();
  const [hovered, setHover] = React.useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
      {hovered && <Html><div className="info-box">I am a box.</div></Html>}
    </mesh>
  );
};

const Sphere = () => {
  const ref = useRef();
  const [hovered, setHover] = React.useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={hovered ? 'orange' : 'purple'} />
      {hovered && <Html><div className="info-box">I am a sphere.</div></Html>}
    </mesh>
  );
};

function Home() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <Sphere position={[2, 0, 0]} />
    </Canvas>
  );
}

export default Home;
