


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