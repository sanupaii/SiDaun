import React, { useMemo } from 'react';

/**
 * Pure CSS Falling Leaves Component
 * Menampilkan efek daun berguguran di latar belakang tanpa memberatkan thread JavaScript.
 * Menggunakan kombinasi animasi CSS untuk pergerakan ke bawah (fall) dan rotasi (sway).
 */
export default function FallingLeaves() {
  // Generate random properties once
  const leaves = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const leftPos = Math.random() * 100; // 0% - 100% viewport width
      const animDuration = 12 + Math.random() * 20; // 12s - 32s fall duration
      const animDelay = Math.random() * 20; // Start at different times
      const swayDuration = 3 + Math.random() * 5; // 3s - 8s sway duration
      const LeafId = (i % 3) + 1; // 1, 2, or 3
      const scale = 0.8 + Math.random() * 1.0; // Sangat Besar: Scale 0.8 to 1.8
      const opacity = 0.15 + Math.random() * 0.35; // Opacity 0.15 to 0.5
      
      // Randomize sway direction by using alternate-reverse or just alternate
      const swayDirection = Math.random() > 0.5 ? 'alternate' : 'alternate-reverse';

      return {
        id: i,
        LeafId,
        leftPos,
        animDuration,
        animDelay,
        swayDuration,
        scale,
        opacity,
        swayDirection,
      };
    });
  }, []);

  return (
    <div className="falling-leaves-container">
      {leaves.map((l) => (
        <div
          key={l.id}
          className="falling-leaf-wrapper"
          style={{
            left: `${l.leftPos}%`,
            animationDuration: `${l.animDuration}s`,
            animationDelay: `-${l.animDelay}s`, // allow it to start midway
          }}
        >
          {/* Wrapper for scale and opacity */}
          <div style={{ transform: `scale(${l.scale})`, opacity: l.opacity }}>
            {/* The actual leaf with sway animation */}
            <div
              className={`leaf-img leaf-type-${l.LeafId}`}
              style={{
                animationDuration: `${l.swayDuration}s`,
                animationDelay: `-${l.animDelay}s`,
                animationDirection: l.swayDirection,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
