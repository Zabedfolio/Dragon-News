import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import React from 'react';

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

const NewsCategoryPage = async({params}) => {

    const {id} = await params;

    const categories = await getCategories();
  // console.log(categories.news_category)

  const news = await getNewsByCategoryId(id);
  // console.log(news);


    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto py-15">

      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>

      </div>

      <div className="col-span-6">
        <h2 className='font-bold text-lg'>Dragon News Home</h2>
        
        <div className="space-y-4">
          { news.length>0 ?
            news.map(n => {
              return (
                <div key={n._id} className="p-6 rounded-md border-2">{n.title}</div>
              )
            })  : <h2 className='font-bold text-center items-center text-3xl'>No news Found</h2>
          }
        </div>

      </div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>

    </div>
    );
};

export default NewsCategoryPage;