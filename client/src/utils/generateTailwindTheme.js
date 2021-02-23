const fs = require('fs');
const resolveConfig = require('tailwindcss/resolveConfig');
const prettier = require('prettier');
const path = require('path');
const tailwindConfig = require('../../tailwind.config');

const { theme } = resolveConfig(tailwindConfig);
const themeStr = JSON.stringify(theme);
const js = `
const theme = ${themeStr} 
export default theme`;

try {
    console.log(process.cwd());
    fs.writeFileSync(
        path.resolve(process.cwd(), 'src/theme.js'),
        prettier.format(js, { parser: 'babel' }),
        'utf-8'
    );
} catch (err) {
    console.log(err.message);
}
