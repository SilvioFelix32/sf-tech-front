import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

export const CompanyContext = createContext<string>("");

interface ProviderProps {
  children: ReactNode;
}

const CompanyIdProvider: React.FC<ProviderProps> = ({ children }) => {
  const [company_id, setCompanyId] = useState<string>(() => {
    const storedCompanyId = Cookies.get("company_id");
    return storedCompanyId || "b4cce349-7c0b-41c7-9b3e-c21c9f0c2e4c";
  });

  useEffect(() => {
    if (company_id) {
      setCompanyId(company_id);
    }

    Cookies.set("company_id", company_id, {
      expires: 7,
      path: "/",
    });
  }, [company_id]);

  return (
    <CompanyContext.Provider value={company_id}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyIdProvider;
