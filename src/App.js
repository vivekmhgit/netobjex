import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Table } from "./components/Table";

function App() {
  return (
    <div className='container'>
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
