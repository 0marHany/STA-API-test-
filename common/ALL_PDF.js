const fs = require("fs");
const PDFDocument = require("pdfkit");
const { createResulte } = require("./SEO_PDF");

let SEO_data;
function ALL_PDF(Resulte, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });
    generateHeader(doc);
    SEO_data = createResulte(Resulte)
    console.log(SEO_data);
    // createResulte(Resulte);
    generateALL(doc, Resulte);
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
function generateALL(doc, Resulte) {
    console.log(Resulte);
    doc
        .addPage()
        .fontSize(20)
        .fillColor("red")
        .text("Performance :", 50, 70)
        //                  x  y
        .fillColor("black")
        .fontSize(18)
        .text(Resulte.PR_Precentage, 280, 100)
        //
        .fontSize(11)
        .text("loading Experince :", 50, 125)
        .text(Resulte.loadingExperince, 144, 125)
        //
        .text("OriginLoadingExperince :", 207, 125)
        .text(Resulte.OriginLoadingExperince, 331, 125)
        //
        // Light House : FAST
        .text("Light House :", 420, 125)
        .text("FAST", 485, 125)
        //
        .fontSize(20)
        .fillColor("red")
        .text("SEO :", 50, 180)
        .fontSize(11)
        .fillColor("black")
    for (let i = 0; i < SEO_data.length; i++) {
        let x = 50;
        let xDesc = x + 100;
        let xValue = x + 500;
        let y = 210 + i * 70;
        if (SEO_data[i].Name == "Backlinks") {
            i++
        }
        doc
            //                  x  y
            .text(SEO_data[i].Name, x, y)
            .text(SEO_data[i].desc, xDesc, y)
            .text(SEO_data[i].Value, xValue, y)//resulte
    }
    //
    doc
        .fontSize(20)
        .fillColor("red")
        .text("Security :", 50, 400)
        .fillColor("black")
        .fontSize(35)
        .text(Resulte.final_score, 280, 430)
        .fontSize(11)
        .text("Software Found :", 50, 470)
        .text(Resulte.software_found, 134, 470)
        //
        .text("Software Outdated :", 222, 470)
        .text(Resulte.software_outdated, 321, 470)
        //
        // Light House : FAST
        .text("Software Vulnerabil :", 420, 470)
        .text(Resulte.software_vulnerabil, 520, 470)
}
module.exports = {
    ALL_PDF
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