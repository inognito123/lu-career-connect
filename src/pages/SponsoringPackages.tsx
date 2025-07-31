import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import { Card } from "@/components/ui/card";
import packagesImage from "@/assets/objectives.jpg";

const SponsoringPackages = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Sponsoring Packages"
        imageSrc={packagesImage}
        imageAlt="Sponsoring packages and investment opportunities"
      >
        <div className="space-y-6">
          <p className="text-lg text-foreground mb-6">
            We offer customized partnership packages catering to your specific recruitment needs and budgets with various levels ranging from Bronze to Platinum. These packages include multiple benefits and branding opportunities:
          </p>
          
          <div className="space-y-6">
            {/* Platinum Package */}
            <Card className="p-6 border-2 border-university-gold bg-gradient-to-r from-university-gold/10 to-university-gold/5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-university-navy">
                  1. Platinum Exclusive
                </h3>
                <div className="text-2xl font-bold text-university-gold">
                  KESH 75,000
                </div>
              </div>
              <ul className="space-y-2 text-foreground">
                <li>• Title sponsorship of the event</li>
                <li>• Large logo on all event materials</li>
                <li>• On-stage speaking opportunity during opening and closing ceremony</li>
                <li>• Prime location for booth or display</li>
                <li>• Premium advertising space</li>
                <li>• VIP passes for selected attendees</li>
                <li>• Master class hosting opportunity</li>
                <li>• Judge slot in competitions</li>
              </ul>
            </Card>
            
            {/* Gold Package */}
            <Card className="p-6 border-2 border-gray-400 bg-gradient-to-r from-gray-100/50 to-gray-50/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-university-navy">
                  2. Gold Limited (5 slots)
                </h3>
                <div className="text-2xl font-bold text-gray-600">
                  KESH 60,000
                </div>
              </div>
              <ul className="space-y-2 text-foreground">
                <li>• Promotion branding throughout the event</li>
                <li>• On-stage speaking opportunity during designated time slot</li>
                <li>• Prime location for booth or display</li>
                <li>• Advertising space in event materials</li>
                <li>• VIP passes for selected attendees</li>
                <li>• Social media promotion</li>
                <li>• Master class hosting opportunity</li>
              </ul>
            </Card>
            
            {/* Silver Package */}
            <Card className="p-6 border-2 border-amber-600 bg-gradient-to-r from-amber-50/50 to-amber-25/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-university-navy">
                  3. Silver Supporter (10 slots)
                </h3>
                <div className="text-2xl font-bold text-amber-600">
                  KESH 45,000
                </div>
              </div>
              <ul className="space-y-2 text-foreground">
                <li>• Prominent branding at selected areas of the event</li>
                <li>• Designated location for booth or display</li>
                <li>• Advertising space in event materials</li>
                <li>• VIP passes for selected attendees</li>
                <li>• Social media platform promotion</li>
              </ul>
            </Card>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default SponsoringPackages;