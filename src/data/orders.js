const orders= [
    {
    "id":1,
    "customerName":'Hiran',
    "contactNumber":'7896541230',
    "products":[{
        "id": 18,
        "name": "Clotrimazole and Betamethasone Dipropionate",
        "manufacturername": "Lake Erie Medical DBA Quality Care Products LLC",
        "price": 40,
        "stock": 67,
        "discount": 18
      }, {
        "id": 19,
        "name": "Black Locust",
        "manufacturername": "Nelco Laboratories, Inc.",
        "price": 97,
        "stock": 17,
        "discount": 90
      }, {
        "id": 20,
        "name": "Ampicillin and Sulbactam",
        "manufacturername": "AuroMedics Pharma LLC",
        "price": 3,
        "stock": 26,
        "discount": 20
      }],
    "totalAmt":127,
    "createdBy":"hiranmayi"
    },

    {
    "id":2,
    "customerName":'Dheeraj',
    "contactNumber":'7895673098',
    "products":[
        {
            "id":1,
            "name": "Product 1",
            "price":76,
            "quantity":1
        },
        {
            "id":2,
            "name": "Product 2",
            "price":94,
            "quantity":1
        },
        {
            "id":3,
            "name": "Product 3",
            "quantity":1,
            "price":33,
        }],
    "totalAmt":203,
    "createdBy":"dheerajreddy"
    },
    {
        "id":3,
        "customerName":'Anusha',
        "contactNumber":'9078475631',
        "products":[{
            "id":4,
            "name": "Product 4",
            "price":26,
            "quantity":1
        },
        {
            "id":5,
            "name": "Product 5",
            "price":100,
            "quantity":1
        },
        {
            "id":6,
            "name": "Product 6",
            "price":68,
            "quantity":1
        }  ],
        "totalAmt":194,
        "createdBy":"anushadumpala"
    },
    {
        "id":4,
        "customerName":'Sneha',
        "contactNumber":'9078475631',
        "products":[{
            "id":7,
            "name": "Product 7",
            "price":8,
            "quantity":1
        },
        {
            "id":8,
            "name": "Product 8",
            "price":10,
            "quantity":1
        },
        {
            "id":9,
            "name": "Product 9",
            "price":44,
            "quantity":1
        },],
        "totalAmt":62,
        "createdBy":"snehalatha"
    },
    {
    "id":5,
    "customerName":'raghavi',
    "contactNumber":'9078475631',
    "products":[{
        "id":10,
        "name": "Product 10",
        "price":24,
        "quantity":1
    },
    {
        "id":11,
        "name": "Product 11",
        "price":26,
        "quantity":1
    },
    {
        "id":12,
        "name": "Product 12",
        "price":56,
        "quantity":1
    }],
    "totalAmt":106,
    "createdBy":"test-sales"
    },
    {
        "id":6,
        "customerName":'praseeda',
        "contactNumber":'9078475631',
        "products":[{
            "id":13,
            "name": "Product 13",
            "price":12,
            "quantity":1
        },
        {
            "id":14,
            "name": "Product 14",
            "price":99,
            "quantity":1
        },
        {
            "id":15,
            "name": "Product 15",
            "price":25,
            "quantity":1
        }],
        "totalAmt":136,
        "createdBy":"praseedasharma"
    },
    {
        "id":7,
        "customerName":'shrawya',
        "contactNumber":'9239754355',
        "products":[ {
            "id":16,
            "name": "Product 16",
            "price":71,
            "quantity":1
        },
        {
            "id":17,
            "name": "Product 17",
            "price":4,
            "quantity":1
        }],
        "totalAmt":75,
        "createdBy":"test-sales"
    },
    {
        "id":8,
        "customerName":'karan',
        "contactNumber":'9732649359',
        "products":[{
            "id":18,
            "name": "Product 18",
            "price":4,
            "quantity":1
        },
        {
            "id":19,
            "name": "Product 19",
            "price":87,
            "quantity":1
        }],
        "totalAmt":91,
        "createdBy":"karanvetukuri"
    },
    {
                "id":9,
                "customerName":'sai',
                "contactNumber":'9735676421',
                "products":[{
                    "id":20,
                    "name": "Product 20",
                    "price":36,
                    "quantity":1
                }],
                "totalAmt":36,
                "createdBy":"test-sales"
    },
    {
                "id":10,
                "customerName":'sai',
                "contactNumber":'9735676421',
                "products":[{
                    "id":14,
                    "name": "Product 14",
                    "price":99,
                    "quantity":1
                },
                {
                    "id":20,
                    "name": "Product 20",
                    "price":36,
                    "quantity":1
                },
                {
                    "id":15,
                    "name": "Product 15",
                    "price":25,
                    "quantity":1
                }],
                "totalAmt":160,
                "createdBy":"test-sales"
    }
];

export default orders;