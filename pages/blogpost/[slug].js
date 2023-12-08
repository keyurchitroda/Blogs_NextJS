import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import axios from "axios";

const slug = (props) => {
  console.log("props", props);
  const [blog, setBlog] = useState(props.singleBlog);

  //due to server side rendering no need to this code

  // const router = useRouter();
  // const { slug } = router.query;
  // useEffect(() => {
  //   // if (!router.isReady) return;
  //   // getSingleBlog();
  // }, [router.isReady]);

  // const getSingleBlog = async () => {
  //   const res = await axios.get(
  //     `http://localhost:3000/api/getblog?slug=${slug}`
  //   );
  //   console.log("ress", res);
  //   setBlog(res.data);
  // };

  return (
    <div className={styles.container}>
      <main key={blog.slug} className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div>{blog.content}</div>
      </main>
    </div>
  );
};

// server side rendering
export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await axios.get(`http://localhost:3000/api/getblog?slug=${slug}`);
  return {
    props: { singleBlog: res.data },
  };
}

export default slug;
