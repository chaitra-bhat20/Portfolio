

//------------------------------------------------------------------------------
import React from 'react';
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from './Resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';

//package.json -> "react-pdf": "^9.0.0","pdfjs-dist": "^3.4.120", "@react-pdf/renderer": "^3.4.4"



function Resume() {

  pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.mjs';
  // pdfjs.GlobalWorkerOptions.workerSrc = `https//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div className="row">
      <div className='col-md-2 col-lg-2'>

      </div>
      <div className='col-md-8 col-lg-8'>
      <div id="pdfviewer">
        {/* <Viewer fileUrl={filePDF} />  */}
        <Document file={filePDF} className="d-flex justify-content-center">
          <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
        </Document>
      </div>
      </div>
      <div className='col-md-2 col-lg-2'>
      </div>
    </div>
  );
}

export default Resume;




//-----------------------------------------------------------------
// import React from 'react';
// import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
// import filePDF from './Resume.pdf'
// import { Document, Page, pdfjs } from 'react-pdf';

// // import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   // 'pdfjs-dist/build/pdf.worker.min.mjs',
//   'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.mjs',

// //   "https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js",
//   import.meta.url,
// ).toString();



// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // pdfjs.GlobalWorkerOptions.workerSrc=//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js

// function Resume() {
//   return (
//     <div className="App">
//      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js"> */}
//      <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.3.136/pdf.worker.mjs`}>

//     <div id="pdfviewer">
//         <Viewer fileUrl={filePDF} />
//     </div>
//     </Worker>
//     </div>
//   );
// }

// export default Resume;

//-----------------------------------------------------------------------------------

// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import htmlToPdfmake from "html-to-pdfmake";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// // import { Viewer } from '@react-pdf-viewer/core';
// // import { getFilePlugin } from '@react-pdf-viewer/get-file';

// // Core viewer
// import { Viewer } from '@react-pdf-viewer/core';

// // Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// pdfMake.vfs = pdfFonts.pdfMake.vfs;


// // Your render function
// // const getFilePluginInstance = getFilePlugin();
// // const { DownloadButton } = getFilePluginInstance;
// function Resume() {
//     const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   // const resumeRef = useRef();

//   // const handlePrint = useReactToPrint({
//   //   content: () => resumeRef.current,
//   //   documentTitle: "resume",
//   // });

//   // const handleDownload = () => {
//   //   const resumeElement = resumeRef.current;
//   //   const resumeHtml = resumeElement.outerHTML;
//   //   const pdfContent = htmlToPdfmake(resumeHtml);
//   //   const documentDefinition = { content: pdfContent };
//   //   pdfMake.createPdf(documentDefinition).download("resume.pdf");
//   // };

//   return (
//     // <div
//     //     className="rpv-core__viewer"
//     //     style={{
//     //         border: '1px solid rgba(0, 0, 0, 0.3)',
//     //         display: 'flex',
//     //         flexDirection: 'column',
//     //         height: '100%',
//     //     }}
//     // >
//     //     <div
//     //         style={{
//     //             alignItems: 'center',
//     //             backgroundColor: '#eeeeee',
//     //             borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
//     //             display: 'flex',
//     //             padding: '4px',
//     //         }}
//     //     >
//     //         <DownloadButton />
//     //     </div>
//     //     <div
//     //         style={{
//     //             flex: 1,
//     //             overflow: 'hidden',
//     //         }}
//     //     >
//     //         <Viewer fileUrl="/Resume.pdf" plugins={[getFilePluginInstance]} />
//     //     </div>
//     // </div>
//     <>
//     <Viewer
//         fileUrl='/assets/pdf-open-parameters.pdf'
//         plugins={[
//             // Register plugins
//     defaultLayoutPluginInstance,
//         ]}
// />
//     </>
// );
// }

// export default Resume;
