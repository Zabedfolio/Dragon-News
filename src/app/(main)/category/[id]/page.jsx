import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



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
        
        <div className="space-y-4 mt-6">
          { news.length>0 ?
            news.map(n => {
              return (
                <NewsCard key={n._id} n={n}></NewsCard>
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