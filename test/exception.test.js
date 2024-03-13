import { callMe, callMe2 } from "../src/exception";

test('exception', () => {
    expect(() => callMe('eko')).toThrow()
});

test('exception not happens', () =>{
    expect(callMe('budi')).toBe('ok')
})