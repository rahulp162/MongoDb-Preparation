db.orders.insertMany([
    {
        orderId: 1,
        customerId: "customer1",
        orderDate: ISODate("2023-02-01"),
        status: "shipped",
        items: [
            { productId: "product1", quantity: 1, price: 100 },
            { productId: "product2", quantity: 2, price: 50 }
        ],
        shippingAddress: { city: "New York", country: "USA" }
    },
    {
        orderId: 2,
        customerId: "customer2",
        orderDate: ISODate("2023-02-02"),
        status: "processing",
        items: [
            { productId: "product3", quantity: 3, price: 20 },
            { productId: "product4", quantity: 1, price: 150 }
        ],
        shippingAddress: { city: "Los Angeles", country: "USA" }
    },
    {
        orderId: 3,
        customerId: "customer1",
        orderDate: ISODate("2023-02-03"),
        status: "cancelled",
        items: [
            { productId: "product5", quantity: 1, price: 200 }
        ],
        shippingAddress: { city: "Chicago", country: "USA" }
    },
    {
        orderId: 4,
        customerId: "customer3",
        orderDate: ISODate("2023-02-04"),
        status: "shipped",
        items: [
            { productId: "product6", quantity: 2, price: 30 },
            { productId: "product2", quantity: 1, price: 50 }
        ],
        shippingAddress: { city: "Houston", country: "USA" }
    },
    {
        orderId: 5,
        customerId: "customer4",
        orderDate: ISODate("2023-02-05"),
        status: "delivered",
        items: [
            { productId: "product1", quantity: 2, price: 100 },
            { productId: "product3", quantity: 1, price: 20 }
        ],
        shippingAddress: { city: "Phoenix", country: "USA" }
    },
    {
        orderId: 6,
        customerId: "customer2",
        orderDate: ISODate("2023-02-06"),
        status: "shipped",
        items: [
            { productId: "product4", quantity: 2, price: 150 }
        ],
        shippingAddress: { city: "Philadelphia", country: "USA" }
    },
    {
        orderId: 7,
        customerId: "customer5",
        orderDate: ISODate("2023-02-07"),
        status: "processing",
        items: [
            { productId: "product5", quantity: 1, price: 200 },
            { productId: "product6", quantity: 3, price: 30 }
        ],
        shippingAddress: { city: "San Antonio", country: "USA" }
    },
    {
        orderId: 8,
        customerId: "customer3",
        orderDate: ISODate("2023-02-08"),
        status: "delivered",
        items: [
            { productId: "product2", quantity: 1, price: 50 },
            { productId: "product3", quantity: 2, price: 20 }
        ],
        shippingAddress: { city: "San Diego", country: "USA" }
    },
    {
        orderId: 9,
        customerId: "customer1",
        orderDate: ISODate("2023-02-09"),
        status: "shipped",
        items: [
            { productId: "product4", quantity: 1, price: 150 },
            { productId: "product1", quantity: 1, price: 100 }
        ],
        shippingAddress: { city: "Dallas", country: "USA" }
    },
    {
        orderId: 10,
        customerId: "customer4",
        orderDate: ISODate("2023-02-10"),
        status: "cancelled",
        items: [
            { productId: "product6", quantity: 2, price: 30 },
            { productId: "product5", quantity: 1, price: 200 }
        ],
        shippingAddress: { city: "San Jose", country: "USA" }
    }
])


// Question: Group orders by customer ID and count the number of orders per customer.
db.orders.aggregate([
    {
        $group: {
            _id: "$customerId",
            totol: { $sum: 1 }
        }
    }
])
// Question: Calculate the total revenue from all orders.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            totol: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
        }
    }
])
// Question: Find the average price of items sold, grouped by product ID.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
            totol: { $avg: "$items.price" }
        }
    }
])
// Question: Count how many orders were shipped to each city.
db.orders.aggregate([
    {
        $group: {
            _id: "$shippingAddress.city",
            totol: { $sum: 1 }
        }
    }
])
// Question: Determine the total number of items sold per product.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$items.productId",
            totol: { $sum: "$items.quantity" }
        }
    }
])
// Question: Calculate the maximum price of any item sold across all orders.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            totol: { $max: "$items.price" }
        }
    }
])

// Question: Sum up the revenue for each order status.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$status",
            totol: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
        }
    }
])

// Question: Find the minimum number of items in any order.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: null,
            min_items: {
                $min: {
                    $sum: "$items.quantity"
                }
            }
        }
    }
])
// Question: Group orders by country and calculate the average order value.


db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$shippingAddress.country",
            avgPrice: {
                $avg: "$items.price"
            }
        }
    }
])

// Question: List the total revenue generated from each product type.
db.orders.aggregate([
    { $unwind: "$items" },
    {
        $group: {
            _id: "$items.productId",
            total_revenue: {
                $sum: {
                    $multiply: ["$items.price", "$items.quantity"]
                }
            }
        }
    }
])
// Question: Calculate the total number of items shipped, grouped by order date.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$orderDate",
            itemsCount: {
                $sum: 1
            }
        }
    }
])
// Question: Determine the average number of items per order for each customer.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$orderDate",
            itemsCount: {
                $sum: 1
            }
        }
    }
])

// Question: Count the number of orders in each status category.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$status",
            itemsCount: {
                $sum: 1
            }
        }
    }
])
// Question: Find the average item price for each city.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$shippingAddress.city",
            itemsCount: {
                $avg: "$items.price"
            }
        }
    }
])
// Question: Calculate the total revenue for each city.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$shippingAddress.city",
            itemsCount: {
                $sum: { $multiply: ["$items.price", "$items.quantity"] }
            }
        }
    }
])

// Question: Identify the highest revenue order for each customer.
db.orders.aggregate([
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$customerId",
            itemsSum: {
                $sum: { $multiply: ["$items.price", "$items.quantity"] }
            }
        }
    }
])

// Question: Count the total number of cancelled orders.
db.orders.aggregate([
    { $match: { status: "cancelled" } },
    { $group: { _id: null, count: { $sum: 1 } } }
])
// Question: Find the lowest number of attendees for each type of status.
db.orders.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$status", min_attendees: { $min: "$items.quantity" } } }
])
// Question: Calculate the total revenue for each customer.
db.orders.aggregate([{
    $unwind: "$items"
},
{
    $group: {
        _id: "$customerId", total_customer_revenue: {
            $sum: {
                $multiply: ["$items.price", "$items.quantity"]
            }
        }
    }
}
])
// Question: Group orders by order date and count the total orders per date.
db.orders.aggregate([
    {
        $group: {
            _id: "$orderDate", total_orders: { $sum: 1 }
        }
    }
])