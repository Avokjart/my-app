import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
  const [movies, setMovies] = useState([
    
  ]);
  const inputRef = useRef();
  const ratingRef = useRef();

  function addItem() {
    const title = inputRef.current.value;
    const rating = parseInt(ratingRef.current.value);

    if (title === "" || rating === 0) {
      alert("Ange både titel och betyg för att spara filmen.");
      return;
    }

    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

    setMovies(prevMovies => [
      ...prevMovies,
      {
        id: newId,
        title: title,
        rating: rating
      }
    ]);

    inputRef.current.value = "";
    ratingRef.current.value = 0;
  }

  function deleteItem(id) {
    setMovies(prevMovies => prevMovies.filter(item => item.id !== id));
  }

  function sortAlphabetically() {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  }

  function sortByRating() {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  }

  return (
    <div>
      <input className="form-control" placeholder="Add a new movie here..." ref={inputRef} />
      <select ref={ratingRef} >
        <option disabled selected>Rate the film</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={addItem}
      style={{
        backgroundColor: 'green',
        color: '#ffffff',
        padding: '10px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '10px'

      }}
      >Add Movie</button>
      <ul className="list-group">
        {movies.map(movie => (
          <Movie key={movie.id} item={movie} deleteItem={deleteItem} />
        ))}
      </ul>
      <button onClick={sortAlphabetically} style={{
    backgroundColor: 'black',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px'

  }} >Sort Alphabetically</button>
      <button onClick={sortByRating} style={{
    backgroundColor: 'black',
    color: '#ffffff',
    padding: '10px 10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px'

  }}>Sort by Rating</button>
    </div>
  );
}
