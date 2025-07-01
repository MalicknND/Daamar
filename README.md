# Projet Daamar - Plateforme automobile

Ce projet est une application web complète développée dans le cadre du parcours M2, sous la supervision du professeur Vincent.

## Présentation générale

- **Backend** : Le backend repose sur Directus, un CMS headless open-source. Il gère les données des utilisateurs, des voitures (Cars), des formulaires de contact, l'authentification, etc. Toutes les données sont accessibles via une API REST sécurisée.
- **Frontend** : Le frontend est développé avec SvelteKit. Il propose une interface moderne et réactive pour :
  - Consulter la liste des voitures partenaires (avec images, détails, navigation dynamique)
  - S'inscrire, se connecter, se déconnecter (authentification sécurisée via l'API Directus)
  - Accéder à une page de contact avec envoi direct des messages dans Directus
  - Navigation adaptative selon l'état de connexion (nom affiché, bouton logout, etc.)
  - Gestion de la session utilisateur persistante (localStorage)

## Fonctionnalités principales

- **Catalogue de voitures** :
  - Affichage sous forme de grille (DaamarGrid)
  - Détail d'une voiture accessible en cliquant sur son image (page dynamique)
- **Authentification** :
  - Inscription et connexion via Directus
  - Stockage sécurisé des tokens, récupération des infos utilisateur
  - Affichage du prénom et bouton de déconnexion dans la navigation
- **Contact** :
  - Formulaire de contact validé côté client, envoi direct dans la collection ContactForm de Directus
- **Internationalisation** :
  - Interface traduite en français
- **Configuration** :
  - L'URL de l'API Directus est configurable via une variable d'environnement (`.env`)

## Technologies utilisées
- SvelteKit
- Directus (API REST)
- TailwindCSS

## Installation et lancement

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd <nom-du-dossier>
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer l'API Directus

Créer un fichier `.env` à la racine du projet avec :

```
VITE_API_URL=https://directus.ckx.app
```

> Remplace l'URL si tu utilises une autre instance Directus.

### 4. Lancer le projet en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173)

### 5. Build et lancement en production

```bash
npm run build
npm run preview
```

---

