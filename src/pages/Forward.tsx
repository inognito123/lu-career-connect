import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import forwardHero from "@/assets/forward-hero.jpg";

const Forward = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Forward"
        imageSrc={forwardHero}
        imageAlt="University networking and collaboration"
      >
        <div className="space-y-4">
          <p>
            Lukenya University (LU) is proud to host you in career and business work which will take place on.
          </p>
          
          <p>
            The event is organized by the office of cabinet secretary of academics and its aim is to provide unique networking opportunities, building everlasting bonds with partners and sponsors for our 10,000 students who will collaborate meaningfully with partnering companies, startups and SMEs.
          </p>
          
          <p>
            We invite you to become an advocate for all that Lukenya has to offer by sponsoring the career and business week. By doing so you will be able to showcase and sell your products and create wide awareness of your products and services. Lukenya is known for competent and hard working graduates who will be a good source of workforce to tap from.
          </p>
          
          <p>
            Lukenya is one of the flagship universities of Kenya offering world-class academics. Lukenya has participated in a food system when we managed to be the best in Kenya and represent the country in Northland, making it the best in research.
          </p>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Forward;