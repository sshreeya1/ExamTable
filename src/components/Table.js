import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
const columns = [
  {
    title: "Ticker",
    dataIndex: "ticker",
    sorter: {
      compare: (a, b) => a.ticker.localeCompare(b.ticker),
    },
  },
  {
    title: "Company",
    dataIndex: "company",
    sorter: {
      compare: (a, b) => a.company.localeCompare(b.company),
    },
  },
  {
    title: "Sector",
    dataIndex: "sector",
    sorter: {
      compare: (a, b) => a.sector.localeCompare(b.sector),
    },
  },
  {
    title: "Industry",
    dataIndex: "industry",
    sorter: {
      compare: (a, b) => a.industry.localeCompare(b.industry),
      multiple: 1,
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: {
      compare: (a, b) => a.price - b.price,
    },
  },
  {
    title: "Volume-Avg Daily(K)",
    dataIndex: "volumeAvg",
    sorter: {
      compare: (a, b) => a.volumeAvg - b.volumeAvg,
    },
  },
  {
    title: "Market Cap",
    dataIndex: "mktcap",
    sorter: {
      compare: (a, b) => a.mktcap - b.mktcap,
    },
  },
  {
    title: "Dividend",
    dataIndex: "dividend",
    sorter: {
      compare: (a, b) => a.dividend - b.dividend,
    },
  },
  {
    title: "Exchange",
    dataIndex: "exchange",
    sorter: {
      compare: (a, b) => a.ticker.localeCompare(b.ticker),
    },
  },
  {
    title: "ADR",
    dataIndex: "adr",
    render: (text) => String(text),
    sorter: {
      compare: (a, b) => a.ticker.localeCompare(b.ticker),
    },
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const StockTable = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    console.log("here");
    async function getStockData() {
      const response = await axios.get("/screenRating");
      console.log("response", response);
      setStockData(response.data);
    }
    getStockData();
  }, []);

  return (
    <Table
      scroll={{ x: true }}
      columns={columns}
      dataSource={stockData}
      onChange={onChange}
    />
  );
};

export default StockTable;
