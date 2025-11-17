export const environment = {
  jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET as string,
  companyId: process.env.NEXT_PUBLIC_COMPANY_ID as string,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
  localBaseURL: process.env.NEXT_PUBLIC_LOCAL_URL as string,
  stage: process.env.NEXT_PUBLIC_STAGE as string,
};
