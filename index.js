var jaccard = require('jaccard')
var similarity = require( 'compute-cosine-similarity' )

var userPerf = [
 '-nightlife',
 '+foodie',
 '+sports',
 '+family',
 '+backpacker'
];
 
var attractionPerf = [
  '+nightlife',
  '+foodie',
  '+sports',
  '+family',
  '+backpacker'
];

jaccard.index(userPerf, attractionPerf, function (j){
    console.log(`Jaccard Similarity Score: ${j}`);
});



/**
 * 
 */
userPerf = [
 '+foodie',
 '+sports',
 '+family',
 '+backpacker'
];
jaccard.index(userPerf, attractionPerf, function (j){
    console.log(`Jaccard Similarity Score (without showing dislike): ${j}`);
});


/**
 * introduce new category and showing interest
 */
userPerf = [
 '+foodie',
 '+sports',
 '+family',
 '+backpacker',
 '+trendy',
 '+history'
];
attractionPerf = [
  '+nightlife',
  '+foodie',
  '+sports',
  '+family',
  '+backpacker',
  '+trendy',
  '+history'
];
jaccard.index(userPerf, attractionPerf, function (j){
    console.log(`Jaccard Similarity Score (introduce more category): ${j}`);
});




/**
 * The array is ['nightlife', 'foodie', 'sporty', 'family', 'backpacker']
 * 1 for interest
 * 0 for not inteest
 */
var userVector = [0, 1, 1, 1, 1]
var attractionVector = [1, 1, 1, 1, 1]

 
var s = similarity( userVector, attractionVector );
console.log(`Consine Similarity Score: ${s}`);


/**
 * Try to use Cosine Similarity to demostrate like and dislike
 * -1 dislike
 * +1 like  
 */
userVector = [-1, 1, 1, 1, 1]
var s = similarity( userVector, attractionVector );
console.log(`Consine Similarity Score (-1, 0, 1): ${s}`);

/**
 * what if increase the magnitude
 */
userVector = [-2, 2, 2, 2, 2]
attractionVector = [2, 2, 2, 2, 2]
console.log(`Consine Similarity Score (increased magnitude): ${s}`);


/**
 * What if two more categories are introduced
 * 
 */
userVector = [-2, 2, 2, 2, 2, 0, 0]
attractionVector = [2, 2, 2, 2, 2, 0, 0]
console.log(`Consine Similarity Score (Added more categories but without showing interest): ${s}`);


/**
 * What if two more categories are introduced and user and attraction also matched
 */
userVector = [-1, 1, 1, 1, 1, 1, 1]
attractionVector = [1, 1, 1, 1, 1, 1, 1]
console.log(`Consine Similarity Score (Added more categories and showing interest): ${s}`);