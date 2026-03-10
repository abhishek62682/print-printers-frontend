import React from 'react';

import MS1 from '../../img/marquee-box.png'

const MarqueeSection = (props) => {
    return (
       <div className={"section-padding pb-0 " + props.hclass}>
  <div className="mycustom-marque">
    <div className="scrolling-wrap">

      <div className="comm">
        <div className="cmn-textslide">Printed in India</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Delivered to New York</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">London</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Melbourne</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Toronto</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Los Angeles</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">and across the world</div>
        <div><img src={MS1} alt="img" /></div>
      </div>

      <div className="comm">
        <div className="cmn-textslide">Printed in India</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Delivered to New York</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">London</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Melbourne</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Toronto</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">Los Angeles</div>
        <div><img src={MS1} alt="img" /></div>

        <div className="cmn-textslide">and across the world</div>
        <div><img src={MS1} alt="img" /></div>
      </div>

    </div>
  </div>
</div>
    );
};

export default MarqueeSection;