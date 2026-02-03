import ChevronRight from "./icons/ChevronRight";

export function FeatureSection2({ obj, idx }: { obj: any; idx: number }) {
  const { topText, textSection, buttons, img } = obj;
  const { top, title, subtitle } = textSection;
  return (
    <section className="feature-section-2">
      <div className="top-text">
        <div>{idx+1}</div>
        <div>{topText}</div>
      </div>
      <div className="fs2-container">
        <div className="consistent-gap text-section">
          <span>{top}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="buttons">
            {buttons.map((i, idx: number) => (
              <a href={i.link} className={"btn " + i.variant} key={idx}>
                {i.label}
                {idx === 1 ? <ChevronRight /> : ""}
              </a>
            ))}
          </div>
        </div>
        <img src={img.url} alt={img.alt} />
      </div>
    </section>
  );
}
