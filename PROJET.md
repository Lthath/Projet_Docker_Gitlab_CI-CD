# Projet : Docker et GitLab CI/CD

## Objectifs

Ce projet a pour but de mettre en pratique vos connaissances sur Docker et GitLab CI/CD. Vous travaillerez en binôme pour réaliser deux parties distinctes évaluant respectivement votre compréhension de Docker et de GitLab.
Les deux parties doivent se trouver dans le même dépôt Gitlab puisque la seconde partie consiste à faire la CI/CD de la première. Chacune des parties donnera lieu à une note, pour les matières CONTAINERS et CI/CD

👀 Pour assurer une implication de tous les partipants, je vérifierai qu'une partie significative des commits a été produite par chacun, et ça dans chacune des parties.

⏱ Vous avez un mois pour réaliser ce projet.

👩‍💻 Le projet est l'occasion d'aller un peu plus loin que ce que nous avons fait en cours. Vous allez donc découvrir de nouvelles notions qui vont venir étendre ce qu'on a vu ensemble. Côté Docker vous apprendrez à optimiser vos images et côté Gitlab ce sera la découverte d'AutoDevOps, des Gitlab Pages et on approfondira les environnements.

⚠ Pour que je puisse vous noter, noubliez pas de m'ajouter en tant que **mainteneur** de votre dépôt ! Mon utilisateur est @tsaquet. ⚠

## Partie 1 : Docker 🐋

### Exercice 1 : Une application statique dockerisée

#### Tâches :

1. Créer une application web statique simple :
   - Site statique mais qui nécessite une phase de build (il y a des dizaines de frameworks simples qui permettent de faire ça, choisissez votre préféré), en HTML CSS JS, sans portion dynamique calculé côté serveur. (ça devra se déployer sur des Gitlab Pages à la fin.)
   - Le site statique doit présenter un sujet de votre choix (centre d'intérêt, technologie, à vous de décider)
   - Le site doit avoir une partie de son contenu modifiable en utilisant un volume Docker et une partie embarquée dans l'image à l'aide d'un Dockerfile.
2. Rédiger un Dockerfile pour cette application.
3. Construire l'image Docker à partir du Dockerfile.
4. Démarrer un conteneur Docker basé sur cette image pour tester localement.

#### Livraison :

1. Code de l'application web statique.
2. Le Dockerfile correspondant.
3. Un guide dans le README.md expliquant comment construire et lancer le conteneur. Le guide doit aussi expliquer comment utiliser les différentes options, en particulier un volume pour obtenir le résultat demandé plus haut.

#### Critères d'évaluation :

- Utilisation correcte du Dockerfile.
- Fonctionnement adéquat de l'application depuis le conteneur.
- Documentation claire du processus de build et des commandes utilisées.

### Exercice 2 : Docker Multistage Build

**Objectif :** Créer une image Docker optimisée pour une application web statique en utilisant un Dockerfile multistage.

C'est une notion que nous n'avons pas vue en cours, vous allez devoir vous documenter pour ça. Vous devez trouver :

- L'intérêt d'un tel build
- Selectionner ce qui vous semble pertinent pour votre projet
- L'appliquer

#### Tâches :

1. Écrire un Dockerfile multistage pour l'application construite dans l'exercice 1.
2. Construire l'image Docker et tester son exécution localement.

#### Livraison :

1. Un nouveau Dockerfile pour répondre à cette partie.
2. Un guide dans le README.md expliquant comment construire et lancer le conteneur.

#### Critères d'évaluation :

- Utilisation correcte des multistage builds pour optimiser la taille de l'image.
- Fonctionnement adéquat de l'application depuis le conteneur.
- Documentation claire du processus de build et des commandes utilisées.

### Exercice 3 : Traefik & Docker Compose

**Objectif :** Mettre à disposition le site que vous avez créé derrière le reverse-proxy traefik, via un fichier docker compose

Traefik est un reverse proxy que nous n'avons pas vu en cours, il est conçu pour fonctionner parfaitement avec Docker, en particulier dans le cas de Docker Compose.

#### Tâches :

1. Ecrire le fichier Docker Compose qui lance Traefik et qui donne accès à votre site web.

#### Livraison:

1. Le fichier docker-compose.yml
2. Un guide dans le README.md expliquant comment lancer les conteneurs.

#### Critères d'évaluation :

- Le mode d'emploi doit permettre de démarrer le projet simplement
- A l'aide de ce mode d'emploi, un `docker compose up -d` doit lancer les conteneurs configurés correctement
- La pertinence des choix faits pour Traefik

## Partie 2: GitLab CI/CD 🦊

### Exercice 1 : Intégration et Déploiement Continu avec AutoDevOps

**Objectif :** Configurer un pipeline d'intégration et de déploiement continu (CI/CD) pour l'application web statique en utilisant AutoDevOps de GitLab. L'objectif est d'utiliser un maximum des fonctions d'AutoDevOps dans la limite de l'infrastructure dont vous disposez (c'est à dire aucune autre infrastructure que votre machine.)

Nous n'avons pas manipulé AutoDevOps en cours, il vous faudra donc vous documenter et comprendre comment le mettre en oeuvre et le personnaliser pour le projet.

#### Tâches :

1. Configurer un repository GitLab avec AutoDevOps.
2. Personnaliser le `.gitlab-ci.yml` pour l'application web statique.
3. Déployer l'application dans un environnement de staging.
4. Documenter le processus AutoDevOps et les choix de configuration.

#### Livraison :

- Le fichier `.gitlab-ci.yml`.
- L'exécution des différents jobs / pipeline visibles dans le projet
- Documentation technique pour chaque partie du projet, incluant des captures d'écran et des explications des choix techniques.

#### Critères d'évaluation :

- Configuration réussie d'AutoDevOps.
- Personnalisation adéquate du pipeline CI/CD.
- Déploiement réussi en staging.
- Documentation complète et explicative du pipeline et des étapes de déploiement.

### Exercice 2 : Déploiement en Staging et Production

**Objectif :** Utiliser GitLab CI/CD pour déployer l'application web statique en environnements de staging et production (GitLab Pages).

#### Tâches :

1. Compléter le `.gitlab-ci.yml` pour inclure des stages de déploiement distincts pour le staging et la production.
2. Configurer le déploiement automatique sur GitLab Pages pour la production.
3. Vérifier le fonctionnement de l'application dans les deux environnements.
4. Documenter les étapes et configurations pour les déploiements en staging et en production.

#### Livraison :

- Le fichier `.gitlab-ci.yml`.
- L'exécution des différents jobs / pipeline visibles dans le projet
- Documentation technique pour chaque partie du projet, incluant des captures d'écran et des explications des choix techniques.

#### Critères d'évaluation :

- Gestion efficace des environnements de staging et de production dans le pipeline CI/CD.
- Déploiement fonctionnel et accessible de l'application en production sur GitLab Pages.
- Documentation claire détaillant le déploiement dans différents environnements.

### Exercice 3 : Vulnérabilités ?

**Objectif :** Mettre en place Owasp ZAP pour scanner les vulnérabilités potentielles de votre site web. Bloquer la CI en cas de vulnérabilité.

#### Tâches :

1. A l'aide des conteneurs Docker fournis par Owasp ZAP, mettre en place un scanner de vulnérabilité sur votre site web.
2. Récupérer les résultats dans les artifacts.
3. Utiliser les artifacts dans un job suivant pour bloquer la CI si des vulnérabilités sont détectées.

#### Livraison :

- Le fichier `.gitlab-ci.yml`.
- Des exemples de pipelines ayant réussi et de pipelines quant échoué à cause du scan des vulnérabilités. Le message de commit doit être explicite !
- La documentation doit indiquer comment trouver ces commits (afin de rendre la correction plus rapide !)

#### Critères d'évaluation :

- La pertinence des cas testés (réussites et echecs)
- Documentation claire détaillant où on peut trouver les résultats en question.

## Évaluation

Votre projet sera évalué sur la qualité technique de votre mise en œuvre, la clarté de votre documentation, et votre capacité à appliquer les concepts de Docker et de GitLab CI/CD de manière pratique et professionnelle.
