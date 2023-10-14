# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle the app source
COPY . .

# Expose port 3000
EXPOSE 3000

CMD ["npm", "run", "dev"]
