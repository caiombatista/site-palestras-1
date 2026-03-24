import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/data/site";

export function PersonalizedJourney() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div className="panel p-8 lg:p-10">
          <SectionTitle
            eyebrow="Jornada personalizavel"
            title={siteContent.journey.title}
            description={siteContent.journey.description}
          />
        </div>

        <div className="space-y-4">
          {siteContent.journey.electives.map((elective) => (
            <div key={elective} className="panel p-6">
              <p className="display-title text-xl uppercase text-text">{elective}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
