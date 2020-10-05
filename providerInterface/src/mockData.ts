import { car } from './car';
import { employee } from './employee';
import { transaction } from './transaction';

export const CARS: car[] = [
    { carID: 1, entryDate : new Date("2015-01-01"), make:'Toyota', name:'Corolla', year: new Date("2013-01-02"), kmDriven: 40000, condition:'heavily used' },
    { carID: 2, entryDate : new Date("2018-01-01"), make:'Ford', name:'F-150', year: new Date("2016-01-02"), kmDriven: 10000, condition:'like new' },
    { carID: 3, entryDate : new Date("2015-01-01"), make:'Nissan', name:'Leaf', year: new Date("2015-01-02"), kmDriven: 28400, condition:'slightly used' },
    { carID: 4, entryDate : new Date("2016-01-01"), make:'Chrysler', name:'300', year: new Date("2016-01-02"), kmDriven: 26780, condition:'used' },
    { carID: 5, entryDate : new Date("2013-01-01"), make:'Honda', name:'Civic', year: new Date("2012-01-02"), kmDriven: 57830, condition:'heavily used' },
    { carID: 6, entryDate : new Date("2012-01-01"), make:'Volvo', name:'XC90', year: new Date("2011-01-02"), kmDriven: 62300, condition:'out' }
];

export const EMPLOYEES: employee[] = [
    {ID: 1, name: 'John Doe', password: 'abc', position: 'staff'},
    {ID: 2, name: 'Mary Jane', password: 'xyz', position: 'finance'},
    {ID: 3, name: 'Bruce Wayne', password: 'bgh', position: 'manager'},
];

export const TRANSACTIONS: transaction[] = [
    {transactionID: 1, ini_staffID:1, end_staffID:1, carID:6, startDate:new Date("2013-01-01"),endDate: new Date("2014-01-01")},
    {transactionID: 2, ini_staffID:1, end_staffID:1, carID:6, startDate:new Date("2014-01-01"),endDate: new Date("2015-01-01")},
    {transactionID: 3, ini_staffID:1, end_staffID:1, carID:6, startDate:new Date("2015-01-01"),endDate: new Date("2018-01-01")},
    {transactionID: 4, ini_staffID:1, end_staffID:1, carID:5, startDate:new Date("2013-01-01"),endDate: new Date("2014-01-01")},
    {transactionID: 5, ini_staffID:1, end_staffID:1, carID:5, startDate:new Date("2014-01-01"),endDate: new Date("2016-01-01")},
    {transactionID: 6, ini_staffID:1, end_staffID:1, carID:5, startDate:new Date("2016-01-01"),endDate: new Date("2018-01-01")},
    {transactionID: 7, ini_staffID:1, end_staffID:1, carID:1, startDate:new Date("2016-01-01"),endDate: new Date("2019-01-01")},
    {transactionID: 8, ini_staffID:1, end_staffID:1, carID:1, startDate:new Date("2019-01-01"),endDate: new Date("2020-01-01")},
    {transactionID: 9, ini_staffID:1, end_staffID:1, carID:2, startDate:new Date("2018-06-01"),endDate: new Date("2020-03-01")},
    {transactionID: 10, ini_staffID:1, end_staffID:1, carID:3, startDate:new Date("2016-01-01"),endDate: new Date("2018-01-01")},
    {transactionID: 11, ini_staffID:1, end_staffID:1, carID:4, startDate:new Date("2018-01-01"),endDate: new Date("2019-01-01")}
]