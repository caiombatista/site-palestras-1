type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-electric">
        {eyebrow}
      </p>
      <h2 className="display-title text-3xl uppercase text-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
