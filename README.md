# Table des Matières

1.  [**_Généralité_**](#Généralité)
2.  [**_Technique_**](#Technique) - **Partie 1 : Docker 🐋**

    2.1. [**_Exercice 1 : Une application statique dockerisée_**](#Exercice-1)

    1. [**_Pré-requis_**](#Pré-requis)
    2. [**_Créer une application web statique simple_**](#Créer)
    3. [**_Rédiger un Dockerfile pour cette application_**](#Rédiger)
    4. [**_Construire l'image Docker à partir du Dockerfile_**](#Construire)
    5. [**_Démarrer un conteneur Docker basé sur cette image pour tester localement_**](#Démarrer)

    2.2. [**_Exercice 2 : Docker Multistage Build_**](#Exercice-2)

    1. [**_Pré-requis_**](#Pré-requis)
    2. [**_Ecrire un Dockerfile multistage pour l'application construite dans l'exercice 1_**](#Ecrire)
    3. [**_Construire l'image Docker à partir du Dockerfile_**](#Rédiger)
    4. [**_Démarrer un conteneur Docker basé sur cette image Multi-stage pour tester localement_**](#Démarrer)

    2.3. [**_Exercice 3: Traefik & Docker Compose_**](#Exercice-3)

    1. [**_Pré-requis_**](#Pré-requis)
    2. [**_Ecrire le fichier Docker Compose qui lance Traefik et qui donne accès à votre site web_**](#Dcoker-compose)
    3. [**_Pertinence des choix faits pour Traefik_**](#Rédiger)

       - **Partie 2: GitLab CI/CD 🦊**

    2.1. [**_Exercice 1 : Intégration et Déploiement Continu avec AutoDevOps_**](#Intégration)

    1. [**_Pré-requis_**](#Pré-requis)
    2. [**_Configurer un repository Gitlab avec AutoDevOps_**](#Configurer)
    3. [**_Personnaliser le .gitlab-ci.yml pour l'application web statique_**](#Personnaliser)
    4. [**_Déployer l'application dans un environnement de staging_**](#Déployer)
    5. [**_Documenter le processus AutoDevOps et les choix de configuration_**](#Documenter)

    2.2. [**_Exercice 2 : Déploiement en Staging et Production_**](#Exercice-2)

    1. [**_Pré-requis_**](#Pré-requis)
    2. [**_Compléter le .gitlab-ci.yml pour inclure des stages de déploiement distincts pour le staging et la production_**](#Compléter)
    3. [**_Configurer le déploiement automatique sur GitLab Pages pour la production_**](#Ecrire)
    4. [**_Vérifier le fonctionnement de l'application dans les deux environnements_**](#Rédiger)
    5. [**_Documenter les étapes et configurations pour les déploiements en staging et en production_**](#Démarrer)

    2.3. [**_Exercice 3 : Vulnérabilités_**](#Exercice-3)

    1. [**_Pré-requis_**](#Pré-requis)
    2. [**_A l'aide des conteneurs Docker fournis par Owasp ZAP, mettre en place un scanner de vulnérabilité sur votre site web_**](#Owasp-ZAP)
    3. [**_Récupérer les résultats dans les artifacts_**](#Récupérer)
    4. [**_Utiliser les artifacts dans un job suivant pour bloquer la CI si des vulnérabilités sont détectées_**](#Utiliser)

<br>

# 1 - Généralité

Cette documentation technique vise à fournir une perspective détaillée sur les aspects techniques du projet en réponse à l'énoncé. Vous y trouverez une présentation succincte du projet, de ses objectifs, ainsi que des éléments clés relatifs à son développement et à son déploiement.

Vous trouverez l'énoncé dans le fichier [PROJET.md](https://gitlab.com/Lthat_h/projet_docker_gitlab_ci_cd_new/-/blob/main/PROJET.md?ref_type=heads)

![Logo Docker](./images/Docker.png "Titre de l'image") <img src="images/Gitlab.png" width="150">

**Bonne Lecture !**

# 2 - Technique

## **------------------------------------------------------------------ Partie 1 : Docker 🐋 -------------------------------------------------------------------**

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

<br>

**Labels**

Les étiquettes à la fin du fichier Docker permettent de fournir des métadonnées sur l'image Docker. Elles incluent des informations telles que le mainteneur, la description, la version et la date de construction. Ces informations peuvent être utiles pour documenter et suivre l'image.

### 2.1.4 ------ Construire l'image Docker à partir du Dockerfile

Pour Construire l’image Docker à partir du Dockerfile ci-dessus il faut d’abord se placer à la racine du projet là où se trouve le Dockerfile, ensuite taper :

**docker build -t app-car:1.0 .**

                        - Docker build ==> Commande pour construire l'image
                        - -t ==> Tag, option qui permet de spécifier le nom de l'image
                        - App-car:1.0 ==> Nom de l'image avec la version
                        - . ==> Chemin vers le dossier contenant le Dockerfile (racine)

### 2.1.5 ------ Démarrer un conteneur Docker basé sur cette image pour tester localement

Pour tester l’application localement nous pouvons exécuter un conteneur avec l’image créée précédemment.

**docker run -d -p 5173:5173 --name app-car-dev app-car:1.0**

                        - Docker run ==> Commande pour démarrer un conteneur
                        - -d ==> Mode détaché, exécution du conteneur en arrière plan
                        - -p ==> mapping de port, 5173 (droite conteneur) au 5173 ( gauche hôte )
                        - --name ==> Nom du conteneur
                        - App-car:1.0 ==> Image qu'on utilise

Pour avoir une partie de son contenu modifiable nous pouvons exécuter le conteneur Docker à partir d’un volume :

**docker run -d -p 5173:5173 --name app-car-dev -v $(pwd)/src/components:/app-car/src/components app-car:1.0**

                        - v ==> Option pour spécifier le mappage de volume entre un répertoire sur notre machine hôte et un répertoire dans le conteneur Docker.

Ici le contenu modifiable sera toutes la partie **components** de mon application (Footer, navbar, etc…)

## 2.2 --- Exercice 2: Docker Multistage Build

### 2.2.1 ------ Pré-requis

                        - Docker doit être installé
                        - Editeur de code (Vscode, SublimText, Notepad++)
                        - Avoir fini l'exercice 1

### 2.2.2 ------ Ecrire un Dockerfile multistage pour l'application construite dans l'exercice 1

L’intérêt de rédiger un Dockerfile multistage est principalement pour optimiser la taille de l’image docker en utilisant plusieurs étapes (stages). La finalité consiste à conserver que les fichiers nécessaires à l’exécution dans l’image finale, ce qui réduit également les attaques potentielles de l’application.

<img src="images/Dockerfile.png">

<br>

**Stage 1: Base image for development**

Le premier stage crée une image de base pour le développement Node.js, installe les dépendances, et prépare l'environnement de travail pour le build ultérieur de l'application.

- **FROM node:current-alpine as base** ==> Utilise l'image officielle de Node.js avec l'étiquette "current-alpine" comme base pour ce stage, et le nomme "base".

- **WORKDIR /app** ==> Définit le répertoire de travail à "/app" dans l'image

- **COPY . .** ==> Copie tous les fichiers à la racine du projet dont l'application dans le répertoire de travail de l'image.

- **RUN npm ci --quiet && npm cache clean --force** ==> Installe les dépendances du projet avec npm. Les commandes npm ci installent les dépendances de manière plus efficace que npm install, et npm cache clean --force supprime le cache npm pour réduire la taille de l'image.

<br>

**Stage 2: Build stage**

Le deuxième stage effectue le build de l'application en utilisant l'image de base créée dans le premier stage, générant ainsi les fichiers nécessaires pour le déploiement.

- **FROM base AS build** ==> Utilise l'image créée dans le premier stage ("base") comme base pour ce stage, et le nomme "build".

- **WORKDIR /build** ==> Change le répertoire de travail à "/build" dans l'image.

- **COPY --from=base /app ./** ==> Copie les fichiers du répertoire de travail du stage précédent (base) dans le répertoire de travail de ce stage.

- **RUN npm run build** ==> Exécute la commande "npm run build", qui est généralement utilisée pour construire l'application ( création, des fichiers statiques ).

<br>

**Stage 3: Production image**

Le troisième stage crée une image légère et optimisée pour la production en utilisant l'image Nginx comme base, puis copie les fichiers construits lors du deuxième stage pour être servis par Nginx.

- **FROM nginx:stable-alpine as production** ==> Utilise l'image officielle Nginx avec l'étiquette "stable-alpine" comme base pour ce stage, et le nomme "production".

- **COPY --from=build /build/dist /usr/share/nginx/html** ==> Copie les fichiers générés lors de l'étape de construction (dans le répertoire "/build/dist") vers le répertoire d'accueil de Nginx.

- **EXPOSE 80** ==> Indique que le conteneur écoute sur le port 80.

- **CMD ["nginx", "-g", "daemon off;"]** ==> Définit la commande par défaut pour le conteneur. Dans ce cas, il lance Nginx en mode démon.

<br>

### 2.2.3 ------ Construire l'image Docker à partir du Dockerfile

Pour Construire l’image Docker à partir du Dockerfile ci-dessus il faut d’abord se placer à la racine du projet là où se trouve le Dockerfile, ensuite taper :

**docker build -t app-car:2.0 -f Dockerfile .**

                        - Docker build ==> Commande pour construire l'image
                        - -t ==> Tag, option qui permet de spécifier le nom de l'image
                        - App-car:2.0 ==> Nom de l'image avec la version
                        - -f ==> --file permet de spécifier le chemin vers le fichier Dockerfile
                        - . ==> Chemin vers le dossier contenant le Dockerfile (racine)

### 2.2.4 ------ Démarrer un conteneur Docker basé sur cette image Multi-stage pour tester localement

Pour tester l’application localement nous pouvons exécuter un conteneur avec l’image créée précédemment.

**docker run -d -p 8080:80 --name app-car-prod app-car:2.0**

                        - Docker run ==> Commande pour démarrer un conteneur
                        - -d ==> Mode détaché, exécution du conteneur en arrière plan
                        - -p ==> mapping de port, 8080 (droite conteneur) au 80 ( gauche hôte )
                        - --name ==> Nom du conteneur
                        - App-car:2.0 ==> Image qu'on utilise construit par le Dockerfile Multi-stage

Résultat ci-dessous :

<br>

 <img src="images/result-app-car-prod.png">

<br>

## 2.3 --- Exercice 3: Traefik & Docker Compose

### 2.3.1 ------ Pré-requis

                        - Docker doit être installé
                        - Editeur de code (Vscode, SublimText, Notepad++)
                        - Avoir fini l'exercice 1 & 2

### 2.3.2 ------ Ecrire le fichier Docker Compose qui lance Traefik et qui donne accès à votre site web.

Le fichier Docker Compose que nous crééons dans cette exercice configure deux services, Traefik et l'application "app-car", avec une dépendance entre eux, et utilise des labels pour permettre à Traefik de router le trafic vers l'application correctement. Le tout est orchestré avec Docker Compose pour simplifier le déploiement et la gestion des conteneurs.

Traefik agit en tant que reverse proxy pour diriger le trafic entrant vers différents services (load balancing), simplifiant ainsi la gestion des connexions réseau, offrant une couche d'abstraction.

**Voici l'archi utilisé :**

<br>

<img src="images/infra-traefik.png">

<br>

**Voici mon Docker compose avec les commentaires :**

<br>

<img src="images/Docker_compose.png">

<br>

**Voici mon fichier de conf Traefik en .toml**

<img src="images/conf-traefik.png">

### 2.3.3 ------ Pertinence des choix faits pour Traefik .

- **Découverte automatique des services Docker** ==> l'utilisation de _providers.docker=true_ dans la configuration de Traefik active la fonction de découverte automatique des services Docker. Cela permet à Traefik de détecter automatiquement les services en cours d'exécution dans l'environnement Docker, simplifiant ainsi la configuration.

- **Exposition sélective des services Docker** ==> En utilisant _--providers.docker.exposedbydefault=false_, Traefik ne configure pas automatiquement l'exposition de tous les services Docker, ce qui permet un contrôle plus fin sur les services qui sont accessibles via Traefik.

- **Configuration personnalisée via un fichier traefik.toml** ==> La configuration personnalisée de Traefik est externalisée dans un fichier traefik.toml. Cela permet de définir des configurations avancées spécifiques à Traefik sans avoir à modifier directement le fichier Docker Compose, améliorant ainsi la modularité et la lisibilité du code. Ce fichier est facultatif est juste utilisé pour le dashboard car dans le fichier docker_compose j'ai eu quelques problèmes.

- **Utilisation d'étiquettes (labels) pour la configuration** ==> Les étiquettes dans la configuration de l'application **_app-car_** permettent de définir des règles spécifiques pour Traefik, comme l'activation de Traefik pour l'application, la définition de la règle de routage en fonction du nom de domaine, et la spécification du point d'entrée utilisé par Traefik. Ci_dessous les labels que j'ai utilisé et leurs explications :

  - **traefik.enable=true** ==> Cette étiquette active Traefik pour l'application "app-car". Elle indique à Traefik de prendre en charge le routage et la gestion du trafic pour cette application.

  - **traefik.http.routers.app-car-traefik-prod.rule=Host('app-car.localhost')** ==> Cette étiquette définit la règle de routage pour l'application. Elle indique à Traefik de router le trafic destiné à l'application "app-car" basée sur le nom de domaine "app-car.localhost". Cela signifie que lorsque Traefik reçoit une requête avec ce nom de domaine, il dirigera cette requête vers le service "app-car".

  - **traefik.http.routers.app-car-traefik-prod.entrypoints=web** ==> Cette étiquette spécifie le point d'entrée utilisé par Traefik pour router le trafic vers l'application. Dans ce cas, le point d'entrée est défini comme "web", qui correspond au port 80.

  - **Dépendance explicite sur le service Traefik** ==> En spécifiant
    **_depends_on_** pour le service "app-car", le Docker Compose assure que le service "app-car" ne sera lancé que lorsque le service Traefik sera prêt. Cela garantit que Traefik est opérationnel avant que l'application ne démarre, assurant ainsi que le routage via Traefik fonctionne correctement.

**En résumé, ces choix fournissent une configuration claire, flexible et adaptée aux besoins spécifiques de l'architecture, en permettant une gestion efficace des services via Traefik dans un environnement Docker.**

Il suffit juste de tapé dans le terminal à la racine du projet où il y a le Docker compose.yml **_docker compose up -d_** pour exécuter les services. Et bien sûr avoir effectué l'exercice 2 pour avoir l'image de l'application.

**Résultats avec l'url **_app-car.localhost:8080_** ci-dessous**

<img src="images/traefik-app-car.png">

## **------------------------------------------------------------------ Partie 2: GitLab CI/CD 🦊 ----------------------------------------------------------**

## 2.1 --- Exercice 1 : Intégration et Déploiement Continu avec AutoDevOps

### 2.1.1 ------ Pré-requis

                        - Avoir un RUNNER local
                        - Editeur de code (Vscode, SublimText, Notepad++)
                        - Avoir fini la Partie 1 -- Docker

### Bonus ------ Installation du Runner en local sur une Ubuntu 22.04 wsl

Pour installer un Runner je vous renvoie à cette documentation très détaillé [Installation du Runner](https://linux.how2shout.com/how-to-install-gitlab-runner-on-ubuntu-such-as-22-04-or-20-04/)

J'utilise le **Shell executor** car pour mon pc qui est en fin de vie, c'est mieux en termes de consommation de ressources telles que la RAM, car il permet d'exécuter des commandes et des scripts directement dans le contexte du même processus, évitant ainsi le surcoût potentiel associé à l'utilisation d'environnements virtuels ou de conteneurs pour chaque étape de la pipeline. Cela peut contribuer à une exécution plus légère et rapide du pipeline.

### 2.1.2 ------ Configurer un repository Gitlab avec AutoDevOps

AutoDevOps simplifie le déploiement continu en automatisant l'ensemble du processus, sans nécessiter une configuration manuelle complexe.

<br>

Voici les étapes pour Configurer un repo Gitlab avec AutoDevOps

**Repo --> Settings --> CI/CD --> AutoDevOps --> Expand**

<img src="images/Config_auto_devops.png">

### 2.1.3 ------ Personnaliser le .gitlab-ci.yml pour l'application web statique
