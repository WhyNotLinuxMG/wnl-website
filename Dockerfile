# Utilisez l'image officielle de Node.js comme image de base
FROM node:18 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Utiliser une image légère de Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers de build de l'étape précédente vers le dossier de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
