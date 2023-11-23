# theia-playground
This repo contains various experimenting related to the creation of Theia extensions. 
Currently Each experiment is in its own branch.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/metadatadriven/theia-playground.git)

This repo is setup to be run in [Gitpod](https://www.gitpod.io/)

Background details on the Gitpod and Theia setup are in the README of this [typescript-101 experiment](https://github.com/metadatadriven/typescript-101/tree/experiment/smalcolm/theia-blueprint)

# runtime setup

The `.gitpod.Dockerfile` contains the environment needed to run [Theia](https://theia-ide.org/) in gitpod, and should be able to run [Cloud.EMF](https://eclipse.dev/emfcloud/) applications using Java backend too.

# Running Theia

 To run The for the first time use:
 ```sh
 $ yarn build:browser
 $ yarn start:browser
 ```
Then open [[localhost:3000]] 

# Add a basic widget

We are using the [Theia Widget Documentation](https://theia-ide.org/docs/widgets/) as a reference

Add a Widget to the project using the Yeoman generator:
```sh
$ yo theia-extension --standalone
? The extension's type Widget (with unit tests)
? The extension's name basic-widget
BasicWidget
Please remember to add the standalone extension manually to your root package.json and to your product, e.g. in browser-app/package.json
   create basic-widget/package.json
   create basic-widget/tsconfig.json
   create basic-widget/src/browser/basic-widget-frontend-module.ts
   create basic-widget/src/browser/basic-widget-contribution.ts
   create basic-widget/src/browser/basic-widget-widget.tsx
   create basic-widget/src/browser/style/index.css
   create basic-widget/README.md
   create basic-widget/src/browser/basic-widget-widget.test.ts
   create basic-widget/configs/jest.config.ts
```

This creates a `./basic-widget` directory with the widget. NOTE the following output:
```
Please remember to add the standalone extension manually to your root package.json and to your product, e.g. in browser-app/package.json
```

First, add `basic-widget` to the `package.json` workspaces:
```json
  "workspaces": [
    "basic-widget", "empty-extension", "browser-app", "electron-app"
  ]
```

Then edit the `browser-app/package.json` file as a "dependencies":
```json
  "dependencies": {
    "@theia/core": "latest",
    "@theia/editor": "latest",
    "@theia/filesystem": "latest",
    "@theia/markers": "latest",
    "@theia/messages": "latest",
    "@theia/monaco": "latest",
    "@theia/navigator": "latest",
    "@theia/preferences": "latest",
    "@theia/process": "latest",
    "@theia/terminal": "latest",
    "@theia/workspace": "latest",
    "empty-extension": "0.0.0",
    "basic-widget": "0.0.0"       <-- ADD TO LIST (dont forget comma!)
  },
```

After updating the `package.json` files, re-run
```sh
$ yarn
$ yarn build:browser
$ yarn start
```
This will rebuild and start the Thiea frontend (localhost:3000)

NOTE that a new menu is added `View > BasicWidget Widget`

The `./basic-widget/package.json` file defines the entry point for the
widget here:
```json
"theiaExtensions": [
    {
      "frontend": "lib/browser/basic-widget-frontend-module"
    }
  ]
```

The `./basic-widget/src/browser/basic-widget-frontend-module.ts` file is the Typescript file that generates the lib/browser output (see tsconfig.json)

There are three key files:
- basic-widget-frontend-module.ts
- basic-widget-contribution.ts
- basic-widget-widget.tsx

# How to find documentation on Theia

- [Links to Thiea documentation](https://github.com/eclipse-theia/theia#documentation)

## Searching the source code and API

Use the SEARCH feature in the [API Documentation](https://eclipse-theia.github.io/theia/docs/next/index.html)

## Community forum

The [community forum](https://community.theia-ide.org/) is useful to search and ask questions if needed