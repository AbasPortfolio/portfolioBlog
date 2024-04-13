import React from 'react'
import BlogPosts from '../components/BlogPosts'
import Blog1 from '../assets/blog-project.png'
import Blog2 from '../assets/blog-project5.jpeg'
import Blog3 from '../assets/blog-project7.jpg'
import Blog4 from '../assets/blog-projects1.jpeg'
import Blog5 from '../assets/blog-projects2.jpeg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';


const Blog = () => {
  const Data = [
    {
        title: "This is the title",
        image: '../assets/blog-project.png',
        id: 1,
        description: "This is the description of the dummy data that i am going to use in the blog.This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i am going to use in the blog..."
    },
    {
        title: "This is the title",
        image: {Blog2},
        id: 2,
        description: "This is the description of the dummy data that i am going to use in the blog am going to use in the blog.This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i..."
    },
    {
        title: "This is the title",
        image: {Blog3},
        id: 2,
        description: "This is the description of the dummy data that i am going to use in the blog am going to use in the blog.This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i..."
    },
    {
        title: "This is the title",
        image: {Blog4},
        id: 2,
        description: "This is the description of the dummy data that i am going to use in the blog am going to use in the blog.This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i am going to use in the blog This is the description of the dummy data that i..."
    }
]
  return (
    <section>
      <div className="blog_post">
        <Splide hasTracks={false} options={
          {pagination: false}
        }>
        {Data.map(item => 
          <SplideSlide><BlogPosts key={item.id} item={item}/></SplideSlide>
        )}
        </Splide>
        </div>
    </section>
  )
}

export default Blog