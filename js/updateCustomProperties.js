// // ici on crée les différentes fonctions qui permettent de chercher/editer les différentes propriétés des éléments

// export function getCustomProperty(element, property) {
//     // getcomputedstyle va chercher la valeur des propriétés CSS 
//     return parseFloat(getComputedStyle(element).getPropertyValue(property)) || 0
//    // parseFloat return les chiffres contenus dans l'élément, ici ou bien 0 si pas de chiffres 
// }



// export function setCustomProperty(element, property, value) {

//     element.style.setProperty(property, value)

// }
 
// export function incrementCustomProperty(element, property, increment) {

//     setCustomProperty(elem, prop, getCustomProperty(element, property) + increment)


// }