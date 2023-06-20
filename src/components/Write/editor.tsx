'use client';
import React from 'react';
import { Editor } from '@toast-ui/react-editor';

export default function BoardWrite(): JSX.Element {
  return (
    <Editor
      // ref={editorRef}
      initialValue=""
      placeholder="글을 작성해주세요!"
      initialEditType="markdown"
      previewStyle="tab"
      height="60rem"
      theme={'dark'}
      // toolbarItems={toolbarItems}
      // plugins={[colorSyntax]}
      // hooks={{ addImageBlobHook: onUploadImage }}
    />
  );
}
