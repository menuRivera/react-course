test('Test description', () => {
    const msg1 = 'Hello world'

    const msg2 = msg1.trim()

    expect(msg2).toBe(msg1)
})