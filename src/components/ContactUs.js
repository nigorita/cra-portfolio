import React from 'react';

let data = {
  linkedinId: 'Your LinkedIn Id'
};

export default function ContactUs() {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>LinkedIn: {data.linkedinId}</h4>
          </div>
        </aside>
      </div>
    </section>
  );
}
