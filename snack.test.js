// importo le funzioni
const { getInitials, createSlug, average } = require('./snack')


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Luca Belardinelli")).toBe("L.B.");
});

//snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Hello Word")).toBe("hello word")
});

//snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([2, 4, 6])).toBe(4)
})