import { featureSections } from "../config/featureSections";
import { FeatureSection2 } from "./FeatureSection2";
import '../styles/components/feature-sections-type-2.css';

export function FeatureSectionsType2() {
  return <section className="consistent-padding feature-sections-type-2">{featureSections.map((i: any, idx: number) => <FeatureSection2 key={idx} obj={i} idx={idx} />)}</section>;
}
