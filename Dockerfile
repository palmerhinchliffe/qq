FROM node:14

# Create node modules sub-dir and set ownership on them to our node user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory to non-root node users
WORKDIR /home/node/app

# Copy project dependencies
COPY package*.json ./

# Switch to our node user
USER node

RUN npm install

# Copy app files ensuring they are owned by host node user
COPY --chown=node:node . .

EXPOSE 8080

# Kickstart the app
CMD ["node", "/src/app.ts"]