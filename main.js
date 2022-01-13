
/*
We need functions to perform the individual
tasks of making candy:
    - Buy some milk chocolate                    "buyChocolate"
    - Add some mint flavoring                    "addFlavoring"
    - Combine the chocolate and mint             "makeBarkMixture"
   -  Bake the mixture                           "bakeCandy"
   -  Break the hardened sheet into 6 pieces     "breakBark"
*/


const buyChocolate = () => {

    // create an empty object to start
    const candyObject = {  }  

    // Use dot notation to add a new property 'type' to the empty object 
        candyObject.type = "Milk Chocolate"

        // Return the candyObject that now has a 'type' property on it 
         return candyObject
}

const addFlavoring = (candyObject) => {
    candyObject.flavor = "Mint"
    return candyObject
}


const makeBarkMixture = (candyObject) => {
    if (candyObject.flavor === "Mint") {
         candyObject.mixed = true
    }
    else {
            candyObject.mixed = false
    }
    return candyObject
}

const bakeCandy = (candyObject) => {
    if (candyObject.mixed === true) {
         candyObject.baked = true
    }
    else {
             candyObject.baked = false
    }
    return candyObject
}

const breakBark = (candyObject) => {
    if (candyObject.baked === true) {
        return [ "Mint Choccolate Bark Piece", 
                 "Mint Choccolate Bark Piece", 
                 "Mint Choccolate Bark Piece", 
                 "Mint Choccolate Bark Piece", 
                 "Mint Choccolate Bark Piece", 
                 "Mint Choccolate Bark Piece" ]
    } else {
        console.log("Not your lucky day")
    }
}


// call (invoke) functions in order

const buy = buyChocolate()
console.log(buy)

const flavOFlav = addFlavoring(buy)
console.log(flavOFlav)

const bark = makeBarkMixture(buy)
console.log(bark)

const bake = bakeCandy(buy)
console.log(bake)

const barkBreak = breakBark(buy)
console.log(barkBreak)