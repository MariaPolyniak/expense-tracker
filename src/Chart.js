import {Doughnut} from "react-chartjs-2";

const Chart = () => {
    return(
        <Doughnut
            data={{
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#CDF0EA',
                        '#F9F9F9',
                        '#F6C6EA',
                        '#C490E4'
                    ],
                    hoverOffset: 4
                }]
            }}
            height={500}
            width={500}
            options={{
                responsive: false,
                maintainAspectRatio: false,
            }}
        />
    )
}

export default Chart;