import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

import { Logo } from "../ui/logo";
import { Button } from "../ui/button";

const SiteHeader = () => {
  const isLogedIn = false;
  return (
    <div className="border-border/70 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-screen border-b backdrop-blur">
      <div className="flex items-center justify-between w-[90%] mx-auto h-14">
        <Logo hasText={true}>
          <Logo.Link />
        </Logo>

        {!isLogedIn ? (
          <div className="flex items-center justify-center space-x-4">
            <Link
              to="/auth/sign-in"
              className="text-sm text-active hover:text-active/80 font-medium"
            >
              Sign In
            </Link>
            <Link to="/auth/sign-up">
              <Button size="sm" variant="outline" className="font-medium">
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <Link to="/dashboard">
            <LayoutDashboard className="text-active hover:text-active/80" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SiteHeader;
