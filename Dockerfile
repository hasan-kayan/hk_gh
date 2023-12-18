# Use an official Node.js runtime as a base image
FROM node:14 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image as a base image for the production environment
FROM nginx:alpine

# Copy the built React app from the builder stage to the Nginx web root
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the Nginx configuration file to the container
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80
EXPOSE 443

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
