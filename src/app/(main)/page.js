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
        <h2 className="font-bold text-lg ">All Category</h2>
        
        <ul className="flex flex-col gap-4 mt-6">
          {
            categories.news_category.map(category => {
              return <li key={category.category_id} className="font-bold bg-slate-100 text-center text-md p-2 rounded-md">{category.category_name}</li>
            })
          }
        </ul>

      </div>

      <div className="font-bold text-3xl bg-purple-400 col-span-6">Dragon News Home</div>

      <div className="font-bold text-3xl bg-blue-300 col-span-3">Login With</div>

    </div>
  );
}
