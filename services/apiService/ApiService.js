import {urlBackend, urlGoogleMaps, urlPhoneCode} from "../url/url";
import axios from 'axios';

export async function callGoogleMapsApi(method, path, data, url = urlGoogleMaps.api) {
    const response = await axios(`${url}${path}`, {
        method : method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        },
        data: !(method === "GET") ? JSON.stringify(data) : null
    })
    return await response
}

export async function callBackend(method, path, data, url = urlBackend.api) {
    const response = await axios(`${url}/${path}`, {
        method : method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        },
        data: !(method === "GET") ? JSON.stringify(data) : null
    })
    return await response
}

export async function callPhoneCode(method, path, data, url = urlPhoneCode.api) {
    const response = await axios(`${url}/${path}`, {
        method : method,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        },
        data: !(method === "GET") ? JSON.stringify(data) : null
    })
    return await response
}
