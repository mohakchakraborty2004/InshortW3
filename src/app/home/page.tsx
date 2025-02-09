"use client";

import React, { useState, useEffect, useRef } from "react";
import TinderCard from "react-tinder-card";
import axios from "axios";

const fetchNews = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=4c9ba383e3a1409986d66ab6c855cdf5"
    );

    console.log("response", response.data.articles[0])
    const news = response.data.articles || [];
    return news
      .filter((n) => n.title && n.description) // Ensure valid articles
      .map((n) => ({
        title: n.title,
        description: n.description,
      }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export default function Page() {
  const [newsList, setNewsList] = useState([]);
  const tinderCardRefs = useRef([]); // Refs for TinderCard instances

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setNewsList(news);
    };
    getNews();
  }, []);

  const onSwipe = (direction, title) => {
    console.log(`Swiped ${direction} on: ${title}`);
    setNewsList((prev) => prev.filter((news) => news.title !== title));
  };

  const swipe = (dir) => {
    if (tinderCardRefs.current.length > 0) {
      const topCardRef = tinderCardRefs.current[newsList.length - 1];
      if (topCardRef && topCardRef.swipe) {
        topCardRef.swipe(dir); // Swipe the top card
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-96 flex justify-center items-center">
        {newsList.length > 0 ? (
          newsList.map((news, index) => (
            <TinderCard
              key={news.title}
              ref={(el) => (tinderCardRefs.current[index] = el)} // Store ref for each card
              onSwipe={(dir) => onSwipe(dir, news.title)}
              preventSwipe={[]}
              className="absolute w-full h-full shadow-lg rounded-lg bg-white flex justify-center items-center"
              style={{ zIndex: newsList.length - index }} // Stack cards correctly
            >
              <div className="w-full h-full flex flex-col justify-center items-center p-4">
                <h2 className="text-xl font-bold">{news.title}</h2>
                <p className="text-sm text-gray-700 mt-2">{news.description}</p>
              </div>
            </TinderCard>
          ))
        ) : (
          <p className="text-center text-lg">No more news available!</p>
        )}
      </div>
    </div>
  );
}
