db.products.insertMany([
    {
        "id": 123,
        "productName": "Laptop",
        "price": 1200,
        "category": "Electronics"
    }
]);
db.orderes.insertMany([
    {
        "id": 12,
        "customerId": "C1001",
        "items": [
            { "productId": 123, "quantity": 2 },
        ],
        "orderDate": ISODate("2024-01-01"),
        "status": "shipped"
    }
]);

// Question: Join orders with products to list each order including the product details.
db.orderes.aggregate([
    { $lookup : {
        from: "products",
        localField:"items.productId",
        foreignField:"id",
        as:"pr"
    } }
])
// Question: Fetch all orders including the corresponding product names.
db.orderes.aggregate([
    {$lookup : {
        from : "products",
        localField:"items.productId",
        foreignField:"id",
        as: "pr"
    }},
    {
        $project : {
            _id : 0,
            customerId : 1,
            pr:{productName:1}
        }
    }
])
// Question: Find orders that include "Electronics" category products.
