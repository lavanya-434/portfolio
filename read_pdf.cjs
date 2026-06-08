const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('c:/Users/user/portfolio/resume_text.txt', pdfParser.getRawTextContent());
});

pdfParser.loadPDF("c:/Users/user/portfolio/Lavs _Resume.pdf");
