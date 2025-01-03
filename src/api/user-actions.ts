import { TokenRes, SignInType, SignUpType } from '@/types';
import { httpClient } from './http-client';
import { AxiosResponse } from 'axios';

export async function userSignIn(dataObj: SignInType): Promise<TokenRes> {
  const res: AxiosResponse = await httpClient.post('/auth/local/signin', dataObj);
  const data: TokenRes = res.data;

  return data;
}

export async function userSignUp(dataObj: SignUpType): Promise<TokenRes> {
  const res: AxiosResponse = await httpClient.post('/auth/local/signup', dataObj);
  const data: TokenRes = res.data;

  return data;
}
