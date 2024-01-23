# Table des Matières

1. [**_Généralité_**](#Généralité)
2. [**_Technique_**](#Technique)

   2.1. [**_Exercice 1 : Une application statique dockerisée_**](#Exercice-1)

   1. [**_Pré-requis_**](#Pré-requis)
   2. [**_Créer une application web statique simple_**](#Créer)
   3. [**_Rédiger un Dockerfile pour cette application_**](#Rédiger)
   4. [**_Construire l'image Docker à partir du Dockerfile_**](#Construire)
   5. [**_Démarrer un conteneur Docker basé sur cette image pour tester localement_**](#Démarrer)

   2.2. [**_Exercice 2 : Docker Multistage Build_**](#Exercice-2)

<br>
<br>

# 1 - Généralité

Cette documentation technique vise à fournir une perspective détaillée sur les aspects techniques du projet en réponse à l'énoncé. Vous y trouverez une présentation succincte du projet, de ses objectifs, ainsi que des éléments clés relatifs à son développement et à son déploiement.

Vous trouverez l'énoncé dans le fichier [PROJET.md](https://gitlab.com/Lthat_h/projet_docker_gitlab_ci_cd_new/-/blob/main/PROJET.md?ref_type=heads)

![Logo Docker](./images/Docker.png "Titre de l'image") <img src="images/Gitlab.png" width="150">

**Bonne Lecture !**

# 2 - Technique

## 2.1 --- Exercice 1: Une application statique dockerisée

### 2.1.1 ------ Pré-requis

                        - Docker doit être installé
                        - Editeur de code (Vscode, SublimText, Notepad++)

### 2.1.2 ------ Créer une application web statique simple

**Résumé :**

Cette application web statique dédiée aux voitures a été construite en utilisant vite et React comme framework principal pour faciliter le processus de build. Le choix de **Vite + React** offre une structure optimale et une gestion efficace des pages, tout en restant orienté vers un rendu côté client. Le design est élaboré en CSS avec **Tailwind CSS**, garantissant une présentation visuelle attrayante.

**Technologies Utilisées**

                        - Framework   :   React
                        - Langages    :   HTML, CSS, JS
                        - Design      :   Tailwind CSS

### 2.1.3 ------ Rédiger un Dockerfile pour cette application

La rédaction d’un Dockerfile simplifie le processus de déploiement, assure la portabilité de l’application, renforce la sécurité et facilite la collaboration au sein de l’équipe de développement. C’est une pratique recommandée dans le développement moderne d’applications.

<img src="images/Dockerfile.old.png">

### 2.1.4 ------ Construire l'image Docker à partir du Dockerfile

Pour Construire l’image Docker à partir du Dockerfile ci-dessus il faut d’abord se placer à la racine du projet là où se trouve le Dockerfile, ensuite taper :

**docker build -t app-car:1.0 .**

                        - Docker build ==> Commande pour construire l'image
                        - -t ==> Tag, option qui permet de spécifier le nom de l'image
                        - App-car:1.0 ==> Nom de l'image avec la version
                        - . ==> Chemin vers le dossier contenant le Dockerfile (racine)

### 2.1.5 ------ Démarrer un conteneur Docker basé sur cette image pour tester localement

Pour tester l’application localement nous pouvons exécuter un conteneur avec l’image créée précédemment.

**docker run -d -p 5173:5173 --name app-car app-car:1.0**

                        - Docker run ==> Commande pour démarrer un conteneur
                        - -d ==> Mode détaché, exécution du conteneur en arrière plan
                        - -p ==> mapping de port, 5173 (droite conteneur) au 5173 ( gauche hôte )
                        - --name ==> Nom du conteneur
                        - App-car:1.0 ==> Image qu'on utilise

Pour avoir une partie de son contenu modifiable nous pouvons exécuter le conteneur Docker à partir d’un volume :

**docker run -d -p 5173:5173 --name app-car -v $(pwd)/src/components:/app-car/src/components app-car:1.0**

                        - v ==> Option pour spécifier le mappage de volume entre un répertoire sur notre machine hôte et un répertoire dans le conteneur Docker.

Ici le contenu modifiable sera toutes la partie **components** de mon application (Footer, navbar, etc…)
