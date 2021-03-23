import React from 'react';
import { useForm } from 'react-hook-form';

export default function Filter() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" name="Title" ref={register} />
      <input type="text" placeholder="From year" name="From year" ref={register} />
      <input type="text" placeholder="To year" name="To year" ref={register} />
      <select name="Genre" ref={register}>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Documentary">Documentary</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Family">Family</option>
        <option value="Mystery">Mystery</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="War">War</option>
        <option value="Sport">Sport</option>
        <option value="Romance">Romance</option>
        <option value="Musical">Musical</option>
        <option value="Thriller">Thriller</option>
      </select>

      <input type="submit" />
    </form>
  );
}