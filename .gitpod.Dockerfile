FROM gitpod/workspace-full

# You can find the new timestamped tags here: 
# https://hub.docker.com/r/gitpod/workspace-full/tags
# e.g.
# FROM gitpod/workspace-full:2023-11-19-19-13-44


# install prerequisite Linux packages
# https://github.com/metadatadriven/coffee-editor#install-linux-packages-if-necessary
# 
# QUESTION: do we need sudo apt-get update first?
#
# RUN sudo apt-get install g++-9 libsecret-1-dev xvfb libx11-dev libxkbfile-dev libxml2-utils

RUN sudo apt-get update && \
	sudo apt-get upgrade -y 

# misc dependencies
RUN	sudo apt-get install build-essential libopenblas-dev gnupg g++-multilib clang libsecret-1-dev -y
RUN sudo apt-get install xvfb libx11-dev libxkbfile-dev libxml2-utils -y

USER gitpod

# Use Java 17 (default in image is Java 11)
# https://www.gitpod.io/docs/introduction/languages/java#setting-up-a-custom-dockerfile
RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh && \
	sdk install java 17.0.3-ms && \
	sdk default java 17.0.3-ms"

# install Yeoman generator at v4 'cos a bug when using v5
# https://github.com/eclipse-theia/generator-theia-extension/issues/182
RUN npm i yo@4.3.1 -g 
RUN npm i generator-theia-extension -g