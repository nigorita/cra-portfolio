import React from 'react';

let data = {
  education: [
    {
      UniversityName: 'The LNM Insitute of Information Technology',
      specialization: 'Some specialization',
      MonthOfPassing: 'Aug',
      YearOfPassing: '2020',
      Achievements: 'Some Achievements'
    },
    {
      UniversityName: 'Some University',
      specialization: 'Some specialization',
      MonthOfPassing: 'Jan',
      YearOfPassing: '2018',
      Achievements: 'Some Achievements'
    }
  ],
  work: [
    {
      CompanyName: 'Some Company',
      specialization: 'Some specialization',
      MonthOfLeaving: 'Jan',
      YearOfLeaving: '2018',
      Achievements: 'Some Achievements'
    },
    {
      CompanyName: 'Some Company',
      specialization: 'Some specialization',
      MonthOfLeaving: 'Jan',
      YearOfLeaving: '2018',
      Achievements: 'Some Achievements'
    }
  ],
  skillsDescription: 'Your skills here',
  skills: [
    {
      skillname: 'HTML5'
    },
    {
      skillname: 'CSS'
    },
    {
      skillname: 'Reactjs'
    }
  ]
};

export default function Resume() {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.education &&
            data.education.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.work &&
            data.work.map((item, index) => {
              return (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{' '}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{data.skillsDescription}</p>

          <div className="bars">
            <ul className="skills">
              {data.skills &&
                data.skills.map((item, index) => {
                  return (
                    <li key={index}>
                      <span
                        className={`bar-expand ${item.skillname.toLowerCase()}`}
                      ></span>
                      <em>{item.skillname}</em>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
