import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

import Slider from "../../components/Slider";

import styles from "./homepage.module.scss";

class HomePage extends Component {
  render() {
    return (
      <>
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
            <Col xl={12} className={styles.alignCenter}>
              <img
                src="https://ghstatic.greenhouse.co/live-assets/chevron.svg"
                style={{ width: "50px", cursor: "pointer" }}
              />
            </Col>
          </Row>

          <Row>
            <Col xl={12} className={"d-flex justify-content-center mt-90"}>
              <h2 className={styles.customh2}>
                From client acquisition to payments, we help you go digital
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xl={12} className={"d-flex justify-content-center mt-25"}>
              <img
                src="https://gh-wp.s3.amazonaws.com/live-assets/leaf-separator.png"
                style={{ width: "32px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col xl={12} className={"d-flex justify-content-center mt-25"}>
              <p className={styles.pCustomHeaderContent}>
                Companies from all over the world use Greenhouse to source
                corpoate services and manage their entry into, and across
                Southeast Asia.
              </p>
            </Col>
          </Row>

          <Row className={"justify-content-center align-self-center mt-80"}>
            <Col xl={3} className={"text-center"}>
              <img
                src="https://ghstatic.greenhouse.co/live-assets/icon-search-graph.svg"
                width="50px"
              />
              <div className={styles.flowHeader + " mt-10"}>
                Deal and Process management tools
              </div>
              <p className={styles.flowPara}>
                We provide suppliers free access to our deal management
                solutions, which include lead and account management, secure
                document exchange, and billing platform to easily send invoices
                and collect payments.
              </p>
              <div className={styles.vl}></div>
            </Col>
            <Col xl={3} className={"text-center"}>
              <img
                src="https://ghstatic.greenhouse.co/live-assets/icon-megaphone.svg"
                width="50px"
              />
              <div className={styles.flowHeader + " mt-10"}>
                Free marketing opportunities
              </div>

              <p className={styles.flowPara}>
                Leverage Greenhouse’s marketing activities and get in front of
                clients searching for corporate service providers that match
                your expertise. By creating your account on Greenhouse, you will
                instantly appear in our search results and attract companies
                interested in purchasing your services.
              </p>
              <div className={styles.vl}></div>
            </Col>
            <Col xl={3} className={"text-center"}>
              <img
                src="https://ghstatic.greenhouse.co/live-assets/icon-money.svg"
                width="40px"
              />
              <div className={styles.flowHeader + " mt-10"}>
                Payment protection
              </div>
              <p className={styles.flowPara}>
                Our Service Providers are protected by Escrow to provide extra
                measures of protection. We also handle the payment collection,
                typically 100% upfront so you can focus on closing more deals
                and execute your projects.
              </p>
            </Col>
          </Row>
          <Row className={"justify-content-center align-self-center mt-80"}>
            <Col xl={6} className={"text-center"}>
              <img
                src="https://ghstatic.greenhouse.co/live-assets/inquiries-i-mac-left.png"
                className={styles.inquiriesImage}
              />
            </Col>
            <Col xl={6} className={"align-self-center"}>
              <div className={"W-500 mt-25"}>
                <span className={styles.labelTechDriven}>Tech Driven</span>
                <h5 className={styles.workflowHeader}>
                  Workflow solutions to grow your business
                </h5>
                <p className={styles.workflowPDescription}>
                  Corporate services are increasingly moving online to scale,
                  and modernize customer experience. We’re here to help you
                  adapt. Greenhouse’s technology allows corporate service
                  providers to quickly connect, seamlessly collaborate, and
                  securely transact business. We equip you with tools like:
                </p>
                <ul className={styles.leafBullet}>
                  <li>Profile Management</li>
                  <li>Account & Client Management</li>
                  <li>Secure Document Exchange</li>
                  <li>Billing Software</li>
                  <li>Communication Solutions</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row
            className={
              styles.clinetUse + " justify-content-center align-self-center"
            }
          >
            <Col xl={10} className={"d-flex align-items-center text-center"}>
              <div className={styles.clientCard}>
                <h5 className={styles.clientHeader}>
                  What Clients use Greenhouse?
                </h5>
                <img
                  src="https://gh-wp.s3.amazonaws.com/live-assets/leaf-separator.png"
                  style={{ width: "32px" }}
                />
                <Row>
                  <Col xl={4}>
                    <img
                      src="https://ghstatic.greenhouse.co/live-assets/draw-desk-man.svg"
                      width="150px"
                      height="100px"
                      style={{ marginTop: "75px" }}
                    />
                    <div className={styles.whyClinet}>INDIVIDUALS</div>
                    <p className={styles.whyClinetP}>
                      Both first time and serial entrepreneurs are reaching out
                      to Greenhouse to get help on services like company
                      formation, work permits and bank account set up.
                    </p>
                    <div className={styles.vl} style={{ height: "80%" }}></div>
                  </Col>
                  <Col xl={4}>
                    <img
                      src="https://ghstatic.greenhouse.co/live-assets/draw-rocket-launch.svg"
                      width="150px"
                      height="100px"
                      style={{ marginTop: "75px" }}
                    />
                    <div className={styles.whyClinet}>STARTUPS</div>
                    <p className={styles.whyClinetP}>
                      Our growing start-up and scale-up clients trust Greenhouse
                      to source service providers who can help them enter
                      multiple markets across the region at the same time with
                      ease.
                    </p>
                    <div className={styles.vl} style={{ height: "80%" }}></div>
                  </Col>
                  <Col xl={4}>
                    <img
                      src="https://ghstatic.greenhouse.co/live-assets/draw-building.svg"
                      width="180px"
                      height="100px"
                      style={{ marginTop: "75px" }}
                    />
                    <div className={styles.whyClinet}>SMEs</div>
                    <p className={styles.whyClinetP}>
                      Our SME customers generally require more services at once
                      and they turn to Greenhouse to source services like
                      company formation, director services, payroll, accounting,
                      tax filing, legal advice, and work permit management.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row
            className={" justify-content-center align-self-center  text-center"}
          >
            <Col xl={4}>
              <h5 className={styles.clientHeader}>How it works</h5>
              <img
                src="https://gh-wp.s3.amazonaws.com/live-assets/leaf-separator.png"
                style={{ width: "32px" }}
              />
            </Col>
          </Row>
          <Row
            className={
              " justify-content-center align-self-center  text-center mt-80"
            }
          >
            <Col xl={10} className={styles.h50}>
              <Row>
                <Col xl={3} className="justify-content-center text-center">
                  <div style={{ height: "160px" }}>
                    <img
                      src="https://gh-wp.s3.amazonaws.com/live-assets/vendor-selection.png"
                      style={{ width: "175px" }}
                    />
                  </div>

                  <div
                    className={
                      styles.howItworksHeader + " align-self-center  mt-20"
                    }
                  >
                    Sign up and create your profile
                  </div>
                  <p className={styles.howItworksHeaderDescription}>
                    As soon as you complete your profile, you will be
                    discoverable on our Marketplace by thousands of companies
                    interested in purchasing your services.
                  </p>
                </Col>
                <Col xl={3}>
                  <div style={{ height: "160px" }}>
                    <img
                      src="https://gh-wp.s3.amazonaws.com/live-assets/service-inquiry.png"
                      style={{ width: "175px" }}
                    />
                  </div>
                  <div
                    className={
                      styles.howItworksHeader + " align-self-center  mt-20"
                    }
                  >
                    Start receiving hot leads
                  </div>
                  <p className={styles.howItworksHeaderDescription}>
                    Greenhouse.co qualifies all incoming leads before they are
                    connected to you. Therefore, you will only be connected to
                    qualified leads, with real interest in your services.
                  </p>
                </Col>
                <Col xl={3}>
                  <div style={{ height: "160px" }}>
                    <img
                      src="https://gh-wp.s3.amazonaws.com/live-assets/confirm-payment.png"
                      style={{ width: "175px" }}
                    />
                  </div>
                  <div
                    className={
                      styles.howItworksHeader + " align-self-center  mt-20"
                    }
                  >
                    Manage everything in one place
                  </div>
                  <p className={styles.howItworksHeaderDescription}>
                    Manage the entire client cycle within Greenhouse.co. From
                    client acquisition and account management to invoicing and
                    service delivery — all in one platform.
                  </p>
                </Col>
                <Col xl={3}>
                  <div style={{ height: "160px" }}>
                    <img
                      src="https://gh-wp.s3.amazonaws.com/live-assets/service-delivery.png"
                      style={{ height: "130px" }}
                      className={"align-self-center"}
                    />
                  </div>
                  <div
                    className={
                      styles.howItworksHeader + " align-self-center  mt-20"
                    }
                  >
                    Collect your payment
                  </div>
                  <p className={styles.howItworksHeaderDescription}>
                    Once your newly closed client has made payment via
                    Greenhouse, we will retain our agreed commission, and you
                    will receive the net amount due for the services purchased.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            className={
              styles.testimonials +
              " justify-content-center align-self-center text-center"
            }
          >
            {/* <img
              src="https://gh-wp.s3.amazonaws.com/live-assets/quote-leaves-t.svg"
              style={{ width: "35px", height: "35px", position: "absolute" }}
            /> */}
            <Col
              xl={10}
              className={"justify-content-center align-self-center text-center"}
            >
              {/* <img
                src="https://gh-wp.s3.amazonaws.com/live-assets/quote-leaves-t.svg"
                style={{ width: "35px" }}
                className={styles.leafeIconTop}
              /> */}
              <Slider />
              {/* <img
                src="https://gh-wp.s3.amazonaws.com/live-assets/quote-leaves-t.svg"
                style={{ width: "35px" }}
              /> */}
            </Col>
          </Row>
          <Row>
            <Col xl={12} className={"d-flex justify-content-center mt-90"}>
              <h2 className={styles.customh2}>Frequently Asked Questions</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={12} className={"d-flex justify-content-center mt-20"}>
              <img
                src="https://gh-wp.s3.amazonaws.com/live-assets/leaf-separator.png"
                style={{ width: "32px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col xl={12} className={"d-flex justify-content-center mt-20"}>
              <p className={styles.faqP}>
                You may still have some doubts. Hopefully, the question and
                answers below help clarify any uncertainties you have in your
                mind.
              </p>
            </Col>
          </Row>
          <Row>
            <div className={styles.faqContent + " " + styles.leftColumn}>
              <div className={styles.leftColumnText}>
                <strong className={styles.faqContentStrong}>
                  How much does Greenhouse cost?{" "}
                </strong>
                <p className={styles.faqContentStrongP}>
                  It is 100% free to create and account, access the growing pool
                  of new leads, use our account management and secure document
                  exchange solutions and billing software.
                </p>
                <strong className={styles.faqContentStrong}>
                  How does Greenhouse get paid?{" "}
                </strong>
                <p className={styles.faqContentStrongP}>
                  We only make money of you make money. After every closed deal,
                  Greenhouse retains a small commission and pays service
                  providers the net amount due for the services purchased (see
                  more details in our <a href="">Terms of Service</a>).
                </p>
                <strong className={styles.faqContentStrong}>
                  How long does it take to get approved?{" "}
                </strong>
                <p className={styles.faqContentStrongP}>
                  We are always eager to onboard great corporate service
                  providers, and aim to respond to applicants as quickly as
                  possible. Depending on the number of applicants, approval time
                  can range from 24 hours to a couple of weeks.
                </p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <img
                src="https://gh-wp.s3.amazonaws.com/live-assets/doc-storage-mac-book-front.png"
                height="700px"
              />
            </div>
          </Row>
          <Row
            className={
              styles.footerBg + " justify-content-center align-self-center"
            }
          >
            <Col xl={8} className={styles.cardFooter}>
              <Row
                className={
                  " justify-content-center align-self-center  text-center mt-20"
                }
              >
                <Col xl={5}>
                  <h5 className={styles.clientHeader}>Earn up to 1.000 USD</h5>
                  <img
                    src="https://gh-wp.s3.amazonaws.com/live-assets/leaf-separator.png"
                    style={{ width: "32px" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xl={6} className="text-center">
                  <div className={styles.whyClinet}>Invite companies</div>
                  <p className={styles.earnP}>
                    Share Greenhouse with other companies and they will get $100
                    to use towards services on Greenhouse. After their first
                    purchase is completed, you will receive $100 credit too.
                  </p>
                  <Button variant="invite">Invite</Button>
                  <div className={styles.vl} style={{ height: "80%" }}></div>
                </Col>
                <Col xl={6} className="text-center">
                  <div className={styles.whyClinet}>
                    Recommend Service Providers
                  </div>
                  <p className={styles.earnP}>
                    Recommend service providers to Greenhouse and get $100 to
                    use towards services on Greenhouse. After the service
                    provider is accepted to our platform, they will receive $100
                    off from their first invoice too.
                  </p>
                  <Button variant="invite">Recommend</Button>
                </Col>
              </Row>
            </Col>
            <Row>
              <Col
                xl={12}
                className={
                  "justify-content-center align-self-center  text-center"
                }
              >
                <h3 className={styles.singupText}>
                  Sign up for Greenhouse and apply now.
                </h3>
                <Button variant="flat-large mt-10">Sign Up</Button>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col>ABC</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
