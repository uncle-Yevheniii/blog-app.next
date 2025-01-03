import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { httpClient } from './http-client';
import { PostRes } from '@/types';

export async function getAllPosts(p: number = 1, l: number = 10): Promise<PostRes> {
  const config: AxiosRequestConfig = {
    params: { page: p, limit: l } as RawAxiosRequestHeaders,
  };

  const res: AxiosResponse = await httpClient.get('/posts/get', config);
  const dataRes: PostRes = res.data;

  return dataRes;
}
