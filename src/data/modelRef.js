const order = {
    id: 'number',
    customerName:'string',
    contactNumber:'string',
    products: [{type:'product', quantity: 'number'}],
    totalAmt: 'number',
    createdBy: 'number (id of the exec)'
}

//product => medicine
const product = {
    id: 'number',
    name:'string',
    manufacturerName: 'string',
    price:'number',
    stock: 'number',
    discount: 'number 0-1(decimal) OR 0-100(percentage)'

}


const exec = {
    id: 'number',
    firstName: 'string',
    lastName: 'string',
    DOB: 'string',
    Gender: 'M OR F OR Other',
    Experience : 'number (years)'
}


/* EXEC CREATING AN ORDER
1. exec creates order object = { customerName, contactNumber, products[] } and calls create order func
2.a. create order func logic calculates totalAmt for allProducts and
b.  adds totalAmt field and createdBy field to the object and saves to localStorage as one of the orders
in orders[]

*/
















// export const orders= [
//     {
//     "id": "56104-020",
//     "medicineName": "Miconazole Nitrate",
//     "medicineBrand": "Premier Brands of America Inc.",
//     "expiryDate": "14-Aug-2012",
//     "unitPrice": 993.01,
//     "prescriptionRequired": false,
//     "stock": 725
//     },
//     {
//     "id": "0268-1239",
//     "medicineName": "CHENOPODIUM ALBUM POLLEN",
//     "medicineBrand": "ALK-Abello, Inc.",
//     "expiryDate": "24-Jul-2029",
//     "unitPrice": 632.22,
//     "prescriptionRequired": false,
//     "stock": 917
//     },
//     {
//     "id": "17478-741",
//     "medicineName": "Vancomycin Hydrochloride",
//     "medicineBrand": "Akorn, Inc.",
//     "expiryDate": "23-Feb-2015",
//     "unitPrice": 814.3,
//     "prescriptionRequired": true,
//     "stock": 666
//     },
//     {
//     "id": "58118-9931",
//     "medicineName": "Neomycin and Polymyxin B Sulfates and Hydrocortisone",
//     "medicineBrand": "Clinical Solutions Wholesale",
//     "expiryDate": "05-Jun-2027",
//     "unitPrice": 717.73,
//     "prescriptionRequired": true,
//     "stock": 161
//     },
//     {
//     "id": "51345-119",
//     "medicineName": "Pretty in Paris Kit",
//     "medicineBrand": "Advanced Beauty Systems, Inc.",
//     "expiryDate": "16-Jun-2025",
//     "unitPrice": 140.15,
//     "prescriptionRequired": true,
//     "stock": 679
//     },
//     {
//     "id": "43419-714",
//     "medicineName": "Sulwhasoo Lumitouch Multi-Base",
//     "medicineBrand": "AMOREPACIFIC",
//     "expiryDate": "19-Nov-2016",
//     "unitPrice": 559.2,
//     "prescriptionRequired": false,
//     "stock": 711
//     },
//     {
//     "id": "48951-2044",
//     "medicineName": "Berberis Oxalis",
//     "medicineBrand": "Uriel Pharmacy Inc.",
//     "expiryDate": "28-Jul-2013",
//     "unitPrice": 299.93,
//     "prescriptionRequired": true,
//     "stock": 276
//     },
//     {
//     "id": "29500-9077",
//     "medicineName": "Personal Care Antibacterial Hand - Raspberry",
//     "medicineBrand": "Personal Care Products, LLC",
//     "expiryDate": "27-Jun-2027",
//     "unitPrice": 233.95,
//     "prescriptionRequired": false,
//     "stock": 794
//     },
//     {
//     "id": "51655-391",
//     "medicineName": "Isoniazid",
//     "medicineBrand": "Northwind Pharmaceuticals, LLC",
//     "expiryDate": "26-Jul-2017",
//     "unitPrice": 222.87,
//     "prescriptionRequired": false,
//     "stock": 357
//     },
//     {
//     "id": "37000-394",
//     "medicineName": "Old Spice High Endurance",
//     "medicineBrand": "Procter & Gamble Manufacturing Company",
//     "expiryDate": "09-May-2022",
//     "unitPrice": 515.53,
//     "prescriptionRequired": false,
//     "stock": 683
//     },
//     {
//     "id": "50419-252",
//     "medicineName": "Adempas",
//     "medicineBrand": "Bayer HealthCare Pharmaceuticals Inc.",
//     "expiryDate": "31-Aug-2027",
//     "unitPrice": 911.3,
//     "prescriptionRequired": false,
//     "stock": 755
//     },
//     {
//     "id": "0024-0335",
//     "medicineName": "Demerol",
//     "medicineBrand": "sanofi-aventis U.S. LLC",
//     "expiryDate": "12-Sep-2026",
//     "unitPrice": 316.76,
//     "prescriptionRequired": false,
//     "stock": 86
//     },
//     {
//     "id": "50436-4841",
//     "medicineName": "CYCLOBENZAPRINE HYROCHLORIDE",
//     "medicineBrand": "Unit Dose Services",
//     "expiryDate": "23-Aug-2015",
//     "unitPrice": 440.16,
//     "prescriptionRequired": false,
//     "stock": 169
//     },
//     {
//     "id": "51345-055",
//     "medicineName": "Bodycology",
//     "medicineBrand": "Advanced Beauty Systems, Inc.",
//     "expiryDate": "05-Apr-2023",
//     "unitPrice": 809.08,
//     "prescriptionRequired": false,
//     "stock": 847
//     },
//     {
//     "id": "37012-069",
//     "medicineName": "Petroleum Skin Protectant",
//     "medicineBrand": "Shopko",
//     "expiryDate": "13-Jan-2024",
//     "unitPrice": 496.31,
//     "prescriptionRequired": false,
//     "stock": 125
//     },
//     {
//     "id": "61016-0002",
//     "medicineName": "Antioxidant Day SPF 15",
//     "medicineBrand": "Columbia Cosmetics Manufacturing, Inc.",
//     "expiryDate": "03-Aug-2028",
//     "unitPrice": 825.55,
//     "prescriptionRequired": false,
//     "stock": 68
//     },
//     {
//     "id": "50730-4301",
//     "medicineName": "Isopropyl alcohol Swabstick Sterile",
//     "medicineBrand": "H and P Industries, Inc. dba Triad Group",
//     "expiryDate": "09-Jul-2027",
//     "unitPrice": 968.25,
//     "prescriptionRequired": false,
//     "stock": 325
//     },
//     {
//     "id": "49348-788",
//     "medicineName": "Sunmark Nicotine",
//     "medicineBrand": "McKesson",
//     "expiryDate": "14-Jul-2029",
//     "unitPrice": 570.67,
//     "prescriptionRequired": true,
//     "stock": 803
//     },
//     {
//     "id": "48951-3051",
//     "medicineName": "Cerebellum Thalamus A Aurum",
//     "medicineBrand": "Uriel Pharmacy Inc.",
//     "expiryDate": "23-Jan-2013",
//     "unitPrice": 79.27,
//     "prescriptionRequired": false,
//     "stock": 553
//     },
//     {
//     "id": "49999-449",
//     "medicineName": "Actos",
//     "medicineBrand": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
//     "expiryDate": "03-Jun-2028",
//     "unitPrice": 853.26,
//     "prescriptionRequired": false,
//     "stock": 881
//     },
//     {
//     "id": "57520-1032",
//     "medicineName": "Hepatatox",
//     "medicineBrand": "Apotheca Company",
//     "expiryDate": "02-Jul-2016",
//     "unitPrice": 961.08,
//     "prescriptionRequired": false,
//     "stock": 635
//     },
//     {
//     "id": "0113-0437",
//     "medicineName": "good sense pain relief pm",
//     "medicineBrand": "L Perrigo Company",
//     "expiryDate": "19-Nov-2012",
//     "unitPrice": 219.57,
//     "prescriptionRequired": true,
//     "stock": 388
//     },
//     {
//     "id": "64942-0810",
//     "medicineName": "Axe",
//     "medicineBrand": "Conopco Inc. d/b/a Unilever",
//     "expiryDate": "12-Jul-2026",
//     "unitPrice": 764.95,
//     "prescriptionRequired": false,
//     "stock": 280
//     },
//     {
//     "id": "35356-512",
//     "medicineName": "Carvedilol",
//     "medicineBrand": "Lake Erie Medical DBA Quality Care Products LLC",
//     "expiryDate": "25-Jun-2014",
//     "unitPrice": 31.82,
//     "prescriptionRequired": true,
//     "stock": 799
//     },
//     {
//     "id": "61671-004",
//     "medicineName": "Face Moisturiser",
//     "medicineBrand": "Milk & Co Pty Ltd",
//     "expiryDate": "19-Sep-2017",
//     "unitPrice": 871.64,
//     "prescriptionRequired": true,
//     "stock": 135
//     },
//     {
//     "id": "49884-678",
//     "medicineName": "Nifedipine",
//     "medicineBrand": "Par Pharmaceutical, Inc.",
//     "expiryDate": "29-Jun-2021",
//     "unitPrice": 7.66,
//     "prescriptionRequired": false,
//     "stock": 929
//     },
//     {
//     "id": "68084-593",
//     "medicineName": "Sucralfate",
//     "medicineBrand": "American Health Packaging",
//     "expiryDate": "01-Nov-2023",
//     "unitPrice": 939.65,
//     "prescriptionRequired": true,
//     "stock": 670
//     },
//     {
//     "id": "57955-0126",
//     "medicineName": "Bio Reset/Jet Lag",
//     "medicineBrand": "King Bio Inc.",
//     "expiryDate": "14-Dec-2024",
//     "unitPrice": 916.97,
//     "prescriptionRequired": true,
//     "stock": 167
//     },
//     {
//     "id": "42507-083",
//     "medicineName": "ibu profen cold and sinus",
//     "medicineBrand": "HyVee Inc",
//     "expiryDate": "10-Sep-2012",
//     "unitPrice": 955.91,
//     "prescriptionRequired": false,
//     "stock": 105
//     },
//     {
//     "id": "54575-101",
//     "medicineName": "ITALIAN RYEGRASS POLLEN",
//     "medicineBrand": "Allergy Laboratories, Inc.",
//     "expiryDate": "06-Mar-2012",
//     "unitPrice": 333.46,
//     "prescriptionRequired": false,
//     "stock": 898
//     },
//     {
//     "id": "17478-933",
//     "medicineName": "Terbutaline Sulfate",
//     "medicineBrand": "Akorn",
//     "expiryDate": "05-Apr-2026",
//     "unitPrice": 244.54,
//     "prescriptionRequired": false,
//     "stock": 597
//     },
//     {
//     "id": "41595-5441",
//     "medicineName": "Sure Conditioning Solid Vitamin Infusion",
//     "medicineBrand": "Idelle Labs, Ltd",
//     "expiryDate": "17-Nov-2025",
//     "unitPrice": 726.2,
//     "prescriptionRequired": false,
//     "stock": 543
//     },
//     {
//     "id": "63776-075",
//     "medicineName": "Candida I",
//     "medicineBrand": "VIATREXX BIO INCORPORATED",
//     "expiryDate": "12-Dec-2025",
//     "unitPrice": 256.31,
//     "prescriptionRequired": false,
//     "stock": 93
//     },
//     {
//     "id": "60512-6188",
//     "medicineName": "ARBUTINUM",
//     "medicineBrand": "HOMEOLAB USA INC.",
//     "expiryDate": "27-Jul-2024",
//     "unitPrice": 35.24,
//     "prescriptionRequired": true,
//     "stock": 359
//     },
//     {
//     "id": "45802-680",
//     "medicineName": "levocetirizine dihydrochloride",
//     "medicineBrand": "Perrigo New York Inc",
//     "expiryDate": "04-Jan-2017",
//     "unitPrice": 945.3,
//     "prescriptionRequired": true,
//     "stock": 724
//     },
//     {
//     "id": "52584-015",
//     "medicineName": "Lidocaine Hydrochloride",
//     "medicineBrand": "General Injectables & Vaccines, Inc",
//     "expiryDate": "24-Sep-2023",
//     "unitPrice": 643.62,
//     "prescriptionRequired": false,
//     "stock": 169
//     },
//     {
//     "id": "0143-9908",
//     "medicineName": "NAPROXEN",
//     "medicineBrand": "West-Ward Pharmaceutical Corp",
//     "expiryDate": "15-Apr-2019",
//     "unitPrice": 454.43,
//     "prescriptionRequired": false,
//     "stock": 563
//     },
//     {
//     "id": "65044-4707",
//     "medicineName": "AP House Dust Mix",
//     "medicineBrand": "Jubilant HollisterStier LLC",
//     "expiryDate": "12-Oct-2019",
//     "unitPrice": 478.8,
//     "prescriptionRequired": true,
//     "stock": 844
//     },
//     {
//     "id": "49571-002",
//     "medicineName": "NITROGEN",
//     "medicineBrand": "Capitol Welders Supply Co., Inc.",
//     "expiryDate": "18-Nov-2029",
//     "unitPrice": 844.23,
//     "prescriptionRequired": false,
//     "stock": 99
//     },
//     {
//     "id": "24338-622",
//     "medicineName": "Fluor-a-day",
//     "medicineBrand": "Arbor Pharmaceuticals, Inc.",
//     "expiryDate": "30-May-2022",
//     "unitPrice": 320.65,
//     "prescriptionRequired": false,
//     "stock": 696
//     },
//     {
//     "id": "43742-0091",
//     "medicineName": "Candida",
//     "medicineBrand": "DeseretBiolgicals, Inc",
//     "expiryDate": "02-Jul-2021",
//     "unitPrice": 117.78,
//     "prescriptionRequired": false,
//     "stock": 339
//     },
//     {
//     "id": "63304-168",
//     "medicineName": "Sertraline Hydrochloride",
//     "medicineBrand": "Ranbaxy Pharmaceuticals Inc.",
//     "expiryDate": "18-Jun-2018",
//     "unitPrice": 142.63,
//     "prescriptionRequired": true,
//     "stock": 443
//     },
//     {
//     "id": "0641-6053",
//     "medicineName": "Meperidine Hydrochloride",
//     "medicineBrand": "West-ward Pharmaceutical Corp.",
//     "expiryDate": "29-May-2022",
//     "unitPrice": 74.15,
//     "prescriptionRequired": true,
//     "stock": 878
//     },
//     {
//     "id": "61509-109",
//     "medicineName": "Mark 3",
//     "medicineBrand": "Cargus International, Inc.",
//     "expiryDate": "11-Jun-2020",
//     "unitPrice": 847.68,
//     "prescriptionRequired": true,
//     "stock": 507
//     },
//     {
//     "id": "63730-222",
//     "medicineName": "The Cure Oil-Free",
//     "medicineBrand": "Natura Bisse International SA",
//     "expiryDate": "11-Jul-2018",
//     "unitPrice": 820.17,
//     "prescriptionRequired": true,
//     "stock": 74
//     },
//     {
//     "id": "49035-393",
//     "medicineName": "Ibuprofen",
//     "medicineBrand": "Wal-Mart Stores Inc",
//     "expiryDate": "16-Oct-2011",
//     "unitPrice": 693.69,
//     "prescriptionRequired": false,
//     "stock": 788
//     },
//     {
//     "id": "58668-1511",
//     "medicineName": "CLARINS HydraQuench Tinted Moisturizer Broad Spectrum SPF 6 02 BEIGE",
//     "medicineBrand": "Laboratoires Clarins S.A.",
//     "expiryDate": "29-Aug-2015",
//     "unitPrice": 669.88,
//     "prescriptionRequired": true,
//     "stock": 178
//     },
//     {
//     "id": "0603-4991",
//     "medicineName": "Oxycodone Hydrochloride",
//     "medicineBrand": "Qualitest Pharmaceuticals",
//     "expiryDate": "28-Mar-2030",
//     "unitPrice": 359.98,
//     "prescriptionRequired": false,
//     "stock": 434
//     },
//     {
//     "id": "59762-0045",
//     "medicineName": "Montelukast Sodium",
//     "medicineBrand": "Greenstone LLC",
//     "expiryDate": "13-Aug-2021",
//     "unitPrice": 476.72,
//     "prescriptionRequired": true,
//     "stock": 537
//     },
//     {
//     "id": "55910-988",
//     "medicineName": "ANTI BACTERIAL HAND SANITIZER",
//     "medicineBrand": "Dolgencorp Inc",
//     "expiryDate": "03-Apr-2014",
//     "unitPrice": 268.12,
//     "prescriptionRequired": true,
//     "stock": 627
//     },
//     {
//     "id": "42248-120",
//     "medicineName": "Sun Care",
//     "medicineBrand": "Zenith Medicosm SL",
//     "expiryDate": "01-Jun-2029",
//     "unitPrice": 719.7,
//     "prescriptionRequired": false,
//     "stock": 459
//     },
//     {
//     "id": "65862-538",
//     "medicineName": "Levofloxacin",
//     "medicineBrand": "Aurobindo Pharma Limited",
//     "expiryDate": "20-Jun-2029",
//     "unitPrice": 601.56,
//     "prescriptionRequired": true,
//     "stock": 803
//     },
//     {
//     "id": "50383-001",
//     "medicineName": "Minoxidil",
//     "medicineBrand": "Hi-Tech Pharmacal Co., Inc.",
//     "expiryDate": "25-Feb-2013",
//     "unitPrice": 689.27,
//     "prescriptionRequired": false,
//     "stock": 678
//     },
//     {
//     "id": "66336-080",
//     "medicineName": "Methocarbamol",
//     "medicineBrand": "Dispensing Solutions, Inc.",
//     "expiryDate": "07-Aug-2013",
//     "unitPrice": 901.2,
//     "prescriptionRequired": false,
//     "stock": 265
//     },
//     {
//     "id": "68462-234",
//     "medicineName": "Felodipine",
//     "medicineBrand": "Glenmark Generics, Inc. USA",
//     "expiryDate": "28-Feb-2012",
//     "unitPrice": 184.43,
//     "prescriptionRequired": true,
//     "stock": 382
//     },
//     {
//     "id": "51514-0327",
//     "medicineName": "YES TO TOMATOES ROLLER BALL SPOT STICK",
//     "medicineBrand": "Autumn Harp, Inc.",
//     "expiryDate": "08-Dec-2028",
//     "unitPrice": 827.36,
//     "prescriptionRequired": false,
//     "stock": 513
//     },
//     {
//     "id": "75870-007",
//     "medicineName": "Oily SK Specific Solutions",
//     "medicineBrand": "LABORATORIOS DE COSMETICA SCIENTIFICA ATACHE",
//     "expiryDate": "01-Jul-2010",
//     "unitPrice": 179.84,
//     "prescriptionRequired": true,
//     "stock": 564
//     },
//     {
//     "id": "0904-5816",
//     "medicineName": "Extra Strength Mapap",
//     "medicineBrand": "Major Pharmaceuticals",
//     "expiryDate": "25-Sep-2013",
//     "unitPrice": 530.5,
//     "prescriptionRequired": true,
//     "stock": 330
//     },
//     {
//     "id": "25021-701",
//     "medicineName": "Ketorolac Tromethamine",
//     "medicineBrand": "Sagent Pharmaceuticals",
//     "expiryDate": "16-Aug-2017",
//     "unitPrice": 254.72,
//     "prescriptionRequired": false,
//     "stock": 939
//     },
//     {
//     "id": "65841-616",
//     "medicineName": "Carvedilol",
//     "medicineBrand": "Cadila Healthcare Limited",
//     "expiryDate": "02-Dec-2025",
//     "unitPrice": 608.7,
//     "prescriptionRequired": true,
//     "stock": 290
//     },
//     {
//     "id": "43538-181",
//     "medicineName": "Rosadan",
//     "medicineBrand": "Medimetriks Pharmaceuticals, Inc.",
//     "expiryDate": "06-Sep-2029",
//     "unitPrice": 518.59,
//     "prescriptionRequired": true,
//     "stock": 123
//     },
//     {
//     "id": "0093-0026",
//     "medicineName": "Enalapril Maleate",
//     "medicineBrand": "Teva Pharmaceuticals USA Inc",
//     "expiryDate": "16-Sep-2017",
//     "unitPrice": 50.33,
//     "prescriptionRequired": true,
//     "stock": 325
//     },
//     {
//     "id": "0869-0693",
//     "medicineName": "citroma",
//     "medicineBrand": "Vi-Jon",
//     "expiryDate": "13-Feb-2017",
//     "unitPrice": 898.3,
//     "prescriptionRequired": false,
//     "stock": 106
//     },
//     {
//     "id": "57664-002",
//     "medicineName": "Pramipexole",
//     "medicineBrand": "Caraco Pharmaceutical Laboratories, Ltd.",
//     "expiryDate": "03-Jul-2011",
//     "unitPrice": 930,
//     "prescriptionRequired": true,
//     "stock": 480
//     },
//     {
//     "id": "55648-635",
//     "medicineName": "Octreotide acetate",
//     "medicineBrand": "Wockhardt Limited",
//     "expiryDate": "03-Jan-2023",
//     "unitPrice": 679.82,
//     "prescriptionRequired": true,
//     "stock": 887
//     },
//     {
//     "id": "51823-3574",
//     "medicineName": "JiDeSheng",
//     "medicineBrand": "UPC Medical Supplies, Inc.",
//     "expiryDate": "17-Jan-2013",
//     "unitPrice": 912.53,
//     "prescriptionRequired": false,
//     "stock": 736
//     },
//     {
//     "id": "49349-865",
//     "medicineName": "Doxepin Hydrochloride",
//     "medicineBrand": "REMEDYREPACK INC.",
//     "expiryDate": "01-May-2029",
//     "unitPrice": 361.19,
//     "prescriptionRequired": false,
//     "stock": 806
//     },
//     {
//     "id": "13734-026",
//     "medicineName": "PURE SHEER",
//     "medicineBrand": "NARS COSMETICS",
//     "expiryDate": "24-Jun-2014",
//     "unitPrice": 299.9,
//     "prescriptionRequired": false,
//     "stock": 494
//     },
//     {
//     "id": "21695-273",
//     "medicineName": "Hydrocodone Bitartrate and Acetaminophen",
//     "medicineBrand": "Rebel Distributors Corp",
//     "expiryDate": "14-Mar-2017",
//     "unitPrice": 830.06,
//     "prescriptionRequired": false,
//     "stock": 295
//     },
//     {
//     "id": "0206-5501",
//     "medicineName": "Zosyn",
//     "medicineBrand": "Wyeth Pharmaceuticals Inc., a subsidiary of Pfizer Inc.",
//     "expiryDate": "30-Aug-2016",
//     "unitPrice": 208.92,
//     "prescriptionRequired": false,
//     "stock": 849
//     },
//     {
//     "id": "36800-306",
//     "medicineName": "Topcare ClearLax",
//     "medicineBrand": "Topco Associates LLC",
//     "expiryDate": "07-Apr-2013",
//     "unitPrice": 753.59,
//     "prescriptionRequired": true,
//     "stock": 269
//     },
//     {
//     "id": "0603-0842",
//     "medicineName": "Childrens QPAP",
//     "medicineBrand": "Qualitest Pharmaceuticals",
//     "expiryDate": "23-Mar-2018",
//     "unitPrice": 797.03,
//     "prescriptionRequired": false,
//     "stock": 777
//     },
//     {
//     "id": "48433-316",
//     "medicineName": "Citalopram",
//     "medicineBrand": "Safecor Health, LLC",
//     "expiryDate": "22-Jul-2027",
//     "unitPrice": 20.34,
//     "prescriptionRequired": true,
//     "stock": 990
//     },
//     {
//     "id": "41250-882",
//     "medicineName": "gas relief",
//     "medicineBrand": "Meijer Distribution Inc",
//     "expiryDate": "04-Aug-2021",
//     "unitPrice": 489.1,
//     "prescriptionRequired": true,
//     "stock": 578
//     },
//     {
//     "id": "49999-237",
//     "medicineName": "Famotidine",
//     "medicineBrand": "Lake Erie Medical & Surgical Supply DBA Quality Care Products LLC",
//     "expiryDate": "12-Aug-2025",
//     "unitPrice": 799.51,
//     "prescriptionRequired": true,
//     "stock": 210
//     },
//     {
//     "id": "49349-811",
//     "medicineName": "LEXIVA",
//     "medicineBrand": "REMEDYREPACK INC.",
//     "expiryDate": "15-Mar-2012",
//     "unitPrice": 250.54,
//     "prescriptionRequired": false,
//     "stock": 961
//     },
//     {
//     "id": "0006-0533",
//     "medicineName": "JUVISYNC",
//     "medicineBrand": "Merck Sharp & Dohme Corp.",
//     "expiryDate": "16-Jan-2025",
//     "unitPrice": 269.35,
//     "prescriptionRequired": true,
//     "stock": 260
//     },
//     {
//     "id": "68180-303",
//     "medicineName": "cefuroxime axetil",
//     "medicineBrand": "Lupin Pharmaceuticals, Inc.",
//     "expiryDate": "30-Jun-2014",
//     "unitPrice": 10.48,
//     "prescriptionRequired": false,
//     "stock": 50
//     },
//     {
//     "id": "41163-690",
//     "medicineName": "Allergy",
//     "medicineBrand": "SuperValu (Equaline)",
//     "expiryDate": "28-Feb-2030",
//     "unitPrice": 216.33,
//     "prescriptionRequired": true,
//     "stock": 598
//     },
//     {
//     "id": "35418-119",
//     "medicineName": "Cough Syrup DM",
//     "medicineBrand": "Zee Medical Inc",
//     "expiryDate": "24-Oct-2022",
//     "unitPrice": 993.48,
//     "prescriptionRequired": true,
//     "stock": 457
//     },
//     {
//     "id": "56062-090",
//     "medicineName": "daytime pe nitetime",
//     "medicineBrand": "Publix Super Markets Inc",
//     "expiryDate": "25-Feb-2027",
//     "unitPrice": 120.03,
//     "prescriptionRequired": true,
//     "stock": 591
//     },
//     {
//     "id": "52125-310",
//     "medicineName": "SERTRALINE HYDROCHLORIDE",
//     "medicineBrand": "REMEDYREPACK INC.",
//     "expiryDate": "19-Jan-2022",
//     "unitPrice": 140.29,
//     "prescriptionRequired": false,
//     "stock": 968
//     },
//     {
//     "id": "64525-0554",
//     "medicineName": "TopCare night time severe cold and cough",
//     "medicineBrand": "Quality Home Products",
//     "expiryDate": "11-May-2018",
//     "unitPrice": 740.21,
//     "prescriptionRequired": false,
//     "stock": 345
//     },
//     {
//     "id": "21695-765",
//     "medicineName": "Prednisone",
//     "medicineBrand": "Rebel Distributors Corp",
//     "expiryDate": "20-Nov-2023",
//     "unitPrice": 709.15,
//     "prescriptionRequired": true,
//     "stock": 536
//     },
//     {
//     "id": "37000-397",
//     "medicineName": "Old Spice Red Zone Collection",
//     "medicineBrand": "Procter & Gamble Manufacturing Company",
//     "expiryDate": "20-Apr-2013",
//     "unitPrice": 604.98,
//     "prescriptionRequired": true,
//     "stock": 705
//     },
//     {
//     "id": "64117-961",
//     "medicineName": "NHS Headache Flu",
//     "medicineBrand": "Natural Health Supply",
//     "expiryDate": "27-Mar-2011",
//     "unitPrice": 221.78,
//     "prescriptionRequired": true,
//     "stock": 671
//     },
//     {
//     "id": "60505-0134",
//     "medicineName": "Cyclosporine",
//     "medicineBrand": "Apotex Corp.",
//     "expiryDate": "29-Sep-2013",
//     "unitPrice": 184.39,
//     "prescriptionRequired": true,
//     "stock": 544
//     },
//     {
//     "id": "55111-265",
//     "medicineName": "Olanzapine",
//     "medicineBrand": "Dr.Reddy's Laboratories Limited",
//     "expiryDate": "16-Jan-2013",
//     "unitPrice": 528.26,
//     "prescriptionRequired": true,
//     "stock": 839
//     },
//     {
//     "id": "44911-0045",
//     "medicineName": "Terrestristat",
//     "medicineBrand": "Energique, Inc.",
//     "expiryDate": "07-Nov-2023",
//     "unitPrice": 371.98,
//     "prescriptionRequired": false,
//     "stock": 547
//     },
//     {
//     "id": "49371-045",
//     "medicineName": "Aromafields Lavender Scented Anti-Bacterial Hand",
//     "medicineBrand": "ALILY (ZHANGZHOU) BATH PRODUCTS LTD.",
//     "expiryDate": "04-Dec-2021",
//     "unitPrice": 438.37,
//     "prescriptionRequired": true,
//     "stock": 102
//     },
//     {
//     "id": "41268-215",
//     "medicineName": "daytime",
//     "medicineBrand": "Hannaford Brothers Company",
//     "expiryDate": "16-Apr-2014",
//     "unitPrice": 211.92,
//     "prescriptionRequired": false,
//     "stock": 232
//     },
//     {
//     "id": "65517-0029",
//     "medicineName": "PVP Prep Pad",
//     "medicineBrand": "Dukal Corporation",
//     "expiryDate": "02-Feb-2022",
//     "unitPrice": 986.81,
//     "prescriptionRequired": true,
//     "stock": 925
//     },
//     {
//     "id": "68516-3201",
//     "medicineName": "Profilnine",
//     "medicineBrand": "GRIFOLS USA, LLC",
//     "expiryDate": "23-Feb-2013",
//     "unitPrice": 239.11,
//     "prescriptionRequired": true,
//     "stock": 897
//     },
//     {
//     "id": "49349-277",
//     "medicineName": "Methocarbamol",
//     "medicineBrand": "REMEDYREPACK INC.",
//     "expiryDate": "21-Dec-2019",
//     "unitPrice": 805.57,
//     "prescriptionRequired": true,
//     "stock": 841
//     },
//     {
//     "id": "43269-774",
//     "medicineName": "Macaroon Antibacterial Foaming Hand Wash",
//     "medicineBrand": "SJ Creations, Inc.",
//     "expiryDate": "16-May-2021",
//     "unitPrice": 367.22,
//     "prescriptionRequired": true,
//     "stock": 878
//     },
//     {
//     "id": "59779-472",
//     "medicineName": "Daytime Cold Flu Relief",
//     "medicineBrand": "CVS Pharmacy",
//     "expiryDate": "04-Aug-2013",
//     "unitPrice": 373.26,
//     "prescriptionRequired": true,
//     "stock": 460
//     },
//     {
//     "id": "55316-176",
//     "medicineName": "Healthy Accents Cetirizine-D",
//     "medicineBrand": "DZA Brands LLC",
//     "expiryDate": "02-Jun-2010",
//     "unitPrice": 588.35,
//     "prescriptionRequired": false,
//     "stock": 790
//     },
//     {
//     "id": "36000-003",
//     "medicineName": "Fluconazole",
//     "medicineBrand": "Claris Lifesciences Inc.",
//     "expiryDate": "24-Jul-2012",
//     "unitPrice": 475.08,
//     "prescriptionRequired": false,
//     "stock": 533
//     },
//     {
//     "id": "68012-258",
//     "medicineName": "CYCLOSET",
//     "medicineBrand": "Santarus, Inc.",
//     "expiryDate": "23-May-2016",
//     "unitPrice": 479.6,
//     "prescriptionRequired": true,
//     "stock": 722
//     },
//     {
//     "id": "53499-5273",
//     "medicineName": "Umcka ColdCare Alcohol Free Cherry",
//     "medicineBrand": "Nature's Way Products, Inc.",
//     "expiryDate": "10-Sep-2012",
//     "unitPrice": 125.99,
//     "prescriptionRequired": true,
//     "stock": 772
//     }
//     ]