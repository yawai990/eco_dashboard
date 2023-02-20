export const columName = [
    {
        id : 0,
        name : '#'
    },
    {
        id : 1,
        name : 'item'
    },
    {
        id : 2,
        name : 'price'
    },
    {
        id : 3,
        name : 'category'
    },
    {
        id : 4,
        name : 'brand'
    },
    {
        id : 5,
        name : 'stock'
    },
    {
        id : 6,
        name : 'photo'
    },
];


export const orderColName = [
    {
        id : 1,
        name : '#'
    },
    {
        id : 2,
        name : 'product name'
    },
    {
        id : 3,
        name : 'customer name'
    },
    {
        id : 4,
        name : 'quantity'
    },
    {
        id : 5,
        name : 'date'
    },
    {
        id : 6,
        name : 'price'
    },
    {
        id : 7,
        name : 'payment'
    },
    {
        id : 8,
        name : 'isPaid'
    },
    {
        id : 9,
        name : 'delivered'
    },
    {
        id : 10,
        name : 'address'
    },
];

export const orderData = [
    {
        id : 1,
        orderId :245164,
        productName : 'smart watch',
        customerName : 'Jhon Smith',
        address : '512 sshearwood forest drive',
        date : '20/03/22',
        price : 425,
        payment : 'COD', // 1 = debit 2 = code
        isPaid : 0, // 1 = debit 2 = code
        status : 'pending' //0 = cancel, 1 = pending  2 = complete
    },
    {
        id : 2,
        orderId :652415,
        productName : 'alexa box',
        customerName : 'thomas',
        address : '2264 royal Ln.Mewsa',
        date : '18/02/22',
        price : 425,
        payment : 'MPU', // 1 = debit 2 = code
        isPaid : 1, // 0 = debit 2 = code
        status : 'complete' //0 = cancel, 1 = pending  2 = complete
    },
    {
        id : 3,
        orderId :957842,
        productName : 'iphone 11',
        customerName : 'daily',
        address : '4578 General St',
        date : '16/03/22',
        price : 542,
        payment : 'MPU', // 1 = debit 2 = code
        isPaid : 0,
        status : 'cancel' //0 = cancel, 1 = pending  2 = complete
    },
];

export const employeeColName = [
    {
        id : 1,
        name : '#'
    },
    {
        id : 2,
        name : 'photo'
    },
    {
        id : 3,
        name : 'name'
    },
    {
        id : 4,
        name : 'employment date'
    },
    {
        id : 5,
        name : 'salary'
    },
    {
        id : 6,
        name : 'phone numer'
    },
];

export const employeeData = [{
    id: 1,
    photo: "http://dummyimage.com/225x100.png/5fa2dd/ffffff",
    name: "Donna Duxbarry",
    employmentDate: "17-02-2022",
    salary: "$3756.75",
    phone: "200-585-2337"
  }, {
    id: 2,
    photo: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
    name: "Leeland Noyes",
    employmentDate: "13-05-2022",
    salary: "$139.76",
    phone: "242-250-0148"
  }, {
    id: 3,
    photo: "http://dummyimage.com/212x100.png/ff4444/ffffff",
    name: "Matthieu Kells",
    employmentDate: "08-12-2022",
    salary: "$859.64",
    phone: "610-114-2892"
  }, {
    id: 4,
    photo: "http://dummyimage.com/182x100.png/ff4444/ffffff",
    name: "Fernandina Penzer",
    employmentDate: "29-01-2022",
    salary: "$929.10",
    phone: "969-703-0964"
  }, {
    id: 5,
    photo: "http://dummyimage.com/128x100.png/cc0000/ffffff",
    name: "Nikki Gutans",
    employmentDate: "17-12-2022",
    salary: "$744.74",
    phone: "635-982-8332"
  }, {
     id : 6,
     photo : "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
     name : "Burnard Lorand",
     employmentDate : "09-05-2022",
     salary : "$2261.95",
     phone : "550-971-5744"
  }, {
     id : 7,
     photo : "http://dummyimage.com/190x100.png/ff4444/ffffff",
     name : "Harri Guilliland",
     employmentDate : "04-09-2022",
     salary : "$2374.52",
     phone : "419-158-9114"
  }, {
     id : 8,
     photo : "http://dummyimage.com/191x100.png/dddddd/000000",
     name : "Maria Greet",
     employmentDate : "22-07-2022",
     salary : "$723.97",
     phone : "754-555-9906"
  }, {
     id : 9,
     photo : "http://dummyimage.com/238x100.png/cc0000/ffffff",
     name : "Lula Kettlestringes",
     employmentDate : "04-03-2022",
     salary : "$2161.75",
     phone : "482-364-1555"
  }, {
     id : 10,
     photo : "http://dummyimage.com/104x100.png/cc0000/ffffff",
     name : "Paige Wilcott",
     employmentDate : "11-07-2022",
     salary : "$3157.31",
     phone : "965-326-7562"
  }, {
     id : 11,
     photo : "http://dummyimage.com/193x100.png/dddddd/000000",
     name : "Marylynne Wyse",
     employmentDate : "03-10-2022",
     salary : "$2363.04",
     phone : "905-942-0485"
  }, {
     id : 12,
     photo : "http://dummyimage.com/250x100.png/dddddd/000000",
     name : "Adan Cheyney",
     employmentDate : "30-04-2022",
     salary : "$1939.13",
     phone : "211-708-1318"
  }, {
     id : 13,
     photo : "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
     name : "Moina Stammers",
     employmentDate : "30-04-2022",
     salary : "$1436.28",
     phone : "895-361-2509"
  }, {
     id : 14,
     photo : "http://dummyimage.com/180x100.png/5fa2dd/ffffff",
     name : "Gibbie Limprecht",
     employmentDate : "30-01-2022",
     salary : "$2945.82",
     phone : "127-388-2016"
  }, {
     id : 15,
     photo : "http://dummyimage.com/220x100.png/ff4444/ffffff",
     name : "Sukey Mariette",
     employmentDate : "30-12-2022",
     salary : "$2037.30",
     phone : "992-783-4205"
  }]