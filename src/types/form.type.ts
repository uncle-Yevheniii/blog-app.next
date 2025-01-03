export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = SignInType & {
  name: string;
};
