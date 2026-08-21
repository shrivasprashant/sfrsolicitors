'use client'; // Next.js App Router ke liye zaroori hai kyunki hum window/document use kar rahe hain

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        // 1. Scene aur Camera Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 7;

        // 2. Renderer Setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentMount.appendChild(renderer.domElement);

        // 3. Lights Add Karna
        const ambient = new THREE.AmbientLight(0xffffff, 0.9);
        scene.add(ambient);

        const dirLight1 = new THREE.DirectionalLight(0xa98554, 2.2); // Brass
        dirLight1.position.set(6, 10, 8);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x7a2e2e, 2.4); // Oxblood
        dirLight2.position.set(-6, -6, -3);
        scene.add(dirLight2);

        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // 4. Geometries aur Materials
        // Outer Geometry: Brass Wireframe Icosahedron
        const icoGeo = new THREE.IcosahedronGeometry(2.1, 1);
        const icoMat = new THREE.MeshStandardMaterial({
            color: 0xa98554,
            wireframe: true,
            metalness: 0.8,
            roughness: 0.2
        });
        const icosahedron = new THREE.Mesh(icoGeo, icoMat);
        mainGroup.add(icosahedron);

        // Inner Core: Oxblood Translucent Octahedron
        const octGeo = new THREE.OctahedronGeometry(1.2, 0);
        const octMat = new THREE.MeshPhysicalMaterial({
            color: 0x7a2e2e,
            metalness: 0.2,
            roughness: 0.1,
            transmission: 0.6,
            transparent: true,
            opacity: 0.88
        });
        const octahedron = new THREE.Mesh(octGeo, octMat);
        mainGroup.add(octahedron);

        // Orbital Rings
        const ringGeo = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xa98554, transparent: true, opacity: 0.5 });

        const ring1 = new THREE.Mesh(ringGeo, ringMat);
        ring1.rotation.x = Math.PI / 3;
        mainGroup.add(ring1);

        const ring2 = new THREE.Mesh(ringGeo, ringMat);
        ring2.rotation.y = Math.PI / 4;
        ring2.rotation.x = -Math.PI / 6;
        mainGroup.add(ring2);

        // 5. Mouse Tracking aur Resize Handling
        let targetX = 0;
        let targetY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        const onMouseMove = (e) => {
            targetX = (e.clientX - windowHalfX) * 0.0008;
            targetY = (e.clientY - windowHalfY) * 0.0008;
        };

        const onResize = () => {
            if (!currentMount) return;
            const width = currentMount.clientWidth;
            const height = currentMount.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
        };

        document.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onResize);

        // 6. Animation Loop
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            icosahedron.rotation.x += 0.0025;
            icosahedron.rotation.y += 0.0035;
            octahedron.rotation.x -= 0.004;
            octahedron.rotation.y -= 0.004;
            ring1.rotation.z += 0.002;
            ring2.rotation.z -= 0.002;

            mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.05;
            mainGroup.rotation.x += (targetY - mainGroup.rotation.x) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        // 7. Cleanup Function (React mein memory leak rokne ke liye bahut zaroori hai)
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousemove', onMouseMove);

            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }

            // Memory clear karna
            icoGeo.dispose();
            icoMat.dispose();
            octGeo.dispose();
            octMat.dispose();
            ringGeo.dispose();
            ringMat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                maxWidth: '800px',
                height: '440px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab',
                position: 'relative'
            }}
            onMouseDown={(e) => (e.currentTarget.style.cursor = 'grabbing')}
            onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
            onMouseLeave={(e) => (e.currentTarget.style.cursor = 'grab')}
        />
    );
};

export default Hero3D;