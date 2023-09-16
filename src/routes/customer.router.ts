import { customerController } from "@/controllers/customer.controller";
import { validateSchema } from "@/middleware/validateSchema";
import { customerSchema } from "@/schemas/customerSchema";
import {Router} from "express";

const customerRouter: Router = Router()

customerRouter.get("/customer", customerController.getRandomCustomer)
customerRouter.post("/customer", validateSchema(customerSchema.individual), customerController.postCustomer)
customerRouter.put("/customer", validateSchema(customerSchema.updateIndividual), customerController.updateCustomer)
customerRouter.delete("/customer/:id", customerController.deleteCustomer )


export default customerRouter


