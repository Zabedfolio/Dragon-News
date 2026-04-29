import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {

  const categories = await getCategories();
  console.log(categories.news_category)

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto py-15">

      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>

      </div>

      <div className="font-bold text-3xl bg-purple-400 col-span-6">Dragon News Home</div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>

    </div>
  );
}
