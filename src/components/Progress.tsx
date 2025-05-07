import { useEffect, useRef, useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setProgress(60); // Ubah sesuai persen yang diinginkan
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -10px 0px', // offset dari bawah
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) observer.unobserve(progressRef.current);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className={`w-full my-5 bg-gray-200 rounded-full  overflow-hidden transition-all duration-700 ease-in-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div
        className="bg-primary text-text-primary text-center  rounded-full transition-all duration-700 ease-in-out"
        style={{ width: `${progress}%` }}
      >
        {progress}%

      </div>
    </div>
  );
};

export default Progress;
