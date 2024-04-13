import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import Blog1 from '../assets/blog-project.png'
import Blog2 from '../assets/blog-project5.jpeg'
import Blog3 from '../assets/blog-project7.jpg'
import Blog4 from '../assets/blog-projects1.jpeg'
import Blog5 from '../assets/blog-projects2.jpeg'
import { Link } from 'react-router-dom';


const PostItem = ({item}) => {
  return (
    <article className='lg_post'>
        <img src={Blog4} alt={item.title} />
        <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <Link to={`post/${item.id}`}><button>Continue Reading <FaLongArrowAltRight/></button></Link>
            <div className="post_details">
                <IoMdHeartEmpty className='heart'/>
                <p><AiOutlineComment/> 222</p>
            </div>
            <h5>By Abas Muzi</h5>
        </div>
    </article>
  )
}

export default PostItem