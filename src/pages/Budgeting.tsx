import PageLayout from "@/components/PageLayout";
import ContentSection from "@/components/ContentSection";
import { Card } from "@/components/ui/card";
import budgetImage from "@/assets/description.jpg";

const Budgeting = () => {
  return (
    <PageLayout>
      <ContentSection
        title="Budgeting"
        imageSrc={budgetImage}
        imageAlt="Event budget breakdown and financial planning"
      >
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-r from-university-navy/5 to-university-gold/5">
            <h3 className="text-2xl font-bold text-university-navy mb-6 text-center">
              Event Budget Breakdown
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-university-navy">
                    <th className="text-left py-3 px-4 font-bold text-university-navy">EXPENSES</th>
                    <th className="text-right py-3 px-4 font-bold text-university-navy">AMOUNT (KESH)</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div>
                        <strong>1. Marketing and Promotion</strong>
                        <div className="text-sm text-gray-600 mt-1">
                          Cost of branding, printing, flyers, posters, advertising on social media
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">40,500</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div>
                        <strong>2. Talent</strong>
                        <div className="text-sm text-gray-600 mt-1">
                          Judges, performers, DJs, MC, speakers, entertainers, volunteers
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">73,300</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div>
                        <strong>3. Event Health</strong>
                        <div className="text-sm text-gray-600 mt-1">
                          Food and refreshments
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">55,600</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div>
                        <strong>4. Event Cost Plus Admin</strong>
                        <div className="text-sm text-gray-600 mt-1">
                          Three day-long expo and award ceremony
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">99,100</td>
                  </tr>
                  
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">
                      <div>
                        <strong>5. Closing Event</strong>
                        <div className="text-sm text-gray-600 mt-1">
                          Final ceremony and entertainment
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-semibold">60,000</td>
                  </tr>
                  
                  <tr className="border-t-2 border-university-navy bg-university-gold/10">
                    <td className="py-4 px-4 font-bold text-xl text-university-navy">
                      TOTAL
                    </td>
                    <td className="py-4 px-4 text-right font-bold text-xl text-university-navy">
                      328,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          
          <div className="text-center">
            <p className="text-lg text-foreground">
              This comprehensive budget ensures a successful three-day event that delivers maximum value to all participants and sponsors.
            </p>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Budgeting;