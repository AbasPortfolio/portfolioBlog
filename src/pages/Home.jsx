import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../assets/Hero.png'

import PostItem from '../components/PostItem'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
/* dummy thumbnails */



const Home = () => {
  const Data = [
    {
        title: "Is it true that business owners make...",
        id: 1,
        description: "Lorem ipsum dolor, sit amet consectetur beatae quod quidem! Alias voluptatibus nostrum, veritatis  rerum itaque deleniti mollitia vero iste ullam sequi explicabo suscipit neque sunt hic. Veniam ea in quae ad facere totam, quo aliquam cupiditate iusto perspiciatis"
    }
]
  return (
    <section>
      <div className="wrapper">
      
        <div className="bg">
        
          <img src={Hero} alt="" />
          <div className="content">
            <h1>Hello there,<br/>Welcome</h1>
          </div>

          
          
        </div>
        <div className="latest">
          <h2>Latest Posts</h2>
          {Data.length > 0 ?<div className='grid'>
              {Data.map(item =>
                <PostItem key={item.id} item={item}/>
              )}
          </div> : <h2>posts not found</h2>}
        </div>

      </div>
    </section>
  )
}

export default Home