import { getAllPosts } from '@/api/post-actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';

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
  return (
    <div className="w-full max-w-xl">
      {res.posts.map(post => (
        <>
          <Card className="my-4">
            <CardHeader>
              <CardTitle className="text-2xl">Username</CardTitle>
              <CardDescription>{post.titlePost}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </>
      ))}
    </div>
  );
}
