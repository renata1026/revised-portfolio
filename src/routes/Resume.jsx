import React from 'react';
import Question from '../assets/question-mark.png';
import Certificate from '../assets/certificate.png';
import Yoga from '../assets/yoga.jpeg';
import Climbing from '../assets/climbing.jpeg';

function Resume() {
  return (
    <section
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/mountain.jpg)`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      className="timeline"
      id="timeline"
    >
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2023</h3>
          <span>Seeking web developer job </span>
          <p>
            Hello! I'm a <em>dedicated, detail-oriented and creative</em> web
            developer who gives their all. If you're seeking a perfect teammate,
            let's connect and see if were a good fit!{' '}
            <a href="mailto:rcreinartz@gmail.com">Contact</a>
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2023</h3>
          <span>Full Stack Bootcamp</span>
          <p>
            Currently, attending hackmyhead a project based bootcamp where I am
            learning full stack technologies including: react, prisma, express
            server, and cockroach db.
          </p>
        </div>
      </div>

      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2022-2023</h3>
          <span>Web Development Immersive Bootcamp</span>
          <img
            className="square"
            src={Certificate}
            alt="web development certificate"
            loading="lazy"
          />
          <p>
            I graduated from Juno College's
            <strong>Immersive Web Dev Bootcamp </strong>(with some
            <em>Web Dev and JS prep course</em> thrown in for good measure!)
            <br />
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2021-Present</h3>
          <span>Freelancer</span>
          <p>
            I craft sleek, stylish <em>websites</em>. Can set up Google
            Analytics and integrate email marketing systems
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2018-2021</h3>
          <span>Online English Teacher & Evaluator</span>
          <p>
            Taught ESL students via Zoom in both 1-to-1 and 1-to-10 settings,
            following a structured English curriculum. Reviewed 1000+ teacher
            recordings & wrote evaluation reports
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2014-2017</h3>
          <span>Accounting Manager</span>
          <p>
            Switched company software to QuickBooks Pro, implemented
            accrual-based accounting with monthly cutoffs for 98% more accurate
            reporting. Monthly cash flow report and financial package for board
            of directors led to better spending practices and budget balance.
          </p>
        </div>
      </div>
      <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2015</h3>
          <span>Chartered Professional Accountant</span>
        </div>
      </div>
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2008-2014</h3>
          <span>Previous Experiences</span>
          <p>
            Worked in various positions as a financial analyst, accountant, and
            senior financial analyst from billion dollar organizations to
            non-profits. I created budgets, forecasts, and financial reports. I
            also analyzed financial data and made recommendations to improve
            financial performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
