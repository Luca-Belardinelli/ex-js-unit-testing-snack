// importo le funzioni
const { getInitials, createSlug } = require('./snack')


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Luca Belardinelli")).toBe("L.B.");
});

//snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Hello Word")).toBe("hello word")
});