import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author}
  } 

  return (
    <div className="create">
      <h2>Add a New Blog:</h2>
      <form onSubmit={handleSubmit()}>
        <label>Add the title</label>
        <input type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Add Blog body: </label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;