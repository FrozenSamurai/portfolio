import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model } from "./Model";
const ThreedSamurai = ({ playing, setPlaying }) => {
  const ref = useRef();

  return (
    <Canvas
      style={{
        height: "300px",
        width: "300px",
      }}
      shadows={true}
      dpr={[1, 2]}
      camera={{ fov: 5, near: 10, far: 1000, position: [50, 10, 50] }}
    >
      <directionalLight
        intensity={1.3}
        position={[200, 400, 400]}
        color={"purple"}
      />
      <directionalLight
        intensity={0.7}
        position={[100, 100, -100]}
        color={"purple"}
      />
      <Suspense fallback={null}>
        <Stage
          // controls={ref}
          preset="portrait"
          intensity={0.5}
          shadows={true}
          environment="lobby"
        >
          false
          <Model playing={playing} setPlaying={setPlaying} />
          false
        </Stage>
      </Suspense>
      <OrbitControls
        ref={ref}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        autoRotate={false}
      />
    </Canvas>
  );
};

export default ThreedSamurai;
