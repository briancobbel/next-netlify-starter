import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7b0935bfcamshbac80d765728a94p11adb2jsnd711fa8e8f3c",
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
        <Header title="Random Quotes" />
        <div className="description">
          <div class="quoteContainer">
            <div id="quote"></div>
            <div id="author"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
