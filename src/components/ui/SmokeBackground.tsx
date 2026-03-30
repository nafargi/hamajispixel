import { useEffect, useRef } from "react";

const SmokeBackground = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      time += 0.005; // Slightly faster for more visible fluidity

      // Clear with dark rich black
      ctx.fillStyle = "#010101";
      ctx.fillRect(0, 0, w, h);

      // We draw bright thick flowing silk shapes
      ctx.globalCompositeOperation = "screen";

      const drawWave = (
        startX: number,
        ctrl1X: number,
        ctrl2X: number,
        endX: number,
        startY: number,
        endY: number,
        phase: number,
        thickness: number,
        colorStops: [number, string][],
        blur: number
      ) => {
        // Multi-frequency sine waves for more 'organic' silk movement
        const offsetY = (Math.sin(time + phase) + Math.sin(time * 1.7 + phase) * 0.6 + Math.sin(time * 0.4 + phase) * 0.3) * (h * 0.15);
        const offsetX = (Math.cos(time * 0.6 + phase) + Math.cos(time * 2.2 + phase) * 0.5 + Math.cos(time * 0.3 + phase) * 0.2) * (w * 0.1);

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(
          ctrl1X + offsetX,
          h * 0.25 + offsetY,
          ctrl2X - offsetX,
          h * 0.75 - offsetY,
          endX,
          endY
        );

        // Create gradient along the curve
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        colorStops.forEach(stop => gradient.addColorStop(stop[0], stop[1]));

        ctx.strokeStyle = gradient;
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";
        ctx.filter = `blur(${blur}px)`;
        ctx.stroke();
      };

      // Define ultra-bright silver/white gradient
      const silkGradient: [number, string][] = [
        [0, "rgba(255, 255, 255, 0)"],
        [0.15, "rgba(255, 255, 255, 0.4)"],
        [0.5, "rgba(255, 255, 255, 1.0)"],
        [0.85, "rgba(255, 255, 255, 0.4)"],
        [1, "rgba(255, 255, 255, 0)"]
      ];

      // Left flowing silk/smoke - multiple layers for 3D depth
      drawWave(-w * 0.05, w * 0.2, w * 0.4, -w * 0.1, -h * 0.2, h * 1.2, 0, w * 0.25, silkGradient, 40);
      drawWave(-w * 0.1, w * 0.3, w * 0.1, w * 0.1, h * -0.1, h * 1.1, 2, w * 0.15, silkGradient, 30);
      drawWave(0, w * 0.15, w * 0.35, -w * 0.05, -h * 0.1, h * 1.1, 0.2, w * 0.08, silkGradient, 10);
      drawWave(-w * 0.02, w * 0.2, w * 0.15, w * 0.05, 0, h, 2.3, w * 0.04, silkGradient, 8);

      // Right flowing silk/smoke
      drawWave(w * 1.05, w * 0.8, w * 0.6, w * 1.1, -h * 0.2, h * 1.2, 1, w * 0.25, silkGradient, 40);
      drawWave(w * 1.1, w * 0.7, w * 0.9, w * 0.9, h * -0.1, h * 1.1, 3, w * 0.15, silkGradient, 30);
      drawWave(w, w * 0.85, w * 0.65, w * 1.05, -h * 0.1, h * 1.1, 1.2, w * 0.08, silkGradient, 10);
      drawWave(w * 1.02, w * 0.8, w * 0.85, w * 0.95, 0, h, 3.3, w * 0.04, silkGradient, 8);

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full z-0 pointer-events-none opacity-100 mix-blend-screen ${className}`}
    />
  );
};

export default SmokeBackground;
