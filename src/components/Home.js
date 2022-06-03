import { Card, Row, Col } from "antd";
import React from "react";
import StockTable from "./Table";

const Home = () => {
  return (
    <>
      <div className="sec__one">
        <div className="site-card-wrapper">
          <Row
            style={{ marginBottom: "2rem" }}
            gutter={16}
            justify="space-around"
          >
            <Col span={5}>
              <Card title="Dogs of the Dow Screen" bordered={false}>
                <p>
                  "Dogs of the Dow" is an investment strategy that attempts to
                  beat the Dow Jones Industrial Average (DJIA) each year by
                  leaning portfolios toward high-yield.
                </p>
              </Card>
            </Col>
            <Col span={5}>
              <Card title="AAII Dividend investing Portfolio" bordered={false}>
                <p>
                  The AAII Dividend Investing portfolio seeks income and growth
                  from a diversified portfolio of domestic common stocks paying
                  cash dividends.
                </p>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="International Stock Winners" bordered={false}>
                <p>
                  Get live global stock market and sector indices trading data
                  And find latest news & articles on Global Market, world Market
                  only at Moneycontrol.com.
                </p>
              </Card>
            </Col>
            <Col span={5}>
              <Card title="Highest Yielding " bordered={false}>
                <p>
                  These picks, from energy to tech, all offer dividend yields of
                  more than 4.5%. ... doesn't also lower its dividend, the
                  dividend yield may look higher.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <StockTable />
    </>
  );
};
export default Home;
