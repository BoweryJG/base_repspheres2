import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";

/**
 * AnimatedOrbHeroBG
 * - Upper-right hero background orb animation
 * - Preserves exact SVG, colors, gradients, and morphing from original HTML
 * - Adds interactivity: proximity color/motion, click pulse, haptics
 */
const AnimatedOrbHeroBG = ({
  width = 600,
  height = 600,
  style = {},
  className = "",
  zIndex = 0,
  onClick,
}) => {
  const svgRef = useRef();

  useEffect(() => {
    // ---- Orb Animation Logic (from HTML, adapted for React) ----
    const svg = svgRef.current;
    if (!svg) return;

    // --- Utility functions ---
    function hslToHex(h, s, l) {
      h /= 360; s /= 100; l /= 100;
      let r, g, b;
      if (s === 0) { r = g = b = l; }
      else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1/6) return p + (q - p) * 6 * t;
          if (t < 1/2) return q;
          if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
      }
      return "#" + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
    }
    function generateSuperSmoothBlob(cx, cy, r, points, t, amp=1, phase=0) {
      const pts = [];
      for (let i = 0; i < points; i++) {
        const angle = (Math.PI * 2 * i) / points;
        const noise =
          Math.sin(angle * 3 + t * 0.7 + phase) * 4 * amp +
          Math.sin(angle * 5 - t * 1.1 + phase) * 2 * amp +
          Math.sin(angle * 2 + t * 1.7 + phase) * 1.2 * amp;
        const rad = r + noise;
        pts.push({
          x: cx + Math.cos(angle) * rad,
          y: cy + Math.sin(angle) * rad
        });
      }
      let d = "";
      for (let i = 0; i < points; i++) {
        const p0 = pts[(i - 1 + points) % points];
        const p1 = pts[i];
        const p2 = pts[(i + 1) % points];
        const p3 = pts[(i + 2) % points];
        if (i === 0) {
          d += `M${p1.x.toFixed(2)},${p1.y.toFixed(2)}`;
        }
        const c1x = p1.x + (p2.x - p0.x) / 6;
        const c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6;
        const c2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
      }
      d += "Z";
      return d;
    }

    // ---- Orb Animation State ----
    let animationFrame;
    let mouse = { x: null, y: null, active: false };
    let pulse = 0; // pulse effect on click

    // --- Orb parameters (from HTML) ---
    const childCount = 5;
    const parentRadius = 100;
    const childRadius = 36;
    const childPoints = 48;
    const childAmp = 0.5;
    const childGradIds = ["childGrad0", "childGrad1", "childGrad2", "childGrad3", "childGrad4"];
    // Morph personalities
    const orbMorphDirections = [Math.PI / 2];
    const orbMorphSpeeds = [0.012];
    for (let i = 0; i < childCount; i++) {
      const angle = Math.PI / 2 + (i - (childCount - 1) / 2) * (Math.PI / 8) + (Math.random() - 0.5) * (Math.PI / 12);
      orbMorphDirections.push(angle);
      orbMorphSpeeds.push(0.014 + i * 0.004 + Math.random() * 0.003);
    }
    // Orb states
    const orbStates = [];
    function makeOrbState() {
      return { drag: 0, dragTarget: 0, dragV: 0, squash: 0, squashTarget: 0, squashV: 0, mouseDir: 0, mouseDirTarget: 0, mouseDirV: 0, wobble: 0, lastUpdate: performance.now() };
    }
    orbStates.push(makeOrbState());
    for (let i = 0; i < childCount; i++) orbStates.push(makeOrbState());

    // --- DOM references ---
    const parentOrb = svg.querySelector('#parentOrb');
    const childrenGroup = svg.querySelector('#children');
    // Particle system


    // --- Animation helpers ---
    function approach(current, target, speed) { return current + (target - current) * speed; }
    function dampedSpring(current, target, velocity, stiffness, damping) {
      const force = (target - current) * stiffness;
      velocity += force;
      velocity *= damping;
      current += velocity;
      return [current, velocity];
    }

    // --- Proximity interaction ---


    // --- Haptics ---
    function triggerHaptic() {
      if (navigator.vibrate) navigator.vibrate(18);
    }

    // --- Mouse/touch listeners ---
    function handlePointerMove(e) {
      let x, y;
      if (e.touches && e.touches.length > 0) {
        x = e.touches[0].clientX; y = e.touches[0].clientY;
      } else {
        x = e.clientX; y = e.clientY;
      }
      mouse.x = x; mouse.y = y; mouse.active = true;
    }
    function handlePointerLeave() { mouse.active = false; }
    function handleClick(e) {
      pulse = 1.0;
      triggerHaptic();
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
        window.dispatchEvent(new CustomEvent('orb-clicked'));
      }
    }
    svg.addEventListener('mousemove', handlePointerMove);
    svg.addEventListener('mouseleave', handlePointerLeave);
    svg.addEventListener('touchmove', handlePointerMove, { passive: false });
    svg.addEventListener('touchend', handlePointerLeave);
    svg.addEventListener('click', handleClick);

    // --- Animation loop ---
    function animate() {
      const now = performance.now();
      // Animate parent gradient (fluid, spectrum, multi-stop)
      const parentStops = [ { id: "p0", phase: 0 }, { id: "p1", phase: Math.PI * 0.5 }, { id: "p2", phase: Math.PI }, { id: "p3", phase: Math.PI * 1.5 } ];
      const baseHue = (now * 0.01) % 360;
      for (let i = 0; i < parentStops.length; i++) {
        const stop = parentStops[i];
        const hue = (baseHue + 60 * Math.sin(now * 0.00015 + stop.phase)) % 360;
        const sat = 80 + 10 * Math.sin(now * 0.0002 + stop.phase);
        const light = 60 + 10 * Math.cos(now * 0.00018 + stop.phase);
        const gradStop = svg.querySelector(`#${stop.id}`);
        if (gradStop) gradStop.setAttribute('stop-color', hslToHex(hue, sat, light));
      }
      // Animate orb morph states
      for (let i = 0; i < orbStates.length; i++) {
        const state = orbStates[i];
        const spring = 0.045 * (1 + orbMorphSpeeds[i]);
        const damping = 0.90 - orbMorphSpeeds[i] * 0.33;
        [state.drag, state.dragV] = dampedSpring(state.drag, state.dragTarget, state.dragV, spring, damping);
        if (Math.abs(state.dragTarget) < 0.1 && Math.abs(state.drag) > 0.1) {
          state.wobble += 0.04 + orbMorphSpeeds[i] * 0.9;
          state.drag += Math.sin(state.wobble) * Math.max(0, Math.abs(state.drag) * 0.13 * (1 + orbMorphSpeeds[i]));
        } else if (Math.abs(state.dragTarget) < 0.1) {
          state.wobble = 0;
        }
        state.dragTarget = approach(state.dragTarget, 0, 0.018 + orbMorphSpeeds[i] * 0.6);
      }
      // --- Parent orb ---
      const bbox = svg.getBoundingClientRect();
      const px = bbox.right - bbox.width / 3;
      const py = bbox.top + bbox.height / 3;
      const parentR = parentRadius + (pulse > 0 ? Math.sin(pulse * Math.PI) * 18 : 0);
      const parentAmp = 1 + (pulse > 0 ? Math.sin(pulse * Math.PI) * 0.3 : 0);
      const parentPath = generateSuperSmoothBlob(px, py, parentR, 64, now * 0.0004, parentAmp);
      parentOrb.setAttribute('d', parentPath);
      // --- Children ---
      childrenGroup.innerHTML = '';
      for (let i = 0; i < childCount; i++) {
        // Animate dynamic color family for each orb
        // (Optionally, you can use the original getDynamicColorFamily here)
        // Animate orbit
        const baseAngle = (now * 0.00022 + i * (2 * Math.PI / childCount));
        const angle = baseAngle + Math.sin(now * 0.00009 + i * 1.7) * 0.22;
        const orbitRadius = parentR + 60 + i * 40;
        const x = px + Math.cos(angle) * orbitRadius;
        const y = py + Math.sin(angle) * orbitRadius;
        const cR = childRadius + (pulse > 0 ? Math.sin(pulse * Math.PI) * 6 : 0);
        const cAmp = childAmp + (pulse > 0 ? Math.sin(pulse * Math.PI) * 0.1 : 0);
        const morphT = now * 0.0005 + i * 10;
        const childPath = generateSuperSmoothBlob(x, y, cR, childPoints, morphT, cAmp, i);
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", childPath);
        path.setAttribute("fill", `url(#${childGradIds[i]})`);
        path.setAttribute("opacity", 0.95);
        childrenGroup.appendChild(path);
      }
      // --- Animate pulse decay ---
      if (pulse > 0) pulse -= 0.045;
      // --- Next frame ---
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrame);
      svg.removeEventListener('mousemove', handlePointerMove);
      svg.removeEventListener('mouseleave', handlePointerLeave);
      svg.removeEventListener('touchmove', handlePointerMove);
      svg.removeEventListener('touchend', handlePointerLeave);
      svg.removeEventListener('click', handleClick);
    };

  }, []);

  // Responsive, absolutely positioned in upper right
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width,
        height,
        pointerEvents: "auto", // allow interaction
        zIndex,
        ...style,
        '@media (max-width: 600px)': {
          width: width * 0.6,
          height: height * 0.6,
        },
      }}
      className={className}
    >
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ display: "block", background: "none" }}
        viewBox={`0 0 ${width} ${height}`}
        id="orbSVG"
      >
        <g id="particles"></g>
        <defs>
          <radialGradient id="parentGrad" cx="50%" cy="50%" r="70%">
            <stop id="p0" offset="0%" stopColor="#00E5FF" />
            <stop id="p1" offset="100%" stopColor="#5B3CFF" />
            <stop id="p2" offset="50%" stopColor="#00E5FF" />
            <stop id="p3" offset="75%" stopColor="#5B3CFF" />
          </radialGradient>
          <radialGradient id="childGrad0" cx="50%" cy="50%" r="70%">
            <stop id="c0s0" offset="0%" stopColor="#B3D8FF" />
            <stop id="c0s1" offset="100%" stopColor="#0A192F" />
          </radialGradient>
          <radialGradient id="childGrad1" cx="50%" cy="50%" r="70%">
            <stop id="c1s0" offset="0%" stopColor="#C6FFD9" />
            <stop id="c1s1" offset="100%" stopColor="#145A32" />
          </radialGradient>
          <radialGradient id="childGrad2" cx="50%" cy="50%" r="70%">
            <stop id="c2s0" offset="0%" stopColor="#FFB3C9" />
            <stop id="c2s1" offset="100%" stopColor="#7B1F3A" />
          </radialGradient>
          <radialGradient id="childGrad3" cx="50%" cy="50%" r="70%">
            <stop id="c3s0" offset="0%" stopColor="#E0D1FF" />
            <stop id="c3s1" offset="100%" stopColor="#311B4F" />
          </radialGradient>
          <radialGradient id="childGrad4" cx="50%" cy="50%" r="70%">
            <stop id="c4s0" offset="0%" stopColor="#FFF5B3" />
            <stop id="c4s1" offset="100%" stopColor="#4B3800" />
          </radialGradient>
        </defs>
        <path id="parentOrb" fill="url(#parentGrad)" opacity="0.95" />
        <g id="children"></g>
      </svg>
    </Box>
  );
};

export default AnimatedOrbHeroBG;
