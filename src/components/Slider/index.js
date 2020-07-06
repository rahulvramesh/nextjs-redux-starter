import React from "react";

import { Row, Col } from "react-bootstrap";

import styles from "./slider.module.scss";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <Row className={styles.slider}>
          <Col xl={6} className={"justify-content-center align-self-center "}>
            <div className="d-flex flex-row">
              <div className="p-2">
                <img
                  src="https://gh-wp.s3.amazonaws.com/live-assets/portrait.png"
                  width="160px"
                />
              </div>
              <div className="p-2 text-left justify-content-center align-self-center ">
                <strong className={styles.userHeader}>Raymond Fung</strong>
                <p className={styles.userDescription}>
                  Founder & Managing Director, Bayswater Consulting Group
                </p>
              </div>
            </div>
          </Col>
          <Col xl={6} className={"justify-content-center align-self-center "}>
            <p className={styles.testimonialContent}>
              <span className={styles.quote}>“</span> We’re in the process of
              digitizing our business, and the team at Greenhouse provide modern
              and forward thinking solutions. Their marketplace and account
              management tools make it easy to grow revenues and improve our
              workflow. Great team, great product.{" "}
              <span className={styles.quote}>”</span>
            </p>
          </Col>
        </Row>
        <Row className={"justify-content-center"}>
          <Col xl={2} className={"text-center"}>
            <div className={"d-flex flex-row "}>
              <div className={styles.dotSlider + " p-2"}></div>
              <div className={styles.dotSlider + " p-2 bg-white"}></div>
              <div className={styles.dotSlider + " p-2 bg-white"}></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slider;
