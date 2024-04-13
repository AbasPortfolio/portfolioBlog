import React, { useContext } from 'react'
import Blog4 from '../assets/blog-projects1.jpeg'
import { AiOutlineComment } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { UserContext } from '../context/userContext';

const SinglePost = () => {
  return (
    <section>
        <div className="body_wrapper">
            <div className='image_container'>
                <img src={Blog4} alt="" />
                <h1>This is the title of the post written in 2024</h1>
            </div>
            
            <div className="post_details">
                <h5>Posted 13 Feb 2024</h5>              
                <p><AiOutlineComment/> 222</p>
                <IoMdHeartEmpty className='heart'/>
            </div>
            <div className="body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut eum molestiae deserunt atque repudiandae. Numquam, tempore ut perferendis ipsum dignissimos vel, necessitatibus, ea nihil assumenda dolorem voluptate! Ea pariatur consequuntur minus provident tempore necessitatibus vitae quas eaque doloribus cumque, porro ipsa eius aspernatur eos a natus. Id non similique quis numquam. In, qui aut!</p>
                <br />
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserun
                    tenetur natus placeat? Cumque impedit, obcaecati ipsa recusandae sed 
                    Praesentium <strong>doloribus quibusdam aspernatur</strong> ut cum nemo libero. Adipisci veos aliquam minus ipsam laborum fugit, iusto distinctio aliquid eaque? Commodi totam, esse veniam assumenda autem ut repudiandae nisi fugit provident quam aut sunt incidunt eum dolorum voluptates facilis quos amet culpa quidem suscipit, cumque, corrupti laboriosam! Repudiandae blanditiis qui saepe similique reiciendis laboriosam soluta ab ut doloremque vel vitae architecto debitis exercitationem quas possimus porro non a, eligendi excepturi totam? Praesentium, inventore. Omnis quia, quos nisi doloribus deserunt aspernatur excepturi ipsam nesciunt, ex, laudantium voluptates? Ea facilis dolorem aliquam accusantium sequi officia, 
                    dicta ullam incidunt similique inventore voluptates, error, sapiente consequatur. quibusdam
                     exercitationem eius nesciunt <br />saepe  atque recusandae deleniti est, magnam earum aspernatur!  maxime 
                 placeat maiores accusamusre 
                  iure quos libero laboriosam id non numquam dolor optio tempore, voluptas dolore expedita?</p>

            </div>
           
        </div>
    </section>
  )
}

export default SinglePost