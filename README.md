# theia-playground
This repo contains various experimenting related to the creation of Theia extensions. 
Currently Each experiment is in its own branch.

# How to use this repo

This repo is structured using the wiki which contains tutorials on developing Thiea applications. Each tutorial has a suporting experiment branch that was used to develop the tutorial.

The intention is that the reader should clone the main branch and use that as a starting point to follow the tutorials, and can use the experiment branches to refer to (hopefully!) working code.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/metadatadriven/theia-playground.git)

This repo is setup to be run in [Gitpod](https://www.gitpod.io/)

Background details on how to setup Gitpod to develop Theia applications are in the README of [typescript-101 experiment](https://github.com/metadatadriven/typescript-101/tree/experiment/smalcolm/theia-blueprint) repo.

# Prerequisites

Before starting here, the reader should be familiar with Thiea, Typescript and React - see the [Typescript-101](/metadatadriven/typescript-101/) repo and branches.

# runtime setup

## Gitpod dockerfile

The `.gitpod.Dockerfile` contains the environment needed to run [Theia](https://theia-ide.org/) in gitpod, and should be able to run [Cloud.EMF](https://eclipse.dev/emfcloud/) applications using Java backend too.

# Running Theia

 To [run Theia for the first time](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#quick-start) use:
 ```sh
 $ yarn
 $ yarn build:browser
 $ yarn start:browser
 ```
Then open [[localhost:3000]] 

# What next?

See the [wiki](https://github.com/metadatadriven/theia-playground/wiki) for tutorials
