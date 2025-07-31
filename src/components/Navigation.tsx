import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";
import luLogo from "@/assets/lu-logo.png";

const Navigation = () => {
  const location = useLocation();
  const { signOut, user } = useAuth();

  const navItems = [
    { path: "/forward", label: "Forward" },
    { path: "/background", label: "Event Background" },
    { path: "/objectives", label: "Objectives" },
    { path: "/description", label: "Description" },
    { path: "/activities", label: "Activities" },
    { path: "/sponsoring", label: "Sponsoring" },
    { path: "/why-partner", label: "Why Partner" },
    { path: "/packages", label: "Packages" },
    { path: "/rundown", label: "Event Rundown" },
    { path: "/budgeting", label: "Budgeting" },
    { path: "/make-your-mark", label: "Make Your Mark" },
  ];

  const authItems = [
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={luLogo} alt="LU Logo" className="h-10 w-10" />
            <div className="text-white">
              <h1 className="text-xl font-bold">Lukenya University</h1>
              <p className="text-sm text-university-gold">Events Portal</p>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  className={`text-white hover:bg-white/20 transition-all duration-300 ${
                    location.pathname === item.path 
                      ? "bg-university-gold text-university-navy" 
                      : "hover:text-university-gold"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            {user ? (
              <Button
                variant="outline"
                onClick={() => signOut()}
                className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              authItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;