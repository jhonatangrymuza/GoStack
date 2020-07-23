import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){

    const user = createUser({
        name:"Jhonatan", 
        email:"Grymuza",
        password:"123",
        techs:["node.js", "react","php",
        {title:'js', experience: 90}
    ]
    })

    return response.json({ message: user });
}
