// document.body.addEventListener('click', () => {
//     if(document.body.style.backgroundColor === 'royalblue'){
//         document.body.style.backgroundColor = '#d5e4ef'
//     } else{
//         document.body.style.backgroundColor = 'royalblue'
//     }
// })

// let headline = document.getElementById('headline') 
// headline.addEventListener('click', () => {
//     headline.style.border = '1px solid tomato'
// })


// const btnUpdate = document.getElementById('btn-main');
// const headline = document.getElementById('headline');
// const items = document.getElementsByTagName('LI');
// const highlights = document.getElementsByClassName('highlight');


// for( const element of highlights){
//     element.style.backgroundColor = 'orange'
// }


// const btnUpdate2 = document.querySelector('#btn-main');
// const headline2 = document.querySelector('#headline');
// const items2 = document.querySelectorAll('li')
// const ul = document.getElementById('lists');
// const newLi = document.createElement('li');
// const newLiContent = document.newLi.textContent('This is new li')

// console.log()


// let changeButton = document.getElementById('btn-main');
// document.changeButton.addEventListener('click', () => {
//     let headline = document.querySelector('#headline')
//     let input = document.getElementsByClassName('input-main')[0].value
    
//     headline.innerHTML = input
// })


// const lists = document.querySelectorAll('li');
// console.log(lists)
// for( let element of lists){
//     element.addEventListener('click', () => {
//         element.className = 'grow'
//     })
// }


const toggleButton = document.querySelector('.btn-toggle');
const lists = document.querySelector('.lists');
toggleButton.addEventListener('click', () => {
    if( lists.style.display === 'none'){
        lists.style.display = 'block'
        toggleButton.textContent = 'Hide List'
    } else{
        lists.style.display = 'none'
        toggleButton.textContent = 'Show List'
    }
})

