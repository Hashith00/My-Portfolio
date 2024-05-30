import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/PopUpCard";
import Link from "next/link";
import { blogPosts } from "@/data";

function BlogSection() {
  return (
    <div className="w-full py-20" id="blogs">
      <h1 className="heading">
        My <span className="text-purple">Blogs</span>
      </h1>
      <div className="w-full mt-12 grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {blogPosts.map((post) => (
          <a href="/" key={post.id}>
            <CardContainer className="inter-var w-96 h-96" key={post.id}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {post.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {post.short_description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={post.img}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Read More →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
