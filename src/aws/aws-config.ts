import { environment } from '@/config/environment';
import type { ResourcesConfig } from 'aws-amplify';

const cognitoConfig: any = {
    userPoolId: environment.aws.userPoolsId,
    userPoolClientId: environment.aws.userPoolsWebClientId,
    signUpVerificationMethod: 'code' as const,
    loginWith: {
        email: true,
    },
    passwordFormat: {
        minLength: 8,
    },
};

if (environment.aws.identityPoolId) {
    cognitoConfig.identityPoolId = environment.aws.identityPoolId;
}

export const awsConfig: ResourcesConfig = {
    Auth: {
        Cognito: cognitoConfig,
    },
};
