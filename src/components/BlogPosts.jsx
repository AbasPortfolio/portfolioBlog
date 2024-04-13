import React from 'react'
import Blog2 from '../assets/blog-project5.jpeg'
import Blog4 from '../assets/blog-projects1.jpeg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

const BlogPosts = ({item}) => {
  return (
    <article>
        <img src={Blog4} alt={item.title} className='blog_img' />
        <div className='blog_details'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>Continue Reading <FaLongArrowAltRight/></button>
            <div>
                <IoMdHeartEmpty/>
                <p><AiOutlineComment/> 222</p>
            </div>
            <h5>Just Now</h5>
        </div>
    </article>
  )
}

export default BlogPosts