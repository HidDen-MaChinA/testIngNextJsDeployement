import fs from 'node:fs/promises'
export class source{
    public getSource = async () =>{
        return fs.readFile("public/source.txt").then((value)=>{return value.toString()}).catch(()=>{
            return fs.readFile("/source.txt").then((value)=>(value.toString()));
        })
    }
    public setSource = (input:string) =>{
        return fs.writeFile("public/source.txt",input).catch(()=>{
            fs.writeFile("/source.txt",input);
        });
    }
    private constructor(){
        
    }
    private static instance:source=new source();
    public static getInstance = ()=>{
        return this.instance;
    }
}