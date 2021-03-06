import { basePath, apiVersion } from './config';

export function suscribeNewslleterApi(email){
    const url = `${basePath}/${apiVersion}/suscribe-newsletter/${email}`;

    const params = {
        method: "POST",
    }
    
    return fetch(url, params)
        .then(response => {
            return response.json()
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}