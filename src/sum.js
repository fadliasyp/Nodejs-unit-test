export const sum = (first, second) => {
    return first + second
}

export const sumAll = (numbers) =>{
    let total = 0
    for (const number of numbers) {
        total += number
    }

    return total
}