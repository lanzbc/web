import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {useDropzone} from 'react-dropzone';
import styled from "styled-components";
const Styles = styled.div`

`;

export default function Basic(props) {
  const {getRootProps, getInputProps, acceptedFiles} = useDropzone({noKeyboard: true});
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <h5>Drop and Drag file input here</h5>
        <em>(HERE)</em>
      </div>
      <aside>
        <em><h5>Input file name</h5></em>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
