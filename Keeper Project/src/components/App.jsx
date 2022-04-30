import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [tab, setTab] = useState([]);

  function AddTab(title, note) {
    const value = {
      Title: title,
      Note: note
    };
    setTab((prevValue) => {
      return [...prevValue, value];
    });
  }

  function deleteTab(id) {
    setTab((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea AddTab={AddTab} />
      {tab.map((Noteread, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={Noteread.Title}
            content={Noteread.Note}
            deleteTab={deleteTab}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
