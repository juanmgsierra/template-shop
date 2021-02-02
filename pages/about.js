import Header from "../layout/header";
import "react-multi-carousel/lib/styles.css";
import Section from "../components/Section";
import Simple from "../components/Simple";
import React, { Fragment } from "react";
import UAParser from "ua-parser-js";

const AboutPage = ({ deviceType }) => {
  return (
    <Fragment>
      <Header />
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
      
    </Fragment>
    )
}

AboutPage.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  console.log(result.device)
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default AboutPage;