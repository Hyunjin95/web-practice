FROM node:12.13.0

RUN mkdir -p /usr/src/project_backend
WORKDIR /usr/src/project_backend

COPY ./ ./

RUN apt-get update
RUN npm install

CMD ["/bin/bash"]