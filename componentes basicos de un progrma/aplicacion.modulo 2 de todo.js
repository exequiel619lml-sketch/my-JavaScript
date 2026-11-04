// ==========================================
// DATOS DE INICIO
// ==========================================
const users = [
    { id: 101, nombre: " Ada ", puntuaciones: [10, 20, 30] },
    { id: 102, nombre: "", puntuaciones: [5, 0, 15] },
    { id: 103, name: null, scores: [7, 14] },
    { id: 104, /* nombre omitido a propósito */ puntuaciones: [3, 3, 3, 3] },
    { id: 105, name: "Grace", scores: [] }
];

// ==========================================
// FUNCIONES DE UTILIDAD
// ==========================================
/* Qué hace: Define una matriz (arreglo) llamada users que contiene 5 objetos.   
Por qué es así: Cada objeto simula un usuario con diferentes estructuras 
(algunos usan nombre y puntuaciones, mientras que otros usan name y scores, o tienen campos vacíos/nulos) 
para poner a prueba la flexibilidad de estas funciones.  */
// 1. normalizeName(value)
function normalizeName(value) {
    if (value === null || value === undefined || (typeof value === "string" && value.trim() === "")) {
        return "Unknown";
    }
    if (typeof value === "string") {
        return value.trim();
    }
    return "Unknown";
}
/* Revisa si el valor es null, undefined o si es un texto que, al quitarle los espacios con .trim(),
 queda vacío (""). Si cumple esto, retorna directamente "Unknown".

Si es un string válido con contenido, usa .trim() para eliminar los espacios sobrantes al inicio y al final 
(por ejemplo, transforma " Ada " en "Ada").*/

// 2. averageScore(scores)
function averageScore(scores) {
    if (!Array.isArray(scores)) {
        throw new Error("scores must be an array");
    }
    if (scores.length === 0) {
        return null;
    }
    let sum = scores.reduce((acc, curr) => acc + curr, 0);
    let avg = sum / scores.length;
    return Math.round(avg * 100) / 100;
}
/* Programación defensiva: Usa Array.isArray() para comprobar si el argumento es un arreglo; 
si no lo es, lanza un error con throw new Error.   
Si el arreglo está vacío (length === 0), devuelve null.   
Usa .reduce() para sumar todos los elementos del arreglo y divide el resultado
entre el total de elementos para sacar la media.Redondea el resultado a dos decimales multiplicando y dividiendo por 100 
junto con Math.round().*/
function buildUserSummary(user) {
    if (typeof user !== "object" || user === null || Array.isArray(user)) {
        throw new Error("user must be an object");
    }
    
    let rawName = user.nombre !== undefined ? user.nombre : user.name;
    let normalizedName = normalizeName(rawName);

    let rawScores = user.puntuaciones !== undefined ? user.puntuaciones : user.scores;
    let scoresArray = Array.isArray(rawScores) ? rawScores : [];

    let scoreCount = scoresArray.length;
    let avg = averageScore(scoresArray);

    return {
        id: user.id,
        name: normalizedName,
        scoreCount: scoreCount,
        avg: avg
    };
}

// 4. summarizeUsers(userArray)
function summarizeUsers(userArray) {
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }
    return userArray.map(buildUserSummary);
}

// 5. safeSummarizeUsers(userArray)
function safeSummarizeUsers(userArray) {
    try {
        const result = summarizeUsers(userArray);
        return { ok: true, data: result };
    } catch (error) {
        return { ok: false, error: error.message };
    }
}

// 6. getUserDisplayNameById(userArray, id)
function getUserDisplayNameById(userArray, id) {
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }
    if (typeof id !== "number") {
        throw new Error("id must be a number");
    }

    let found = userArray.find(u => u.id === id);
    if (!found) {
        throw new Error("user not found");
    }

    let rawName = found.nombre !== undefined ? found.nombre : found.name;
    return normalizeName(rawName);
}


// ==========================================
// RESPUESTAS DE LA PARTE C
// ==========================================
/*
// 1) typeof undefined = ?
Respuesta: "undefined"

// 2) typeof null = ?
Respuesta: "object" (es un comportamiento histórico de JavaScript donde null se tipifica erróneamente como un objeto)

// 3) ¿Por qué tratar "" de forma diferente a null/undefined en normalizeName (conceptualmente)?
Respuesta: Conceptualmente, `null` y `undefined` indican la ausencia total de un valor o una propiedad no inicializada, 
mientras que una cadena vacía `""` es un valor de tipo string existente pero sin contenido. Sin embargo, en el contexto de 
nombres de usuario, ambos escenarios representan datos inválidos o incompletos, por lo que la función los unifica 
devolviendo "Unknown".
*/


// ==========================================
// LLAMADAS DE PRUEBA NECESARIAS
// ==========================================
console.log(normalizeName(" Ada ")); // esperado: "Ada"
console.log(normalizeName(" ")); // esperado: "Unknown"
console.log(normalizeName(null)); // esperado: "Unknown"
console.log(averageScore([10, 20, 30])); // esperado: 20
console.log(averageScore([])); // esperado: null
console.log(buildUserSummary(users[0])); // esperado: { id: 101, name: 'Ada', scoreCount: 3, avg: 20 }
console.log(buildUserSummary(users[1])); // esperado: { id: 102, name: 'Unknown', scoreCount: 3, avg: 6.67 }
console.log(safeSummarizeUsers(users).ok); // esperado: true
console.log(getUserDisplayNameById(users, 105)); // esperado: "Grace"
console.log(safeSummarizeUsers("no es un array")); // esperado: { ok: false, error: 'userArray must be an array' }