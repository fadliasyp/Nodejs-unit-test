import {sum, sumAll} from '../src/sum'

test("sum to function 1", () =>{

    const result = sum(1, 2);

    expect(result).toBe(3)
})
test("sum to function 2", () =>{

    const result = sum(1, 2);

    expect(result).toBe(3)
})
test("sum to function 3", () =>{

    const result = sum(1, 2);

    expect(result).toBe(3)
})
// --testNamePattern : untuk jalanin satu block kode
// --runTestsByPath : untuk jalanin semua block kode

test('sum all', () => {
    const number = [1,1,1,1,1]
    expect(sumAll(number)).toBe(5)
})