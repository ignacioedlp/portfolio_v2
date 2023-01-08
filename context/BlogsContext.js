import { createContext, useEffect, useState } from "react";

export const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BlogsContext.Provider
      value={{
        blogs,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};
