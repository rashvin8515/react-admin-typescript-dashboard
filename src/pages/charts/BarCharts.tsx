import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const BarCharts = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="chart-container">
                <h1>Bar Charts</h1>
                <section>
                    <BarChart
                        data_1={[300, 400, 100, 200, 190, 300, 990]}
                        data_2={[200, 100, 250, 500, 300, 240, 500]}
                        title_1="Products"
                        title_2="Users"
                        bgColor_1={`hsl(260,50%,30%)`}
                        bgColor_2={`hsl(360,90%,90%)`}
                    />
                    <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
                </section>
                <section>
                    <BarChart
                        horizontal={true}
                        data_1={[200,444,343,556,778,455,990]}
                        data_2={[]}
                        title_1="Products"
                        title_2=""
                        bgColor_1={`hsl(260,50%,30%)`}
                        bgColor_2=''
                        labels={months}
                    />
                    <h2>Orders throught the year</h2>
                </section>
            </main>
        </div>
    )
}

export default BarCharts;