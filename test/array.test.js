test('array simple', () => {
    
    const names = ['eko', 'kurniawan', 'khannedy']

    expect(names).toContain('eko')
});

test('array object', () => {
    const persons = [
        {
            name: 'eko'
        },
        {
            name: 'budi'
        }
    ]

    expect(persons).toContainEqual({
        name: 'budi'
    })
})