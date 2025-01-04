import { getAllPosts } from '@/api/post-actions';
import { Avatar, AvatarFallback, AvatarImage, Card, CardContent } from '@/components/ui';
import { dateFormatter, nameSorter } from '@/utils';
import { Heart, MessageCircle, MoreVertical } from 'lucide-react';

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
    <>
      <div className="w-full max-w-xl">
        {res.posts.map(post => (
          <>
            <Card className="my-6">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>{nameSorter(post.user.name)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="font-semibold">{post.user.name}</span>
                      <span className="text-gray-500 text-sm ml-1">
                        {dateFormatter(post.createdAt)}
                      </span>
                      <button className="ml-auto">
                        <MoreVertical className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>

                    <p className="text-[15px] leading-normal mb-3">{post.titlePost}</p>

                    <div className="flex gap-6">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-pink-600">
                        <Heart className="h-5 w-5" />
                        <span className="text-sm">{post.likeCount}</span>
                      </button>

                      <button disabled={true} className="flex items-center gap-2 text-gray-500">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm">0</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}
