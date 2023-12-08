import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import axios from "axios";

function Blog(props) {
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   // getAllBlogs();
  // }, []);

  // const getAllBlogs = async () => {
  //   const res = await axios.get("http://localhost:3000/api/blogs");
  //   setBlogs(res.data);
  // };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular blogs</h2>
        {blogs.map((data, index) => (
          <div key={index} className={styles.blogItem}>
            <Link href={`/blogpost/${data.slug}`} legacyBehavior>
              <h3>{data.title}</h3>
            </Link>
            <p className={styles.blogcontent}>
              {data.content.substr(0, 250)}...
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:3000/api/blogs");
  return {
    props: { allBlogs: res.data },
  };
}

export default Blog;
