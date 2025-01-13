const fs = require('fs');
const path = require('path');

function toPascalCase(str) {
  return str
    .replace(/(^\w|-\w|\s\w)/g, clear => clear.toUpperCase())
    .replace(/[-\s]/g, '');
}

function generateComponentName(filePath) {
  const relativePath = path.relative(__dirname, filePath);
  const pathSegments = relativePath.split(path.sep);
  return pathSegments.reverse().map(toPascalCase).join('');
}

function createComponent(folderPath) {
  const componentName = generateComponentName(folderPath);
  if (!componentName) {
    console.error("Error: Could not generate component name from the provided folder path.");
    process.exit(1);
  }

  const componentPath = path.join(__dirname, 'src', folderPath, `index.tsx`);

  const componentTemplate = `
export default function ${componentName} () {
   return (
      <div>${componentName}</div>
   );
};
`;
  fs.mkdirSync(path.dirname(componentPath), { recursive: true });
  fs.writeFileSync(componentPath, componentTemplate);

  console.log(`Component ${componentName} has been created at ${componentPath}`);
}

const folderPath = process.argv[2];
if (!folderPath) {
  console.error("Please provide the folder path.");
  process.exit(1);
}

createComponent(folderPath);
