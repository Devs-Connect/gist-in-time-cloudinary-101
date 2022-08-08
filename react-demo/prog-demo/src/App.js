import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

import {thumbnail} from "@cloudinary/url-gen/actions/resize";

const App = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dqzlxcllu'
    }
  }); 

  const rawImage = cld.image('v1659981165/ACM-1995_5009_0003-r1-000001_i4qicg.jpg');
  const smallerImage = cld.image('v1659981165/ACM-1995_5009_0003-r1-000001_i4qicg.jpg');

  smallerImage
  .resize(thumbnail().width(500).height(500));

  return (
    <div>
      <AdvancedImage cldImg={rawImage} />
      <AdvancedImage cldImg={smallerImage} />
    </div>
  )
};

export default App;