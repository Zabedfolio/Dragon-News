import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

async function getNewsByCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}



export default async function Home() {

  const categories = await getCategories();
  // console.log(categories.news_category)

  const news = await getNewsByCategoryId("01");
  // console.log(news);

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto py-15">

      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>

      </div>

      <div className="font-bold  bg-purple-400 col-span-6">
        Dragon News Home
        <div className="space-y-4">
          {
            news.map(n => {
              return (
                <div key={n._id} className="p-6 rounded-md border-2">{n.title}</div>
              )
            })
          }
        </div>

      </div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>

    </div>
  );
}
