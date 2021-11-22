function getRandomNumber(){
    let number = Math.floor(Math.random() *10) 
    return number
}

/*let counter = 0 
while( counter < 10 ){
    console.log(getRandomNumber())
    counter +=1
}*/

for( let counter = 0; counter < 10; counter +=1 ){
    console.log(getRandomNumber())
}