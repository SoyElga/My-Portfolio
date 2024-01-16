import axios from 'axios'

const client = axios.create({
    baseURL: "http://54.227.184.76",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": ' *',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    }
  })

//Metodo global GET para hacer peticiones de listas
export const GET = async (path) => {
    try {
        const {data} = await client.get(`${client?.defaults?.baseURL}${path}`)
        if(data) return data
    } catch (err) {
        alert(`Error: ${err?.response?.data?.message || err?.message}`);
    }
}

export const POST = async (path, payload) => {
    try {
        const {data} = await client.post(`${client?.defaults?.baseURL}${path}`, payload)
        if(data) return data
    } catch (err) {
        alert(`Error: ${err?.response?.data?.message || err?.message}`);
    }
}

export const PUT = async () => {}

export const PATCH = async () => {}

export const DELETE = async () => {}



