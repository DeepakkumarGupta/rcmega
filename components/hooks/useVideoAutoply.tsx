import { useEffect, useRef } from "react";

export const useVideoAutoplay = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !videoRef.current) return;

    const videoElement = videoRef.current; // Store current videoRef value

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!videoElement || userInteracted.current) return;

        if (entry.isIntersecting) {
          videoElement.play().catch(() => {
            /* Handle autoplay block */
          });
        } else {
          videoElement.pause();
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleVisibility, {
      threshold: 0.5, // Play when 50% visible
    });

    observerRef.current.observe(videoElement);

    // Handle user interactions
    const handlePlay = () => (userInteracted.current = true);
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePlay);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePlay);
    };
  }, []);

  return videoRef;
};
