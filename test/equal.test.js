test('test toBe', () => {
    const name = 'eko';
    const hello = `hello ${name}`

    expect(hello).toBe('hello eko')
});

test('test toEqual', () => {
    const person = {id: 'eko'};
    Object.assign(person, {name: 'Eko'})
    console.info(person)

    expect(person).toEqual({id: 'eko', name: 'Eko'})
})