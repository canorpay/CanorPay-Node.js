// create-order.js

const axios = require('axios');
const fs = require('fs');

const orderData = {
  buyer_email: 'example@info.com',
  buyer_name: 'John',
  buyer_phone: '0719613348',
  amount: 1000,
  account_id: 'CP00048458'
};

axios.post('https://api.canorpay.com', orderData, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Order Response:', response.data);
})
.catch(error => {
  const errMsg = error.response ? JSON.stringify(error.response.data) : error.message;
  console.error('Order Creation Failed:', errMsg);
  fs.appendFileSync('error_log.txt', `[${new Date().toISOString()}] ${errMsg}\n`);
});
