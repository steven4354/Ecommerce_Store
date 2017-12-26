# eCommerce Store Source Code

An eCommerce Store with a fully fledged cart (using express cookies) and storage of user login and products (using nosql and postgres databases)

## Demo

![Alt text](./images/1.png?raw=true "Title")
![Alt text](./images/2.png?raw=true "Title")
![Alt text](./images/3.png?raw=true "Title")
![Alt text](./images/4.png?raw=true "Title")
![Alt text](./images/5.png?raw=true "Title")

### Key Technologies Used and Technical Challenges 

Technologies used: 
- MongoDB 
- Postgres 
- Sequelize
- Mongooose
- Cookies and Sessions

Challenges:
- Integration of two different databases -> split different functions for the databases, one database held products and the other held user login information 
- Creation of a cart that persisted with the user in multiple visits -> utilized Express's cookie session to store cart information in a cookie allowed us to keep database free of cart data 

## Deployment

### Prerequisites

What things you need to install the software

* node
* npm
* mongodb
* postgres

### How to deploy on your local machine

```
git clone <project-folder-on-github>
cd <cloned-project-folder-on-your-local-machine>
npm install
node app.js
```

## Authors

* **Steven Li** - _Initial work_ -

## Additional Notes and Spec Features

SQL
Products/Searching

NoSQL for the Analytics

#In Depth Org of Data
SQL
  - usr table
    - id
    - username
    - email
  - shipping address table  
    - id
    - usrid as foreign key
    - address
    - city
    - state
  - categories
    - id
    - category name
  - products
    - id
    - sku
    - categoryid as foreing key   
    - name
    - price
    - description
    - jpg url to public folder


  no table for cart or session AKA rework this later
    - cookie in browser will store product ids
    - actually we'll implement ^^ with sessions
    - a user session can be stored in two main ways with cookies: on the server or on the client. This module stores the session data on the client within a cookie, while a module like express-session stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.


    - notes that rework
      - session multi def.
      - a place server (not database) in-memory where you store some info and id that place
       with the cookie
    - express-session will id specific sessions for each user
      - secret to resolve every cookie
      - add an object to req.session (that object will have all product ids)
    - akakaka just use cookie-session for now and skip express-session


  notes
    - when user presses buy remove cookie and create row in orders table
      + take order id and create rows in OP

  NoSQL
  - orders collection
    - keys
      - id
      - shippingaddressid from SQL
      - userid from SQL
      - productsId array

   stripe will send info and we take that info and put it in mongodb
