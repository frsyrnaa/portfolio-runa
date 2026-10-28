import { STORIES, type FeedStory } from "@/feeds/story";
import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from "lucide-react";

export function FeedStory() {
  const [selectedStory, setSelectedStory] = useState<FeedStory | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const [isSwiping, setIsSwiping] = useState(false);
  const [offset, setOffset] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const dragging = useRef(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const STORY_DURATION = 5000;
  const SWIPE_THRESHOLD = 50;

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const closeStory = useCallback(() => {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
    stopTimer();

    setTimeout(() => {
      setSelectedStory(null);
      setCurrentIndex(0);
      setProgress(0);
      setOffset(0);
    }, 300);
  }, [stopTimer]);

  const next = useCallback(() => {
    if (!selectedStory) return;

    if (currentIndex < selectedStory.images.length - 1) {
      setCurrentIndex((i) => i + 1);
      setProgress(0);
    } else {
      closeStory();
    }
  }, [selectedStory, currentIndex, closeStory]);

  const prev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  const startTimer = useCallback(() => {
    stopTimer();
    const start = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = (elapsed / STORY_DURATION) * 100;

      if (percent >= 100) {
        next();
      } else {
        setProgress(percent);
      }
    }, 50);
  }, [next, stopTimer]);

  const openStory = (story: FeedStory) => {
    setSelectedStory(story);
    setCurrentIndex(0);
    setProgress(0);
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      setIsOpen(true);
      startTimer();
    }, 10);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedStory) return;
      if (e.key === "Escape") closeStory();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedStory, closeStory, next, prev]);

  // Restart timer when slide index changes
  useEffect(() => {
    if (isOpen && selectedStory) {
      startTimer();
    }
    return () => stopTimer();
  }, [currentIndex, isOpen, selectedStory, startTimer, stopTimer]);

  const handleTouchStart = (x: number, y: number) => {
    stopTimer();
    touchStartX.current = x;
    touchStartY.current = y;
    dragging.current = true;
  };

  const handleTouchMove = (x: number, y: number) => {
    if (!dragging.current) return;

    const dx = x - touchStartX.current;
    const dy = Math.abs(y - touchStartY.current);

    if (dy < 30) {
      setIsSwiping(true);
      setOffset(dx);
    }
  };

  const handleTouchEnd = () => {
    if (!dragging.current) return;

    dragging.current = false;
    setIsSwiping(false);

    if (Math.abs(offset) > SWIPE_THRESHOLD) {
      offset < 0 ? next() : prev();
    }

    setOffset(0);
    startTimer();
  };

  return (
    <section id="journal" className="scroll-mt-24 w-full py-8 border-b border-border/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-3 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 font-mono-archival text-xs tracking-widest text-[#B08D57] uppercase mb-1">
              <span>SECTION VII</span>
              <span>·</span>
              <span>VISUAL JOURNAL</span>
            </div>
            <h2 className="font-serif-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Laboratory Field Notes & Dispatches
            </h2>
          </div>
          <p className="font-serif-display italic text-sm text-muted-foreground max-w-md">
            Archival photographic plates from academic practicals, laboratory sessions, and technical mentorship.
          </p>
        </div>

        {/* Vintage Photographic Slide Mount (ASLAB Chronicle) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {STORIES.map((story) => (
            <figure
              key={story.label}
              onClick={() => openStory(story)}
              className="md:col-span-12 group relative cursor-pointer archival-box rounded-xs p-5 sm:p-7 hover:border-[#B08D57] hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
                {/* 3-Photo Overlapping Montage / Preview */}
                <div className="flex items-center gap-2 shrink-0">
                  {story.images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative size-20 sm:size-24 rounded-xs overflow-hidden border-2 border-border/80 bg-background/50 shadow-xs group-hover:border-[#722F37] dark:group-hover:border-[#B08D57] transition-all duration-300 ${
                        i > 0 ? "hidden xs:block" : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Laboratory session plate ${i + 1}`}
                        loading="lazy"
                        className="size-full object-cover grayscale-[10%] group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#722F37]/10 dark:bg-[#B08D57]/10 mix-blend-multiply pointer-events-none" />
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-2xs bg-black/75 backdrop-blur-xs font-mono-archival text-[8px] text-[#F3E8D2]">
                        0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metadata & Description */}
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-archival text-[10px] tracking-widest uppercase text-[#B08D57]">
                      PLATE 01 · ASLAB DOSSIER
                    </span>
                    <span className="text-[#B08D57] text-[10px]">❖</span>
                    <span className="font-mono-archival text-[10px] text-muted-foreground uppercase">
                      3 Archival Dispatches
                    </span>
                  </div>

                  <h3 className="font-serif-headline text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#722F37] dark:group-hover:text-[#C9A86E] transition-colors">
                    ASLAB — Laboratory Practicals & Mentorship
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                    Dokumentasi dan arsip visual kegiatan praktikum pemrograman, bimbingan mahasiswa, dan kolaborasi laboratorium informatika di Universitas Pamulang. Menampilkan dedikasi dalam pendampingan teknis dan atmosfer praktikum.
                  </p>

                  <div className="pt-1 flex items-center gap-2 text-xs font-mono-archival text-[#722F37] dark:text-[#C9A86E] tracking-wider uppercase font-medium">
                    <Camera className="size-3.5" />
                    <span>Open Laboratory Chronicle ({story.images.length} Photographs)</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox / Darkroom Story Viewer Modal */}
      {selectedStory && (
        <div
          onClick={closeStory}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={selectedStory.label}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[92vh] rounded-xs border border-[#B08D57]/40 bg-[#190C10] text-[#F3E8D2] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Filmstrip Header & Progress Bars */}
            <div className="p-4 sm:p-5 pb-3 border-b border-[#B08D57]/20 space-y-3 bg-[#190C10]/90">
              {/* Progress Bars */}
              <div className="flex gap-1.5 w-full">
                {selectedStory.images.map((_, i) => (
                  <div key={i} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#B08D57] transition-all duration-75"
                      style={{
                        width:
                          i < currentIndex
                            ? "100%"
                            : i === currentIndex
                            ? `${progress}%`
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Title & Close Bar */}
              <div className="flex items-center justify-between text-xs font-mono-archival uppercase tracking-wider text-[#B08D57]">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-3 text-[#B08D57]" />
                  <span className="text-[#F3E8D2] font-semibold">{selectedStory.label} PRACTICALS</span>
                  <span>·</span>
                  <span>
                    DISPATCH {currentIndex + 1} / {selectedStory.images.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeStory}
                  className="size-7 rounded-full border border-[#B08D57]/50 hover:bg-[#B08D57]/20 flex items-center justify-center text-[#F3E8D2] hover:text-[#B08D57] transition-colors cursor-pointer"
                  aria-label="Close chronicle"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Main Photograph Display Area */}
            <div className="relative flex-1 min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center bg-black/40 overflow-hidden select-none">
              <img
                src={selectedStory.images[currentIndex]}
                alt={`${selectedStory.label} - slide ${currentIndex + 1}`}
                className="max-h-[65vh] w-auto max-w-full object-contain transition-transform"
                style={{
                  transform: `translateX(${offset}px)`,
                  transition: isSwiping ? "none" : "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onTouchStart={(e) => handleTouchStart(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchMove={(e) => handleTouchMove(e.touches[0].clientX, e.touches[0].clientY)}
                onTouchEnd={handleTouchEnd}
                onMouseDown={(e) => handleTouchStart(e.clientX, e.clientY)}
                onMouseMove={(e) => handleTouchMove(e.clientX, e.clientY)}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
                loading="eager"
              />

              {/* Click navigation overlays */}
              {!isSwiping && (
                <div className="absolute inset-0 flex pointer-events-auto">
                  <div
                    className="w-1/2 h-full cursor-w-resize"
                    onClick={prev}
                    title="Previous dispatch (or press ←)"
                  />
                  <div
                    className="w-1/2 h-full cursor-e-resize"
                    onClick={next}
                    title="Next dispatch (or press →)"
                  />
                </div>
              )}

              {/* Arrows for Desktop */}
              {currentIndex > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/60 hover:bg-[#722F37] text-white border border-[#B08D57]/40 flex items-center justify-center transition-colors shadow-md z-20 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </button>
              )}

              {currentIndex < selectedStory.images.length - 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full bg-black/60 hover:bg-[#722F37] text-white border border-[#B08D57]/40 flex items-center justify-center transition-colors shadow-md z-20 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </button>
              )}
            </div>

            {/* Bottom Archival Plaque */}
            <div className="p-4 border-t border-[#B08D57]/20 bg-[#190C10] text-center font-mono-archival text-[11px] text-muted-foreground flex items-center justify-between">
              <span>UNPAM Informatics Laboratory</span>
              <span className="text-[#B08D57]">Tap edges or swipe to browse</span>
              <span>Plate #{currentIndex + 1}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
