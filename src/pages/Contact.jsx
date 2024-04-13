import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import { MdAddCall } from "react-icons/md";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section>
      <div className="contact">
        <div className="social_contact">
          <div>
            <Link target={"_blank"} to={'https://www.abas.org.za'}>https://www.abas.org.za</Link>
            <TbWorldWww/>
          </div>
          <div>
            <p>+27 60-317-7956</p>
            <MdAddCall/>
          </div>
        </div>
        <div className="contact_form">
          <h2>Write Us, We Would Love To Hear From You</h2>
          <form action="">
            <div>
              <input type="text" placeholder='Name' />
            </div>
            <div>
              <input type="text" placeholder='Email' />
            </div>
            <div>
              <textarea rows={13} placeholder='Message' />
            </div>
          </form>
          <button>Send</button>
        </div>
      </div>
    </section>
  )
}

export default Contact