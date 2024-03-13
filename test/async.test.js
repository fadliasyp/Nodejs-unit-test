 import { sayHelloAsync } from "../src/async";

test('async to function', async () => {
   const result = await sayHelloAsync('eko')
   expect(result).toBe('hello eko')
});

test('test async matcher', async () => {
    await expect(sayHelloAsync('eko')).resolves.toBe('hello eko');
    await expect(sayHelloAsync()).rejects.toBe("Name is empty")
})
