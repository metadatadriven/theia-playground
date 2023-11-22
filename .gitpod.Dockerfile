# For development use a full-fat Ubuntu image
# You can find the new timestamped tags here: 
# https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2023-11-19-19-13-44

# install some essentials
RUN sudo install-packages -y build-essential
RUN sudo install-packages -y libx11-dev libxkbfile-dev
RUN sudo install-packages -y libsecret-1-dev

# misc dependencies
RUN	sudo apt-get install libopenblas-dev gnupg g++-multilib clangd-10 -y && \
	sudo apt-get install xvfb l libxml2-utils -y

# Use Java 17 (default in image is Java 11)
# https://www.gitpod.io/docs/introduction/languages/java#setting-up-a-custom-dockerfile
USER gitpod
RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh && \
    sdk install java 17.0.3-ms && \
    sdk default java 17.0.3-ms"
