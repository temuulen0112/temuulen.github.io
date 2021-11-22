function fDeclaration(z,x,y){
    const nom = z*z + x*x + y*y
    const denom = x+y+z
    return nom / denom
}

console.log(fDeclaration(3,2,6))

const f = function(z,x,y) {
    const nom = z*z + x*x + y*y
    const denom = x+y+z
    return nom / denom
}

console.log(f(1,1,2))
main = document.querySelector("main")
main.innerHTML = f(1,1,2)

function f(x,y){
    if( x<y ){
        return y
    }else if( x>y ){
        return x
    }else( x=y ){
        return x,y
    }
}

