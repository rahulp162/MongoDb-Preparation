db.students.insertMany([
    {
        "productName": "Laptop",
        "category": "Electronics",
        "specs": {
            "processor": "Intel Core i7",
            "ram": "16GB",
            "storage": {
                "type": "SSD",
                "size": "512GB"
            }
        },
        "price": 499.99,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-15')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-16')" }
        ],
        "available": true,
        "tags": ["laptop", "ultrabook", "high-performance"],
        "releaseDate": "ISODate('2023-01-01')"
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
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-10')" }
        ],
        "available": true,
        "tags": ["desktop", "gaming", "high-end"],
        "releaseDate": "ISODate('2023-02-15')"
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
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-08-25')" }
        ],
        "available": true,
        "tags": ["smartphone", "5G", "water-resistant"],
        "releaseDate": "ISODate('2023-03-10')"
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
        "ratings": [],
        "available": true,
        "tags": ["home entertainment", "TV", "UHD"],
        "releaseDate": "ISODate('2023-04-20')"
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
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-09-02')" }
        ],
        "available": true,
        "tags": ["audio", "headphones", "bluetooth"],
        "releaseDate": "ISODate('2023-05-05')"
    },
    {
        "productName": "Electric Scooter",
        "category": "Transportation",
        "specs": {
            "maxSpeed": "25 mph",
            "range": "40 miles"
        },
        "price": 550.00,
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 5, "reviewDate": "ISODate('2023-07-15')" }
        ],
        "available": true,
        "tags": ["eco-friendly", "electric", "scooter"],
        "releaseDate": "ISODate('2023-06-01')"
    }]);

// Find products that are either "Electronics" or "Accessories" and must have a price less than $500 or more than $1500.
db.students.find({
    $and: [
        {
            category: { $in: ["Accessories", "Electronics"] }
        },
        {
            $or: [
                { price: { $gt: 1500 } },
                { price: { $lt: 500 } }
            ]
        }
    ]
});
// Retrieve products that are available and have either a "high-performance" tag or "gaming" tag, and must also either be released in 2023 or have a price above $1000.
db.students.find({
    $and: [
        {
            $or: [{ tags: "high-performance" }, { tags: "gaming" }]
        },
        {
            $or: [
                {
                    releaseDate: {
                        $gt: ISODate('2023-01-01'),
                        $lt: ISODate("2023-12-01")
                    }
                },
                {
                    price: {
                        $gt: 1000
                    }
                }
            ]
        }
    ]
});

// Question: Find products that either have a rating of 5 or are not rated, and must be in either the "Electronics" or "Transportation" category.
db.students.find({
    $and: [
        {
            $or: [
                {
                    ratings: { $elemMatch: { score: 5 } }
                },
                {
                    ratings: { $size: 0 }
                }
            ]
        },
        {
            category: {
                $in: ["Electronics", "Transportation"]
            }
        }
    ]
});
//   Question: Retrieve products that are either priced below $300 or above $1800, and must have "SSD" storage or an "AMOLED" display.
db.students.find({
    $and: [
        { $or: [{ price: { $lt: 300 } }, { price: { $gt: 1800 } }] },
        { $or: [{ "specs.storage.type": "SSD" }, { "specs.display": "AMOLED" }] }
    ]
});

// Question: Find products that either have no reviews or reviews older than a year, and must have "Intel Core i7" or "AMD Ryzen 9" processors.
db.students.find({
    $and: [
        {
            $or: [ 
                { ratings: { $size: 0 } },
                {
                    ratings: {
                        $elemMatch: {
                            reviewDate : {$gt :  "ISODate(2022-09-01)"  }
                        }
                    }
                }
            ]

        }
    ]
});