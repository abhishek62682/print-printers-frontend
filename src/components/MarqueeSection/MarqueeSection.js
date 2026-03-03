import React from 'react';

import MS1 from '../../img/marquee-box.png'

const MarqueeSection = (props) => {
    return (
        <div className={"section-padding pb-0 " +props.hclass}>
            <div className="mycustom-marque">
                <div className="scrolling-wrap">
                    <div className="comm">
                        <div className="cmn-textslide">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide color-2">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                        <div className="cmn-textslide">Trusted by publishers across the world!
</div>
                        <div><img src={MS1} alt="img" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;