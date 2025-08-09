# Use a stable Node.js version as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /home/node/app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Copy the rest of your frontend application code
COPY . .
RUN chown -R node:node /home/node/app