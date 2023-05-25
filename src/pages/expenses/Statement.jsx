import React from 'react';
import PDFFile from './PDFFile';
import { PDFViewer,Document, Page, Text, View, StyleSheet,PDFDownloadLink  } from '@react-pdf/renderer';

const Statement = () => {
  return (
    <div className='mt-5'>

      <h1 className='text-center dark:text-white text-xl underline font-semibold'>Expense Advanced Statement</h1>

      <section className='bg-red-500'>
      <PDFFile />
        </section>

        <PDFDownloadLink document={<PDFFile />} fileName='data'>
          {
            ({ loading }) => loading ? (<button>Loading....</button>):(<button>Download</button>)
          }
        </PDFDownloadLink>
    </div>
  )
};


export default Statement