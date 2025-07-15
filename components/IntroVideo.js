import { useState, useEffect } from 'react';

export default function IntroVideo() {
  const STORAGE_KEY = 'siteSettings';

  const [slogan, setSlogan] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const json = JSON.parse(stored);
      setSlogan(json.mainSlogan || '');
    } else {
      setSlogan('');
    }
  }, []);

  // 기본값이 필요하다면
  const mainSlogan = slogan || 'Welcome to Happy Motors';
  const subSlogan = 'Experience the future of mobility, simplified.';

  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/HappyMotors/857263-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-white text-center bg-black/40">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4">{mainSlogan}</h1>
          <p className="text-xl">Experience the future of mobility, simplified.</p>
        </div>
      </div>

      {/* Video Attribution (fixed at bottom-right) */}
      <div className="absolute bottom-2 right-2 z-20 text-xs text-white bg-black/60 px-2 py-1 rounded">
        Video by <a href="https://www.pexels.com/video/footage-of-white-car-857263/" target="_blank" rel="noopener noreferrer" className="underline">Kelly Lacy from Pexels</a>
      </div>
    </section>
  )
}
