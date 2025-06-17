// check-status.js

const axios = require('axios');

const postData = {
  order_id: '684dafbe98e98'
};

axios.post('https://api.canorpay.com/check-status.php', postData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Status Check Response:', response.data);
})
.catch(error => {
  const errMsg = error.response ? JSON.stringify(error.response.data) : error.message;
  console.error('Status Check Failed:', errMsg);
});
