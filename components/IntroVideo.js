import { useState, useEffect } from 'react';

import { getAdminSettings } from './Admin/AdminStorage';

export default function IntroVideo() {
  const STORAGE_KEY = 'siteSettings';

  const [mainSlogan, setMainSlogan] = useState('');
  const [subSlogan, setSubSlogan] = useState('');

  const [videoReferenceText, setVideoReferenceText] = useState('');
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    const stored = getAdminSettings();
    if (stored) {
      setMainSlogan(stored.mainSlogan || '');
      setSubSlogan(stored.subSlogan || '');
      setVideoReferenceText(stored.videoReferenceText || '');
      setVideoLink(stored.videoLink || '');
    } else {
      setMainSlogan('');
      setSubSlogan('');
      setVideoReferenceText('');
      setVideoLink('');
    }
  }, []);


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
          <p className="text-xl">{subSlogan}</p>
        </div>
      </div>

      {/* Video Attribution (fixed at bottom-right) */}
      <div className="absolute bottom-2 right-2 z-20 text-xs text-white bg-black/60 px-2 py-1 rounded">
        Video by <a href={videoLink} target="_blank" rel="noopener noreferrer" className="underline">{videoReferenceText}</a>
      </div>
    </section>
  )
}
