FROM node:17
WORKDIR /web
COPY public/ public/
COPY src/ src/
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY tailwind.config.js .
COPY webpack.backend.js .
COPY postcss.config.js .
RUN yarn install
RUN yarn build
EXPOSE 3001
ENTRYPOINT ["node", "api/index.js"]
