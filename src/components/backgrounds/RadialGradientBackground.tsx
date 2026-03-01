const baseColors = [
  { color: 'rgba(141, 255, 105, 0.25)', stop: '100%' },
  { color: 'rgba(141, 255, 105, 0.45)', stop: '100%' },
  { color: 'rgba(141, 255, 105, 0.50)', stop: '100%' },
  { color: 'rgba(141, 255, 105, 0.45)', stop: '100%' },
  { color: 'rgba(141, 255, 105, 0.25)', stop: '100%' }
];

const variants = {
  hero: [
    {
      position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
      size: 'w-[1400px] h-[1400px]',
      colors: baseColors,
      blur: '0px',
      opacity: 0.5
    },
    {
      position: 'top-1 left-1',
      size: 'w-[1400px] h-[1400px]',
      colors: baseColors,
      blur: '0px',
      opacity: 0.5
    },
    {
      position: 'bottom-1 right-1',
      size: 'w-[1400px] h-[1400px]',
      colors: baseColors,
      blur: '0px',
      opacity: 0.5
    }
  ],
  about: [
    {
      position: 'bottom-0 left-[75%]',
      size: 'w-[700px] h-[700px]',
      colors: baseColors,
      blur: '0px',
      opacity: 0.5
    }
  ]
};

type VariantKey = keyof typeof variants;

const RadialGradientBackground = ({ variant = 'hero', gradients = [] }) => {
  const baseColors = [
    { color: 'rgba(141, 255, 105, 0.25)', stop: '100%' },
    { color: 'rgba(141, 255, 105, 0.45)', stop: '100%' },
    { color: 'rgba(141, 255, 105, 0.50)', stop: '100%' },
    { color: 'rgba(141, 255, 105, 0.45)', stop: '100%' },
    { color: 'rgba(141, 255, 105, 0.25)', stop: '100%' }
  ];

  const variants = {
    hero: [
      {
        position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[1400px] h-[1400px]',
        colors: baseColors,
        blur: '0px',
        opacity: 0.5
      },
      {
        position: 'top-1 left-1',
        size: 'w-[1400px] h-[1400px]',
        colors: baseColors,
        blur: '0px',
        opacity: 0.5
      },
      {
        position: 'bottom-1 right-1',
        size: 'w-[1400px] h-[1400px]',
        colors: baseColors,
        blur: '0px',
        opacity: 0.5
      }
    ],

    about: [
      {
        position: 'bottom-0 left-[75%]',
        size: 'w-[700px] h-[700px]',
        colors: baseColors,
        blur: '0px',
        opacity: 0.5
      }
    ]
  };

  const activeGradients =
    variant === 'custom'
      ? gradients
      : variants[(variant as VariantKey)] || variants.hero;

  const generateGradient = (colors: { color: string; stop: string }[]) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(', ');

    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {activeGradients.map((g, i) => (
        <div
          key={i}
          className={`absolute ${g.position} ${g.size} rounded-full`}
          style={{
            background: generateGradient(g.colors),
            filter: `blur(${g.blur})`,
            opacity: g.opacity
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
