import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";

function PrimerPost({ data }) {
  return (
    <Layout
      title={`Post número: ${data.id}`}
      description={`Este es el componente de mi post número: ${data.id}`}
    >
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body} </p>
    </Layout>
  );
}

export default PrimerPost;

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
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
