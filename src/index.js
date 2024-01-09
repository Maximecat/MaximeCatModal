import React from 'react';
import ReactDOM from 'react-dom/client';
import MaximeCatModal from './lib';

const root = ReactDOM.createRoot(document.getElementById('root'));
let isOpen = true;
const handleClose = () => {
  isOpen = !isOpen
}
root.render(
  <React.StrictMode>
    <>
      <div style={{ position: "relative" }}>
        <h1>Hello</h1>
        <MaximeCatModal isOpen={isOpen} onClose={handleClose} message={"Employee Created !"} />
      </div>
    </>
  </React.StrictMode>
);