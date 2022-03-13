import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useState } from 'react';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

const SunEditorPage = () => {
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

      <SunEditor
        height="300px"
        onChange={(content) => {
          setValue(content);
        }}
        setOptions={{
          defaultStyle: 'font-size: 1rem; line-height: 1;',
          buttonList: [
            [
              'undo',
              'redo',
              'fontSize',
              'bold',
              'underline',
              'italic',
              'strike',
              'subscript',
              'superscript',
              'fontColor',
              'hiliteColor',
              'removeFormat',
              'outdent',
              'indent',
              'align',
              'list',
              'table',
              'link',
              'image',
              'video',
              'audio',
              'fullScreen',
              'showBlocks',
              'codeView',
              'preview',
              'print',
              'save',
            ],
          ],
        }}
      />
      <div>{value}</div>
    </div>
  );
};

export default SunEditorPage;
