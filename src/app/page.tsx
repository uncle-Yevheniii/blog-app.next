import { getAllPosts } from '@/api/post-actions';

type searchParamsProp = {
  limit?: string;
  query?: string;
  page?: string;
};

export default async function Home(props: { searchParams?: Readonly<Promise<searchParamsProp>> }) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const res = await getAllPosts(page, limit);
  console.log(res);
  return <></>;
}
