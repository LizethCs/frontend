const baseUrl = "http://localhost:8080/";

export async function listarAdmin() {
    const options = { method: "GET" };
    const res = await fetch(baseUrl + "admin", options);
    return await res.json();
};

export async function listarCitas(){
 const options = { method: "GET" };
 const res = await fetch(baseUrl + "citavet", options);
 var resp = res.json();
  return await resp;
  
};

export async function listarVeterinarios(){
    const options = { method: "GET" };
    const res = await fetch(baseUrl + "veterinario", options);
    var resp = res.json();
     return await resp;
     
   };

export async function guardarPaciente(paciente) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(paciente)
    };
   
    const res = await fetch(baseUrl+ "pacientevet", options);
    
   
};

export async function actualizarCitas(cita) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(cita)
    };
   
    const res = await fetch(baseUrl+ "citavet", options);
    
   
};

export async function guardarCita(cita) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(cita)
    };
   
    const res = await fetch(baseUrl+ "citavet", options);
    
   
};

export async function guardarVet(Vet) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(Vet)
    };
   
    const res = await fetch(baseUrl + "veterinario", options);
    
   
};

export async function eliminarCitaPorId(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(baseUrl+"citavet/"+id, options);
    return await res.text();
};

export async function findVetById(id) {
    const res = await fetch(baseUrl+"veterinario/"+id);
    return await res.json();
};
