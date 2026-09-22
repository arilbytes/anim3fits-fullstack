// components/AnimatedBackground.js
'use client';

import { useEffect, useRef } from 'react';
import { FluidShader } from 'fluid-shader';

// 🎨 Your custom dark palette library
const CUSTOM_PRESETS = {
  midnightStudio: ['#0b0c10', '#1f2833', '#2a333d', '#45a29e', '#ffa552'],
  darkBotanical: ['#0f0d12', '#1a1f1a', '#2d1f2d', '#6b6b5a', '#e8d5c4'],
  rainNeon: ['#05040a', '#0a0f14', '#0b7285', '#ff6b6b', '#ffd43b'],
  zimaBlue: ['#000000', '#050a12', '#0f1a2a', '#2a3a4a', '#5bc2e7'],
  sciFiDusk: ['#0f0a12', '#251b28', '#34394e', '#6b747b', '#8b90b5'],
  forgeDark: ['#0d1117', '#161b22', '#30363d', '#e6edf3', '#f78166'],
  // hard
  moonMars: ['#000000', '#0a0a12', '#1a1a2e', '#8b3a1a', '#c9c9d4'],
  // hard
  canyonDusk: ['#000000', '#0a0503', '#1f0f08', '#4a2a1a', '#3a4a6b'],
  abyssalGlow: ['#000000', '#02060a', '#0a1a2a', '#1a4a5a', '#33ccff'],
  velvetEmber: ['#0a0806', '#1a1410', '#2d1a12', '#8b3a1a', '#d4a574'],
  mossOnyx: ['#000000', '#0a0f0a', '#1a2a1a', '#4a5a4a', '#c5c6c7'],
  plumEclipse: ['#000000', '#0f0812', '#1f0a2a', '#4a2a6b', '#d4a574'],
  mechaVoid: ['#0a0a0f', '#12081a', '#1f0a2a', '#2a4a2a', '#39ff14'],
  // hard
  shonenNoir: ['#000000', '#0a0a0a', '#1a1a1a', '#2a2a2a', '#ff2a2a'],
  ghibliDusk: ['#0f1410', '#1a221a', '#2d3a2d', '#6b7a6b', '#d4c9b3'],
  samuraiInk: ['#08080a', '#0f1423', '#1a1a2e', '#8b3a1a', '#d4af37'],
  vaporwaveAnime: ['#0b001a', '#1a0a2a', '#2d0a4a', '#ff007f', '#00e5ff'],
  darkFantasy: ['#000000', '#0a0505', '#1a0a0a', '#4a0a0a', '#c9c9d4'],
  gojoInfinity: ['#000000', '#050508', '#0a0e14', '#e6f0f5', '#00d4ff'],
  gojoSixEyes: ['#000000', '#0a0e14', '#1a2a3a', '#ffffff', '#00e5ff'],
  // hard
  gojoClouds: ['#ffffff', '#f8fcff', '#e6f4ff', '#cceeff', '#55ccff']
};

// List of the built-in presets the library ships with
const BUILT_IN_PRESETS = [
  'aurora', 'sunset', 'cotton', 'matrix', 'fire', 'ocean',
  'forest', 'dusk', 'cyber', 'desert', 'nebula', 'peach',
];

export default function AnimatedBackground({
  preset = 'aurora',   // Built-in preset name
  colors = null,        // Custom color array (overrides preset if provided)
  speed = 0.12,
  grain = 0.02,
  warp = 0.25,
  backgroundColor = '#000000',
}) {
  const canvasRef = useRef(null);
  const shaderRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Decide which config to pass to FluidShader:
    // 1. If a custom color array is explicitly passed → use `colors`
    // 2. If the preset name matches a custom palette → use `colors`
    // 3. Otherwise → use the built-in `preset` name
    let shaderConfig;

    if (colors && Array.isArray(colors) && colors.length >= 2) {
      // Explicit custom color array
      shaderConfig = { colors, speed, grain, warp };
    } else if (CUSTOM_PRESETS[preset]) {
      // Custom palette matched by name
      shaderConfig = { colors: CUSTOM_PRESETS[preset], speed, grain, warp };
    } else if (BUILT_IN_PRESETS.includes(preset)) {
      // Fall back to the library's built-in preset
      shaderConfig = { preset, speed, grain, warp };
    } else {
      // Safe default
      shaderConfig = { preset: 'aurora', speed, grain, warp };
    }

    shaderRef.current = new FluidShader(canvasRef.current, shaderConfig);

    return () => {
      if (shaderRef.current && typeof shaderRef.current.destroy === 'function') {
        shaderRef.current.destroy();
      }
      shaderRef.current = null;
    };
  }, [preset, colors, speed, grain, warp]);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor, // Matches the dominant tone of your palette to mask flicker
      }}
    />
  );
}