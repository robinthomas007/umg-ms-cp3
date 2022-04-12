FROM node:17.4.0

ARG USER_DATA
ENV USER_DATA $USER_DATA

WORKDIR /src

RUN apt-get update -y && apt-get install -y jq

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --immutable
COPY . .
RUN bash ./devops/scripts/buildwithvault.sh
ENTRYPOINT [ "yarn", "run", "serve" ]
