FROM node:14-alpine as builder

ENV NODE_ENV build

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN chown -R node: /usr/src/app

USER node

RUN yarn install --frozen-lockfile && \
    yarn build

# ---

FROM node:14-alpine

# ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json /usr/src/app/
COPY --from=builder /usr/src/app/tsconfig*.json /usr/src/app/
COPY --from=builder /usr/src/app/ormconfig.json /usr/src/app/
COPY --from=builder /usr/src/app/dist/ /usr/src/app/dist/

RUN chown -R node: /usr/src/app

USER node
RUN yarn global add @nestjs/cli

RUN yarn install --frozen-lockfile

CMD ["node", "dist/main.js"]

