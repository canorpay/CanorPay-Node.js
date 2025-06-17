## CanorPay API Integration

The same functionality is available in Node.js using `axios`.

### Order Creation (`create-order.js`)

Sends a POST request to the CanorPay API to create an order.

```bash
node create-order.js
```

### Status Check (`check-status.js`)

Sends a POST request to check the status of a previously created order.

```bash
node check-status.js
```

### Requirements

Install dependencies using:

```bash
npm install axios
```

### Notes

- Make sure `error_log.txt` is writable.
- Replace placeholder values (e.g., `order_id`, account data) before testing.
- You can use `.env` files for credentials in production.
