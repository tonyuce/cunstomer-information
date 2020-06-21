# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /cunstomer-information

# add `/app/node_modules/.bin` to $PATH
ENV PATH /cunstomer-information/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

RUN npm run build
EXPOSE 3000 8080

# start app
CMD ["npm", "start"]