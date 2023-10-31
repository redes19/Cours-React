import React, { useState, useEffect } from "react";

function TodoList() {
  const [tache, setTasks] = useState([]); // initialise un tableau "tache" vide
  const [taskInput, setTaskInput] = useState(""); // initialise l'input de la tache pour reset l'écriture

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tache") || "[]"));
  }, []); // enrengistre mes donner si j'en ai donné

  useEffect(() => {
    localStorage.setItem("tache", JSON.stringify(tache)); // je "push" dans mon storage une nouvelle tache
  }, [tache]);

  const addTask = () => {
    // trim() supprime les espace en debut et fin de chaine
    if (taskInput.trim() !== "") {
      setTasks([...tache, taskInput]); // cette ligne me permet  de créer une copie de mon tableau et d'implémenter la novelle tache, en finaliter j'affiche la copie de mon tableau avec la new tache
      setTaskInput(""); // cette fonction me permet de réinnitialiser mon input
    }
  };

  const deleteTask = (e) => {
    const updatedTasks = tache.filter((_, index) => index !== e); // je filtre  mon tableau tache et le renvoie dans un nouveau tableau,ensuite je créer une fonction qui renvoie true. Elle filtre les elements en les comprarant à index et si l'index est différent a l'élément il reste dans le tableau
    setTasks(updatedTasks); // envoi le nouveau tableau
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="add">
        <input
          className="addtache"
          type="text"
          placeholder="Nouvelle tâche"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask} className="buttonAdd">
          +
        </button>
      </div>
      <div className="list">
        <ul>
          {tache.map((tache, index) => (
            <li key={index} className="li">
              {tache}
              <button onClick={() => deleteTask(index)}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png"
                  alt=""
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
