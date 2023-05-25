import React from 'react';
import { PDFViewer,Document, Page, Text, View, StyleSheet  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
     page: {
       flexDirection: 'row',
       backgroundColor: '#E4E4E4'
     },
     section: {
       width:600,
       margin: 10,
       padding: 10,
       flexGrow: 1
     }
   });

const PDFFile = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
        </Page>
    </Document>
  )
}

export default PDFFile