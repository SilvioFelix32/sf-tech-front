import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

export const CompanyContext = createContext<string>("");

interface ProviderProps {
  children: ReactNode;
}

const CompanyIdProvider: React.FC<ProviderProps> = ({ children }) => {
  const [company_id, setCompanyId] = useState<string>();
  const companyId: string = Cookies.get("company_id");

  useEffect(() => {
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
