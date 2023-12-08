import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const About = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2>Popular blogs</h2>
          {blogs.map((data, index) => (
            <div key={index} className={styles.blogItem}>
              <Link href={`/blogpost/${data.slug}`} legacyBehavior>
                <h3>{data.title}</h3>
              </Link>
              <p className={styles.blogcontent}>{data.content}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

// static side

export async function getStaticProps(context) {
  const data = await fs.promises.readdir("blogdata");
  let myFile;
  const filesRecord = data.map(async (item) => {
    myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    return JSON.parse(myFile);
  });
  const allBlogs = await Promise.all(filesRecord);
  return {
    props: { allBlogs: allBlogs },
  };
}

export default About;
