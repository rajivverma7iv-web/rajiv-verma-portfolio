import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroSculpture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebGlSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Group to hold interactive rotating components
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Primary Architectural Kinetic Sculpture: Parametric Torus Knot
    // Elegant proportions: tubular radius 0.28, radius 1.35
    const knotGeometry = new THREE.TorusKnotGeometry(1.35, 0.3, 160, 36, 2, 3);
    
    // Luxury Brushed Champagne-Titanium Material
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#D4B588'),
      metalness: 0.88,
      roughness: 0.24,
      wireframe: false,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    sculptureGroup.add(knotMesh);

    // 2. Translucent Frosted Glass Core Geodesic Form
    const coreGeometry = new THREE.IcosahedronGeometry(0.85, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F0EAD6'),
      metalness: 0.15,
      roughness: 0.12,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    sculptureGroup.add(coreMesh);

    // 3. Floating Orbital Rings (Architectural Precision)
    const ring1Geometry = new THREE.TorusGeometry(2.35, 0.016, 24, 120);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E5D3B3'),
      metalness: 0.95,
      roughness: 0.15,
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(2.0, 0.012, 24, 120);
    const ring2Material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#9DA3B0'), // Cool silver-titanium contrast
      metalness: 0.92,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    sculptureGroup.add(ring2);

    // 4. Subtle Ambient Particle Dust (Champagne / Silver Micro Motes)
    const particleCount = 45;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#D8C3A5'),
      size: 0.035,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lighting Design
    // Ambient Light (deep graphite foundation)
    const ambientLight = new THREE.AmbientLight(0x23272e, 1.2);
    scene.add(ambientLight);

    // Warm Key Light (Champagne Gold Highlights)
    const keyLight = new THREE.DirectionalLight(0xffeed6, 3.2);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Cool Rim Light (Silver/Titanium Edge Definition)
    const rimLight = new THREE.DirectionalLight(0xa5b8d0, 2.5);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    // Dynamic Accent Point Light
    const accentLight = new THREE.PointLight(0xe8c58a, 3.8, 12);
    accentLight.position.set(0, 2, 2.5);
    scene.add(accentLight);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        targetX = x * 0.8;
        targetY = y * 0.8;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Subtle mouse damping (lerp)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Kinetic rotational movement
      sculptureGroup.rotation.y = elapsedTime * 0.28 + mouseX * 1.2;
      sculptureGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2 + mouseY * 1.0;
      sculptureGroup.rotation.z = Math.cos(elapsedTime * 0.15) * 0.1;

      // Independent counter-rotations for orbital rings
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.2;

      // Pulsing floating core
      coreMesh.rotation.y = -elapsedTime * 0.4;
      coreMesh.rotation.x = elapsedTime * 0.3;

      // Floating gentle breathing oscillation on Y axis
      sculptureGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

      // Particle gentle drift
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('touchmove', handleTouchMove);

      knotGeometry.dispose();
      knotMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ring1Geometry.dispose();
      ringMaterial.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webGlSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-champagne-400/30 bg-gradient-to-tr from-charcoal-800 via-graphite-700 to-champagne-500/20 shadow-2xl backdrop-blur-xl flex items-center justify-center animate-pulse-slow">
          <div className="w-44 h-44 rounded-full border border-silver-400/20 flex items-center justify-center">
            <span className="font-mono text-xs tracking-widest text-champagne-300">ARCHITECTURAL KINETIC 3D</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center relative select-none cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D architectural kinetic sculpture"
    />
  );
};
