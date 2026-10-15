'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SystemOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion || window.matchMedia('(max-width: 720px)').matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 5.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.IcosahedronGeometry(1.42, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xb7ff52,
      opacity: 0.42,
      transparent: true,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xa8efff,
      opacity: 0.82,
      size: 0.034,
      sizeAttenuation: true,
      transparent: true,
    });
    const points = new THREE.Points(coreGeometry, pointsMaterial);
    group.add(points);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x67d9ff,
      opacity: 0.2,
      transparent: true,
      wireframe: true,
    });
    const rings = [
      new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.008, 4, 180), ringMaterial.clone()),
      new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.006, 4, 180), ringMaterial.clone()),
      new THREE.Mesh(new THREE.TorusGeometry(1.66, 0.006, 4, 180), ringMaterial.clone()),
    ];
    rings[0].rotation.x = Math.PI * 0.52;
    rings[1].rotation.set(Math.PI * 0.28, Math.PI * 0.2, Math.PI * 0.08);
    rings[2].rotation.set(Math.PI * 0.68, -Math.PI * 0.2, Math.PI * 0.22);
    rings.forEach((ring) => group.add(ring));

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.35;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.25;
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    container.addEventListener('pointermove', onPointerMove);
    resize();

    let frame = 0;
    const timer = new THREE.Timer();
    timer.connect(document);
    const render = () => {
      timer.update();
      const elapsed = timer.getElapsed();
      group.rotation.y += (pointer.x + elapsed * 0.055 - group.rotation.y) * 0.018;
      group.rotation.x += (-pointer.y + Math.sin(elapsed * 0.42) * 0.08 - group.rotation.x) * 0.025;
      core.rotation.z = elapsed * 0.055;
      points.rotation.z = -elapsed * 0.035;
      rings[0].rotation.z = elapsed * 0.08;
      rings[1].rotation.y = elapsed * 0.06;
      rings[2].rotation.x = Math.PI * 0.68 - elapsed * 0.035;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      container.removeEventListener('pointermove', onPointerMove);
      coreGeometry.dispose();
      coreMaterial.dispose();
      pointsMaterial.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        (ring.material as THREE.Material).dispose();
      });
      timer.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [prefersReducedMotion]);

  return <div ref={containerRef} className="v2-system-orb" aria-hidden="true" />;
}
