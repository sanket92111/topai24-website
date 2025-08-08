# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy project files
COPY . .



# Build the project for production
RUN npm run build

RUN mkdir ./dist/projects

COPY ./src/projects ./dist/projects

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
