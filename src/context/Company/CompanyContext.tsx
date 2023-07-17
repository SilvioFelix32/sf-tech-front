import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

export const CompanyContext = createContext<string>("");

interface ProviderProps {
  children: ReactNode;
}

const CompanyIdProvider: React.FC<ProviderProps> = ({ children }) => {
  const [company_id, setCompanyId] = useState<string>();

  // useEffect(() => {
  //   const companyId = Cookies.get("company_id");
  //   if (companyId) {
  //     setCompanyId(companyId);
  //   }
  // }, []);

  useEffect(() => {
    const companyId = "b4cce349-7c0b-41c7-9b3e-c21c9f0c2e4c";
    if (companyId) {
      setCompanyId(companyId);
    }
  }, []);

  return (
    <CompanyContext.Provider value={company_id}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyIdProvider;
