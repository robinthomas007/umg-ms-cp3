FROM node:16.13.2

WORKDIR /src

RUN apt-get update -y && apt-get install -y jq

COPY package.json package.json
#COPY package-lock.json package-lock.json

#RUN npm ci
RUN npm install
COPY . .
RUN bash ./devops/scripts/buildwithvault.sh
ENTRYPOINT [ "npm", "run", "serve" ]
