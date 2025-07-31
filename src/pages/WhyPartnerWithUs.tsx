import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import partnerImage from "@/assets/event-background.jpg";

const WhyPartnerWithUs = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Why Partner With Us"
        imageSrc={partnerImage}
        imageAlt="Partnership benefits with Lukenya University"
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  i. Lead Generation
                </h3>
                <p>Connect with potential customers and business leads from our diverse student and staff community.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  ii. Market Research
                </h3>
                <p>Gain insights into consumer behavior and preferences from a young, educated demographic.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  iii. Product Development
                </h3>
                <p>Test and refine your products with feedback from an engaged university community.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  iv. Brand Awareness
                </h3>
                <p>Increase visibility and recognition among future professionals and decision-makers.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  v. Recruitment and Business Networking
                </h3>
                <p>Access top talent and build valuable business relationships within our network.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  vi. Creating Company Advocates
                </h3>
                <p>Build lasting relationships that turn students and staff into brand ambassadors.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  vii. Extensive Media Coverage
                </h3>
                <p>Benefit from comprehensive media attention and social media exposure during events.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  viii. Showcase Bila Kifani & Miondoko with GenZ
                </h3>
                <p>Connect authentically with the Generation Z demographic through innovative approaches.</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default WhyPartnerWithUs;