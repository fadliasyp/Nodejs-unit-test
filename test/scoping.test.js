beforeAll(() => console.info('before all outer'))
afterAll(() => console.info('after all outer'))
beforeEach(() => console.info('before Each outer'))
afterEach(() => console.info('after Each outer'))

test('test outer', () => {
    console.info('test outer')
}) 

describe('inner 1', () =>{
    beforeAll(() => console.info('before all outer'))
    afterAll(() => console.info('after all outer'))
    beforeEach(() => console.info('before Each inner'))
    afterEach(() => console.info('after Each inner'))
    // before & after Each diatas ini hanya berlaku untuk test inner saja
    
    test('test inner', () => {
        console.info('test inner')
        // output: beforeAll, beforeEach outer, beforeEach inner baru test nya dijalankan
    })

});
describe('inner 2', () =>{

    beforeEach(() => console.info('before Each inner'))
    afterEach(() => console.info('after Each inner'))
    // before & after Each diatas ini hanya berlaku untuk test inner saja

    test('test inner', () => {
        console.info('test inner')
        // output: beforeAll, beforeEach outer, beforeEach inner baru test nya dijalankan
    })

});


describe('asal', () => {
    beforeAll(()=> console.info('before all asal'))
    afterAll(()=> console.info('after all asal'))
    beforeEach(()=> console.info('before each asal'))
    afterEach(()=> console.info('after each asal'))

    test('asal aja', () => {
        console.info('asal aja test')
    })
    describe('asal 2', () => {
        beforeAll(()=> console.info('before all asal'))
        afterAll(()=> console.info('after all asal'))
        beforeEach(()=> console.info('before each asal'))
        afterEach(()=> console.info('after each asal'))
        
        test('asal aja', () => {
            console.info('asal aja test')
        })
    })

})

