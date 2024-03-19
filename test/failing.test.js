import { sayHello } from "../src/sayHello"

test('sayHello succsess', () =>{
    expect(sayHello('eko')).toBe('hello eko')
})

test.failing('failing', () =>{
    sayHello(null)
})

function fadli(a){ 
    if(a === null){
    throw new Error('ups')
    }else {
        return 'okaaaiii'
    }
}

test('fadli', () => {
    expect(() => fadli(null)).toThrow()
})

// kalau pakai toThrow harus di barengi expectnya function yang ada thrownya juga