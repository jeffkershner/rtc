FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Expose Next.js development port
EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]
