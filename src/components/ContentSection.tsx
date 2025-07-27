import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const ContentSection = ({ title, children, imageSrc, imageAlt }: ContentSectionProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-slide-in">
          <h1 className="text-4xl font-bold text-university-navy mb-6">
            {title}
          </h1>
          <Card className="p-8 shadow-elegant border-none bg-white/80 backdrop-blur-sm">
            <div className="prose prose-lg max-w-none text-foreground">
              {children}
            </div>
          </Card>
        </div>

        {/* Image */}
        <div className="animate-fade-in">
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[400px] object-cover rounded-lg shadow-glow"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;