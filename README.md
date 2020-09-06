# API Garage

API Garage est un projet réalisé avec le framework [Nest](https://github.com/nestjs/nest).

## Pré-requis
- Node.js
- NPM
- MySQL

## Installation

```bash
$ npm install
$ npm run start
```

Il vous faudra créer un fichier .env à la racine du projet avec ces variables :
```
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```
La variable "PORT" étant le port sur lequel lancer le projet et les variables commençant par "DB_" étant celles de connexion à la base de données MySQL.

## Utilisation
### Users
- ```/users``` : [GET] affiche tout les utilisateurs
- ```/users``` : [POST] ajoute un utilisateur<br/>
Paramètres:
```JSON
{
    "user": {
        "lastname": "nom",
        "firstname": "prenom",
        "vehicules": [],
    }
}
```
- ```/users``` : [PUT] met à jour l'utilisateur<br/>
Paramètres:
```JSON
{
    "user": {
        "id": id,
        "lastname": "nom",
        "firstname": "prenom",
        "vehicules": [],
    }
}
```
- ```/users/<id>``` : [GET] affiche l'utilisateur
- ```/users/<id>``` : [DELETE] supprime l'utilisateur

Note : "vehicules" est un paramètre optionnel contenant une liste d'objets en JSON. 

### Vehicules
- ```/vehicules``` : [GET] affiche tout les vehicules
- ```/vehicules``` : [POST] ajoute un vehicule<br/>
Paramètres:
```JSON
{
    "vehicule" : {
        "marque": "marque",
        "modeleNum": "numéro de modèle",
    }
}
```
- ```/vehicules``` : [PUT] met à jour le vehicule<br/>
Paramètres:
```JSON
{
    "vehicule" : {
        "id": id,
        "marque": "marque",
        "modeleNum": "numéro de modèle",
    }
}
```
- ```/vehicules/<id>``` : [GET] affiche le vehicule
- ```/vehicules/<id>``` : [DELETE] supprime le vehicule