import React from "react";
import ReactDOM from "react-dom";
import DownloadButton from "./components/download-button";

class App extends React.Component {
  render() {
    return <DownloadButton />;
  }
}

window.onload = () => {
  const fileActions = [
    ...document.body.querySelectorAll(".file .file-actions .BtnGroup")
  ];

  fileActions.forEach(action => {
    const containerEl = document.createElement("span");
    action.prepend(containerEl);
    ReactDOM.render(<App />, containerEl);
  });
};
