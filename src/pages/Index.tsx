import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import luLogo from "@/assets/lu-logo.png";
import authBackground from "@/assets/auth-background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${authBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={luLogo} 
              alt="Lukenya University Logo" 
              className="h-24 w-24 mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Lukenya University Events
            </h1>
          </div>

          {/* Welcome Content */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-2xl mb-8">
            <div className="space-y-6 text-left">
              <div>
                <h2 className="text-2xl font-bold text-university-navy mb-4">
                  Welcome to Lukenya University
                </h2>
                <p className="text-lg text-foreground mb-4">
                  Where you get all events uploaded. Experience world-class education in a therapeutic environment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  Our Diverse Courses Include:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>Bachelor of Science in Information Technology</li>
                  <li>Bachelor of Business Administration</li>
                  <li>Bachelor of Science in Agriculture</li>
                  <li>Bachelor of Education</li>
                  <li>Bachelor of Environmental Science</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-university-navy mb-2">
                  Campus Life
                </h3>
                <p className="text-foreground mb-2">
                  Accommodation is available within the institution for both students and staff.
                </p>
                <p className="text-foreground">
                  Lukenya is strategically located between Tsavo West and East, bordering Yata Plateau and River Ati, making it a therapeutic university in Africa.
                </p>
              </div>
            </div>
          </Card>

          {/* Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-university-gold hover:bg-university-gold/80 text-university-navy font-semibold px-8 py-3 text-lg"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-university-navy font-semibold px-8 py-3 text-lg"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;