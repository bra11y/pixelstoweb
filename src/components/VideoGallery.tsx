import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import bryanProfile from '@/assets/bryan-profile.png';

interface VideoItem {
  id: string;
  videoUrl: string;
  username: string;
  caption?: string;
  date?: string;
  profileImage?: string;
}

interface VideoGalleryProps {
  videos: VideoItem[];
  autoplay?: boolean;
  showControls?: boolean;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  autoplay = true,
  showControls = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set(videos.map(v => v.id)));
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleAudio = (videoId: string, event: React.MouseEvent) => {
    event.stopPropagation();

    const video = videoRefs.current.get(videoId);
    if (!video) return;

    const newMutedVideos = new Set(mutedVideos);

    if (mutedVideos.has(videoId)) {
      // Unmute this video, mute all others
      videos.forEach(v => {
        const vid = videoRefs.current.get(v.id);
        if (vid && v.id !== videoId) {
          vid.muted = true;
          newMutedVideos.add(v.id);
        }
      });
      video.muted = false;
      newMutedVideos.delete(videoId);
    } else {
      // Mute this video
      video.muted = true;
      newMutedVideos.add(videoId);
    }

    setMutedVideos(newMutedVideos);
  };

  const navigateToNext = () => {
    if (currentIndex < videos.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const navigateToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleVideoRef = (videoId: string, element: HTMLVideoElement | null) => {
    if (element) {
      videoRefs.current.set(videoId, element);
    }
  };

  return (
    <section
      className="relative py-12 md:py-20 bg-neutral-50"
      aria-label="Video Gallery"
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Desktop Navigation */}
        {isDesktop && videos.length > 3 && (
          <>
            <button
              onClick={navigateToPrev}
              disabled={currentIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 hover:bg-neutral-100 transition-all"
              aria-label="Previous videos"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={navigateToNext}
              disabled={currentIndex >= videos.length - 3}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 hover:bg-neutral-100 transition-all"
              aria-label="Next videos"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Video Track */}
        <div
          ref={trackRef}
          className="overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide"
        >
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{
              transform: isDesktop ? `translateX(-${currentIndex * 33.33}%)` : 'none'
            }}
          >
            {videos.map((video) => (
              <article
                key={video.id}
                className="flex-shrink-0 w-[85vw] md:w-[calc(33.33%-16px)] max-w-[304px]"
              >
                {/* Video Container */}
                <div className="relative rounded-3xl overflow-hidden bg-black aspect-[9/16] shadow-xl group">
                  <video
                    ref={(el) => handleVideoRef(video.id, el)}
                    className="w-full h-full object-cover"
                    src={video.videoUrl}
                    loop
                    playsInline
                    autoPlay={autoplay}
                    muted
                    preload="metadata"
                  />

                  {/* Play/Pause Area */}
                  <div
                    className="absolute inset-0 cursor-pointer z-10"
                    onClick={(e) => toggleAudio(video.id, e)}
                    aria-label="Toggle audio"
                  />

                  {/* Profile Badge */}
                  {showControls && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 z-20">
                      <img
                        src={video.profileImage || bryanProfile}
                        alt={`${video.username} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Audio Toggle Button */}
                  {showControls && (
                    <button
                      onClick={(e) => toggleAudio(video.id, e)}
                      className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-all z-20"
                      aria-label={mutedVideos.has(video.id) ? 'Unmute video' : 'Mute video'}
                    >
                      {mutedVideos.has(video.id) ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  )}
                </div>

                {/* Video Info */}
                <div className="mt-4">
                  <h3 className="font-bold text-black text-sm mb-1">
                    {video.username}
                  </h3>
                  {video.caption && (
                    <p className="text-neutral-600 text-sm line-clamp-2">
                      {video.caption}
                    </p>
                  )}
                  {video.date && (
                    <time className="text-xs text-neutral-500 mt-1 block">
                      {video.date}
                    </time>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Status for screen readers */}
        <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          Showing videos {currentIndex + 1} to {Math.min(currentIndex + 3, videos.length)} of {videos.length}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  );
};

export default VideoGallery;
