import React from 'react';
import { SONGS } from '../constants';
import { Play } from 'lucide-react';

const Songs: React.FC = () => {
  return (
    <section id="songs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest uppercase inline-block pb-4 border-b-2 border-black">
            Our Songs
          </h2>
        </div>

        <div className="space-y-32">
          {SONGS.map((song) => {
            // Layout Logic:
            // 'left'  => Text Left, Image Right
            // 'right' => Text Right, Image Left (Row Reverse)
            const isTextLeft = song.layout === 'left';

            return (
              <div 
                  key={song.id} 
                  className={`flex flex-col-reverse items-center gap-12 lg:gap-24 ${
                    isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Text Info */}
                <div className={`w-full lg:w-1/2 space-y-6 text-center ${
                    isTextLeft ? 'lg:text-left' : 'lg:text-right'
                }`}>
                  <div>
                      <h3 className="text-4xl md:text-5xl font-sc font-bold text-gray-900 mb-2">
                      {song.titleZh}
                      </h3>
                      <h4 className="text-2xl md:text-3xl font-serif text-gray-500 font-light">
                      {song.title}
                      </h4>
                  </div>

                  <p className={`text-gray-600 leading-relaxed max-w-md mx-auto font-sc ${
                      isTextLeft ? 'lg:mx-0' : 'lg:ml-auto lg:mr-0'
                  }`}>
                      {song.descriptionZh}
                  </p>

                  <div className={`pt-4 flex flex-col items-center ${
                      isTextLeft ? 'lg:items-start' : 'lg:items-end'
                  }`}>
                      <p className="text-lg font-medium mb-4">Play On</p>
                      <a 
                          href={song.youtubeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-16 h-10 bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-lg group"
                      >
                          <Play className="w-5 h-5 text-white fill-white" />
                      </a>
                  </div>
                </div>

                {/* Album Art */}
                <div className="w-full lg:w-1/2 relative group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden shadow-2xl">
                      <img 
                          src={song.albumArt} 
                          alt={song.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay play button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1">
                              <Play className="w-8 h-8 text-black fill-current" />
                          </div>
                      </div>
                  </div>
                  {/* Decorative number behind - Position flips based on layout */}
                  <span className={`absolute -top-12 text-9xl font-black text-gray-200 -z-10 select-none opacity-50 hidden lg:block ${
                      isTextLeft ? '-right-12' : '-left-12'
                  }`}>
                      0{song.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Songs;