type searchParamsProp = {
  limit?: string;
  query?: string;
  page?: string;
};

export default async function Home(props: { searchParams?: Readonly<Promise<searchParamsProp>> }) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  return <></>;
}
