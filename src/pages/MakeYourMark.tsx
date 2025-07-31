import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import markImage from "@/assets/forward-hero.jpg";

const MakeYourMark = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Make Your Mark!"
        imageSrc={markImage}
        imageAlt="Partnership opportunity with Lukenya University"
      >
        <div className="space-y-8">
          <Card className="p-8 bg-gradient-to-br from-university-navy to-university-navy/80 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Career, Business and Agricultural Week 2025
            </h2>
            <div className="text-xl font-semibold text-university-gold mb-6">
              LUKENYA UNIVERSITY<br/>
              STUDENT ASSOCIATION<br/>
              OFFICE OF ACADEMIC SECRETARY
            </div>
            <div className="text-2xl font-bold mb-6">
              CLAIM YOUR SPOT AS OUR PARTNER SPONSOR
            </div>
          </Card>
          
          <Card className="p-6 bg-university-gold/10 border-2 border-university-gold">
            <h3 className="text-2xl font-bold text-university-navy mb-4 text-center">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg text-center mb-6">
              Join us in shaping the future of education and business. Be part of an event that connects industry leaders with the next generation of innovators and entrepreneurs.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-university-navy hover:bg-university-navy/80 text-white font-semibold px-8 py-3 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-university-navy text-university-navy hover:bg-university-navy hover:text-white font-semibold px-8 py-3 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 bg-white border-2 border-university-navy">
            <h3 className="text-xl font-bold text-university-navy mb-4 text-center">
              Contact Information
            </h3>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-university-gold" />
                <span className="font-semibold">+254 796 066 551</span>
                <span className="text-gray-600">(Marwa Christopher)</span>
              </div>
              <div className="text-lg font-semibold text-university-navy">
                OFFICE OF THE ACADEMIC SECRETARY
              </div>
            </div>
          </Card>
          
          <div className="text-center">
            <p className="text-lg text-university-navy font-semibold">
              Don't miss this opportunity to be part of Kenya's premier university career and business event!
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default MakeYourMark;