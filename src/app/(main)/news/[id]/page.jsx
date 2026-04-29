import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const generateMetadata = async({params}) =>{
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    return{
        title: news.title,
        description: news.details,
    }

}

const NewsDetailsPage = async({params}) => {
    // console.log(params,"params")
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm w-6/12 mx-auto my-20">

      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src={news?.image_url}
          alt="news"
          width={900}
          height={500}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-3xl font-bold text-gray-800 leading-snug">
        {news?.title}
      </h1>

      {/* Details */}
      <p className="mt-4 text-gray-600 text-base leading-relaxed">
        {news?.details}
      </p>

      {/* Button */}
      <div className="mt-6">
        <Link href={`/category/${news?.category_id}`}>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium">
            ← All news in this category
          </button>
        </Link>
      </div>

    </div>
    );
};

export default NewsDetailsPage;