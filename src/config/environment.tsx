export const environment = {
  jwtSecret: process.env.NEXT_PUBLIC_JWT_SECRET as string,
  companyId: process.env.NEXT_PUBLIC_COMPANY_ID as string,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
  localBaseURL: process.env.NEXT_PUBLIC_LOCAL_URL as string,
  salesBaseURL: process.env.NEXT_PUBLIC_SALES_API_BASE_URL as string,
  stage: process.env.NEXT_PUBLIC_STAGE as string,
  aws: {
    cognitoRegion: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    userPoolsId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
    userPoolsWebClientId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID,
    identityPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  },
};
