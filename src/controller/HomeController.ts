import { Request, Response } from 'express';
import { prisma } from '../../generated/prisma-client'

const getRootPage = async (req :Request, res :Response) => {
    const allUsers = await prisma.users()
    res.send({ data: allUsers })
}

const createUser = async (req :Request, res :Response) => {
    const newUser = await prisma.createUser({name: req.body.name})
    res.send({ data: newUser })
}

export = {
    getRootPage,
    createUser
}