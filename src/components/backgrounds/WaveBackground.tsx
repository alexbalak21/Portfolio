type WaveVariant = "hero" | "section";

type WaveBackgroundProps = {
  variant?: WaveVariant;
};

const wavePresets: Record<WaveVariant, { height: string; topOpacity: string }> = {
  hero: {
    height: "h-56 md:h-72",
    topOpacity: "opacity-30"
  },
  section: {
    height: "h-40 md:h-52",
    topOpacity: "opacity-20"
  }
};

const WaveBackground = ({ variant = "hero" }: WaveBackgroundProps) => {
  const preset = wavePresets[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-x-0 bottom-0 ${preset.height} opacity-60`}>
        <div className="flex h-full w-[200%] animate-wave-drift-slow">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-1/2">
            <path
              fill="rgba(141, 255, 105, 0.15)"
              d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,165.3C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-1/2">
            <path
              fill="rgba(141, 255, 105, 0.15)"
              d="M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,165.3C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className={`absolute inset-x-0 top-0 ${preset.height} rotate-180 ${preset.topOpacity}`}>
        <div className="flex h-full w-[200%] animate-wave-drift-medium">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-1/2">
            <path
              fill="rgba(141, 255, 105, 0.12)"
              d="M0,64L60,96C120,128,240,192,360,213.3C480,235,600,213,720,176C840,139,960,85,1080,90.7C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-1/2">
            <path
              fill="rgba(141, 255, 105, 0.12)"
              d="M0,64L60,96C120,128,240,192,360,213.3C480,235,600,213,720,176C840,139,960,85,1080,90.7C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className={`absolute inset-x-0 bottom-0 ${preset.height} opacity-40`}>
        <div className="flex h-full w-[200%] animate-wave-drift-fast-reverse">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-1/2">
            <path
              fill="rgba(141, 255, 105, 0.09)"
              d="M0,96L80,90.7C160,85,320,75,480,101.3C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="h-full w-1/2">
            <path
              fill="rgba(141, 255, 105, 0.09)"
              d="M0,96L80,90.7C160,85,320,75,480,101.3C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WaveBackground;