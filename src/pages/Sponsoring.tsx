import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import sponsoringImage from "@/assets/forward-hero.jpg";

const Sponsoring = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Sponsoring"
        imageSrc={sponsoringImage}
        imageAlt="Sponsoring opportunities at Lukenya University"
      >
        <div className="space-y-6">
          <p className="text-lg font-medium text-university-navy mb-4">
            Activities at Lukenya University are an excellent way for your company/startup/SME/venture to:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Boost Brand Visibility
              </h3>
              <p>Engage with our diverse community of 8,000 individuals to increase your brand's recognition and reach.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Cultivate Brand Advocates
              </h3>
              <p>Interact directly with students and staff, turning them into potential brand advocates who can spread positive word of mouth.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Conduct Market Research
              </h3>
              <p>Gain valuable insights from a unique demographic (18-25) from all 47 counties of Kenya that is often challenging to access.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Forge Strategic Partnerships
              </h3>
              <p>Establish meaningful connections with Lukenya or other partner companies for potential collaboration and opportunities in the future.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Recruit Fresh Talent
              </h3>
              <p>Directly recruit from our campus - an ideal source for entry positions and infuse your team with fresh perspectives.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Stay Connected with Youth
              </h3>
              <p>Maintain relevance and engagement with the younger generation, a crucial factor for sustained success.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Showcase Innovation
              </h3>
              <p>Demonstrate your company's innovative products or services to an audience that cares, highlighting your commitment to progress and development.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Engage in CSR
              </h3>
              <p>Use this platform to showcase your company's corporate social responsibility initiatives, enhancing your brand's image and appeal.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Gain Media Exposure
              </h3>
              <p>Benefit from potential media coverage of the event, further amplifying your brand presence.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Receive Recognition
              </h3>
              <p>Be acknowledged as our sponsor, enhancing your brand reputation and network by benefiting from extensive speaking and networking opportunities.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Exclusive Branding Opportunities
              </h3>
              <p>Be featured on event banners, posters, and digital platforms providing additional exposure.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-university-navy mb-2">
                • Sponsoring Appreciation Certificate
              </h3>
              <p>Receive a certificate of appreciation from Lukenya University which can be showcased for corporate credibility.</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Sponsoring;