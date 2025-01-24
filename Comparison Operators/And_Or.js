db.products.insertMany(
    [
        {
            "productName": "Laptop",
            "category": "Electronics",
            "specs": {
                "processor": "Intel Core i7",
                "ram": "16",
                "storage": {
                    "type": "SSD",
                    "size": "512"
                }
            },
            "price": 999.99,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ab", "score": 5, "reviewDate": "2023-09-15T00:00:00.000Z" },
                { "userId": "63b21d49c254d7e8456789ac", "score": 4, "reviewDate": "2023-09-16T00:00:00.000Z" }
            ],
            "available": true,
            "tags": ["laptop", "ultrabook", "high-performance"],
            "releaseDate": "2023-01-01T00:00:00.000Z",
            "meta": null,
            "dimensions": { "width": 35.8, "height": 1.9, "depth": 24.7 },
            "relatedProducts": [123, 456],
            "reviews": [],
            "discounted": false
        },
        {
            "productName": "Gaming PC",
            "category": "Electronics",
            "specs": {
                "processor": "AMD Ryzen 9",
                "ram": "32 ",
                "storage": {
                    "type": "NVMe SSD",
                    "size": "1000"
                }
            },
            "price": 1899.99,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ad", "score": 5, "reviewDate": "2023-09-10T00:00:00.000Z" }
            ],
            "available": true,
            "tags": ["desktop", "gaming", "high-end"],
            "releaseDate": "2023-02-15T00:00:00.000Z",
            "meta": null,
            "dimensions": { "width": 20.0, "height": 45.0, "depth": 50.0 },
            "relatedProducts": [789, 101],
            "reviews": [],
            "discounted": true
        },
        {
            "productName": "Smartphone",
            "category": "Electronics",
            "specs": {
                "processor": "Snapdragon 888",
                "ram": "8 ",
                "storage": {
                    "type": "UFS",
                    "size": "256 "
                }
            },
            "price": 699.99,
            "ratings": [
                { "userId": "63b21d49c254d7e8456789ae", "score": 4, "reviewDate": "2023-08-25T00:00:00.000Z" }
            ],
            "available": true,
            "tags": ["smartphone", "5G", "water-resistant"],
            "releaseDate": "2023-03-10T00:00:00.000Z",
            "meta": null,
            "dimensions": { "width": 7.5, "height": 15.0, "depth": 0.8 },
            "relatedProducts": [112, 113],
            "reviews": [],
            "discounted": false
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
            "releaseDate": "2023-04-20T00:00:00.000Z",
            "meta": null,
            "dimensions": { "width": 123.0, "height": 71.0, "depth": 6.0 },
            "relatedProducts": [114, 115],
            "reviews": [],
            "discounted": false
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
                { "userId": "63b21d49c254d7e8456789af", "score": 4, "reviewDate": "2023-09-01T00:00:00.000Z" },
                { "userId": "63b21d49c254d7e8456789b0", "score": 5, "reviewDate": "2023-09-02T00:00:00.000Z" }
            ],
            "available": true,
            "tags": ["audio", "headphones", "bluetooth"],
            "releaseDate": new ISODate("2023-05-05T00:00:00.000Z"),
            "meta": null,
            "dimensions": { "width": 20.0, "height": 18.0, "depth": 7.0 },
            "relatedProducts": [116, 117],
            "reviews": [],
            "discounted": false
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
                { "userId": "63b21d49c254d7e8456789b1", "score": 5, "reviewDate": "2023-07-15T00:00:00.000Z" }
            ],
            "available": true,
            "tags": ["eco-friendly", "electric", "scooter"],
            "releaseDate": "2023-06-01T00:00:00.000Z",
            "meta": null,
            "dimensions": { "width": 40.0, "height": 120.0, "depth": 30.0 },
            "relatedProducts": [118, 119],
            "reviews": [],
            "discounted": false
        },
        {
            "productName": "Espresso Machine",
            "category": "Home Appliances",
            "specs": {
                "waterTankCapacity": "2 liters",
                "features": {
                    "autoCleaning": true,
                    "milkFrother": true
                }
            },
            "price": 850.00,
            "ratings": [],
            "available": true,
            "tags": ["eco-friendly", "electric", "scooter"],
            "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
            "meta": null,
            "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
            "relatedProducts": [120, 121],
            "reviews": [{ "userId": "63b21d49c254d7e8456789b1", "score": 5, "reviewDate": "2023-08-15T00:00:00.000Z" }],
            "discounted": false
        },
        {
            "productName": "socket.io",
            "category": "Home Appliances",
            "specs": {
                "waterTankCapacity": "2 liters",
                "features": {
                    "autoCleaning": true,
                    "milkFrother": true
                }
            },
            "price": 850.00,
            "ratings": [],
            "available": true,
            "tags": ["eco-friendly", "electric", "scooter"],
            "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
            "meta": null,
            "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
            "relatedProducts": [120, 121],
            "reviews": [],
            "discounted": false
        },
        {
            "productName": "catt.in",
            "category": "Home Appliances",
            "specs": {
                "waterTankCapacity": "2 liters",
                "features": {
                    "autoCleaning": true,
                    "milkFrother": true
                }
            },
            "price": 850.00,
            "ratings": [],
            "available": true,
            "tags": ["eco-friendly", "electric", "scooter"],
            "releaseDate": new Date("2023-06-01T00:00:00.000Z"),
            "meta": null,
            "dimensions": { "width": 25.0, "height": 40.0, "depth": 30.0 },
            "relatedProducts": [120, 121],
            "reviews": [],
            "discounted": false
        }
    ]    
)

//Question-1: Find all products that have either the tag "eco-friendly" or "high-performance" and have a price greater than $800.
db.products.find({
    $and:[
        {
            $or:[
                {tags:"eco-friendly"},
                {tags:"high-performance"}
            ]
        },{
            price: {$gt:800}
        }
    ]
})
//Question-2: Find all products that are available and belong to either the "Electronics" or "Accessories" category.
db.products.find({
    $and:[
        {
            available: true
        },{
            $or:[
                {
                    category:"Electronics"
                },{
                    category:"Accessories"
                }
            ]
        }
    ]
})
//Question-3: Find all products with a width greater than 20 and a depth less than 40, or products with a height exactly 40.
db.products.find({
    $or:[{
        height:{$eq:40}
    },{
        $and:[
            {
                "dimensions.width":{
                    $gt:20
                }
            },
            {
                "dimensions.width":{
                    $lt: 40
                }
            }
        ]
    }]
})

//Question-4: Find all products released after "2023-05-01" and have no ratings, or have exactly one rating
db.products.find({
    $or:[
        {
            $and:[
                {
                    releaseDate:{
                        $gt:"2023-05-01"
                    }
                },{
                    ratings:{
                        $size:0
                    }
                }
            ]
        },{
            ratings:{
                $size:1
            }
        }
    ]
})

//Question-5: Find all products where the processor is either "Intel Core i7" or "AMD Ryzen 9" and the ram is greater than or equal to "16 "
db.products.find({
    $and:[
        {
            $or:[
                {
                    "specs.processor":"Intel Core i7"
                },
                {
                    "specs.processor":"AMD Ryzen 9"
                },
            ]
        },{
            "specs.ram":{
                $gte:16
            }
        }
    ]
})
//alternative answer: run on MongoShell or Atlas
db.products.find({
    $and: [
        {
            $or: [
                { "specs.processor": "Intel Core i7" },
                { "specs.processor": "AMD Ryzen 9" }
            ]
        },
        {
            $where: function() {
                var ramValue = parseInt(this.specs.ram);
                return ramValue >= 16;
            }
        }
    ]
})

//Question-6: Find all products that are related to either product 120 or 456 and are currently not discounted.
db.products.find({
    $and:[{
        $or:[
            {
                relatedProducts:120
            },{
                relatedProducts:456
            }
        ]
    },{
        discounted:false
    }]
})

//Question-7: Find all products that have at least one rating with a score greater than 4 and were reviewed on or after "2023-09-01", or products with no ratings
db.products.find({
    $or: [
        {
            ratings:{
                $elemMatch:{score:{$gt:4},reviewDate:{$gte:"2023-09-01"}}
            }
        },
        {
            ratings: { $size: 0 }
        }
    ]
})

//Question-8: Find all products in the "Home Appliances" category that are not discounted or have the tag "bluetooth".
db.products.find({
    $and:[{category:"Home Appliances"},{
        $or:[
            {discounted:false},{tags:"bluetooth"}
        ]
    }]
})

//Question-9: Find all products where the storage.type is either "SSD" or "NVMe SSD" and the storage.size is greater than or equal to "512 ".
db.products.find({
    $and:[
        {
            $or:[
                {
                    "storage.type":"SSD"
                },{
                    "storage.type":"NVMe SSD"
                }
            ]
        },{
            "specs.storage.size":{$gte:512}
        }
    ]
})

//Question-10: Find all products where the features.autoCleaning is true or features.noiseCancellation is true and the product is available.
db.products.find({
    $and:[{
        $or:[
            {"specs.features.autoCleaning":true},
            {"specs.features.noiseCancellation":true}
        ]
    },{
        "available":true
    }]
})

//Question-11: Find all products with at least 2 ratings and a price greater than or equal to $500.
db.products.find({
    $and:[{
        
        $expr:{
            $gt:[{$size:"$ratings"},1]
        }
        
    },{
        price:{$gte:500}
    }]
})

//Question-11: Find all products where the processor is "Intel Core i7", the price is greater than $800, and the product is available or has the tag "laptop".
db.products.find({
    $and: [
        { "specs.processor": "Intel Core i7" },
        { price: { $gt: 800 } },
        { 
            $or: [
                { available: true },
                { tags: "laptop" }
            ]
        }
    ]
})

//Question-12: Find all products that are available and either have a maximum speed greater than "20 mph" or a battery life of "24 hours".
db.products.find({
    $and: [
        { available: true },
        { 
            $or: [
                { "specs.maxSpeed": { $gt: "20 mph" } },
                { "specs.features.batteryLife": "24 hours" }
            ]
        }
    ]
})

//Question-13: Find all products released after "2023-05-01", where the product name contains the word "smart" or "laptop" in its name.
db.products.find({
    $and: [
        { releaseDate: { $gt: "2023-05-01" } },
        { 
            $or: [
                { productName: /smart/i },
                { productName: /laptop/i }
            ]
        }
    ]
})

//Question-14: Find all products where the processor is either "Intel Core i7" or "AMD Ryzen 9" and the storage type is "SSD" and the price is between $800 and $1500.
db.products.find({
    $and: [
        { "specs.processor": { $in: ["Intel Core i7", "AMD Ryzen 9"] } },
        { "specs.storage.type": "SSD" },
        { price: { $gte: 800, $lte: 1500 } }
    ]
})

//Question-15: Find all products that are either in the "Transportation" category or have the tag "eco-friendly", but have not been discounted and were released after "2023-01-01".
db.products.find({
    $and:[{
        $or:[{
            category:"Transportation"
        },{
            tags:"eco-friendly"
        }]
    },{
        discounted:false
    },{
        releaseDate:{$gt:"2023-01-01"}
    }]
})

//Question-16: Find all products that either have a tags array containing "gaming" and are discounted, or have the price greater than $1000 and are available
db.products.find({
    $or:[
        {
            $and:[
                {tags:"gaming"},
                {discounted:true}
            ]
        },{
            $and:[
                {price:{
                    $gt:1000
                }},{
                    available:true
                }
            ]
        }
    ]
})

//Question-17: Find all products in the "Home Appliances" category that either have autoCleaning set to true or a milkFrother feature, and are not discounted.
db.products.find({
    $and:[
        {
            category:"Home Appliances"
        },
        {
            $or:[
                {
                    "specs.features.autoCleaning":true
                },{
                    "specs.features.milkFrother":true
                }
            ]
        },{
            discounted:false
        }
    ]
})

//Question-18: Find all products that are either in the "Home Appliances" category or have the tag "eco-friendly", have a waterTankCapacity of "2 liters", and have at least one review.
db.products.find({
    $and:[
        {
            $or:[
                {
                    category:"Home Appliances"
                },{
                    tags:"eco-friendly"
                }
            ]
        },{
            "specs.waterTankCapacity": "2 liters"
        },{
            $expr:{
                $gte:[
                    {
                        $size:"$reviews"
                    },1
                ]
            }
        }
    ]
})

//Question-19: Find all products that are in the "Electronics" category, have a rating greater than 4 from at least one user, and are available. Exclude products that are discounted.
db.products.find({
    $and: [
        { category: "Electronics" },
        { ratings: { $elemMatch: { score: { $gt: 4 } } } },
        { available: true },
        { discounted: false }
    ]
})

//Question-20: Find all products that either have no ratings or have at least one rating with a score greater than 4 and were reviewed before "2023-09-01"
db.products.find({
    $or: [
        {
            ratings: { $size: 0 }
        },
        {
            ratings: {
                $elemMatch: {
                    score: { $gt: 4 },
                    reviewDate: { $lt: "2023-09-01" }
                }
            }
        }
    ]
});
