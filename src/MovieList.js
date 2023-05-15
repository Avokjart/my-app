import React, { useState, useRef } from 'react';
import Movie from './Movie';

export default function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "First item",
      rating: "3"
    }
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

  return (
    <div>
      <input className="form-control" placeholder="Add a new movie here..." ref={inputRef} />
      <select ref={ratingRef}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={addItem}>Add Movie</button>
      <ul className="list-group">
        {movies.map(movie => (
          <Movie key={movie.id} item={movie} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}
