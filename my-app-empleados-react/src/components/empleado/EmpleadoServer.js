const API_URL ='http://localhost:4000/api/empleados/';

export const listEmpleados = async ()=>{
    return await fetch(API_URL)
}