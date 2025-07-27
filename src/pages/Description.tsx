import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import description from "@/assets/description.jpg";

const Description = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Event Description"
        imageSrc={description}
        imageAlt="Dynamic university event with networking"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-3">
              Activities
            </h3>
            <p className="text-muted-foreground">
              Detailed information about event activities will be provided here.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-3">
              Packages Rundown
            </h3>
            <p className="text-muted-foreground">
              Comprehensive package details and pricing information will be outlined here.
            </p>
          </div>
          
          <div className="bg-university-light p-6 rounded-lg border-l-4 border-university-gold">
            <p className="text-sm text-muted-foreground">
              More detailed information about event structure, schedules, and participation packages will be added soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Description;