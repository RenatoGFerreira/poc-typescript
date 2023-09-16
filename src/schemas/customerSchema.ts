import Joi from "joi"
import { Customer, NewCustomer } from "@/protocols/protocols"

 const individual = Joi.object<NewCustomer>({
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(50),
})

 const updateIndividual = Joi.object<Customer>({
    id: Joi.number().required(),
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(50),
})

export const customerSchema = {
    individual,
    updateIndividual
}