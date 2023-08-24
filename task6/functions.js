

// const findMaxValue = (numbers) => {

//     let maximum = -Infinity;
//     numbers.forEach((ele) => {
//         if (ele > maximum) maximum = ele
//     })
//     return maximum;
// }

// const findMinValue = (numbers) => {
//     let minimam = Infinity;
//     numbers.forEach((ele) => {
//         if (ele < minimam) minimam = ele
//     })
//     return minimam;
// }

// const removeDuplications = (numbers) => {
//     const distinctNumbers = []
//     numbers.forEach((number) => {
//         if (!distinctNumbers.includes(number)) distinctNumbers.push(number)
//     })
//     return distinctNumbers
// }


const findMinValue = (numbers) => Math.min(...numbers)
const findMaxValue = (numbers) => Math.max(...numbers)
const repeatNumber2 = (numbers) => {
    const newArr = []
    numbers.forEach(num => {
        if (num === 2) {
            newArr.push(2)
        }
        newArr.push(num)
    })
    return newArr
}
const mutliplyBy5 = (numbers) => numbers.map((ele) => ele * 5)

const storeAscend = (numbers) => [...numbers.sort((a, b) => a - b)]
const storeDesend = (numbers) => [...numbers.sort((a, b) => b - a)]

const removeDuplications = (numbers) => [...(new Set(numbers))]
