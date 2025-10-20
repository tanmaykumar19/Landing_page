import { useMemo, useRef } from 'react'
import { Group, Color } from 'three'
import { useFrame } from '@react-three/fiber'
import React from 'react'

function Candlestick({ x, height, bullish, index }) {
	const ref = useRef()
	const color = bullish ? new Color('#10b981') : new Color('#ef4444')

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime()
		const wiggle = Math.sin(t * 2 + index * 0.25) * 0.04
		ref.current.position.y = height / 2 + wiggle
	})

	return (
		<mesh ref={ref} position={[x, height / 2, 0]}>
			<boxGeometry args={[0.25, height, 0.25]} />
			<meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
		</mesh>
	)
}

function CandleField({ count = 48, spread = 7.5 }) {
	const data = useMemo(() => {
		const items = []
		for (let i = 0; i < count; i++) {
			const bullish = Math.random() > 0.45
			const height = 0.4 + Math.pow(Math.random(), 1.5) * 3.2
			items.push({
				x: (i / (count - 1)) * spread - spread / 2,
				height,
				bullish,
				index: i
			})
		}
		return items
	}, [count, spread])

	return (
		<group position={[0, 0.1, 0]}>
			{data.map((d) => (
				<Candlestick key={d.index} {...d} />
			))}
		</group>
	)
}

// function GoldenKnot() {
// 	const ref = useRef()
// 	useFrame((_, delta) => {
// 		if (!ref.current) return
// 		ref.current.rotation.y += delta * 0.25
// 		ref.current.rotation.x += delta * 0.1
// 	})
// 	return (
// 		<mesh ref={ref} position={[0, 1.6, -0.4]}>
// 			<torusKnotGeometry args={[0.6, 0.18, 180, 32]} />
// 			<meshStandardMaterial
// 				color={'#fbbf24'}
// 				metalness={0.85}
// 				roughness={0.15}
// 				envMapIntensity={1.5}
// 			/>
// 		</mesh>
// 	)
// }

export default function Hero3D() {
	const groupRef = useRef(new Group())

	useFrame((_, delta) => {
		if (!groupRef.current) return
		groupRef.current.rotation.y += delta * 0.08
	})

	return (
		<group ref={groupRef} position={[0, -0.2, 0]}>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
				<circleGeometry args={[8, 64]} />
				<meshStandardMaterial color="#0d1726" roughness={0.9} metalness={0.1} />
			</mesh>

			<CandleField />

			{/* <GoldenKnot /> */}
		</group>
	)
}