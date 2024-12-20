import { Request, Response } from "express"
import prisma from "../db"


export const login = async(req: Request, res: Response) => {

    const {gmail} = await req.body
    
    const user = await prisma.user.create({
        data:{
            gmail
        }
    })

    res.json(user)

}
