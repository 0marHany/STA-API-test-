const fs = require("fs");
const PDFDocument = require("pdfkit");

function createPdf(invoice, path) {
    let doc = new PDFDocument({ size: "A4", margin: 50 });

    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);

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

function generateCustomerInformation(doc, invoice) {
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Performance", 50, 160);

    generateHr(doc, 185);

    const customerInformationTop = 200;

    doc
        .fontSize(10)
        .text("PR_Precentage", 50, customerInformationTop)
        .font("Helvetica-Bold")
        .text(invoice.PR_Precentage, 150, customerInformationTop)
        .font("Helvetica")
        .text("Test Date:", 50, customerInformationTop + 15)
        .text(new Date(invoice.createdAt).toDateString(), 150, customerInformationTop + 15)
        .moveDown();

    generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
    let i;
    const invoiceTableTop = 330;

    doc.font("Helvetica-Bold");
    generateTableRow(
        doc,
        invoiceTableTop,
        "OLE_FCP",
        "loadingExperince",
        "OriginLoadingExperince",
        "LE_FCP",
        "PR_Precentage"
    );
    generateHr(doc, invoiceTableTop + 20);
    doc.font("Helvetica");

    console.log(invoice);
    const item = invoice;
    const position = invoiceTableTop + 1 * 30;
    generateTableRow(
        doc,
        position,
        item.OLE_FCP,
        item.loadingExperince,
        item.OriginLoadingExperince,
        item.LE_FCP,
        item.PR_Precentage,
    );

    generateHr(doc, position + 20);
}

function generateFooter(doc) {
    doc
        .fontSize(10)
        .text(
            "Payment is due within 15 days. Thank you for your business.",
            50,
            780,
            { align: "center", width: 500 }
        );
}

function generateTableRow(

    doc,
    y,
    OLE_FCP,
    loadingExperince,
    OriginLoadingExperince,
    LE_FCP,
    PR_Precentage
) {
    doc
        .fontSize(10)
        .text(OLE_FCP, 50, y)
        .text(loadingExperince, 150, y)
        .text(OriginLoadingExperince, 280, y, { width: 90, align: "right" })
        .text(LE_FCP, 370, y, { width: 90, align: "right" })
        .text(PR_Precentage, 0, y, { align: "right" });
}

function generateHr(doc, y) {
    doc
        .strokeColor("red")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
}

function formatCurrency(cents) {
    return "$" + (cents / 100).toFixed(2);
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return year + "/" + month + "/" + day;
}

module.exports = {
    createPdf
};