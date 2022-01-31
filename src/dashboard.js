import Chart from 'react-google-charts';
import './dashboard.css';
import { useState } from 'react';

function Dashboard() {
  const TITULO = 'Quantidade de cadastros realizados no primeiro semestre';

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
    </div>
  );
}

export default Dashboard;
