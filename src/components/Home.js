import { Card, Row, Col, Tag, Divider } from "antd";
import React from "react";
import Footer from "./Footer";
import StockTable from "./Table";
import { StarFilled, PlusCircleFilled } from '@ant-design/icons'


const Home = () => {
  return (
    <>
      <div className="sec__one">
        <div className="site-card-wrapper">
          <Row
            style={{ marginBottom: "2rem" }}
            gutter={[24, 16]}
            justify="space-around"
          >

            <Col span={6}>
              <Card bordered={true}>
                <div className="tag-design">
                  <Tag color="#909193">STOCK SCREEN</Tag>
                </div>
                <StarFilled />
                <h1>Dogs of the Dow Screen</h1>
                <p>
                  "Dogs of the Dow" is an investment strategy that attempts to
                  beat the Dow Jones Industrial Average (DJIA) each year by
                  leaning portfolios toward high-yield.
                </p>
                <Divider />
                <Row gutter={12}>
                  <Col span={16}>
                    <p style={{ lineBreak: "15" }}>Performance since inception:  </p>
                  </Col>
                  <Col span={2}>
                    <p>3.6%</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={true}>
                <div className="tag-design">
                  <Tag color="#909193">PREMIUM STOCK SCREEN</Tag>
                </div>
                <StarFilled />
                <h1>AAII Dividend investing Portfolio</h1>
                <p>
                  The AAII Dividend Investing portfolio seeks income and growth
                  from a diversified portfolio of domestic common stocks paying
                  cash dividends.
                </p>
                <Divider />
                <Row gutter={12}>
                  <Col span={16}>
                    <p>Peoples Bancrop Inc:  </p>
                  </Col>
                  <Col span={2}><span>
                    <PlusCircleFilled style={{ fontSize: '12px', color: '#08c' }} title />

                  </span>
                  </Col>
                </Row>

              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={true}>
                <div className="tag-design">
                  <Tag color="#909193">FIRST CUT ETF SCREEN</Tag>
                </div>
                <h1>International Stock Winners</h1>
                <p>
                  Get live global stock market and sector indices trading data
                  And find latest news & articles on Global Market, world Market
                  only at Moneycontrol.com.
                </p>
                <Divider />
                <Row gutter={12}>
                  <Col span={16}>
                    <p>Xtrackers Harvest CSI:  </p>
                  </Col>
                  <Col span={3}>
                    <PlusCircleFilled style={{ fontSize: '12px', color: '#08c' }} label="asd" />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Card bordered={true}>
                <div className="tag-design">
                  <Tag color="#909193"> FIRST CUT MUTUAL FUND SCREEN</Tag>
                </div>
                <h1>Highest Yielding</h1>
                <p>
                  These picks, from energy to tech, all offer dividend yields of
                  more than 4.5%. ... doesn't also lower its dividend, the
                  dividend yield may look higher.
                </p>
                <Divider />
                <Row gutter={12}>
                  <Col span={16}>
                    <p>American century shot:  </p>
                  </Col>
                  <Col span={2}>
                    <span>
                      <PlusCircleFilled style={{ fontSize: '12px', color: '#08c' }} label="asd" />

                    </span>
                  </Col>
                </Row>

              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ padding: "2rem" }}>
        <StockTable />
      </div>

      <Footer />
    </>
  );
};
export default Home;
