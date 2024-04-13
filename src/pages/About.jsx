import React from 'react'
import Us from '../assets/About.jpg'

const About = () => {
  return (
    <section>
      <div className="about">
      <div className="about_image">
        <img src={Us} alt="" />
      </div>
      <div className="about_description">
        <h3>Why muzill and who are we?</h3>
        <p>Your questions are justified. And I promise you, we are going to answer them.</p>
        <br />
        <h3 className='question'>But First Why Did I Create A Blog? Hmm .. now that's a tricky one, Let's see</h3>
        <br />
        <br />
        <p>Something phenomenal happened after covid, more and more businesses just couldn't keep up anymore, Everything was different. From the way consumers interact with products, to the way it started to be more convenient to shop online or browse online before going shopping.</p>
        <br />
        <p>Everything we knew about selling flipped. The sad reality is that the statistics showed 1 in 4 small businesses had to shut down. That is sad. That is where <strong>muzill</strong> was born, from the pain of seeing our fellow uncles, sisters and neighbours shutting down. They just couldn't keep the margins up</p>
        <p>I am Umzansi, Ingane ka MaGeba beno Mpande, I pride myself of my country, our dynamic rainbow nation, Nkosi Sikelela i Africa.</p>
        <p>The <strong>Mission of this blog</strong> is powerful and only just a begining, My mission is to work with small to medium enterprises to help them thrive online.</p>
        <p>I write posts for people of the daily grind. Those that keep us fed, warm, entertained, healthy, and many many more. You are the movers and the shakers, you keep the lights on! I say Thank you. You did it and everyday you still keep doing it mtase!</p>
        <p>Every hero needs a helping hand sometime, Muzill would love to offer that, by sharing with you our knowledge of the digital industry, We want to help so you can keep feeding our Land, So that your services keep our beloved country going.</p>
      </div>
      </div>
    </section>
  )
}

export default About