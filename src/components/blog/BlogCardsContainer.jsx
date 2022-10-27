import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ErrorMessage from "./ErrorMessage";
import BlogCard from "./BlogCard";

const CardsContainer = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://localhost:3002/posts/");
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <Container className="w-100 mt-5 cards-container">
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {blogPosts?.map((blogPost) => (
            <BlogCard blogPost={blogPost} key={blogPost.id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default CardsContainer;
