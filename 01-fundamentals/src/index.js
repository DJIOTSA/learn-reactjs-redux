import React from "react";
import ReactDom from 'react-dom/client';
import BookList from './BookList';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<BookList />)