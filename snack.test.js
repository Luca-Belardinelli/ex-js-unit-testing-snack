// importo le funzioni
const { getInitials } = require('./snack')


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Luca Belardinelli")).toBe("L.B.");
});