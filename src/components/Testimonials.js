import React from 'react';

let data = {
  testimonials: [
    {
      description: 'This is a sample testimonial',
      name: 'Some technical person'
    },
    {
      description: 'This is a sample testimonial',
      name: 'Some technical person'
    }
  ]
};

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>
          <div className="ten columns flex-container">
            <div className="flexslider">
              <ul className="slides">
                {data.testimonials &&
                  data.testimonials.map((item, index) => {
                    return (
                      <li key={index}>
                        <blockquote>
                          <p>{item.description}</p>
                          <cite>{item.name}</cite>
                        </blockquote>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
