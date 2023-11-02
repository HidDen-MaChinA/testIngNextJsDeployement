import axios, { AxiosResponse } from "axios"

interface credentials{
    'email':string,
    'passord':string
}

export const sendCredentials = async (email:string,password:string,url:string):Promise<AxiosResponse<credentials, credentials> | void> =>{
    return axios.post(url,{
        'email':email,
        'password':password
    }).catch((e)=>{
        
    })
}