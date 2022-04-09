import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPeding, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author};

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false)

      history.push('/')
    })
  } 

  return (
    <div className="create">
      <h2>Add a New Blog:</h2>
      <form onSubmit={handleSubmit}>
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
        { !isPeding && <button>Add Blog</button>}
        { isPeding && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}

export default Create;