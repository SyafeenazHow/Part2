

// other Js
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

//Graphs and charts 
const ctx = document.getElementById('myChart');
//const ctv = document.getElementById('myGraph');

// Generate labels for the past 7 months
const today = new Date();
const labels = Array.from({ length: 7 }, (_, index) => {
  const month = new Date(today.getFullYear(), today.getMonth() - index, 1);
  return month.toLocaleString('default', { month: 'short' });
});

// chart
new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
        borderColor: ['transparent', 'transparent', 'transparent'], 
      }],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'rgb(135, 149, 165)' 
          },
        },
      },
    },
  });
  
/*
//graph
/*new Chart(ctv, {
  type: 'line',
  data: {
    labels: labels.reverse(),
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(135, 149, 165)', 
      tension: 0.1,
    }],
  },
  options: {
    scales: {
      x: {
        grid: {
          color: 'transparent', 
        },
      },
      y: {
        grid: {
          color: 'transparent', 
        },
      },
    },
  },
}); */

//api post method
const settings = 
{
  "async": true,
  "crossDomain": true,
  "url": "https://49.236.195.71/pgw/Sbx,analytics.sh%20",
  "method": "POST",
  "headers": 
  {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
  },
  "processData": false,
  "data": "{\n  \"name\":\"testtest.py\"\n}"
};

// Perform the AJAX request
$.ajax(settings).done(function (response) {
  
  handleApiResponse(response);
});

//handle the API response and display the result
function handleApiResponse(response) {
 
  if (response && response.result === "OK" && response.content) {    
    const imageUrl = response.content.result;    
    $('#graph-image').attr('src', imageUrl);

    //Handle errors
  } else {    
    console.error('Invalid or unexpected API response:', response);
  }
}


