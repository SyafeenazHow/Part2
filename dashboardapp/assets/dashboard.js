content.forEach(order => {
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

//api post method
const settings = 
{
  "async": true,
  "crossDomain": true,
  "url": "https://49.236.195.71/pgw/Sbx,analytics.sh%20",
  "method": "POST",
  "headers": 
  {    
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



