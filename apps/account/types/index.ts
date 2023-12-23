export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type UpdateInfosRequest = {
  name?: string;
  email?: string;
  accessToken: string;
};

export type UpdatePasswordRequest = {
  password: string;
  accessToken: string;
};
