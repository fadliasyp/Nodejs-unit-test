import{sum} from '../src/sum'

beforeAll(async ()=> {
    console.info('before all')
})
afterAll(() =>{
    console.info('after all')
})



beforeEach(() => {
    console.info('before each')
})
afterEach(()=> {
    console.info('after each')
})

test('firs test', () => {
    expect(sum(10, 10)).toBe(20)
    console.info('haloooooo')
});

test('second test', () => {
    expect(sum(10, 10)).toBe(20)
    console.info('halooo 2')
})