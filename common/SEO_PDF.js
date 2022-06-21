const fs = require("fs");
const PDFDocument = require("pdfkit");

function SEO_PDF(Resulte, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    generateHeader(doc);
    createResulte(Resulte);
    generateSEO(doc);
    doc.end();
    doc.pipe(fs.createWriteStream(path));

}
let data = [];
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
function createResulte(Resulte) {
    data = [
        {
            Name: 'Total Traffic',
            Value: Resulte.total_traffic,
            desc: 'The estimated number of clicks the analyzed website will get on Google based on the current rankings of the discovered keywords',
        },
        {
            Name: 'Total Traffic Cost',
            Value: Resulte.total_traffic_cost,
            desc: 'The estimated cost of traffic the analyzed website would get by targeting every discovered keyword expressed in the equivalent of Google Ads prices',
        },
        {
            Name: 'Backlinks',
            Value: Resulte.backlinks,
            desc: 'History of acquired backlinks for the analyzed domain',
        },
        {
            Name: 'KEYWORDS',
            Value: Resulte.key_Word,
            desc: 'The total number of keywords the analyzed website ranks for in organic search',
        }
    ]
    key = Resulte.keyWord
    return data;
}
function generateSEO(doc) {
    doc
        .addPage()
        .fontSize(12)

    for (let i = 0; i < data.length; i++) {
        let x = 50;
        let xDesc = x + 100;
        let xValue = x + 500;
        let y = 70 + i * 70;
        doc
            //                  x  y
            .text(data[i].Name, x, y)
            .text(data[i].desc, xDesc, y)
            .text(data[i].Value, xValue, y)//resulte
    }
    for (let i = 0; i < key.length; i++) {
        let x = 0;
        let y = 300 + i * 20;
        if (i == 0) {
            doc
                .text(key[i], 50, 400)
                .text(key[5 + i], 100, 480)
        }
        else {
            x = 50 * i;
            doc
                //            x  y
                .text(key[i], x, 400)
                .text(key[5 + i], x, 480)
        }
    }

}
module.exports = {
    SEO_PDF,
    createResulte,
};
/*
//------------------------------------------------------
            .text('Ttotal Traffic:', 50, 70)
            .text(Resulte.total_traffic, 120, 70)//resulte
            //------------------------------------------------------
            .text('Ttotal Traffic:', 50, 70)
            .text(Resulte.total_traffic, 120, 70)//resulte
            //------------------------------------------------------
            .fillColor('black')
            .text('Key Word:', 50, 210)
            .text(Resulte.key_Word, 52, 250)//resulte
            //                       x   y
            .text(Resulte.total_traffic, 120, 70)//resulte
            //------------------------------------------------------
            .text(Resulte.total_traffic, 120, 70)//resulte
            //------------------------------------------------------
            .text(Resulte.total_traffic, 120, 70)//resulte
            //------------------------------------------------------

            .fillColor('black')
            .text('Key Word:', 50, 210)
            .text(Resulte.key_Word, 52, 250)//resulte

*/ 