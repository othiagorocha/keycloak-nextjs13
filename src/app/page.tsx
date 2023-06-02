"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get<Post[]>("http://localhost:3000/api/posts");
      setPosts(res.data);
    }
    fetchPosts();
  }, []);

  return (
    <main className="flex flex-col h-screen w-screen">
      <p>Hello world!</p>
      <div className="flex p-5 flex-1 h-[500px] w-full gap-5">
        <div
          className={`
              grid grid-cols-4 gap-6 overflow-hidden scrollbar-w-2 scrollbar scrollbar-thumb-rounded-md 
               scrollbar-thumb-red-500 hover:scrollbar-thumb-red-300 scrollbar-track-orange-50/70 
              overflow-y-scroll p-6 border-zinc-800 bg-neutral-400 border w-full
            `}
        >
          {posts.map((post) => (
            <ul
              key={post.id}
              className="p-2 leading-tight border-gray-900 text-sm font-normal flex flex-col bg-neutral-300 rounded border-2"
            >
              <li>
                <span className="font-bold text-base">Id:</span> {post.id}
              </li>
              <li>
                <span className="font-bold text-base">Title:</span> {post.title}
              </li>
              <li>
                <span className="font-bold text-base">Body:</span> {post.body}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
}
