// importo le funzioni
const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./snack')


//snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Luca Belardinelli")).toBe("L.B.");
});

//snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Hello Word")).toBe("hello-word");
});

//snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([2, 4, 6])).toBe(4);
})

//snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test");
})

//snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("otto")).toBeTruthy();
    expect(isPalindrome("pokemon")).toBeFalsy();

})


//snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("il titolo non può essere vuoto");
})


const posts = [
    { id: 1, title: "Tips CSS per layout responsive", slug: "tips-css-layout-responsive" },
    { id: 2, title: "Guida a React", slug: "guida-a-react" },
    { id: 3, title: "Come usare useState", slug: "come-usare-usestate" },
];


//snack 7
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Guida a React", slug: "guida-a-react" });
})