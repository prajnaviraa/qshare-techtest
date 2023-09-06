# E-Store

Project for qshare and JAI technical test

This project uses Express.js for server side, Vue.js for client side, and postgreSQL for database.

---

To run this project, please first go to the server folder open terminal and run

```
npm i
```

and then

```
nodemon app.js
```

---

Once the server is running, please open the terminal for client folder and run

```
npm i
```

and then

```
npm run dev
```

---

Users will be first directed to login page where they can login.
For new users, there's an option to register instead.
After registration user will be ridirected to login page to login.

Then users will be redirected to the home page where orders list will be displayed.
Upon clicking the add order button, user will be taken to order form to fill out their order.
After submitting, the page will be redirected to the home page with the new order showing.

On the navigation bar, user can also switch pages and logout when finished.

Access token is generated using jwt and passwords are hashed using bcrypt.

Google sign-in is not implemented as the project is not deployed.
