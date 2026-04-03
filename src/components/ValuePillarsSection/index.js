import React from 'react';

import SS1 from '../../img/svg/technology-innovation.svg';
import SS2 from '../../img/svg/real-time-updates.svg';
import SS3 from '../../img/svg/360-degree-collaboration.svg';
import SS4 from '../../img/svg/sustainable-approach.svg';

const features = [
  {
    id: 'constant-innovation',
    img: SS1,
    title: 'Constant Innovation in Tech.',
    description: 'Up to date with the latest printing technologies and finishes available in-house.',
    delay: '.2s'
  },
  {
    id: 'real-time-updates',
    img: SS2,
    title: 'Real-Time Factory Updates',
    description: 'Weekly updates from the press floor keep you informed at every stage of production to keep you well planned.',
    delay: '.4s'
  },
  {
    id: '360-degree-collaboration',
    img: SS3,
    title: '360 Degree Collaboration',
    description: 'Collaborations with internal and external stakeholders to ensure best printing, packing and shipping solutions for you.',
    delay: '.6s'
  },
  {
    id: 'sustainable-approach',
    img: SS4,
    title: 'Sustainable Approach',
    description: 'Using FSC paper and materials, Audited Equipment, and one tree planted per order through our Citicap Cares initiative.',
    delay: '.8s'
  }
];

const ValuePillarsSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="feature-wrapper-2">
          <div className="row justify-content-center gap-5 gap-xl-0 ">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={feature.delay}
                id={feature.id}
              >
                <div className="feature-box-items-2 text-center">
                  <div className="value-pillar-icon">
                    <img loading="lazy" src={feature.img} alt={feature.id} />
                  </div>
                  <div className="content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsSection;