import { features } from "../config/features";
import ChevronRight from "./icons/ChevronRight";

export function Features() {
  const { topText, cards, buttons } = features;
  return (
    <section className="consistent-padding features">
      <div className="f-col consistent-gap top-text-section">
        <span>{topText.top}</span>
        <h2>{topText.title}</h2>
        <p>{topText.subtitle}</p>
      </div>
      <ul className="cards-list">
        {cards.map((i, idx) => (
          <li className="consistent-gap card" key={idx}>
            <img src={i.img.url} alt={i.img.alt} />
            <h3>{i.title}</h3>
            <p>{i.subtitle}</p>
          </li>
        ))}
      </ul>
      <div className="buttons">
        {buttons.map((i, idx) => (
          <a key={idx} href={i.link} className={"btn " + i.variant}>
            {i.label} {idx === 1 ? <ChevronRight /> : ''} 
          </a>
        ))}
      </div>
    </section>
  );
}
