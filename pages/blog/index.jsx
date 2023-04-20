import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

function index({ data }) {
  return (
    <Layout title="Blog | Next.js" description="Este es el componente blog">
      <h1>Lista de posts</h1>

      {data.length > 0 &&
        data.map(({ id, title, body }) => (
          <div key={id}>
            <Link href={`blog/${id}`}>
              <h3>
                {id} - {title}{" "}
              </h3>
            </Link>
            <p>{body}</p>
          </div>
        ))}

      <Link href="/blog/primer-post">Ir al primer post</Link>
    </Layout>
  );
}

export default index;

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
