test('string not', () => {
    
    const value = 'eko kurniawan khannedy'
    expect(value).not.toBe('eko')
    expect(value).not.toContain('fadli')
    expect(value).not.toMatch('joko')
    

});

test('number not', () => {
    const value = 10 + 10

    expect(value).not.toBeGreaterThan(30)
    expect(value).not.toBeLessThan(10)
    expect(value).not.toBe(10)
})