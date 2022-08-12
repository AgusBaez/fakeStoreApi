# FakeStore API: :shopping_bags:

*** En este proyecto veras como a traves de _Express_ en _Node.JS_ consumiremos de una _API_ con _Fetch_ obteniendo sus datos para crear diferentes funcionalidades, el proyecto esta organizado en MVC y tiene _Middlewares_ ***

## Como utilizar el proyecto: :male-technologist:

> npm -i
> npm start

- ingresas a traves del localhost en el puert 3000

## El Router de la API: :motorway:

### Products:

- All Products
[http://localhost:3000/store/products/prices]

- Products desc & asc:
[http://localhost:3000/store/products/prices?order=desc] << - >> [http://localhost:3000/store/products/prices?order=asc]

- Product Limit:
[http://localhost:3000/store/products/prices?order=3] >> [http://localhost:3000/store/products/prices?order=3&order=5]

- Product By ID
[http://localhost:3000/store/products/7]

All Products By Categories:
[http://localhost:3000/store/products/categories/]

Products By Category:
[http://localhost:3000/store/products/categories/electronics]

### Carts
- All Carts:
    - ([http://localhost:3000/store/carts])
- Order Carts:
-   http://localhost:3000/store/carts?order=4
[http://localhost:3000/store/carts?order=3&order=5]
 - Order DESC & ASC:
-   [http://localhost:3000/store/carts?order=desc]
    - [http://localhost:3000/store/products/prices?order=asc]
- Order By Date:
-   [http://localhost:3000/store/carts/date/?end=2020-01-01T00:00:02.000Z] 
- BigCarts 
    [http://localhost:3000/store/carts/bigcarts]

### Users
- All Users
    - [http://localhost:3000/store/users]
- Three First Users
    - [http://localhost:3000/store/users/firsts]

# Creditos: :rocket:

- **_@Skill-Factory-By-Avalith_**
- You will see the steps and knowledge that I take as a Skiller, it is not only to be a "programming student" but to integrate myself into a culture of values that go beyond knowing how to program

Agus_Baez👋
