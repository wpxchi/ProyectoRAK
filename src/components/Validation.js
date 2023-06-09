export default (data)=> {
let errors={}

if(!data.email.includes('@')){
    errors.e1= 'Email is not valid'
}
if(!data.email){
    errors.e2= 'Ingrese email'
}
if(data.email.length > 35){
    errors.e3= 'Maximo 35 caracteres'
}

if(!/\d/.test(data.password)){
    errors.p1='Debe tener al menos un numero'
}
if(data.password.length <6 || data.password.length > 10){
    errors.p2= 'Entre 6 y 10 caracteres'
}
return errors
} 