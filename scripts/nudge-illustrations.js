const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processAll() {
  const userUploadsDir = 'C:/Users/ADMIN/.gemini/antigravity/brain/faf730ec-14b3-45e4-9625-dc1de57c1951/.user_uploaded/';
  const outDir = 'C:/Users/ADMIN/.gemini/antigravity/scratch/osati-portfolio/public/works/illustrations/';

  // 1. Process Ape: Nudge downwards so face is fully displayed
  console.log('Processing Urban Designer Ape...');
  const apeSrc = path.join(userUploadsDir, 'media_1792014511838.png');
  // Shift ape down by 110px on a 1024x1024 black canvas
  await sharp({
    create: {
      width: 1024,
      height: 1024,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
  .composite([
    {
      input: apeSrc,
      top: 110,
      left: 0
    }
  ])
  .png()
  .toFile(path.join(outDir, 'urban-designer.png'));
  console.log('Urban Designer Ape saved.');

  // 2. Process Goku (Saiyan Surge): Nudge downwards so face is fully displayed
  console.log('Processing Saiyan Surge...');
  const gokuSrc = path.join(userUploadsDir, 'media_1792014511833.png');
  const svgGrad = Buffer.from(
    '<svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">' +
    '  <defs>' +
    '    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">' +
    '      <stop offset="0%" stop-color="rgb(0,0,109)"/>' +
    '      <stop offset="100%" stop-color="rgb(0,0,20)"/>' +
    '    </linearGradient>' +
    '  </defs>' +
    '  <rect width="1024" height="1024" fill="url(#bg)"/>' +
    '</svg>'
  );
  const bg = await sharp(svgGrad).png().toBuffer();
  const gokuResized = await sharp(gokuSrc)
    .resize(645, 910)
    .toBuffer();
    
  await sharp(bg)
    .composite([
      {
        input: gokuResized,
        left: Math.round((1024 - 645) / 2),
        top: 90
      }
    ])
    .png()
    .toFile(path.join(outDir, 'saiyan-awakening.png'));
  console.log('Saiyan Surge saved.');

  // 3. Exact user uploads for white background works:
  // "also the atrworks that have a white background are not appearing correctly, it looks excessively brownish-filtered. render exactly what i posted to you."
  // Copy the EXACT files byte-for-byte!
  console.log('Copying exact uploaded artworks...');
  fs.copyFileSync(
    path.join(userUploadsDir, 'media_1792014511837.jpg'),
    path.join(outDir, 'drip-portrait-female.jpg')
  );
  fs.copyFileSync(
    path.join(userUploadsDir, 'media_1792014511839.jpg'),
    path.join(outDir, 'drip-portrait-male.jpg')
  );
  fs.copyFileSync(
    path.join(userUploadsDir, 'media_1792014511872.png'),
    path.join(outDir, 'expressive-portrait.png')
  );
  fs.copyFileSync(
    path.join(userUploadsDir, 'media_1792054296774.jpg'),
    path.join(outDir, 'bandana-portrait.jpg')
  );
  console.log('All files saved successfully!');
}

processAll().catch(console.error);
