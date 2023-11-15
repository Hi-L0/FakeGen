# fakeGen-data

## About

Generate fake (but realistic) data for testing and development.



## Install

```bash
npm install fakegen-data
```

---

## Usage

```Js
const {fakeGen} = require('fakegen-data')

const name= fakeGen.firstName()
console.log(name)
```
---


## Methods

For generating random data in latin alphabet

- fakeGen    
    - id
    - firstName
    - lastName
    - fullName
    - email
    - job
    - address
    - city
    - country
    - zipCode
    - location (this generates an object {city,country,zipcode})
    - company
    - products
    - boolean

for generating random data in arabic

- fakeGenAR
    - id
    - firstName
    - lastName
    - fullName
    - email
    - job
    - address
    - city
    - country
    - zipCode
    - location
    - company
    - products
    - boolean


