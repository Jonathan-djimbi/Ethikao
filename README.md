# ethikao
boutique e-commerce 
# 🌱 Ethikao

Bienvenue dans le projet Ethikao ! 🎉 Découvrez comment consommer du chocolat de manière responsable et éthique. Nous nous engageons à vous fournir les meilleurs produits chocolatés d'origine africaine, fabriqués en Afrique. 🍫

## 🚀 Commencer

Ces instructions vous guideront pour obtenir une copie du projet et le mettre en marche sur votre machine locale à des fins de développement et de test.

### 📋 Prérequis

- Node.js (version 14.x ou supérieure)
- PostgreSQL (version 12.x ou supérieure)

### 🔧 Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/Jonathan-djimbi//ethikao.git
cd ethikao


Installez les dépendances :
bash
Copier le code
npm install
Configurez les variables d'environnement :
Créez un fichier .env à la racine du projet et ajoutez vos informations de connexion à la base de données :

env
Copier le code
DATABASE_URL="postgresql://ethikao_user:mot_de_passe@localhost:5432/ethikao"
Migratez la base de données :
bash
Copier le code
npx prisma migrate dev --name init
Lancez le serveur de développement :
bash
Copier le code
npm run dev
🌟 Vous devriez maintenant voir l'application fonctionner sur http://localhost:3000 !

📂 Structure du Projet

Voici un aperçu rapide de la structure des fichiers du projet :

bash
Copier le code
ethikao/
├── prisma/
│   ├── schema.prisma  # Définition du schéma Prisma
├── public/
│   ├── images/        # Images du projet
├── src/
│   ├── components/    # Composants réutilisables
│   ├── pages/         # Pages de l'application
│   ├── styles/        # Fichiers de styles CSS
│   ├── app.js         # Point d'entrée principal de l'application
│   ├── layout.js      # Layout de l'application
├── .env               # Variables d'environnement
├── README.md          # Ce fichier
├── package.json       # Dépendances et scripts npm
🛠️ Outils Utilisés

Next.js - Framework React pour le développement côté serveur
Prisma - ORM pour Node.js et TypeScript
PostgreSQL - Système de gestion de base de données relationnelle
✨ Fonctionnalités

Catalogue de produits : Parcourez notre sélection de produits chocolatés.
Détails du produit : Consultez les détails de chaque produit.
Navigation fluide : Expérience utilisateur fluide et réactive grâce à Next.js.
🤝 Contribuer

Les contributions sont ce qui rend la communauté open source géniale. Toute contribution que vous ferez sera grandement appréciée.

Forkez le projet
Créez une branche pour votre fonctionnalité (git checkout -b fonctionnalite/AmazingFeature)
Committez vos modifications (git commit -m 'Add some AmazingFeature')
Pushez la branche (git push origin fonctionnalite/AmazingFeature)
Ouvrez une Pull Request
📧 Contact

Pour toute question ou suggestion, veuillez contacter l'équipe à lomingo@icloud.com

Merci d'avoir visité notre projet ! 🌍💚 Nous espérons que vous apprécierez travailler avec Ethikao autant que nous aimons le développer.
