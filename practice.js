console.log(Object.keys(document).sort())

let documentPropertiesIncludeInherited = [];

for (let p in document) {
  documentPropertiesIncludeInherited.push(p)
}
console.log(documentPropertiesIncludeInherited.sort())

let documentPropertiesOnlyInherited = [];
for(let p in document) {
  if (!document.hasOwnProperty(p)) {
    documentPropertiesOnlyInherited.push(p)
  }
}
console.log(documentPropertiesOnlyInherited.sort())