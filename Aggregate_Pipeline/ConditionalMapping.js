db.products.insertMany([
    {
        "productName": "Laptop",
        "category": "Electronics",
        "specs": {
            "processor": "Intel Core i7",
            "ram": "16GB",
            "display": "AMOLED",
            "storage": {
                "type": "SSD",
                "size": "512GB"
            }
        },
        "price": 2499.99,
        "stock": 0,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-15')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-16')" }
        ],
        "available": true,
        "tags": ["laptop", "ultrabook", "high-performance","professional"],
        "releaseDate": ISODate('2023-01-01')
    },
    {
        "productName": "Gaming PC",
        "category": "Electronics",
        "specs": {
            "processor": "AMD Ryzen 9",
            "ram": "32GB",
            "storage": {
                "type": "NVMe SSD",
                "size": "1TB"
            }
        },
        "price": 1899.99,
        "stock": 30,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-10')" }
        ],
        "available": true,
        "tags": ["desktop", "gaming", "high-end"],
        "releaseDate": ISODate('2023-02-15')
    },
    {
        "productName": "Smartphone",
        "category": "Electronics",
        "specs": {
            "processor": "Snapdragon 888",
            "ram": "8GB",
            "storage": {
                "type": "UFS",
                "size": "256GB"
            }
        },
        "price": 699.99,
        "stock": 0,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-08-25')" }
        ],
        "available": true,
        "tags": ["smartphone", "5G", "water-resistant"],
        "releaseDate": ISODate('2023-03-10')
    },
    {
        "productName": "4K Television",
        "category": "Electronics",
        "specs": {
            "screenSize": "55 inches",
            "features": {
                "type": "Smart TV",
                "resolution": "4K"
            }
        },
        "price": 1200.00,
        "stock": 10,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["home entertainment", "TV", "UHD"],
        "releaseDate": ISODate('2023-04-20')
    },
    {
        "productName": "Bluetooth Headphones",
        "category": "Accessories",
        "specs": {
            "type": "Over-Ear",
            "features": {
                "noiseCancellation": true,
                "batteryLife": "24 hours"
            }
        },
        "price": 199.99,
        "stock": 70,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["audio", "headphones", "bluetooth"],
        "releaseDate": ISODate('2023-05-05')
    },
    {
        "productName": "Wired Earphones",
        "category": "Accessories",
        "specs": {
            "type": "In-Ear",
            "features": {
                "noiseCancellation": false
            }
        },
        "price": 99.99,
        "stock": 0,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 2, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 3, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["audio", "earphones", "bluetooth"],
        "releaseDate": ISODate('2025-01-01')
    },
    {
        "productName": "Electric Scooter",
        "category": "Transportation",
        "specs": {
            "maxSpeed": "25 mph",
            "range": "40 miles"
        },
        "price": 1550.00,
        "stock": 120,
        "ratings": [],
        "available": true,
        "tags": ["eco-friendly", "high-performance", "scooter"],
        "releaseDate": ISODate('2023-06-01')
    }
  ]
);


// Objective: Add a new field priceCategory that classifies 
// each product as "Expensive" if the price is greater than 
// $1000, otherwise "Affordable".
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            priceCategory: {
                $cond: {
                    if: { $gt: ["$price", 1000] },
                    then: "exp",
                    else: "not-exp"
                }
            }
        }
    }
])



// Objective: Classify products based on their price into "Cheap", "Moderate", or "Expensive".
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            priceCategory: {
                $cond: {
                    if: { $gt: ["$price", 1500] },
                    then: "exp",
                    else: {
                        $cond: {
                            if: { $and: [{ $gt: ["$price", 500] }, { $lt: ["$price", 1500] }] },
                            then: "Modorate",
                            else: "Cheap",
                        }
                    }
                }
            }
        }
    }
])
// Objective: Group products by category, calculating total sales and adding a flag if total sales exceed $5000.
db.products.aggregate([
    {
        $group: {
            _id: "$category",
            countExpensive: {
                $sum: {
                    $cond: { if: { $gt: ["$price", 1000] }, then: 1, else: 0 }
                }
            },
            countAffordable: {
                $sum: {
                    $cond: { if: { $lte: ["$price", 1000] }, then: 1, else: 0 }
                }
            }
        }
    }
]);  
// Objective: Concatenate the status of the product to its name based on availability.
db.products.aggregate([
    {$project : {
        _id: 0,
        productName : {
            $concat : [
                "$productName",
                {
                    $cond : {
                        if:"$available",then:"- available",else : "- Not-available"
                    }
                }
            ]
        } }
    }]
)
// Objective: Add a new field that reflects a discount percentage based on the product's category.
db.products.aggregate([
    {$project : {
            _id: 0,
            productName : 1,
            discount : {
                $cond : {
                    if:{ $in : ["$category",["Transportation"]]},
                    then : { $multiply : ["$price",0.1]},
                    else : {$multiply : ["$price",0.5]}
                }
            }
        }
    }]
)