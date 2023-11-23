# theia-playground
This repo contains various experimenting related to the creation of Theia extensions. 
Currently Each experiment is in its own branch.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/metadatadriven/theia-playground.git)

This repo is setup to be run in [Gitpod](https://www.gitpod.io/)

Background details on the Gitpod and Theia setup are in the README of this [typescript-101 experiment](https://github.com/metadatadriven/typescript-101/tree/experiment/smalcolm/theia-blueprint)

# Prerequisites

Before starting here, the reader should be familiar with Thiea, Typescript and React - see the [Typescript-101](/metadatadriven/typescript-101/) repo and branches.

# runtime setup

## Gitpod dockerfile

The `.gitpod.Dockerfile` contains the environment needed to run [Theia](https://theia-ide.org/) in gitpod, and should be able to run [Cloud.EMF](https://eclipse.dev/emfcloud/) applications using Java backend too.

# Running Theia

 To [run Theia for the first time](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#quick-start) use:
 ```sh
 $ yarn build:browser
 $ yarn start:browser
 ```
Then open [[localhost:3000]] 

# Experiment1: Create a widget

See branch [experiment/add-basic-widget](/metadatadriven/theia-playground/tree/experiment/add-basic-widget)

1. Use the Yeoman theia-extension generator to add a basic widget to Theia
2. Run Theia and observe the new widget
3. Edit the widget to:
4. Change the default behaviour to being open and on the right-hand side of Theia.
5. Add/change content of the Widget to include a static image and some text
6. Move (and rename) the widget menu to `About > myWidget`

