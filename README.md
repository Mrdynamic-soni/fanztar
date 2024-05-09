# Mobile Data Price Calculator

This is a simple Express.js application that calculates the total price and lists the parts for a given list of mobile components.

## Installation

1. Clone the repository:

2. Navigate to the project directory:

3. Install dependencies: using `npm i`

## Usage

To run the server, use the following command: `npm start`

The server will start on `http://localhost:8989`.

## Endpoints

### GET /

Returns a simple message indicating that the server is up.

### POST /orders

Calculates the total price and lists the parts for the given list of mobile components.

#### Request Body

```json
{
  "components": ["A", "B", "C"]
}
```

```
{
  "status": 200,
  "msg": "Data fetched successfully",
  "data": {
    "order_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "total": "67.65",
    "parts": ["LED Screen", "OLED Screen", "AMOLED Screen"]
  }
}
```

###

CURL for the post request

```curl -X POST http://localhost:8989/orders \
-H "Content-Type: application/json" \
-d '{
  "components": ["A", "B", "C"]
}'
```
