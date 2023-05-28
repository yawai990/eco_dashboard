import { savePDF } from "@progress/kendo-react-pdf";

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'A4',
      fileName: 'expense.pdf',
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;