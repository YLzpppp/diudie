```javascript
1 : react-native init diudie

2 : npm install typescript --save

3 : npm install --save react-native-typescript-transformer

4 : yarn tsc --init --pretty --jsx react-native
// 执行后会出现 tsconfig.json ,修改该文件配置内容如下

{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "esnext",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
     "lib": ["es6"],                             /* Specify library files to be included in the compilation. */
     "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    "jsx": "react-native",                    /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    "resolveJsonModule": true,
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
     "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
     "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
     "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
     "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
     "paths": {
       "@app": ["./"],
       "@src": ["./src"]
     },                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    "allowSyntheticDefaultImports": true,     /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true ,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    "include": ["**/*.js", "**/*.ts", "**/*.tsx", "**/*.jsx"],
    "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"],
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
     "experimentalDecorators": true       /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  }
}

5 : touch rn-cli.config.js
// 修改文件内容如下
module.exports={
    getTransformModulePath(){
        return require.resolve("react-native-typescript-transformer");
    },
    getSourceExts(){
        return ["ts","tsx","js","jsx"];
    }
}

6 : npm install --save  @types/react  @types/react-native @types/react-test-renderer @types/jest

// 配置全局路径，用自定义标识符指向 src 路径
7 : npm install babel-plugin-root-import --save-dev
[https://www.npmjs.com/package/babel-plugin-root-import]

8 : 配置 root-import 路径映射

"plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "./src",
        "rootPathPrefix": "$src/"
      },
      {
        "rootPathSuffix": "./src/res/mipmap",
        "rootPathPrefix": "$mipmap/",
      },
      {
        "rootPathSuffix": "./src/res/values",
        "rootPathPrefix": "$values/"
      }
    ]
  ]

9 : npm install --save react-native-device-info

//安装 navigation 相关库
10 : npm install react-navigation react-native-gesture-handler react-native-reanimated  react-navigation-tabs

// 安装 动画库 lottie
11 : npm install lottie-react-native lottie-ios@3.0.3
[https://github.com/react-native-community/lottie-react-native]
//链接
12 : cd ios && pod install

13 : npm install babel-plugin-root-import
注意：如果是已有的项目，配置好后要清缓存
 > watchman watch-del-all
 > npm start -- --reset-cache
```