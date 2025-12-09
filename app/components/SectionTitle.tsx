interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  accentColor?: 'red' | 'blue' | 'teal';
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
  accentColor = 'teal',
}: SectionTitleProps) {
  const colors = {
    red: 'bg-[#ac1f2c]',
    blue: 'bg-[#265b8f]',
    teal: 'bg-[#46c0b5]',
  };

  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-5xl md:text-7xl font-black text-[#265b8f] mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
      <div className={`w-32 h-2 ${colors[accentColor]} mt-8 rounded-full ${centered ? 'mx-auto' : ''} shadow-lg`}></div>
    </div>
  );
}

