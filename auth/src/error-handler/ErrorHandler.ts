import {Request,Response,NextFunction} from 'express'
import InvalidCredentials from '../errors/InvalidCredentials';


const ErrorHandler=(err:Error, req:Request, res:Response, next:NextFunction)=>{
  if(err instanceof InvalidCredentials){
    return res.status(err.statusCode).send({errors:err.serializeErrors()})
  }
}



export default ErrorHandler;
