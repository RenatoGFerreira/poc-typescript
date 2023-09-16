export type Customer = {
    id: number;
    firstName: string;
    lastName: string;
    length: number
}

export type CustomerCount = {
    countPeople: number;
}

export type NewCustomer = Omit<Customer,"id">

export type ErrorHandler = {
    type: string,
    message: string
}