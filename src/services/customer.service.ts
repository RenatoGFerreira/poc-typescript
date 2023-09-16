import { Customer } from "@/protocols/protocols"
import { customerRepository } from "@/repositories/customer.repository"


async function getCustomersService() {
    const count = await customerRepository.allCustomers()
    const id = Math.floor(Math.random()*(count)) + 1
    return await customerRepository.getCustomers(id)
}

async function postCustomerService(customer: Customer){
    const isCustomerExist = await customerRepository.getCustomerbyNames(customer)
    if(isCustomerExist) throw { type:"Conflict", message: "[ERROR] Customer exist."}

    await customerRepository.postNewCustomer(customer)
}

async function updateCustomerService(customer: Customer) {
    const isCustomerExist = await customerRepository.getCustomers(customer.id)
    if(isCustomerExist) throw { type:"NotFound", message: "[ERROR] Customer doesnt exist."}

    await customerRepository.updateCustomer(customer)
}

async function deletCustomerService(id: number) {
    const isCustomerExist = await customerRepository.getCustomers(id)
    if(isCustomerExist) throw { type:"NotFound", message: "[ERROR] Customer doesnt exist."}

    await customerRepository.deletCustomer(id) 
}






export const customerService = {
    getCustomersService,
    postCustomerService,
    updateCustomerService,
    deletCustomerService
}