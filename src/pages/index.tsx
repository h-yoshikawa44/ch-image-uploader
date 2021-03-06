import Head from 'next/head';
import Image from 'next/image';
import { css } from '@emotion/react';

const Home = () => {
  return (
    <div css={container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={main}>
        <h1 css={[title, textCenter]}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p css={[description, textCenter]}>
          Get started by editing <code css={code}>pages/index.js</code>
        </p>

        <div css={grid}>
          <a href="https://nextjs.org/docs" css={card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" css={card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            css={card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            css={card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer css={footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span css={logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

const container = css`
  padding: 0 2rem;
`;

const main = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
`;

const footer = css`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;

  a {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

const title = css`
  margin: 0;
  font-size: 4rem;
  line-height: 1.15;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const textCenter = css`
  text-align: center;
`;

const description = css`
  margin: 4rem 0;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const code = css`
  padding: 0.75rem;
  font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace;
  font-size: 1.1rem;
  background: #fafafa;
  border-radius: 5px;
`;

const grid = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const card = css`
  max-width: 300px;
  padding: 1.5rem;
  margin: 1rem;
  color: inherit;
  text-align: left;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const logo = css`
  height: 1em;
  margin-left: 0.5rem;
`;

export default Home;
