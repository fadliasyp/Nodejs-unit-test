export class myException extends Error{

}
export const callMe = (name) => {
    if(name === 'eko'){
        throw new myException('ups myException hapenns')
    } else {
        return 'ok'
    }
}

