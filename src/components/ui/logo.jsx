import { Link } from "react-router-dom";
import { createContext, useContext } from "react";
import { MdOutlineManageAccounts } from "react-icons/md";

import siteConfig from "../../config/site-config";

const LogoContext = createContext(null);
const useLogoContext = () => {
  const context = useContext(LogoContext);
  if (!context) throw new Error("Context not found");
  return context;
};

export const Logo = ({ children, hasText = false }) => {
  return (
    <LogoContext.Provider value={{ hasText }}>{children}</LogoContext.Provider>
  );
};

Logo.Simple = () => {
  const { hasText } = useLogoContext();
  return (
    <div className="flex items-center justify-center space-x-1">
      <MdOutlineManageAccounts className="text-active size-8 p-1 rounded-full" />
      {hasText && (
        <span className="text-pretty font-semibold text-lg tracking-wider text-active">
          {siteConfig.name}
        </span>
      )}
    </div>
  );
};

Logo.Link = () => {
  return (
    <Link to="/">
      <Logo.Simple />
    </Link>
  );
};
