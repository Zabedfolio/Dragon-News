'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';


const NewsCard = ({ n }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-6 shadow-sm space-y-4">

            {/* Top Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        src={n?.author.img}
                        alt="author"
                        width={45}
                        height={45}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                            {n?.author?.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                            {n?.author?.published_date?.slice(0, 10)}
                        </p>
                    </div>
                </div>

                {/* Right icons */}
                <div className="flex gap-4 text-gray-500 text-lg">
                    <span><CiBookmark /></span>
                    <span><CiShare2 /></span>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 leading-snug">
                {n?.title}
            </h2>

            {/* Image */}
            <div className="rounded-lg overflow-hidden">
                <Image
                    src={n?.image_url}
                    alt="news"
                    width={800}
                    height={400}
                    className="w-full h-[250px] object-cover"
                />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {(n?.details ?? "")}...
            </p>

            {/* Read More */}
            <Link href={''}>
                <button className="btn bg-orange-400 mb-4 text-white">
                    Read More
                </button>
            </Link>


            <hr className="border-gray-200" />

            {/* Bottom Section */}
            <div className="flex items-center justify-between">

                {/* Rating */}
                <div className="flex items-center text-orange-400">
                    
                        <FaStar/><span className="ml-2 text-gray-700 font-medium">
                        {n?.rating?.number}
                    </span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{n?.total_view}</span>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;