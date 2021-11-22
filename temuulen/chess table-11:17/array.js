const cells = [
    [' ', '1', '2', '3', '4', '5', '6', '7', '8'],
    ['a', '', '', '', '', '', '', '', ''],
    ['b', '', '', '', '', '', '', '', ''],
    ['c', '', '', '', '', '', '', '', ''],
    ['d', '', '', '', '', '', '', '', ''],
    ['e', '', '', '', '', '', '', '', ''],
    ['f', '', '', '', '', '', '', '', ''],
    ['g', '', '', '', '', '', '', '', ''],
    ['h', '', '', '', '', '', '', '', ''],
    []
]
let content = ""

for( i = 0; i < cells.length; i++){
    const row = cells[i]
    content += '<tr>'
    for( j= 0; j < row.length; j++){
        if( i%2 == 0 ){
            if( j%2 == 0 && ( j != 0 && i != 0 )){
                content += `<td class="withborder-black">${cells[i][j]}</td>`
            } else if( j == 0 || i == 0){
                content += `<td>${cells[i][j]}</td>`
            } else {
                content += `<td class="withborder-white">${cells[i][j]}</td>`
            }
        } else{
            if( j%2 == 1 && ( j != 0 && i != 0 )){
                content += `<td class="withborder-black">${cells[i][j]}</td>`
            } else if( j == 0 || i == 0){
                content += `<td>${cells[i][j]}</td>` 
            }
            else{
                content += `<td class="withborder-white">${cells[i][j]}</td>`
            }
        }
    }
    content += '</tr>'
}
document.querySelector(".temuulen").innerHTML = content

