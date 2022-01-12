
/*
We need functiosn to perform the individual
tasks of making candy:
    Buy some milk chocolate
    Add some mint flavoring
    Combine the chocolate and mint
    Bake the mixture
    Break the hardened sheet into 6 pieces
    Eat the candy
*/

const buyChocolate = () => {
    const candyObject = {   }
        candyObject.type = "Milk Chocolate"
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
            candyObject.flavor = false
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
        return  
        [
            "Mint Choccolate Bark Piece", 
            "Mint Choccolate Bark Piece", 
            "Mint Choccolate Bark Piece", 
            "Mint Choccolate Bark Piece", 
            "Mint Choccolate Bark Piece", 
            "Mint Choccolate Bark Piece"
        ]
    }
}


let buy = buyChocolate()
console.log(buy)

let flavor = addFlavoring(candyObject)
console.log(flavor)

let bark = makeBarkMixture(candyObject)
console.log(bark)

let bake = bakeCandy(candyObject)
console.log(bake)

let barkBreak = breakBark(candyObject)
console.log(barkBreak)


