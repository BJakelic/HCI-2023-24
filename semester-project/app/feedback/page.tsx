//"use client";

import Link from "next/link";
import clsx from "clsx";
import NotFound from "@/app/not-found";
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Pagination {
  limit: number;
  page: number;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

const getPosts = async (
  pagination: Pagination = {
    limit: 9999,
    page: 1,
  }
): Promise<Post[]> => {
  const data = await fetch(
    `${BASE_API_URL}/posts?_limit=${pagination.limit}&_page=${pagination.page}`
  );
  return data.json();
};

const getTotalPosts = async (): Promise<number> => {
  const response = await fetch(`${BASE_API_URL}/posts?_limit=1`, {
    method: "HEAD",
  });
  // get x-total-count header
  return parseInt(response.headers.get("x-total-count") || "1", 10);
};

export default async function Feedback({ searchParams }: SearchParams ) {
  const { _limit, _page } = searchParams;
  var [pageSize, page] = [_limit, _page].map(Number);
  const totalPosts = await getTotalPosts();
  const totalPages = Math.ceil(totalPosts / 10);

  if(isNaN(page))
    page = 1

  const posts = await getPosts({
    limit: 10,
    page: page,
  });

  if(page > totalPages)
    return NotFound();

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-center mt-5 mb-5 font-tahoma font-bold text-brand-special-100 text-4xl">
        Get in touch with other users here!
      </h1>
      <div className="py-5 font-roboto text-brand-special-300">
        Page <span className="font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
      </div>
        <div className="flex items-baseline gap-8 pb-10">
          <div className="flex gap-4">
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: 1, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-200 px-3 py-2 text-brand-special-100 font-tahoma font-bold text-xs",
                page === 1 && "pointer-events-none opacity-50"
              )}
            >
              FIRST
            </Link>
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: page > 1 ? page - 1 : 1, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-100 px-3 py-2 text-white font-tahoma font-bold text-xs",
                page === 1 && "pointer-events-none opacity-50"
              )}
            >
              PREVIOUS
            </Link>
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: page + 1, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-100 px-3 py-2 text-white font-tahoma font-bold text-xs",
                page === totalPages && "pointer-events-none opacity-50"
              )}
            >
              NEXT
            </Link>
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: totalPages, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-200 px-3 py-2 text-brand-special-100 font-tahoma font-bold text-xs",
                page === totalPages && "pointer-events-none opacity-50"
              )}
            >
              LAST
            </Link>
          </div>
        </div>
      <ul className="flex flex-col gap-8 p-10 bg-brand-blue-200 rounded-2xl w-full">
        {posts.map((post) => (
          <li key={post.id} className="w-full">
            <Link href={`feedback/${post.id}`}>
              <span className="block w-full text-2xl font-tahoma bg-white text-brand-blue-100 border-2 border-brand-blue-200 px-3 py-1 rounded hover:bg-brand-blue-100 hover:border-white hover:text-white">
                <b>POST {post.id}:</b> <p className="text-brand-special-100 text-lg">{post.title}</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="py-5 font-roboto text-brand-special-300">
        Page <span className="font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
      </div>
        <div className="flex items-baseline gap-8 pb-10">
          <div className="flex gap-4">
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: 1, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-200 px-3 py-2 text-brand-special-100 font-tahoma font-bold text-xs",
                page === 1 && "pointer-events-none opacity-50"
              )}
            >
              FIRST
            </Link>
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: page > 1 ? page - 1 : 1, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-100 px-3 py-2 text-white font-tahoma font-bold text-xs",
                page === 1 && "pointer-events-none opacity-50"
              )}
            >
              PREVIOUS
            </Link>
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: page + 1, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-100 px-3 py-2 text-white font-tahoma font-bold text-xs",
                page === totalPages && "pointer-events-none opacity-50"
              )}
            >
              NEXT
            </Link>
            <Link
              href={{
                pathname: "/feedback",
                query: { _page: totalPages, _limit: pageSize },
              }}
              className={clsx(
                "rounded bg-brand-blue-200 px-3 py-2 text-brand-special-100 font-tahoma font-bold text-xs",
                page === totalPages && "pointer-events-none opacity-50"
              )}
            >
              LAST
            </Link>
          </div>
        </div>
    </main>
  );
}
