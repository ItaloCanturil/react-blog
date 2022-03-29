import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPeding, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok) throw Error('could not fetch the data for that resource')
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, [])

  return ( 
    <div className="home">
      {error && <div>{ error }</div>}
      {isPeding && <progress></progress>}
      {blogs && <BlogList blogs={blogs} title="All blogs"/>}
    </div>
   );
}
 
export default Home;