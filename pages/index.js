import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>NextJS Rich Text Editor Collections</title>
        <meta
          name="description"
          content="Collection of NextJs Rich Text Editor Library on the internet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/react-quill">
            <a>/react-quill</a>
          </Link>
        </li>
        <li>
          <Link href="/suneditor">
            <a>/suneditor</a>
          </Link>
        </li>
        <li>
          <Link href="/react-draft-wysiwyg">
            <a>/react-draft-wysiwyg</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
