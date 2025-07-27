import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import objectives from "@/assets/objectives.jpg";

const Objectives = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Event Objectives"
        imageSrc={objectives}
        imageAlt="Students collaborating on innovative projects"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-2">
              i. Foster Innovation
            </h3>
            <p>
              Provides a collaborative environment for students to showcase, pitch and network with industry leaders while learning about business practices, entrepreneurship and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-2">
              ii. Direct Market Research
            </h3>
            <p>
              Provides partner companies with opportunities for market research, product and services showcasing to a large audience of potential entrepreneurs and customers.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-2">
              iii. Recruiting
            </h3>
            <p>
              Bridges the recruitment divide between companies and students in an exhilarating and activity-filled environment.
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Objectives;