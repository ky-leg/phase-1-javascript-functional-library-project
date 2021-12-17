const myEach = function(collection, callback){
    const output = (arrayOrObject) => {
        for (let i = 0; i < arrayOrObject.length; i++){
            callback(arrayOrObject[i])
        }
    };
    determineAndConvert(collection, output);
    return collection
}

const myMap = function(collection, callback){
    const newArray = []
    const map = (arrayOrObject) => {
        for (let i = 0; i < arrayOrObject.length; i++){
            newArray[i] = callback(arrayOrObject[i]);
        }
    }
    determineAndConvert(collection, map)
    return newArray
}

// const myReduce = function(collection, callback, acc=collection[i]){
//     const reduce = (arrayOrObject) => {
//         for (let i = 0; i < arrayOrObject.length; i++)
//         acc = callback(arrayOrObject[i])
//         return acc
//     }
//     determineAndConvert(collection, reduce)
//     return acc
// }

const myFind = function(collection, predicate){
    let value
    const find = (arrayOrObject) => {
        for (let i = 0; i < arrayOrObject.length; i++)
            if (predicate(arrayOrObject[i]) === true){
                return value = arrayOrObject[i]
            }
    }
    determineAndConvert(collection, find)
    return value
}

const myFilter = function(collection, predicate){
    let values = []
    const filter = (arrayOrObject) => {
        for (let i = 0; i < arrayOrObject.length; i++){
            if (predicate(arrayOrObject[i]) === true){
                values.push(arrayOrObject[i])
            }
        }
    }
    determineAndConvert(collection, filter)
        return values
}

const mySize = function(collection){
    let value 
    const size = ((arrayOrObject) => {value = arrayOrObject.length})
    determineAndConvert(collection, size)
    return value
}

const myFirst = function(array, n = 1){
    let value
    if (n === 1){
        value = array[0]
    }
    if (n > 1){
        let value = []
        for (let i = 0; i < n ; i ++){
            value[i] = array[i]
        }
        return value
    }
    return value
}

const myLast = function(array, n = 1){
    let value 
    if (n === 1){
        value = array[array.length - n]
    }
    if (n > 1){
        let value =[]
        let num = 0
        for (let i = n; i > 0; i--){
            value[num] = array[array.length - i]
            num ++
        }
        return value
    }
    return value
}

const myKeys = function(object){
    
    return Object.keys(object)
}

const myValues = function(object){
    return Object.values(object)
}

const determineAndConvert = function(collection, toDo, callback){
    if (typeof collection === 'object'){
        const collectionArray = Object.values(collection)
        toDo(collectionArray, callback)
    }

    else {
        toDo(collection, callback)
    }
}