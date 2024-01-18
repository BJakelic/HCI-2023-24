import Link from "next/link";
import { useRouter } from "next/router";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Post[]> => {
  const data = await fetch(`${BASE_API_URL}/posts`);
  return data.json();
};

export default function CommunityInsights({ posts }: { posts: Post[] }) {
  const router = useRouter();

  // Get the requested post ID from the router
  const requestedPostId = parseInt(router.query.postId as string, 10);

  // Check if the requested post exists
  const requestedPost = posts.find((post) => post.id === requestedPostId);

  // If the post doesn't exist, redirect to 404
  if (!requestedPost && !Number.isNaN(requestedPostId)) {
    router.push("/not-found.tsx");
    return null; // Return null to avoid rendering the current page
  }

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Feedback</h1>
      <ul className="flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`feedback/${post.id}`}>
              <span className="text-2xl text-purple-500">
                Post {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Fetch the posts during server-side rendering
export async function getServerSideProps() {
  const allPosts = await getPosts();
  const posts = allPosts.slice(0, 100);

  return {
    props: {
      posts,
    },
  };
}
