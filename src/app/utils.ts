import fs from 'node:fs/promises'
export class source{
    public getSource = async () =>{
        return fs.readFile("public/source.txt").then((value)=>{return value.toString()})
    }
    public setSource = (input:string) =>{
        return fs.writeFile("public/source.txt",input);
    }
    private constructor(){
        
    }
    private static instance:source=new source();
    public static getInstance = ()=>{
        return this.instance;
    }
}