// Question: Project only the product name and price fields for all documents.
db.students.aggregate([
    {
        $project: { productName: 1, price: 1, _id: 0 }
    }
])
// Question: Exclude the _id field and include all other fields for documents.
db.students.aggregate([
    { $project: { _id: 0 } }
]);

//Question: Exclude the _id field and include all other fields for documents.
db.students.aggregate([
    {
        $project: { productName: 1, salesPrice: { $multiply: ["$price", 0.10] } }
    }
])
// Question: Project the product name and a new field priceAfterTax which includes a 15% tax.
db.students.aggregate([
    {
        $project: { _id: 0, productName: 1, tex: { $multiply: ["$price", 1.16] } }
    }
])
// Question: Display the category and a new field isExpensive that is true if the price is greater than 1000.
db.students.aggregate([
    {
        $project: { _id: 0, category: 1, isExpensive: { $gt: ["$price", 1000] } }
    }
])
// Question: Compute and display a new field discountedPrice which is 20% less than the original price.
db.students.aggregate([
    {
        $project: { _id: 0, productName: 1, discount: { $multiply: ["$price", 0.80] } }
    }
])
// Question: Show product name and a new array tagsCount that contains the count of tags each product has.
db.students.aggregate([
    {
        $project: { _id: 0, productName: 1, tagsCount: { $size: "$tags" } }
    }
])
// Question: Include all original fields but add a new field inventoryValue which is the product of price and a field stock if it exists.
db.students.aggregate([
    {
        $project: {
            productName: 1,
            invertoryValue: { $ifNull: [{ $multiply: ["$price", "$stock"] }, "N/A"] }
        }
    }
]);
// Question: Display product name and a new field ratingAverage that is the average of the scores from the ratings array.
db.students.aggregate([
    { $project: {
      productName: 1,
      ratingAverage : { $avg : "$ratings.score" }
    }},
  ]);
// Question: Show all products with their name, price, and a new field priceRange indicating if they are 'cheap', 'moderate', or 'expensive' based on the price.
db.students.aggregate([
    { $project: {
      productName: 1,
      pricing : { 
        $switch : {
          branches : [
          {case : { $gt:["$price",1000]  },then : "exp"},
          {case : { $lt:["$price",1000]  },then : "cheap"},
          ],
           default: "moderate"
      } }
    }},
  ]);