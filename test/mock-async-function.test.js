import { getBalance } from "../src/async"

test('mock-async-function', async() => {
    const from = jest.fn()
    from.mockResolvedValueOnce(1000)

    await expect(getBalance('eko', from)).resolves.toEqual({
        name: 'eko',
        balance: 1000
    })
    expect(from.mock.calls.length).toBe(1)
    await expect(from.mock.results[0].value).resolves.toBe(1000)
})

test.failing('mock async function reject', async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error('ups!!'));
    
    await getBalance('eko', from);
})

test('mock async function erorr', async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error('ups!!'));
    
    await expect(() => {
        getBalance('eko', from).toThrow()
    })
})