import { EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false, loading: () => <p>Loading ...</p> }
);

const ReactDraftWYSIWYGPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

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
      <Editor
        editorState={editorState}
        editorClassName="react-draft-wysiwyg-editor-wrapper"
        onEditorStateChange={onEditorStateChange}
      />
      <div>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</div>
    </div>
  );
};

export default ReactDraftWYSIWYGPage;
