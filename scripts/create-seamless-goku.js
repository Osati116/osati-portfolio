const sharp = require('sharp');
const path = require('path');

async function createSeamlessGoku() {
  const gokuSrc = 'C:/Users/ADMIN/.gemini/antigravity/brain/faf730ec-14b3-45e4-9625-dc1de57c1951/.user_uploaded/media_1792014511833.png';
  const outPath = 'C:/Users/ADMIN/.gemini/antigravity/scratch/osati-portfolio/public/works/illustrations/saiyan-awakening.png';

  // 1. Get raw pixel buffer of Goku (726 x 1024, RGBA)
  const { data, info } = await sharp(gokuSrc)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const srcW = info.width; // 726
  const srcH = info.height; // 1024
  const channels = info.channels; // 4

  // Target canvas: 1024 x 1024
  const targetW = 1024;
  const targetH = 1024;
  const outBuffer = Buffer.alloc(targetW * targetH * channels);

  // We want to nudge Goku downwards by shiftY = 90
  const shiftY = 90;
  // Center horizontally: shiftX = (1024 - 726) / 2 = 149
  const shiftX = Math.round((targetW - srcW) / 2);

  // Fill canvas
  for (let y = 0; y < targetH; y++) {
    // Determine which source row to sample
    // If y < shiftY, clamp to row 0
    // If y >= shiftY + srcH, clamp to row srcH - 1
    // Otherwise, sample y - shiftY
    let srcY = y - shiftY;
    if (srcY < 0) srcY = 0;
    if (srcY >= srcH) srcY = srcH - 1;

    for (let x = 0; x < targetW; x++) {
      // Determine which source col to sample
      let srcX = x - shiftX;
      if (srcX < 0) srcX = 0;
      if (srcX >= srcW) srcX = srcW - 1;

      const srcIdx = (srcY * srcW + srcX) * channels;
      const destIdx = (y * targetW + x) * channels;

      outBuffer[destIdx] = data[srcIdx];         // R
      outBuffer[destIdx + 1] = data[srcIdx + 1]; // G
      outBuffer[destIdx + 2] = data[srcIdx + 2]; // B
      outBuffer[destIdx + 3] = 255;              // A
    }
  }

  await sharp(outBuffer, {
    raw: {
      width: targetW,
      height: targetH,
      channels: 4
    }
  })
  .png()
  .toFile(outPath);

  console.log('Seamless nudged Goku generated successfully!');
}

createSeamlessGoku().catch(console.error);
