import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import { Card } from "@/components/ui/card";
import rundownImage from "@/assets/activities.jpg";

const EventRunDown = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Event Run Down"
        imageSrc={rundownImage}
        imageAlt="Three-day event schedule and activities"
      >
        <div className="space-y-6">
          {/* Wednesday */}
          <Card className="p-6 bg-gradient-to-r from-university-navy/5 to-university-navy/10">
            <h3 className="text-2xl font-bold text-university-navy mb-4">
              a. WEDNESDAY
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Start of career, business and agricultural guidance registration</span>
                <span className="text-university-gold font-medium">9:00 - 10:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Opening ceremony</span>
                <span className="text-university-gold font-medium">10:30 - 12:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Registration for pitch competition</span>
                <span className="text-university-gold font-medium">14:00 - 15:30</span>
              </div>
            </div>
          </Card>
          
          {/* Thursday */}
          <Card className="p-6 bg-gradient-to-r from-university-gold/5 to-university-gold/10">
            <h3 className="text-2xl font-bold text-university-navy mb-4">
              b. THURSDAY
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Career guidance, business pitching, master class and agricultural guidelines</span>
                <span className="text-university-navy font-medium">09:00 - 17:00</span>
              </div>
            </div>
          </Card>
          
          {/* Friday */}
          <Card className="p-6 bg-gradient-to-r from-university-navy/5 to-university-gold/5">
            <h3 className="text-2xl font-bold text-university-navy mb-4">
              c. FRIDAY
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Industry talk & pitching finale</span>
                <span className="text-university-gold font-medium">09:00 - 17:00</span>
              </div>
              <div className="mt-4">
                <span className="font-semibold text-university-navy">Evening Program:</span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Rewards ceremony</li>
                  <li>• Closing ceremony</li>
                  <li>• Entertainment and networking</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default EventRunDown;