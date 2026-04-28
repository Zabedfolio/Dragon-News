import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    "id": 1,
    "title": "Breaking News: Global Markets React to Sudden Interest Rate Changes by Central Banks"
  },
  {
    "id": 2,
    "title": "Breaking News: Major Breakthrough Announced in Renewable Energy Storage Technology"
  },
  {
    "id": 3,
    "title": "Breaking News: International Summit Addresses Rising Cybersecurity Threats Worldwide"
  },
  {
    "id": 4,
    "title": "Breaking News: Severe Weather Conditions Disrupt Transportation Across Multiple Regions"
  },
  {
    "id": 5,
    "title": "Breaking News: Tech Giant Unveils Next-Generation AI-Powered Consumer Devices"
  }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between bg-gray-200 items-center py-2 px-2 container mx-auto gap-2'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    news.map(n=> {
                        return <span className='mx-8' key={n.id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;