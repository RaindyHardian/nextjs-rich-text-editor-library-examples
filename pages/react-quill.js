import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['link', 'image', 'video'],

  ['clean'], // remove formatting button
];

const ReactQuillPage = () => {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <Head>
        <title>NextJS Rich Text Editor Collections</title>
        <meta
          name="description"
          content="Collection of NextJs Rich Text Editor Library on the internet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuillNoSSRWrapper
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: toolbarOptions,
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true,
          },
        }}
      />
      <div>{value}</div>
    </div>
  );
};

export default ReactQuillPage;
