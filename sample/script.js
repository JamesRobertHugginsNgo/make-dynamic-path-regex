import makeDynamicPathRegex from '../src/script.js';

const dynamicPath1 = '/home/folder';
const regex1 = makeDynamicPathRegex(dynamicPath1);
const path1 = '/home/folder';

console.group(regex1.source);
console.log(path1, regex1.exec(path1));
console.groupEnd();

const dynamicPath2 = '/home/:work/folder';
const regex2 = makeDynamicPathRegex(dynamicPath2);
const path2 = '/home/opensource/folder';

console.group(regex2.source);
console.log(path2, regex2.exec(path2));
console.groupEnd();

const dynamicPath3 = '/home/folder/:id?';
const regex3 = makeDynamicPathRegex(dynamicPath3);
const path3a = '/home/folder';
const path3b = '/home/folder/0999123';
const path3c = '/home/folder/0999123/';

console.group(regex3.source)
console.log(path3a, regex3.exec(path3a));
console.log(path3b, regex3.exec(path3b));
console.log(path3c, regex3.exec(path3c));
console.groupEnd();
