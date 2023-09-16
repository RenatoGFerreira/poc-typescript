import { db } from "@/database/database"
import { CustomerCount, Customer, NewCustomer } from "@/protocols/protocols"


//GET 

async function allCustomers() {
    return (await db.query<CustomerCount>(`SELECT count(id) as "countPeople" FROM customers`)).rows[0].countPeople
}

async function getCustomers(id:number){
    return (await db.query<Customer>(`SELECT * FROM customers WHERE id = $1`,
    [id])).rows[0]
}


//POST

async function getCustomerbyNames(client:NewCustomer){
    return (await db.query<Customer>(`SELECT * FROM customers WHERE "firstName" = $1 AND "lastName" = $2`,
    [client.firstName, client.lastName])).rows[0]
}

async function postNewCustomer(customer:NewCustomer){
    await db.query(`INSERT INTO customers ("firstName", "lastName") VALUES($1,$2)`,
    [customer.firstName, customer.lastName])
}


//PUT

async function updateCustomer(customer:Customer){
    return (await db.query<Customer>(`UPDATE custtomers SET "firstName" = $1,"lastName" = $2  where id = $3 `,[customer.firstName,customer.lastName,customer.id])).rows[0]
}

//DELETE

async function  deletCustomer(id:number) { 
    await db.query(`DELETE FROM customers WHERE id =$1`,[id])
}

export const customerRepository = {
    allCustomers,
    getCustomers,
    getCustomerbyNames,
    postNewCustomer,
    updateCustomer,
    deletCustomer
}