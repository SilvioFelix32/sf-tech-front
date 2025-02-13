import { useState, useEffect } from "react";
import { userService } from "../services";
import { IUser } from "../types";

export function useUser(company_id: string, user_id: string) {
  const [myUser, setMyUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (company_id && user_id) {
      userService.getById(company_id, user_id).then((data) => {
        setMyUser(data);
      });
    }
  }, [company_id, user_id]);

  return myUser;
}
