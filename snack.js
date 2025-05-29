// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}


// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

function createSlug(stringa) {
    if (!stringa) {
        throw new Error('il titolo non può essere vuoto');
    }
    return stringa.toLowerCase().replaceAll(" ", "-");
}

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."
function average(number) {
    if (number.length === 0) {
        return 0
    }

    const somma = number.reduce((acc, number) => acc + number, 0);
    return somma / number.length;
}


// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione
// 👉 "La funzione createSlug sostituisce gli spazi con -."
// 📌 Esempi:
//     createSlug("Questo è un test") → "questo-e-un-test"


// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.

function isPalindrome(palindroma) {
    const parolaInversa = palindroma.split('').reverse().join('');
    return palindroma === parolaInversa;
}

// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."


// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme(ogni post ha le proprietà id, title e slug, viene passato un id numerico).

function findPostById(posts, id) {
    return posts.find(p => p.id === id);
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}