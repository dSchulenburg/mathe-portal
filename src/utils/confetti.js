import confetti from 'canvas-confetti';

const BRAND_COLORS = ['#003366', '#00A3E0', '#B5E505', '#FFD700'];

export function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: BRAND_COLORS,
  });
}

export function fireStarConfetti() {
  const duration = 500;
  const end = Date.now() + duration;
  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: BRAND_COLORS,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: BRAND_COLORS,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}
