/* eslint-disable */
const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };
    https.get(url, options, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

const run = async () => {
  const publicImagesDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  try {
    console.log('Downloading Hugging Face logo...');
    await download(
      'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      path.join(publicImagesDir, 'huggingface.svg')
    );
    console.log('Hugging Face logo downloaded successfully!');

    console.log('Downloading H2O.ai logo...');
    // Download official logo from Wikimedia Commons
    await download(
      'https://upload.wikimedia.org/wikipedia/commons/e/e5/H2O.ai_Logo.svg',
      path.join(publicImagesDir, 'h2oai.svg')
    );
    console.log('H2O.ai logo downloaded successfully!');
  } catch (error) {
    console.error('Error downloading logos:', error);
  }
};

run();
