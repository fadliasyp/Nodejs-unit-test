import { sayHelloAsync } from "../src/async"

test.concurrent('concurrent', async() => {
   await expect(sayHelloAsync('eko')).resolves.toBe('hello eko')
})
test.concurrent('concurrent', async() => {
   await expect(sayHelloAsync('eko')).resolves.toBe('hello eko')
})
test.concurrent('concurrent', async() => {
   await expect(sayHelloAsync('eko')).resolves.toBe('hello eko')
})