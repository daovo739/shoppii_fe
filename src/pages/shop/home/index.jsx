import { Container, Row, Col } from 'react-bootstrap'
import Todo from './components/Todo/index'
import BestSeller from './components/BestSeller/index'
import FilterTotal from './components/FilterTotal/index'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)
const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

const data = {
    labels,
    datasets: [
        {
            label: 'Tuần này',
            data: labels.map(() =>
                faker.datatype.number({ min: 100, max: 1000 }),
            ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Tuần trước',
            data: labels.map(() =>
                faker.datatype.number({ min: 100, max: 1000 }),
            ),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Thống kê doanh thu tuần này và tuần trước',
        },
    },
    // maintainAspectRatio: false,
}
function ShopHomePage() {
    return (
        <>
            <Container fluid="md">
                <Row
                    className="p-3 my-4"
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                    }}
                >
                    <h2 className="fw-bold mb-0">Việc cần làm</h2>
                </Row>
                <Row>
                    <Col md={8} className="px-0 d-block">
                        <Todo />
                        <FilterTotal />
                    </Col>
                    <Col md={4}>
                        <BestSeller />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Line options={options} data={data} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ShopHomePage
