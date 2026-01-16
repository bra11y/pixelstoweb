import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'team' | 'office' | 'client' | 'project' | 'lifestyle';
  photographer?: string;
  location?: string;
}

// Curated lifestyle images for Nigerian web development agency
const lifestyleImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/person-computer.jpg',
    alt: 'Professional developer working on laptop',
    title: 'Modern Development Workspace',
    description: 'Our team creates innovative solutions in a collaborative environment',
    category: 'team',
    location: 'Lagos Office'
  },
  {
    id: '2',
    src: '/images/operating-computer-anime.jpg',
    alt: 'Designer working on creative projects',
    title: 'Creative Design Process',
    description: 'Bringing brands to life through thoughtful design and user experience',
    category: 'project',
    location: 'Design Studio'
  },
  {
    id: '3',
    src: '/images/dark-shades-using-computer.jpg',
    alt: 'Professional in modern office setting',
    title: 'Professional Excellence',
    description: 'Dedicated professionals delivering world-class digital solutions',
    category: 'office',
    location: 'FCT Headquarters'
  },
  {
    id: '4',
    src: '/images/anime-hearing.jpg',
    alt: 'Team collaboration and communication',
    title: 'Client Consultation',
    description: 'Understanding client needs through effective communication',
    category: 'client',
    location: 'Meeting Room'
  },
  {
    id: '5',
    src: '/images/speaking-over-the-phone.jpg',
    alt: 'Professional phone consultation',
    title: 'Client Support Excellence',
    description: 'Providing exceptional support and guidance to our clients',
    category: 'client',
    location: 'Support Center'
  },
  {
    id: '6',
    src: '/images/support-arm.jpg',
    alt: 'Supportive team environment',
    title: 'Collaborative Culture',
    description: 'Building strong partnerships and supporting each other\'s growth',
    category: 'team',
    location: 'Team Building'
  }
];

interface LifestyleGalleryProps {
  category?: 'team' | 'office' | 'client' | 'project' | 'lifestyle' | 'all';
  showTitle?: boolean;
  maxImages?: number;
  layout?: 'grid' | 'carousel' | 'masonry';
}

const LifestyleGallery: React.FC<LifestyleGalleryProps> = ({
  category = 'all',
  showTitle = true,
  maxImages,
  layout = 'grid'
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter images by category
  let filteredImages = category === 'all'
    ? lifestyleImages
    : lifestyleImages.filter(img => img.category === category);

  // Limit number of images if specified
  if (maxImages) {
    filteredImages = filteredImages.slice(0, maxImages);
  }

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const previousImage = () => {
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const GridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredImages.map((image, index) => (
        <Card
          key={image.id}
          className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => openLightbox(image, index)}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
                {image.location && (
                  <p className="text-xs text-white/70 mt-1">📍 {image.location}</p>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const CarouselLayout = () => (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {filteredImages.map((image, index) => (
            <div key={image.id} className="min-w-full relative">
              <div className="aspect-[16/9] relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-lg text-white/90">{image.description}</p>
                    {image.location && (
                      <p className="text-sm text-white/70 mt-2">📍 {image.location}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
        onClick={previousImage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
        onClick={nextImage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {filteredImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );

  const MasonryLayout = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {filteredImages.map((image, index) => (
        <Card
          key={image.id}
          className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6"
          onClick={() => openLightbox(image, index)}
        >
          <div className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="py-16">
      {showTitle && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Life at PixelsToWeb
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get a glimpse into our creative workspace and the passionate team behind Nigeria's leading web development agency
          </p>
        </div>
      )}

      {layout === 'grid' && <GridLayout />}
      {layout === 'carousel' && <CarouselLayout />}
      {layout === 'masonry' && <MasonryLayout />}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/90 mb-2">{selectedImage.description}</p>
              {selectedImage.location && (
                <p className="text-white/70">📍 {selectedImage.location}</p>
              )}
            </div>

            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifestyleGallery;