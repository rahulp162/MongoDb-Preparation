[
  {
    "_id": ObjectId("6501b6d8e4b0a12f145a1a01"),
    "name": "Alice Johnson",
    "age": 28,
    "email": "alice@example.com",
    "address": {
      "city": "New York",
      "state": "NY",
      "zipcode": "10001"
    },
    "membership": "premium",
    "transactions": [
      { "amount": 150, "date": ISODate("2024-03-01T10:15:00Z"), "status": "completed", "method": "Credit Card" },
      { "amount": 200, "date": ISODate("2024-03-05T15:30:00Z"), "status": "pending", "method": "UPI" }
    ],
    "loginHistory": [
      { "timestamp": ISODate("2024-03-10T12:45:00Z"), "device": "iPhone" },
      { "timestamp": ISODate("2024-03-12T08:30:00Z"), "device": "MacBook" }
    ],
    "friends": ["Bob", "Charlie"],
    "messages": [
      { "to": "Bob", "text": "Hey, let's meet up!", "timestamp": ISODate("2024-03-08T18:00:00Z") }
    ],
    "interests": ["sports", "music"]
  },
  {
    "_id": ObjectId("6501b6d8e4b0a12f145a1a02"),
    "name": "Bob Smith",
    "age": 35,
    "email": "bob@example.com",
    "address": {
      "city": "Los Angeles",
      "state": "CA",
      "zipcode": "90001"
    },
    "membership": "basic",
    "transactions": [
      { "amount": 75, "date": ISODate("2024-03-02T11:20:00Z"), "status": "completed", "method": "Debit Card" }
    ],
    "loginHistory": [
      { "timestamp": ISODate("2024-03-10T09:15:00Z"), "device": "Android Phone" }
    ],
    "friends": ["Alice"],
    "messages": [],
    "interests": ["technology", "gaming"]
  },
  {
    "_id": ObjectId("6501b6d8e4b0a12f145a1a03"),
    "name": "Charlie Brown",
    "age": 40,
    "email": "charlie@example.com",
    "address": {
      "city": "Chicago",
      "state": "IL",
      "zipcode": "60601"
    },
    "membership": "premium",
    "transactions": [
      { "amount": 500, "date": ISODate("2024-02-25T14:00:00Z"), "status": "completed", "method": "PayPal" },
      { "amount": 300, "date": ISODate("2024-03-10T16:45:00Z"), "status": "completed", "method": "Credit Card" }
    ],
    "loginHistory": [
      { "timestamp": ISODate("2024-03-12T07:50:00Z"), "device": "Windows Laptop" }
    ],
    "friends": ["Alice"],
    "messages": [
      { "to": "Alice", "text": "How are you?", "timestamp": ISODate("2024-03-09T21:00:00Z") }
    ],
    "interests": ["fitness", "travel"]
  }
]
