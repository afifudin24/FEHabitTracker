// components/MotivationText.tsx
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const MotivationText = () => {
    const el = useRef<HTMLSpanElement | null>(null);

    const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: [
          "Small steps every day lead to big changes.",
          "Consistency is what transforms average into excellence.",
          "Don’t break the chain — your future self will thank you.",
          "Habits define your direction, not your intention.",
          "Success is the sum of small efforts, repeated daily.",
          "Discipline is choosing between what you want now and what you want most.",
          "Start where you are. Use what you have. Do what you can.",
          "What you do today creates your tomorrow.",
          "Keep going — you're building something powerful.",
          "A better you begins with a better habit."
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay : 200,
      
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="text-center mt-20 text-base text-text-primary"
    ></span>
  );
};

export default MotivationText;
