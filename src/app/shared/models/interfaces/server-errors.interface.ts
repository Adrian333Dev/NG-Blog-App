export interface IServerErrors {
  [key: string]: string[];
}

export interface IServerErrorsResponse {
  errors: IServerErrors;
}
