import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Container } from "next/app";

import styles from "./homepage.module.scss";

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="onboarding-hero">
          <img
            src="https://gh-wp.s3-ap-southeast-1.amazonaws.com/img/bg-questionnaire.svg"
            alt="greenhouse"
            className={styles.hero}
          />
          <Container fluid>
            <Row className={styles.heroTop}>
              <Col
                xl={{ span: 4, offset: 1 }}
                sm={12}
                className={"align-self-center"}
              >
                <div className={styles.heroTextArea}>
                  <h2 className={styles.heroTextAreaH1}>Grow Your Business</h2>
                  <p className={styles.heroTextAreap}>
                    Join Southeast Asia’s largest online corporate services
                    marketplace!
                  </p>
                  <Button variant="flat">APPLY NOW</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={12} className={"align-self-center"}>
                <img
                  src="https://gh-wp.s3.amazonaws.com/live-assets/chevron.svg"
                  style={{ width: "50px;" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default HomePage;
