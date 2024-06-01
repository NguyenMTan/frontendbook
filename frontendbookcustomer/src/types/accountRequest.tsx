export interface loginRequest {
  email: string;
  password: string;
}

export interface registerRequest {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface accountRequest {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}
