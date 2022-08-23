# FakeStore API: :shopping::shopping:

**_En este proyecto veras como a traves de *Express* en *Node.JS* consumiremos de una *API* con *Fetch* obteniendo sus datos para crear diferentes funcionalidades, el proyecto esta organizado en MVC y tiene *Middlewares*_**

## Como utilizar el proyecto: :shipit:

> npm -i

> npm start

- **instalas** las _dependencias_ e ingresas a traves del **localhost** en el puerto 3000 a las _rutas_.

## El Router de la API: :shinto_shrine:

### Products & Categories:
- All Products
  - http://localhost:3000/store/products/prices
- Products desc & asc:
  - http://localhost:3000/store/products/prices?order=desc
  - http://localhost:3000/store/products/prices?order=asc
- Product Limit:
  - http://localhost:3000/store/products/prices?order=3
  - http://localhost:3000/store/products/prices?order=3&order=5
- Product By ID
  - http://localhost:3000/store/products/7
- All Products By Categories:
  - http://localhost:3000/store/products/categories/
- Products By Category:
  - http://localhost:3000/store/products/categories/electronics

### Carts
- All Carts:
  - http://localhost:3000/store/carts
- Order Carts:
  - http://localhost:3000/store/carts?order=4
  - http://localhost:3000/store/carts?order=3&order=5
- Order DESC & ASC:
  - http://localhost:3000/store/carts?order=desc
  - http://localhost:3000/store/products/prices?order=asc
- Order By Date:
  - http://localhost:3000/store/carts/date/?end=2020-01-01T00:00:02.000Z
- BigCarts
  - http://localhost:3000/store/carts/bigcarts
- Get Cart By ID
  - http://localhost:3000/store/carts/5

### Users
- All Users
  - http://localhost:3000/store/users
- Three First Users
  - http://localhost:3000/store/users/firsts
- Get User Limit & Sort
  - x

# Creditos: :rocket:
- **_Mentor: Alexis Moragues_**
- **_@Skill-Factory-By-Avalith_**
- You will see the steps and knowledge that I take as a Skiller, it is not only to be a "programming student" but to integrate myself into a culture of values that go beyond knowing how to program

![Imagen_Avalith](https://pbs.twimg.com/media/FSjqMYlXIAEeJBw?format=jpg&name=medium)
# Repositorio: :octocat:
https://github.com/AgusBaez/Skill-Factory-By-Avalith

Agus_Baez👋 
