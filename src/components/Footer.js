import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        padding: "5rem",
        backgroundColor: "#0e214d",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flexBasis: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "white" }}>Popular Resources</h3>
          <p>AAll Journal</p>
          <p>Asset Allocation</p>
          <p>Investing Basics</p>
          <p>Model Portfolios</p>
          <p>Stock Ideas</p>
        </div>
        <div
          style={{
            flexBasis: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "white" }}>More on AAII.com</h3>
          <p>AAII Store</p>
          <p>AAII Guides</p>
          <p>AAII Investor Classroom</p>
          <p>Local Chapters</p>
          <p>Financial Planning</p>
          <p>Investor Survey</p>
          <p>AAII publishing calendar</p>

        </div>
        <div
          style={{
            flexBasis: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "white" }}>Popular AAII Products</h3>
          <p>A+ Investors</p>
          <p>VMQ Stocks</p>
          <p>Level3</p>
          <p>AAII Dividend Investing</p>
          <p>Stock Investor Pro</p>
          <p>Stock Superstars Report</p>

        </div>
        <div
          style={{
            flexBasis: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ color: "white" }}>Popular AAII Chapters</h3>
          <p>AAII Baltimore Chapter </p>
          <p>AAII Denver Chapter</p>
          <p>AAII Los Angeles Chapter</p>
          <p>AAII Pittsburgh Chapter</p>
          <p>AAII Washington D.C Metro Chapter</p>
        </div>
      </div>
      <div
        style={{ paddingLeft: "4rem", paddingRight: "4rem", marginTop: "1rem" }}
      >
        <p>
          The American Association of Individual Investor is an idependent,
          noprofit corporation formed for the purpose of assisting individuals
          in becoming effevtive managers of their own assets through programs of
          education,information and research. Learn More
        </p>
        <p>©2022 Americal Association of Inidvidual Investors</p>
        <div>
          <a className="footer_test" href="/">
            TOP
          </a>
          <a className="footer_test" href="/">
            HOME
          </a>
          <a className="footer_test" href="/">
            CONTACT US
          </a>
          <a className="footer_test" href="/">
            WEBSITE HELP
          </a>
          <a className="footer_test" href="/">
            SALES TAX FAQS
          </a>
          <a className="footer_test" href="/">
            PRIVACY POLICY
          </a>
          <a className="footer_test" href="/">
            DISCLAIMER
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
