export const sayHelloAsync = (name) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() =>{
            if(name){
                resolve(`hello ${name}`)
            }else{
                reject('Name is empty')
            }
        }, 1000)
    })
}
