import { sumAll } from "../src/sum"

describe('when sumAll', () =>{
    it('should get 30 with parameter ([10, 10, 10])', () =>{
        expect(sumAll([10, 10, 10])).toBe(30)
    })
    it('should get 30 with parameter ([10, 10, 10, 10])', () =>{
        expect(sumAll([10, 10, 10, 10])).toBe(40)
    })
    
})