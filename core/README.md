1. yarn init

   1. entry : src/index.ts

2. yarn add typescript

3. npx tsc --init

   [tsconfig.json]

   1. "declaration": true
   2. "declarationMap": true
   3. "sourceMap": true
   4. "outDir": "dist"
   5. "include": ["src"]

4. package.json

   1. "dist/index.js"
   2. "types": "dist"
   3. "scripts" : {
      "build" : "tsc -p ."
      }

5. yarn build

