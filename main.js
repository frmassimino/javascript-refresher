import prs from './Person' //importing person but since is a default export, it can be named whatever you want
import { arms } from './Person'
import { legs as lgs } from './Person'
import * as bundle from './utility'

console.log(prs, arms, lgs)
console.log(bundle.car)



const filter = (...args) => {
    return args.filter(el => el === 1)
}

const arrary = [1,2,3,4,5,1,6]

console.log(filter(...arrary))

//Array destructuring
const [a, b] = arrary
console.log(a)
console.log(b)

const [a,,b] = arrary
console.log(a)
console.log(b)


//Object destrcuturing
const person = {
    name: 'Franco',
    lastname: 'Massimino'
}

const { name } = {...person}

console.log(name)

//map() , applies a function to all values in an array

const numberArray  = [1,2,3]
const doubleArray = numberArray.map( (num) => {
    return num*2
})

console.log(numberArray)
console.log(doubleArray)