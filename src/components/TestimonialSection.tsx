import { testimonialSection } from "../config/testimonialSection"
import '../styles/components/testimonial-section.css';

export function TestimonialSection(){
    const {title, subtitle, testimonials} = testimonialSection;
    return (
        <section className="consistent-padding testimonial-section">
            <div className="top-text-section consistent-gap">
                <h2>{title}</h2>
                <p className="lg:text-xl">{subtitle}</p>
            </div>
            <div className="testimonial-list">
                {testimonials.map((i, idx) => (
                    <div key={idx} className="testimonial-card">
                        <p className="text">{i.text}</p>
                        <div className="profile-section">
                            <img src={i.profile.img.url} alt={i.profile.img.alt} />
                            <span>{i.profile.name}</span>
                            <p>{i.profile.extra}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}