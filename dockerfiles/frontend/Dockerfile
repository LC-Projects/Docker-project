# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-alpine

# Set the working directory
WORKDIR /srv/frontend

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Change the permissions of the files
COPY . .

# Change the permissions of the files
RUN chmod -R 755 /srv/frontend

EXPOSE 8080

# Run the application
CMD ["npm run dev"]