declare module '@ufs/utils' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type ApiResponse<T, E = any> = SuccessResponse<T> | ErrorResponse<E>;

  export type SuccessResponse<T> = {
    success: true;
    response: T;
    requestId: string | null;
  };
  export type ErrorResponse<T> = {
    success: false;
    error: T;
  };

  export interface FetchData extends RequestInit {
    method?: FetchMethod;
  }

  export type FetchFn = (
    path: RequestInfo,
    data?: FetchData
  ) => Promise<ApiResponse<Response>>;

  export const fetchWithToken: FetchFn;

  export class AppAuthService {
    constructor(clientId: string);
    fetchWithToken: FetchFn;
  }
}
