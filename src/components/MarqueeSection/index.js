import React from 'react';
import Star from '../../img/star.png';

const locations = [
  "Printed in India",
  "Delivered to New York",
  "London",
  "Melbourne",
  "Toronto",
  "Los Angeles",
  "and across the world"
];

const MarqueeSection = () => {
  return (
    <div className="marquee-section section-padding pb-0 fix">
      <div className="mycustom-marque">
        <div className="scrolling-wrap bg-style">
          {[...Array(2)].map((_, idx) => (
            <div className="comm cmn-style-3" key={idx}>
              {locations.map((loc, i) => (
                <React.Fragment key={i}>
                  <div className="cmn-textslide">{loc}</div>
                  <div>
                    <img src={Star} alt="separator" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;