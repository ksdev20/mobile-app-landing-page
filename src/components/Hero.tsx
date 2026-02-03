import { hero } from "../config/hero";

export function Hero() {
  const { img, h1, p, buttons } = hero;
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="black-bg"></div>
        <img src={img.url} alt={img.alt} />
        <h1>{h1}</h1>
        <div className="part2">
          <p>{p}</p>
          <div className="buttons">
            {buttons.map((i, idx) => (
              <a href={i.link} className={"btn " + i.variant} key={idx}>
                {i.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
