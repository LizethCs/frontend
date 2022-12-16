const baseUrl = "http://localhost:8080/";

export async function listarAdmin() {
    const options = { method: "GET" };
    const res = await fetch(baseUrl + "admin", options);
    return await res.json();
};

export async function guardarPaciente(paciente) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(paciente)
    };
   
    const res = await fetch(baseUrl+ "pacientevet", options);
    
   
};

export async function guardarVet(Vet) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(Vet)
    };
   
    const res = await fetch(baseUrl + "veterinario", options);
    
   
};

export async function eliminarAlgoPorId(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(baseUrl+"ruta/"+id, options);
    return await res.text();
};

export async function findAlgoById(id) {
    const res = await fetch(baseUrl+"ruta/"+id);
    return await res.json();
};
