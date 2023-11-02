import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs";
import UserImg from "../assets/userpic.png"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import data from "../assets/data.json"
import { BarChart, DougnutChart } from "../components/Charts";
import { BiMaleFemale } from 'react-icons/bi';
import Table from "../components/DashboardTable";

function Dashboard() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={UserImg} alt="User" />
        </div>
        <section className="widgetcontainer">
          <WidgetItem percent={40} amount={true} value={3400000} heading="Reveneu"
            color="rgb(0,115,255)" />
          <WidgetItem percent={-14} amount={false} value={400} heading="Users"
            color="rgb(0,198,202)" />
          <WidgetItem percent={80} amount={false} value={23554} heading="Transactions"
            color="rgb(255,196,0)" />
          <WidgetItem percent={30} amount={true} value={1000} heading="Products"
            color="rgb(75,0,265)" />
        </section>
        <section className="graphcontainer">
          <div className="reveneu-chart">
            <h2>Reveneu & Transaction</h2>
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190]} data_2={[200, 444, 343, 556, 237, 755, 190]}
              title_1="Reveneu"
              title_2="Transaction"
              bgColor_1="rgb(0,11,5255"
              bgColor_2="rgba(53,162,235,0.8)" />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>

              {
                data.categories.map((i) => (
                  <CategoryItem
                    key={i.heading}
                    heading={i.heading}
                    value={i.value}
                    color={`hsl(${i.value * 5},${i.value}%,50%)`} />
                ))
              }
            </div>
          </div>
        </section>
        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DougnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={['hsl(340,82%,56%)', 'rgba(53,162,235,0.8)']}
              cutout={90} />
            <p><BiMaleFemale /></p>
          </div>
          <Table data={data.transaction}/>
          <div>

          </div>
        </section>
      </main>
    </div>
  )
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({ heading, value, percent, color, amount }: WidgetItemProps) =>
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {
        percent > 0 ? <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span> : <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      }
    </div>
    <div className="widgetCircle" style={{
      background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`
    }}>
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>;

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({ color, value, heading }: CategoryItemProps) =>
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width: `${value}%`
      }}>
      </div>
    </div>
    <span>{value}%</span>
  </div>;
export default Dashboard