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
    return await res.json();
};

export async function eliminarAlgoPorId(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(baseUrl+"agendas/"+id, options);
    return await res.text();
};

export async function findAlgoById(id) {
    const res = await fetch(baseUrl+"agendas/"+id);
    return await res.json();
};
