import { NextApiRequest, NextApiResponse } from 'next';
import { PDFDocument, rgb } from 'pdf-lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { game, user } = req.body;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { height } = page.getSize();

    page.drawText(`Invoice for ${game.nom}`, {
      x: 50,
      y: height - 50,
      size: 24,
      color: rgb(0, 0, 0),
    });

    page.drawText(`User: ${user.nom}`, {
      x: 50,
      y: height - 100,
      size: 18,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Game: ${game.nom}`, {
      x: 50,
      y: height - 150,
      size: 18,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Price: $${game.prix.toFixed(2)}`, {
      x: 50,
      y: height - 200,
      size: 18,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Activation Code: ${game.codeActivation}`, {
      x: 50,
      y: height - 250,
      size: 18,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=invoice.pdf');
    res.send(Buffer.from(pdfBytes)); // Utilisation de Buffer pour envoyer le PDF
  } catch (error) {
    res.status(500).json({ message: 'Error generating PDF' });
  }
}
