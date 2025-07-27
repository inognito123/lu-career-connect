import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import activities from "@/assets/activities.jpg";

const Activities = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Event Activities"
        imageSrc={activities}
        imageAlt="Students presenting business pitches"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-3">
              i. Career Talk
            </h3>
            <p className="text-muted-foreground">
              Detailed information about career talks will be provided here.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-3">
              ii. Biashara Pitch Competition
            </h3>
            <p>
              Students will pitch their business ideas to a panel of judges including representatives from partner companies, university professors, investors and business experts. The winner will receive cash prizes, mentorship and exposure to potential investors and partners.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-3">
              iii. Biashara Talk
            </h3>
            <p>
              A series of inspiring and informative talks by prominent speakers from various fields and backgrounds such as entrepreneurs, innovators, leaders, celebrities and more. The talks will cover topics such as entrepreneurship, innovation, leadership, social impact and more.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-university-navy mb-3">
              iv. Biashara Masterclasses
            </h3>
            <p>
              Select companies and practitioners will host seminars targeting specific faculties and departments. For example, KB Bank could request to engage IT Students in a coding masterclass or Qatar Airways to meet international students for a travel masterclass.
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Activities;