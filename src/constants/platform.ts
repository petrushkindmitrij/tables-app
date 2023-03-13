import { PlatformState } from '@models/Platform';

export enum PLATFORM_APPS {
  CLIENT_SEARCH = '@ufs/client-search-create',
  USER_PROFILE = '@ufs/user-profile',
  ACCOUNT_LINKING = '@ufs/account-linking',
}

export const PLATFORM_CONTEXT_PATHS: {
  [key: string]: keyof PlatformState;
} = {
  CLIENT: 'client.client',
};
