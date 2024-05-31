# TodoList - Docker - Jonathan M.

## Installation
```docker-compose up --build```

- Executer cette commande en cas de problème de compliation

```node check-services.js```

## Technologies
|Technologie|Langage|FrameWork|
|---|---|---|
|FrontEnd|JavaScript X|React & Vite|
|BackEnd|Type Script|AdonisJS|
|Hebergeur|PHP|Apache2.4|
|Base de données|SQL|MariaDB|

## Access
|Technologie|PORT|
|---|---|
|FrontEnd|8080|
|BackEnd|3300|
|Apache2.4|80|
|MariaDB|3306|

### Connexion
* URL = http://localhost:80

# État actuel (non abouti)
- Le docker compose se complie bien mais ne récupère pas mon code sur le port 80 ni le 8080
- Le ```old_docker-compose.yml``` n'incluait pas les Dockerfile mais fonctionnait 

## Solution à apporter
- Pour faire fonctionner en partie le projet il suffit de faire les commandes manuelle dans chaque techno et laisser tourner la base de donnée sur le port 3306
- aller dans le /frontend : ```cd /frontend```, mettre à jour les données relative par rapport au node_modules : ```npm install``` et faire la commande : ```npm run dev```
- revenir dans le fichier source : ```cd ..```, aller dans le /backend : ```cd /backend```, mettre à jour les données relative par rapport au node_modules : ```npm install``` et  et faire les commandes : ```node ace migration:run``` & ```npm run dev```

### Remerciements
Merci à vous pour la claireté du cours et l'approce d'une technologie que je n'avais pas l'habitude d'utiliser
Merci à Lucky MARTY pour l'aide fournit durant l'évaluation
Merci à Mathieu VIDOT pour l'aide fournit également durant l'avluation 
