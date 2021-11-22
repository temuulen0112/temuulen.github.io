const person = {
    name: 'Temuulen',
    city: 'Ulaanbaatar',
    age: 18,
    skills: ['Javascript', 'HTML', 'CSS']
}

const message = `Hi , I'm ${person.name}. I live in ${person.city}. Most know me as ${person.name = "TEmka"}. I'm experienced at ${person.skills[1]}.`

document.querySelector("main").innerHTML = `<p>${message}</p>`
console.log(message)