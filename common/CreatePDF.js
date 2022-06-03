const fs = require("fs");
const PDFDocument = require("pdfkit");

function createPdf(invoice, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });

    generateHeader(doc);
    createResulte(invoice);
    generateResult(doc, invoice);
    generateResult2(doc, invoice);
    doc.end();
    doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
    doc
        .image("logo.png", 50, 45, { width: 50 })
        .fillColor("#444444")
        .fontSize(20)
        .text("ACME Inc.", 110, 57)
        .fontSize(10)
        .text("ACME Inc.", 200, 50, { align: "right" })
        .text("123 Main Street", 200, 65, { align: "right" })
        .text("New York, NY, 10025", 200, 80, { align: "right" })
        .moveDown();
}
let resulte;
function createResulte(invoice) {
    resulte = [
        LE_CLS = invoice.LE_CLS,
        LE_FCP = invoice.LE_FCP,
        LE_FID = invoice.LE_FID,
        LE_LCP = invoice.LE_LCP,
        LH_CLS = invoice.LH_CLS,
        LH_FCP = invoice.LH_FCP,
        LH_SI = invoice.LH_SI,
        LH_LCP = invoice.LH_LCP,
        LH_TBT = invoice.LH_TBT,
        LH_TTI = invoice.LH_TTI,
        OLE_CLS = invoice.OLE_CLS,
        OLE_FCP = invoice.OLE_FCP,
        OLE_FID = invoice.OLE_FID,
        OLE_LCP = invoice.OLE_LCP,
    ]
    for (let i = 0; i < resulte.length; i++) {
        if (resulte[i] === "FAST") {
            resulte[i] = 'green'
        } else if (resulte[i] === "SLOW") {
            resulte[i] = 'red'
        } else {
            resulte[i] = '#ad7900'
        }
    }
    console.log(resulte);
}

function generateResult(doc, invoice) {
    doc
        /*
         x+25
         xResult+15
         y=95 - 145
     
         new collect y*3
         */
        .addPage()
        .fontSize(12)
        //LE                         x   y
        .fillColor('black')
        .text('Loading Experience:', 50, 70)
        // row 1 col 2
        .fillColor('black')
        .text(`FIRST CONTENTFUL PAINT MS:`, 52, 95)
        .fillColor(resulte[1])
        .text(invoice.LE_FCP, 52, 110)//resulte
        //
        .fillColor('black')
        .text(`FIRST INPUT DELAY MS:`, 330, 95)
        .fillColor(resulte[2])
        .text(invoice.LE_FID, 330, 110)//resulte

        // row 2 col 4
        .fillColor('black')
        .text(`LARGEST CONTENTFUL PAINT MS:`, 52, 145)
        .fillColor(resulte[3])
        .text(invoice.LE_LCP, 52, 160)//resulte
        //
        .fillColor('black')
        .text(`CUMULATIVE LAYOUT SHIFT SCORE:`, 330, 145)
        .fillColor(resulte[0])
        .text(invoice.LE_CLS, 330, 160)//resulte
        //------------------------------------------------------

        //OLE                                    x   y
        .fillColor('black')
        .text('Origin Loading Experience:', 50, 210)
        // row 1 col 2 
        .fillColor('black')
        .text(`FIRST CONTENTFUL PAINT MS:`, 52, 235)
        .fillColor(resulte[11])
        .text(invoice.OLE_FCP, 52, 250)//resulte
        //
        .fillColor('black')
        .text(`FIRST INPUT DELAY MS:`, 330, 235)
        .fillColor(resulte[12])
        .text(invoice.OLE_FID, 330, 250)//resulte

        // row 2 col 4 
        .fillColor('black')
        .text(`LARGEST CONTENTFUL PAINT MS:`, 52, 285)
        .fillColor(resulte[13])
        .text(invoice.OLE_LCP, 52, 300)//resulte
        //
        .fillColor('black')
        .text(`CUMULATIVE LAYOUT SHIFT SCORE:`, 330, 285)
        .fillColor(resulte[10])
        .text(invoice.OLE_CLS, 330, 300)//resulte
    //------------------------------------------------------
}
function generateResult2(doc, invoice) {
    doc
        .fontSize(12)
        /*
        x+25
        xResult+15
        y=95 - 145
        new collect y*3
        */
        //Light House          x   y
        .fillColor('black')
        .text('Light House:', 50, 360)
        // row 1 col 2 
        .fillColor('black')
        .text(`first contentful paint:`, 51, 385)
        .fillColor(resulte[5])
        .text(invoice.LH_FCP, 51, 400)//resulte
        //
        .fillColor('black')
        .text(`interactive:`, 224, 385)
        .fillColor(resulte[9])
        .text(invoice.LH_TTI, 224, 400)//resulte
        //
        .fillColor('black')
        .text(`largest-contentful-paint:`, 400, 385)
        .fillColor(resulte[7])
        .text(invoice.LH_LCP, 400, 400)//resulte
        //------------------------------------------------------
        // // row 2 col 4     
        .fillColor('black')
        .text(`cumulative layout shift:`, 51, 435)
        .fillColor(resulte[4])
        .text(invoice.LH_CLS, 51, 450)//resulte
        //
        .fillColor('black')
        .text(`total blocking time:`, 224, 435)
        .fillColor(resulte[8])
        .text(invoice.LH_TBT, 224, 450)//resulte
        //
        .fillColor('black')
        .text(`speed index:`, 400, 435)
        .fillColor(resulte[6])
        .text(invoice.LH_SI, 400, 450)//resulte
    // ------------------------------------------------------
}
module.exports = {
    createPdf
};