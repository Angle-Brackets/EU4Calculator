import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {useState} from 'react'
import fetch from 'isomorphic-unfetch'

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>goongaag</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="countrySelector">our Next.js tutorial</a>.)
//         </p>

        
//       </section>
//     </Layout>
//   )
// }

const Home = ({data}) => {
  const [results, setResults] = useState(data);

  return (
    <Layout home>
           <Head>
             <title>{siteTitle}</title>
           </Head>
           <section className={utilStyles.headingMd}>
            <p>{results.countryName}</p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
               <a href="countrySelector">our Next.js tutorial</a>.)
             </p>
    
            
           </section>
    </Layout>
  );
}

export async function getStaticProps(context){
  const res = await fetch("http://localhost:3000/api/countries?countryTag=MOS");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default Home;





