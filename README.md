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

Lets do that - edit both files