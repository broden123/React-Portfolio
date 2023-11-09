import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function downloadDocument() {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "/resume.pdf";
    link.click();
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
        >
          Next
        </button>
        <button onClick={downloadDocument}>Download</button>
      </div>
    </div>
  );
}
