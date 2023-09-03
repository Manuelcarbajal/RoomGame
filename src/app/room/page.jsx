"use client";

import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const [room, setRoom] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", url: "" }); // Cambia "price" a "url"

  // Agrega un item a la base de datos
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.url !== "") {
      // Cambia "price" a "url"
      await addDoc(collection(db, "room"), {
        name: newItem.name.trim(),
        url: newItem.url, // Cambia "price" a "url"
      });
      setNewItem({ name: "", url: "" }); // Cambia "price" a "url"
    }
  };

  // Lee los room desde la base de datos
  useEffect(() => {
    const q = query(collection(db, "room"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let roomArr = [];

      querySnapshot.forEach((doc) => {
        roomArr.push({ ...doc.data(), id: doc.id });
      });
      setRoom(roomArr);

      // Lee el total desde roomArr
      const calculateTotal = () => {
        // No se necesita calcular el total en este caso
      };
      calculateTotal();
      return () => unsubscribe();
    });
  }, []);

  // Elimina un item de la base de datos
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "room", id));
  };

  return (
    <main className="">
      <div className=" ">
        <h1 className="">Unirse a Sala</h1>
        <div className="">
          <form className="">
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="r"
              type="text"
              placeholder="Name Room"
            />
            <select
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            >
              <option value="">Select Option</option> {/* Opción vacía */}
              <option value="Supervivencia">Supervivencia</option>
              <option value="AtrapaGemas">Atrapa Gemas</option>
              <option value="PvP">PvP</option>
            </select>

            <input
              value={newItem.url} // Cambia "price" a "url"
              onChange={(e) => setNewItem({ ...newItem, url: e.target.value })} // Cambia "price" a "url"
              className=""
              type="url" // Cambia el tipo de entrada a "url"
              placeholder="Enter URL" // Cambia el marcador de posición
            />
            <button onClick={addItem} className="" type="submit">
              Post
            </button>
          </form>
          <ul>
            {room.map((item, id) => (
              <li key={id} className="">
                <div className="">
                  <span className="capitalize">{item.name}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Ver URL
                  </a>{" "}
                  {/* Renderiza la URL como un enlace */}
                </div>
                <button onClick={() => deleteItem(item.id)} className="">
                  X
                </button>
              </li>
            ))}
          </ul>
          {/* No es necesario mostrar el total en este caso */}
        </div>
      </div>
    </main>
  );
}
