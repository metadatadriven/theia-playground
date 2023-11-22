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


