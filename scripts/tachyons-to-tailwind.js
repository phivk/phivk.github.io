const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Mapping of Tachyons to Tailwind classes
const classMapping = {
  // Typography
  f1: "text-6xl",
  f2: "text-5xl",
  f3: "text-4xl",
  f4: "text-3xl",
  f5: "text-2xl",
  f6: "text-xl",
  f7: "text-lg",
  normal: "font-normal",
  b: "font-bold",

  // Spacing
  pa0: "p-0",
  pa1: "p-1",
  pa2: "p-2",
  pa3: "p-4",
  pa4: "p-8",
  pa5: "p-16",
  pl1: "pl-1",
  pl2: "pl-2",
  pr1: "pr-1",
  pr2: "pr-2",

  // Add more mappings as needed

  // Display & Flex
  dn: "hidden",
  db: "block",
  dib: "inline-block",
  flex: "flex",
  "flex-auto": "flex-auto",
  "flex-column": "flex-col",
  "items-center": "items-center",
  "justify-center": "justify-center",
  "justify-between": "justify-between",

  // Width & Height
  "w-100": "w-full",
  "w-50": "w-1/2",
  "h-100": "h-full",

  // Add more mappings based on your project's needs
};

// Function to convert Tachyons classes to Tailwind in a string
function convertClasses(input) {
  // Extract class attributes
  const classRegex = /class="([^"]*)"/g;
  return input.replace(classRegex, (match, classes) => {
    const classesList = classes.trim().split(/\s+/);
    const convertedClasses = classesList.map((cls) => classMapping[cls] || cls);
    return `class="${convertedClasses.join(" ")}"`;
  });
}

// Process all template files
const templateFiles = glob.sync("**/*.{njk,html,md}", {
  ignore: ["node_modules/**", "_site/**"],
});

templateFiles.forEach((file) => {
  const filePath = path.resolve(file);
  const content = fs.readFileSync(filePath, "utf8");
  const convertedContent = convertClasses(content);

  if (content !== convertedContent) {
    fs.writeFileSync(filePath, convertedContent);
    console.log(`Updated: ${file}`);
  }
});

console.log("Migration complete!");
