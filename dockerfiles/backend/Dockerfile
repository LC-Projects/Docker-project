# Utilisez l'image officielle Node.js 14
FROM node:14-alpine

# Définissez le répertoire de travail
WORKDIR /srv/backend

# Copiez package.json et package-lock.json avant les autres fichiers
# Utilisez le cache Docker pour éviter de réinstaller les dépendances si elles n'ont pas changé
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez les fichiers de l'application dans le conteneur
COPY . .

# Exécutez l'application
CMD ["npm install", "node ace migration:run", "npm run dev"]