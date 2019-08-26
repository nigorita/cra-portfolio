import React from 'react';

let data = {
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rahul-bhatia-67ba08121/',
      className: 'fa fa-linkedin'
    },
    {
      name: 'github',
      url: 'http://github.com/rbhatia46',
      className: 'fa fa-github'
    },
    {
      name: 'skype',
      url: 'http://twitter.com/rbhatia46',
      className: 'fa fa-twitter'
    }
  ]
};

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {data.socialLinks &&
              data.socialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <i className={item.className} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div id="go-top">
          <a title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
