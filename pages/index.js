import Head from "next/head";

import Header from "../componets/Header";
import Nav from "../componets/Nav";
import Results from "../componets/Results";
import requests from "../utils/requests";



export default function index({ results }) {

  return <div>
      <Head>
          <title>hulu 2.0</title>
          <link rel="icon" href="favicon.ico" />
           <script src="https://cdn.tailwindcss.com"></script>
      </Head>
    
    <Header />
    <Nav/>
    <Results results={results} />
  </div>;
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchRomanceMovies.url}`
  ).then((res) => res.json());

  
  return {
     props: {
       results: request.results,
     }
     
   }
     
}


