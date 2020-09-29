import React from "react";
import { PureComponent } from "react";
import "../Navbar/Navbar.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const lineChartData = [
    { age: "(20 - 25)", Male: 4000, Female: 2400, amt: 2400 },
    { age: "(26 - 30)", Male: 3000, Female: 1398, amt: 2210 },
    { age: "(31 - 35)", Male: 2000, Female: 9800, amt: 2290 },
    { age: "(36 - 40)", Male: 2780, Female: 3908, amt: 2000 },
    { age: "(41 - 45)", Male: 1890, Female: 4800, amt: 2181 },
  ];

  const cityData = [
    { name: "Dhaka", cv: 2400, amt: 2400 },
    { name: "Chittagong", cv: 1398, amt: 2210 },
    { name: "Femi", cv: 9800, amt: 2290 },
    { name: "Chadpur", cv: 3908, amt: 2000 },
    { name: "Bogura", cv: 4800, amt: 2181 },
    { name: "Rajshahi", cv: 3800, amt: 2500 },
    { name: "Khulna", cv: 4300, amt: 2100 },
  ];
  return (
    <div className="dashboard">
      {/* <div className="sidbar">
        <Navbar></Navbar>
      </div> */}
      <div className="container">
        <h1 className="display-1 text-center">Dashboard</h1>
        <div className="row">
          <div className="col-xl-6">
            <BarChart
              width={600}
              height={300}
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Male" stackId="a" fill="#8884d8" />
              <Bar dataKey="Female" stackId="a" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="col-xl-6">
            <BarChart
              width={600}
              height={300}
              data={cityData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cv" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
