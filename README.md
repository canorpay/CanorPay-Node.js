# CanorPay Node.js Integration

This project provides simple Node.js scripts for integrating with the **CanorPay API**. It includes:

- Order creation script to initiate a payment
- Order status check script to verify payment completion

These scripts demonstrate how to use `axios` for HTTP requests and include logging and error handling for production-readiness.

---

## 📦 Project Structure

```
.
├── create-order.js       # Create payment orders
├── check-status.js       # Check status of existing orders
├── error_log.txt         # (Auto-created) Log errors during execution
├── package.json
└── README.md
```

---

## 📌 Prerequisites

- Node.js v14 or later
- Internet connection
- Your **CanorPay `account_id`**
- Optional: Text editor (VS Code recommended)

Install required dependencies:

```bash
npm install axios
```

---

## 🧾 Script 1: Create Payment Order

**File**: `create-order.js`  
This script initiates a payment by sending a POST request to CanorPay with buyer and transaction details.

### 🔧 Configuration

Update the following block with real customer and account details:

```js
const orderData = {
  buyer_email: 'example@info.com',
  buyer_name: 'John Doe',
  buyer_phone: '0719613348',
  amount: 1000, // Amount in TZS
  account_id: 'CP00048458'
};
```

### 📤 Request

The script sends the data as JSON to:

```
POST https://api.canorpay.com
```

### 🧪 Run the Script

```bash
node create-order.js
```

### 🐞 Error Logging

If an error occurs, it will be saved to `error_log.txt` with a timestamp:

```text
[2025-06-14T12:35:22.123Z] Request failed with status 400: Invalid account_id
```

---

## 🔁 Script 2: Check Order Status

**File**: `check-status.js`  
This script queries the status of a payment order based on the `order_id`.

### 🔧 Configuration

Replace the sample order ID with the one you want to check:

```js
const postData = {
  order_id: '684dafbe98e98'
};
```

### 📤 Request

The script sends the data to:

```
POST https://api.canorpay.com/check-status.php
```

### ✅ Sample Success Response

```json
{
  "status": "success",
  "order_id": "684dafbe98e98",
  "message": "Payment received",
  "payment_status": "COMPLETED"
}
```

### ❌ Sample Error Response

```json
{
  "status": "error",
  "message": "Order not found"
}
```

### 🧪 Run the Script

```bash
node check-status.js
```

---

## ✅ Best Practices

- Keep your `account_id` and order IDs secure.
- Add `.env` support for sensitive values.
- Use asynchronous error monitoring in production.
- Sanitize and validate all inputs before sending.

---

## 🔐 Security Note

These scripts do not include authentication via `api_key` or `secret_key`, as CanorPay may not require them. If needed in the future, modify both scripts to add auth headers or secure tokens accordingly.

---

## 📩 Contact

For API issues, reach out to CanorPay support.  
For code or implementation support, feel free to open an issue on this repository.

---

## 🧠 License

MIT License – feel free to modify and use in commercial or personal projects.
