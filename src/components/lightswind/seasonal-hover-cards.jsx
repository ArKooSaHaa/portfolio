import { cn } from "../lib/utils";

const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
  link,
  onClick,
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
    onClick?.();
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col justify-end p-6 w-full md:w-1/3 h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:w-2/3",
        link && "cursor-pointer",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={imageAlt || title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Title + Subtitle */}
      <div className="relative z-20 space-y-2 transition-all duration-500 transform group-hover:-translate-y-16">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>

      {/* Description */}
      <div className="mt-4 relative z-20 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-lg text-white">{description}</p>
      </div>
    </div>
  );
};

export function SeasonalHoverCards({ cards, className, onCardClick }) {
  return (
    <div className={cn("flex flex-wrap md:flex-nowrap gap-4 w-full px-4", className)}>
      {cards.map((card, index) => (
        <SeasonCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          link={card.link}
          onClick={() => onCardClick?.(card)}
        />
      ))}
    </div>
  );
}
