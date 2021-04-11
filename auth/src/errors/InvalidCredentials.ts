import {ValidationError} from 'express-validator'


interface InvalidCredentialsInterface{
  statusCode:number,
  serializeErrors():{
    message:string;
    field?:string;
  }[]
}


class InvalidCredentials extends Error implements InvalidCredentialsInterface{
  statusCode=400;
  reason="Invalid Email or Password!"
  constructor(public errors:ValidationError[]){
    super();
    Object.setPrototypeOf(this,InvalidCredentials.prototype);
   
  }

  serializeErrors(){
    return this.errors.map(err=>{
      return {message:this.reason,field:err.param}
    })
    
    
  }
  


};

export default InvalidCredentials;






