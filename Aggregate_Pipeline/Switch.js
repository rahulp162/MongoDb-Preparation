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
        "ratings": [
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-01')" },
            { "userId": "ObjectId('uniqueIdHere')", "score": 4, "reviewDate": "ISODate('2023-09-02')" }
        ],
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
        "price": 1550.00,
        "stock": 90,
        "ratings": [],
        "available": true,
        "tags": ["eco-friendly", "high-performance", "scooter"],
        "releaseDate": "ISODate('2023-06-01')"
    }]);


// Question-1: Project a new field priceCategory which categorizes the price as 'Low', 'Medium', or 'High'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            pricing: {
                $switch: {
                    branches: [
                        { case: { $and: [{ $gt: ["$price", 500] }, { $lt: ["$price", 1000] }] }, then: "medium" },
                        { case: { $and: [{ $gt: ["$price", 500] }, { $lt: ["$price", 1500] }] }, then: "exp" },
                    ],
                    default: "aws"
                }
            }
        }
    }
]);
// Question-2: Include product name and a new field inventoryStatus indicating if the stock level is 'Empty', 'Low', or 'Adequate'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            inventoryStatus: {
                $switch: {
                    branches: [
                        { case: { $and: [{ $gt: ["$stock", 0] }, { $gt: ["$stock", 10] }] }, then: "Low" },
                        { case: { $eq: ["$stock", 0] }, then: "Empty" }
                    ],
                    default: "Adequate"
                }
            }
        }
    }
]);
// Question-3: Display product name and a newRelease field which checks if the release date is within the last year.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $gt: ["$releaseDate", ISODate('2023-01-01')] }, then: "yes" }
                    ],
                    default: "No"
                }
            }
        }
    }
]);




// Question-4: Project the name and a ratingLevel indicating if the 
// average rating is 'Poor', 'Good', or 'Excellent'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        {
                            case: { $gt: [{ $avg: "$ratings.score" }, 4] },
                            then: "Fantastic"
                        },
                        {
                            case: { $lt: [{ $avg: "$ratings.score" }, 2] },
                            then: "Poor"
                        },
                        {
                            case: { $gt: [{ $avg: "$ratings.score" }, 2] },
                            then: "Medium"
                        }
                    ],
                }
            }
        }
    }
]);

// Question-5: Calculate a profitability field based on the cost and price which indicates if the product is 'Profitable', 'Break-even', or 'Loss'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $gt: ["$price", "$cost"] }, then: "Pr" },
                    ],
                    default: "Non-pr"
                }
            }
        }
    }
]);

// Question-6: Display product name and a userRating field indicating if it's 'Unrated', 'Poor', 'Average', or 'Excellent'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $eq: [{ $size: "$ratings" }, 0] }, then: "no review" },
                        {
                            case: {
                                $and: [
                                    { $gte: [{ $avg: "$ratings.score" }, 2] },
                                    { $lte: [{ $avg: "$ratings.score" }, 3] },
                                ]
                            }, then: "Average"
                        },
                        {
                            case: {
                                $and: [
                                    { $gte: [{ $avg: "$ratings.score" }, 3] },
                                    { $lte: [{ $avg: "$ratings.score" }, 4] },
                                ]
                            }, then: "good"
                        },
                        {
                            case: {
                                $and: [
                                    { $gte: [{ $avg: "$ratings.score" }, 4] },
                                    { $lte: [{ $avg: "$ratings.score" }, 5] },
                                ]
                            }, then: "Superb"
                        },
                    ],
                    default: "Not got anything"
                }
            }
        }
    }
]);
// Question-7: Calculate and display a shippingCost based on the weight of the product, classified into 'Low', 'Medium', 'High'.
db.products.aggregate([
    {
        $project: {
            productName: 1,
            shippingCost: {
                $switch: {
                    branches: [
                        { case: { $lt: ["$weight", 5] }, then: "Low" },
                        { case: { $lt: ["$weight", 20] }, then: "Medium" }
                    ],
                    default: "High"
                }
            }
        }
    }
]);

//Question-8: Display the product name and maintenance based on the product type indicating if it's 'High', 'Medium', or 'Low'.
db.products.aggregate([
    {
        $project: {
            _id: 0,
            productName: 1,
            fromLastYear: {
                $switch: {
                    branches: [
                        { case: { $in: ["$tags", ["high-performance", "headphones"]] }, then: "High" },
                    ],
                    default: "Not got anything"
                }
            }
        }
    }
]);

//Question-9:Determine User Engagement Based on Reviews Count
//Add reviewLevel (No Reviews, Few Reviews, Highly Reviewed).
db.products.aggregate([
  {
    $addFields:{
      reviewLevel:{
        $switch:{
          branches:[
            {case:{
              $gte:[
                {$size:"$ratings"},2
              ]
            },then:"Highly Reviewed"},
            {case:{
              $gte:[
                {$size:"$ratings"},1
              ]
            },then:"Few Reviews"},
            {case:{
              $eq:[
                {$size:"$ratings"},0
              ]
            },then:"No Reviews"}
          ],
          default:"N/A"
        }
      }
    }
  },
  {
    $project:{
      _id:0,
      productName:1,
      reviewLevel:1
    }
  }
])

//Question-10: Classify Products Based on Release Year
//Categorize products as Old, Recent, or Latest.
db.products.aggregate([
  {
    $addFields:{
      ageCategory:{
        $switch:{
          branches:[
            { case:{$gte:[
                "$releaseDate",
                new ISODate("2023-01-01")
              ]},then:"Latest"
            },
            { case:{$gte:[
                "$releaseDate",
                new ISODate("2022-01-01")
              ]},then:"Recent"
            },
            { case:{$lte:[
                "$releaseDate",
                new ISODate("2022-01-01")
              ]},then:"Old"
            },
          ],
          default:"N/A"
        }
      }
    }
  },
  {
    $project:{
      _id:0,
      productName:1,
      ageCategory:1
    }
  }
])

//Question-11: Assign rating quality
// Average rating < 3 → "Poor"
// Average rating >=3 → "Average"
//Average rating >= 4 → "Excellent"
db.products.aggregate([
  {
    $addFields:{
      quality:{
        $switch:{
          branches:[
            {case:{
              $gte:[{$avg:"$ratings.score"},4]
            },then:"Excellent"},
            {case:{
              $gte:[{$avg:"$ratings.score"},3]
            },then:"Average"},
            {case:{
              $lt:[{$avg:"$ratings.score"},3]
            },then:"Poor"},
          ],
          default:"No rated"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      quality:1
    }
  }
])

//Question-12: Tag products based on dimensions (size)
// Width < 30 cm → "Compact"
// Width between 30-70 cm → "Medium"
//Width     >70 cm → "Large"
db.products.aggregate([
  {
    $addFields:{
      size:{
        $switch:{
          branches:[
            {case:{
              $gt:[
                "$dimensions.width",70
              ]
            },then:"Large"},
            {case:{
              $gte:[
                "$dimensions.width",30
              ]
            },then:"Medium"},
            {case:{
              $lt:[
                "$dimensions.width",30
              ]
            },then:"Compact"},
          ],
          default:"No Width"
        }
      }
    }
  },{
    $project:{
      _id:0,
      productName:1,
      size:1
    }
  }
])

//Question-13: Assign age category based on release date
// Released in the last 15 months → "New"
// 15-23 months → "Recent"
// More than 23 months → "Old"

db.products.aggregate([
  {
    $addFields:{
      monthsSinceRelease:{
        $divide:[
        {$subtract:[
          new Date(), {$toDate:"$releaseDate"}
        ]},
          1000*60*60*24*30
        ]
      },
    }
  },
  {
    $addFields:{
        age:{
          $switch:{
            branches:[
              {case:{
                $gt:[
                  "$monthsSinceRelease",23
                ]
              },then:"Old"},
              {case:{
                $gte:[
                  "$monthsSinceRelease",15
                ]
              },then:"Recent"},
              {case:{
                $lte:[
                  "$monthsSinceRelease",15
                ]
              },then:"New"}
            ],
            default:"N/A"
          }
        }
      }
  }
  ,{
    $project:{
      monthsSinceRelease:1,
      productName:1,
      releaseDate:1,
      age:1,
      _id:0
    }
  }
])
