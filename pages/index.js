import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { MY_API_KEY } from "./config.js";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": MY_API_KEY,
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    document.getElementById("quote").innerHTML = response.content;
    document.getElementById("author").innerHTML =
      "- " + response.originator.name + " -";
  })
  .catch((err) => console.error(err));

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
