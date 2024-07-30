/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 earth.gltf 
Author: denis_cliofas (https://sketchfab.com/denis_cliofas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-3684eb40fb7e42208089874e6286b9e9
Title: Earth
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/earth.gltf')
  const { actions } = useAnimations(animations, group)

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 1 // Adjust the rotation speed as needed
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.020}>
          <group name="fc09fa6deb6c45f687e724438fed81adfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth" rotation={[-Math.PI / 2, 0, 0]} scale={57.393}>
                  <mesh name="Earth_Earth_0" geometry={nodes.Earth_Earth_0.geometry} material={materials.Earth} />
                  <mesh name="Earth_Earth_0_1" geometry={nodes.Earth_Earth_0_1.geometry} material={materials.Earth} />
                  <mesh name="Earth_Earth_0_2" geometry={nodes.Earth_Earth_0_2.geometry} material={materials.Earth} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/earth.gltf')
