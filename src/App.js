import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
function App() {
    const [monsters, changeMonsters] = useState([]);

    const [search, changeSearch] = useState("", () => console.log(search));

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                changeMonsters(data);
            });
    }, []);
    useEffect(() => {}, [search]);

    let filteredMonsters = monsters;
    filteredMonsters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox
                placeholder="Search Monsters"
                handleChange={(e) => changeSearch(e.target.value)}
            />
            <CardList search={search} monsters={filteredMonsters} />
        </div>
    );
}

export default App;
