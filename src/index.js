import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//data
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//ROOT RENDER
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 React.StrictMode is a special tool used in development (not production) that:
Identifies unsafe lifecycle methods.
Warns about deprecated APIs.
Detects side effects in components.
Runs certain functions twice (e.g., useEffect in development) to ensure components are resilient.

What Happens if You Remove <React.StrictMode>?
Your app will still work fine, but you might miss out on warnings about potential issues in your code.
In production mode, React.StrictMode has no effect—it’s purely for development debugging.

 */

//COMPONENTS:

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Creating a structure of the app

//HEADER
function Header() {
  //one way of adding styles: not recommded
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  const style = {};

  //2ndway to import the css file

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

//MENU
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        //div will cause error : as there can be only one element so we wrap it in <></>fragment else to add a key to react fragment
        //eg: <React.Fragment></React.Fragment>
        <>
          <p>
            Authentic Italian cuisuine.6 creative dishes to chose from.All from
            our stone oven, all organic, all delicious.{" "}
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are Still working on our menu. Please Come back Later</p>
      )}
    </main>
  );
}

//OPTIONS

//----------------------------//Receive props
function Pizza(props) {
  console.log(props);

  //if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price + 3}
        </span>
      </div>
    </li>
  );
}

//FOOTER
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
          hrs
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're Open until {props.closeHour}:00. Come visit us or Order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//REACT FRAGMENTS: LETS US GROUP ELEMENTS WITHOUT LEAVING ANY TRACE IN html Tree
