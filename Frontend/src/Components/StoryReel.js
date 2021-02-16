import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>
      <a href='https://www.who.int/'>
        <Story
          image='https://images.podigee-cdn.net/400x,spdMrY5wNAYE4rI7dsCpGk3QTkIwnXQamipu4D5dCLTE=/https://cdn.podigee.com/uploads/u8121/4386c18f-cf9d-44d4-8644-badbd4924940.jpg'
          profileSrc='https://www.barcelonagse.eu/sites/default/files/styles/bgse_image_content_image/public/pages/covid-response.jpg'
          title='Response Center'
        />
      </a>
      <a href='https://www.who.int/'>
        <Story
          image=''
          profileSrc='https://pbs.twimg.com/profile_images/875476478988886016/_l61qZdR_400x400.jpg'
          title='WHO'
        />
      </a>
      <a href='https://www.who.int/'>
        <Story
          image='https://images-na.ssl-images-amazon.com/images/I/41zQKTCIBML._SX322_BO1,204,203,200_.jpg'
          profileSrc='https://images-na.ssl-images-amazon.com/images/I/41zQKTCIBML._SX322_BO1,204,203,200_.jpg'
          title='COVID Track'
        />
      </a>
    </div>
  );
}

export default StoryReel;
