import Chart from 'react-google-charts';
import './dashboard.css';
import { useState } from 'react';

function Dashboard() {
  const TITULO = 'Quantidade de cadastros realizados no primeiro semestre';
  const ANIMACAO = { duration: 1000, easing: 'out', startup: true };

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ]);

  return (
    <div>
      <h1>Dashboard</h1>;
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{ title: TITULO }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{ title: TITULO, is3D: true }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{ title: TITULO, pieHole: 0.4 }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'BarChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: { width: '50%' },
          hAxis: { title: 'Quantidade' },
          vAxis: { title: 'Mês' },
          animation: ANIMACAO,
        }}
      />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'LineChart'}
        data={dados}
        options={{
          title: TITULO,
          hAxis: { title: 'Mês' },
          vAxis: { title: 'Quantidade' },
          animation: ANIMACAO,
        }}
      />
    </div>
  );
}

export default Dashboard;
