import { customerService } from "@/services/customer.service";
import { Request, Response } from "express";

async function getRandomCustomer(req: Request, res: Response) {
    const customer = await customerService.getCustomersService()
    res.status(201).send(customer)

}

async function postCustomer(req: Request, res: Response) {
    await customerService.postCustomerService(req.body)
    res.status(201).send("Created new customer!")
    
}

async function updateCustomer(req: Request, res: Response) {
    await customerService.updateCustomerService(req.body)
    res.status(200).send("Update customer!")

}

async function deleteCustomer(req:Request, res: Response) {
    const id = Number(req.params.id)

    await customerService.deletCustomerService(id)
    res.status(202).send("Successfully deleted")
    
}


export const customerController = {
    getRandomCustomer,
    postCustomer,
    updateCustomer,
    deleteCustomer
}