/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
let pets = [
  {
    name: 'Lucky',
    type: 'Dog', 
    breed: 'Golden Retriever',
    age: '4 months',
    photo: 'img/golden.jpg'
  },
  {
    name: 'George',
    type: 'Cat',
    breed: 'Europian shorthair',
    age: '5',
    photo: 'img/tabby.jpg'
  },
  {
    name: 'Haru',
    type: 'Cat',
    breed: 'Persian cat',
    age: '7',
    photo: 'img/persian.jpg'
  },
  {
    name: 'Alag',
    type: 'Dog',
    breed: 'Siberian Husky',
    age: '9',
    photo: 'img/aussie.jpg'
  },
  {
    name: 'Halzan',
    type: 'Dog',
    breed: 'Dachshund',
    age: '2',
    photo: 'img/dachshund.jpg'
  },
  {
    name: 'Tom',
    type: 'Dog',
    breed: 'Pug',
    age: '4',
    photo: 'img/pug.jpg'
  }
]
let content = "";
for( i =0; i < pets.length; i++){
  let h2 = `<h2>${pets[i].name}</h2>`
  let h3 = `<h3>${pets[i].type} | ${pets[i].breed}</h3>`
  let p = `<p>${pets[i].age}</p>`
  let img = `<img src="${pets[i].photo}">`
  content += `${h2} ${h3} ${p} ${img}`
}
document.querySelector("main").innerHTML = content