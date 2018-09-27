import React, { Fragment, Component } from "react";
import { download } from "../utils";

class DownloadButton extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const fileTextArea = this.codeTextArea;
    const fileContent = fileTextArea.value;
    const fileName = document.querySelector(".gist-blob-name").innerText;

    download(fileName, fileContent);
  }

  get codeTextArea() {
    const fileElement = this.button.parentElement.parentElement.parentElement
      .parentElement.parentElement;
    console.log(fileElement);
    return fileElement.querySelector("textarea");
  }

  render() {
    return (
      <Fragment>
        <button
          className="btn btn-sm copy-pretty tooltipped tooltipped-n BtnGroup-item"
          aria-label="Copy prettier formatted code"
          onClick={this.onClick}
          ref={ref => (this.button = ref)}
        >
          Download file
        </button>
      </Fragment>
    );
  }
}

export default DownloadButton;
