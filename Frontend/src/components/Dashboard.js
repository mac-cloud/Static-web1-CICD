import React from 'react';
import LineChart from './LineChart';

const Dashboard = () => {
  // Sample data for the chart
  const chartData ={ 

  
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'Octomber', 'November', 'December'],
     datasets: [
      {
        label: 'Population Growth',
        data: [100000, 250000, 399000, 127000, 500000, 426280, 586300,374732, 472853,532252,739994,800000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],

  };
  
  const chartTraffic = {
    labels: ['waiyaki-way', 'thikaRoad', 'mombasaRoad', 'kiambuRoad', 'kenyattaRoad', 'easternBypass', 'ruiruBypass'],
    datasets: [{
          label: 'Traffic in Nairobi(car number)',
          data: [200, 400,500, 30, 40, 1000,150],
          borderColor: 'blue',
          backgroundColor: 'rgba(75,192,192,0.2)',
    },
    ],
  };
  const chartInfrastructure = {
    labels: ['waiyaki-way', 'thikaRoad', 'mombasaRoad', 'kiambuRoad', 'kenyattaRoad', 'easternBypass', 'ruiruBypass'],
    datasets: [{
          label: 'Traffic in Nairobi(car number)',
          data: [230, 450, 500, 390, 445, 300,350],
          borderColor: 'blue',
          backgroundColor: 'rgba(75,192,192,0.2)',
    },
    ],
  };

  
  return (
    <div>
    <div style={{ display: "flex"}}>
    <div style={{ width: "1200px", height: "300px"}}>
      <h1 style={{color: "blue"}}>Year Population</h1>
     <LineChart data={chartData} /> 
    </div>
    
    <div style={{ width: "800px", height: "300px"}}>
      <h1 style={{ color: "blue"}}>Traffic Nairobi</h1>
      <LineChart data={chartTraffic} />
    </div>
</div>
<div style={{ width: "800px", height: "300px", padding: "100px", left: 0}}>
      <h1 style={{ color: "blue"}}>Infrastructure in Nairobi</h1>
      <LineChart data={chartInfrastructure} />
    </div>
</div>
  );

};

export default Dashboard;
