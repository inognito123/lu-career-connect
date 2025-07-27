import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import eventBackground from "@/assets/event-background.jpg";

const EventBackground = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Event Background"
        imageSrc={eventBackground}
        imageAlt="University career fair and networking"
      >
        <div className="space-y-4">
          <p>
            Career week and business week is a three day long extravaganza at Lukenya University main campus; designed to cater for students and partnering companies, startups and SMEs, offering them a program to network, showcase and collaborate.
          </p>
          
          <p>
            By participating in career and biashara week 2025 you will have the opportunity to engage with more than 10,000 students from various disciplines and backgrounds, promoting your products and services to a large and diverse audience and identify potential candidates for internships and employment opportunities at your companies.
          </p>
          
          <p>
            The program is massive with 3 events for 3 days and participating by more than 6 campus departments. The scale of events ranges from 500-1000 persons concerts and rallies to panel discussions and exhibitions to smaller faculty targeted seminars on campus.
          </p>
          
          <p>
            We invite you to be part of the team in getting our youth ready for the future.
          </p>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default EventBackground;