import React from "react";

export default function Home(props) {
  return <div>root {props.title}</div>;
}

export async function getStaticProps() {
  return {
    props: {
      title: "hi",
    },
  };
}
