import axios, { AxiosResponse } from "axios"

interface credentials{
    'email':string,
    'passord':string
}

export const sendCredentials = async (email:string,password:string):Promise<AxiosResponse<credentials, credentials> | void> =>{
   const url = process.env.API_LINK;
    return axios.post(url ? url:"no url bro",{
        'email':email,
        'password':password
    }).catch((e)=>{
        
    })
}