const fs = require('fs');
const path = require('path');

// Fungsi untuk mengonversi string ke PascalCase
function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w|\s\w)/g, clear => clear.toUpperCase())
    .replace(/[-\s]/g, '');
}

// Fungsi untuk menghasilkan nama komponen berdasarkan path folder
function generateComponentName(filePath) {
  const relativePath = path.relative(__dirname, filePath);
  const pathSegments = relativePath.split(path.sep);
  return pathSegments.reverse().map(toPascalCase).join('');
}

// Logika untuk memproses input dari user
function createComponent(folderPath) {
  const componentName = generateComponentName(folderPath);

  // Memastikan komponenName tidak kosong
  if (!componentName) {
    console.error("Error: Could not generate component name from the provided folder path.");
    process.exit(1);
  }

  // Lokasi file komponen yang baru
  const componentPath = path.join(__dirname, 'src', folderPath, `index.tsx`);

  // Template komponen React
  const componentTemplate = `
export default function ${componentName} () {
   return (
      <div>${componentName}</div>
   );
};
`;

  // Menulis file komponen baru
  fs.mkdirSync(path.dirname(componentPath), { recursive: true });
  fs.writeFileSync(componentPath, componentTemplate);

  console.log(`Component ${componentName} has been created at ${componentPath}`);
}

// Menangani argumen dari command line
const folderPath = process.argv[2];
if (!folderPath) {
  console.error("Please provide the folder path.");
  process.exit(1);
}

createComponent(folderPath);
