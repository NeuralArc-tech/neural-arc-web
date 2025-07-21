import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CONFIG = {
    PARTICLE: {
        COUNT: 1000000,
        BASE_SIZE: 0.15,
        MAIN_SIZE: 0.3,
        TAIL_SIZE: 0.08,
        TAIL_OPACITY: 0.6
    },
    RINGS: [
        { innerRadius: 20, outerRadius: 25, particles: 8000, density: 0.8 },
        { innerRadius: 28, outerRadius: 35, particles: 12000, density: 1.2 },
        { innerRadius: 38, outerRadius: 42, particles: 10000, density: 0.9 },
        { innerRadius: 45, outerRadius: 52, particles: 8000, density: 0.7 },
        { innerRadius: 55, outerRadius: 65, particles: 12000, density: 1.0 }
    ],
    SHEPHERD_MOONS: [
        { radius: 30, angle: 0.8, particles: 200 },
        { radius: 48, angle: 4.2, particles: 180 }
    ],
    CAMERA: {
        FOV: 75,
        NEAR: 0.1,
        FAR: 1000,
        POSITION: { x: 2, y: 18, z: 25 },
        LOOK_AT: { x: 2000, y: -4000, z: 100 }
    },
    ANIMATION: {
        TIME_STEP: 0.1,
        TAIL_LENGTH_MIN: 8,
        TAIL_LENGTH_MAX: 12,
        SHEPHERD_TAIL_MIN: 10,
        SHEPHERD_TAIL_MAX: 15
    }
};

class ParticleManager {
    constructor() {
        this.particles = [];
        this.particleSystem = null;
        this.tailSystem = null;
        this.texture = null;
    }

    init() {
        this.createTexture();
        this.createMainParticles();
        this.createTailSystem();
    }

    createTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        
        const outerGlow = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        outerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        outerGlow.addColorStop(0.3, 'rgba(255, 255, 255, 0.15)');
        outerGlow.addColorStop(0.6, 'rgba(255, 255, 255, 0.05)');
        outerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = outerGlow;
        ctx.fillRect(0, 0, 128, 128);
        
        const mainGradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 45);
        mainGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        mainGradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)');
        mainGradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.6)');
        mainGradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
        mainGradient.addColorStop(0.9, 'rgba(255, 255, 255, 0.1)');
        mainGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = mainGradient;
        ctx.fillRect(0, 0, 128, 128);
        
        this.texture = new THREE.CanvasTexture(canvas);
    }

    createMainParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(CONFIG.PARTICLE.COUNT * 3);
        const colors = new Float32Array(CONFIG.PARTICLE.COUNT * 3);
        const sizes = new Float32Array(CONFIG.PARTICLE.COUNT);
        
        let particleIndex = 0;
        
        particleIndex = this.createRingParticles(positions, colors, sizes, particleIndex);
        particleIndex = this.createShepherdMoons(positions, colors, sizes, particleIndex);
        
        const actualCount = particleIndex;
        const trimmedPositions = this.trimArray(positions, actualCount * 3);
        const trimmedColors = this.trimArray(colors, actualCount * 3);
        const trimmedSizes = this.trimArray(sizes, actualCount);
        
        this.particles.length = actualCount;
        
        geometry.setAttribute('position', new THREE.BufferAttribute(trimmedPositions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(trimmedColors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(trimmedSizes, 1));
        
        const material = new THREE.PointsMaterial({
            size: CONFIG.PARTICLE.MAIN_SIZE,
            sizeAttenuation: true,
            transparent: true,
            opacity: 1,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            map: this.texture
        });
        
        this.particleSystem = new THREE.Points(geometry, material);
        window.scene.add(this.particleSystem);
    }

    createRingParticles(positions, colors, sizes, startIndex) {
        let particleIndex = startIndex;
        
        CONFIG.RINGS.forEach((ring, ringIndex) => {
            for (let i = 0; i < ring.particles; i++) {
                const angle = Math.random() * Math.PI * 2;
                const ringWidth = ring.outerRadius - ring.innerRadius;
                
                const wavePhase = angle * 3 + ringIndex * 0.5;
                const densityWave = Math.sin(wavePhase) * 0.3 + 0.7;
                const clustering = Math.sin(angle * 8) * 0.2 + 0.8;
                
                if (Math.random() > densityWave * clustering * ring.density) {
                    continue;
                }
                
                const radiusPosition = Math.pow(Math.random(), 1.5);
                const radius = ring.innerRadius + radiusPosition * ringWidth;
                const spiralOffset = Math.sin(angle * 12 + radius * 0.1) * 0.5;
                const filamentNoise = (Math.random() - 0.5) * 2;
                
                const x = Math.cos(angle) * radius + spiralOffset;
                const z = Math.sin(angle) * radius + spiralOffset;
                const y = filamentNoise * 0.3 + Math.sin(angle * 6) * 0.2;
                
                positions[particleIndex * 3] = x;
                positions[particleIndex * 3 + 1] = y;
                positions[particleIndex * 3 + 2] = z;
                
                const colorVariation = Math.random() * 0.4 + 0.6;
                const brightness = densityWave * clustering * colorVariation;
                colors[particleIndex * 3] = brightness;
                colors[particleIndex * 3 + 1] = brightness;
                colors[particleIndex * 3 + 2] = brightness;
                
                const normalizedX = (x + 65) / 130;
                sizes[particleIndex] = CONFIG.PARTICLE.BASE_SIZE * (0.5 + normalizedX * 0.5);
                
                this.particles[particleIndex] = this.createParticleData(
                    radius, angle, x, y, z, ringIndex, false,
                    densityWave, clustering, spiralOffset, filamentNoise
                );
                
                particleIndex++;
            }
        });
        
        return particleIndex;
    }

    createShepherdMoons(positions, colors, sizes, startIndex) {
        let particleIndex = startIndex;
        
        CONFIG.SHEPHERD_MOONS.forEach(moon => {
            for (let i = 0; i < moon.particles; i++) {
                const streakAngle = moon.angle + (Math.random() - 0.5) * 0.3;
                const streakRadius = moon.radius + (Math.random() - 0.5) * 3;
                
                const x = Math.cos(streakAngle) * streakRadius;
                const y = (Math.random() - 0.5) * 0.5;
                const z = Math.sin(streakAngle) * streakRadius;
                
                positions[particleIndex * 3] = x;
                positions[particleIndex * 3 + 1] = y;
                positions[particleIndex * 3 + 2] = z;
                
                const brightness = Math.random() * 0.5 + 0.8;
                colors[particleIndex * 3] = brightness;
                colors[particleIndex * 3 + 1] = brightness;
                colors[particleIndex * 3 + 2] = brightness;
                
                const normalizedX = (x + 65) / 130;
                sizes[particleIndex] = CONFIG.PARTICLE.BASE_SIZE * (0.5 + normalizedX * 0.5);
                
                this.particles[particleIndex] = this.createParticleData(
                    streakRadius, streakAngle, x, y, z, -1, true
                );
                
                particleIndex++;
            }
        });
        
        return particleIndex;
    }

    createParticleData(radius, angle, x, y, z, ringIndex, isShepherd, 
                              densityWave = 1, clustering = 1, spiralOffset = 0, filamentNoise = 0) {
        const baseSpeed = isShepherd ? 0.05 : (0.1 + Math.random() * 0.05) * (1 / Math.sqrt(radius));
        const tailLength = isShepherd ? 
            CONFIG.ANIMATION.SHEPHERD_TAIL_MIN + Math.floor(Math.random() * (CONFIG.ANIMATION.SHEPHERD_TAIL_MAX - CONFIG.ANIMATION.SHEPHERD_TAIL_MIN)) :
            CONFIG.ANIMATION.TAIL_LENGTH_MIN + Math.floor(Math.random() * (CONFIG.ANIMATION.TAIL_LENGTH_MAX - CONFIG.ANIMATION.TAIL_LENGTH_MIN));
        
        return {
            originalRadius: radius,
            originalAngle: angle,
            originalX: x,
            originalY: y,
            originalZ: z,
            ringIndex: ringIndex,
            speed: baseSpeed,
            isShepherd: isShepherd,
            densityWave: densityWave,
            clustering: clustering,
            spiralOffset: spiralOffset,
            filamentNoise: filamentNoise,
            tailHistory: [],
            tailLength: tailLength,
            wrinklePhase: Math.random() * Math.PI * 2,
            wrinkleSpeed: isShepherd ? 0.015 + Math.random() * 0.02 : 0.02 + Math.random() * 0.03,
            wrinkleAmplitude: isShepherd ? 0.15 + Math.random() * 0.2 : 0.1 + Math.random() * 0.15
        };
    }

    createTailSystem() {
        const totalTailParticles = this.particles.reduce((sum, p) => sum + p.tailLength, 0);
        
        const tailGeometry = new THREE.BufferGeometry();
        const tailPositions = new Float32Array(totalTailParticles * 3);
        const tailColors = new Float32Array(totalTailParticles * 3);
        const tailSizes = new Float32Array(totalTailParticles);
        
        tailPositions.fill(0);
        tailColors.fill(0);
        tailSizes.fill(0.05);
        
        tailGeometry.setAttribute('position', new THREE.BufferAttribute(tailPositions, 3));
        tailGeometry.setAttribute('color', new THREE.BufferAttribute(tailColors, 3));
        tailGeometry.setAttribute('size', new THREE.BufferAttribute(tailSizes, 1));
        
        const tailMaterial = new THREE.PointsMaterial({
            size: CONFIG.PARTICLE.TAIL_SIZE,
            sizeAttenuation: true,
            transparent: true,
            opacity: CONFIG.PARTICLE.TAIL_OPACITY,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            map: this.texture
        });
        
        this.tailSystem = new THREE.Points(tailGeometry, tailMaterial);
        window.scene.add(this.tailSystem);
    }

    trimArray(sourceArray, newLength) {
        const trimmed = new Float32Array(newLength);
        for (let i = 0; i < newLength; i++) {
            trimmed[i] = sourceArray[i];
        }
        return trimmed;
    }
}

class AnimationController {
    constructor() {
        this.time = 0;
    }

    update() {
        this.time += CONFIG.ANIMATION.TIME_STEP;
        this.updateParticlePositions();
        this.updateTailSystem();
    }

    updateParticlePositions() {
        if (!window.particleSystem) return;
        
        const positions = window.particleSystem.geometry.attributes.position.array;
        
        window.particles.forEach((particle, index) => {
            let newX, newY, newZ;
            
            if (particle.isShepherd) {
                const currentAngle = particle.originalAngle + this.time * particle.speed;
                const angleChange = currentAngle - particle.originalAngle;
                const cosAngle = Math.cos(angleChange);
                const sinAngle = Math.sin(angleChange);
                
                newX = particle.originalX * cosAngle - particle.originalZ * sinAngle;
                newY = particle.originalY;
                newZ = particle.originalX * sinAngle + particle.originalZ * cosAngle;
            } else {
                const currentAngle = particle.originalAngle + this.time * particle.speed;
                const angleChange = currentAngle - particle.originalAngle;
                const cosAngle = Math.cos(angleChange);
                const sinAngle = Math.sin(angleChange);
                
                newX = particle.originalX * cosAngle - particle.originalZ * sinAngle;
                newY = particle.originalY;
                newZ = particle.originalX * sinAngle + particle.originalZ * cosAngle;
            }
            
            positions[index * 3] = newX;
            positions[index * 3 + 1] = newY;
            positions[index * 3 + 2] = newZ;
            
            particle.tailHistory.unshift({x: newX, y: newY, z: newZ});
            if (particle.tailHistory.length > particle.tailLength) {
                particle.tailHistory.pop();
            }
            
            particle.wrinklePhase += particle.wrinkleSpeed;
        });
        
        window.particleSystem.geometry.attributes.position.needsUpdate = true;
    }

    updateTailSystem() {
        if (!window.tailSystem) return;
        
        const tailPositions = window.tailSystem.geometry.attributes.position.array;
        const tailColors = window.tailSystem.geometry.attributes.color.array;
        const tailSizes = window.tailSystem.geometry.attributes.size.array;
        
        let tailIndex = 0;
        
        window.particles.forEach(particle => {
            for (let j = 0; j < particle.tailLength; j++) {
                if (j < particle.tailHistory.length) {
                    const tailPos = particle.tailHistory[j];
                    
                    const wrinkleOffset = Math.sin(particle.wrinklePhase + j * 0.8) * 
                                        particle.wrinkleAmplitude * (j / particle.tailLength);
                    const wrinkleY = Math.cos(particle.wrinklePhase * 1.3 + j * 0.6) * 
                                   particle.wrinkleAmplitude * 0.5 * (j / particle.tailLength);
                    
                    const movementAngle = Math.atan2(tailPos.z, tailPos.x);
                    const wrinkleX = Math.cos(movementAngle + Math.PI/2) * wrinkleOffset;
                    const wrinkleZ = Math.sin(movementAngle + Math.PI/2) * wrinkleOffset;
                    
                    tailPositions[tailIndex * 3] = tailPos.x + wrinkleX;
                    tailPositions[tailIndex * 3 + 1] = tailPos.y + wrinkleY;
                    tailPositions[tailIndex * 3 + 2] = tailPos.z + wrinkleZ;
                    
                    const fadeAmount = 1 - (j / particle.tailLength);
                    const brightness = fadeAmount * 0.8;
                    tailColors[tailIndex * 3] = brightness;
                    tailColors[tailIndex * 3 + 1] = brightness;
                    tailColors[tailIndex * 3 + 2] = brightness;
                    
                    tailSizes[tailIndex] = 0.05 * fadeAmount;
                } else {
                    tailPositions[tailIndex * 3] = 0;
                    tailPositions[tailIndex * 3 + 1] = 0;
                    tailPositions[tailIndex * 3 + 2] = 0;
                    tailColors[tailIndex * 3] = 0;
                    tailColors[tailIndex * 3 + 1] = 0;
                    tailColors[tailIndex * 3 + 2] = 0;
                    tailSizes[tailIndex] = 0;
                }
                
                tailIndex++;
            }
        });
        
        window.tailSystem.geometry.attributes.position.needsUpdate = true;
        window.tailSystem.geometry.attributes.color.needsUpdate = true;
        window.tailSystem.geometry.attributes.size.needsUpdate = true;
    }
}

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);

    useEffect(() => {
        let scene, camera, renderer;
        let particleManager, animationController;

        const init = () => {
            scene = new THREE.Scene();
            window.scene = scene; // Expose to global for ParticleManager

            camera = new THREE.PerspectiveCamera(
                CONFIG.CAMERA.FOV,
                window.innerWidth / window.innerHeight,
                CONFIG.CAMERA.NEAR,
                CONFIG.CAMERA.FAR
            );
            camera.position.set(
                CONFIG.CAMERA.POSITION.x,
                CONFIG.CAMERA.POSITION.y,
                CONFIG.CAMERA.POSITION.z
            );

            renderer = new THREE.WebGLRenderer({ 
                canvas: canvasRef.current,
                antialias: true 
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 1);

            particleManager = new ParticleManager();
            particleManager.init();
            window.particles = particleManager.particles; // Expose to global for AnimationController
            window.particleSystem = particleManager.particleSystem; // Expose to global
            window.tailSystem = particleManager.tailSystem; // Expose to global

            animationController = new AnimationController();
            animate();
        };

        const animate = () => {
            animationFrameId.current = requestAnimationFrame(animate);
            animationController.update();
            camera.lookAt(
                CONFIG.CAMERA.LOOK_AT.x,
                CONFIG.CAMERA.LOOK_AT.y,
                CONFIG.CAMERA.LOOK_AT.z
            );
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        init();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId.current);
            if (renderer) {
                renderer.dispose();
            }
            if (scene) {
                scene.clear();
            }
            // Clean up global references
            delete window.scene;
            delete window.particles;
            delete window.particleSystem;
            delete window.tailSystem;
        };
    }, []);

    return <canvas id="particle-canvas" ref={canvasRef}></canvas>;
};

export default ParticleCanvas;