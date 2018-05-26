# Youtube Collaborator - README
Projet du cours de Javascript II - Meteor.js, Faculté des Lettres, Université de Lausanne Printemps 2018<br>
Enseignant: Isaac Pante<br>
Tuteur: Loris Rimaz<br>

## Description
Ce site est destiné à celles et ceux qui souhaitent partager leurs découvertes et coups de coeur musicaux. 
Youtube Collaborator permet de créer des playlists simultanés; chacun des participants a la possibilité d'y ajouter ses
musiques préférées afin de les partager avec le groupe de la playlist. Idéal pour des évènements comme par exemple une soirée 
entre amis, le site jouera les musiques ajoutées suivant un système de vote qui permet de faire passer les musiques populaires
d'abord, et les moins appréciés à la fin.

## Fonctionnement
L'utilisateur crée un compte, se connecte et il est ensuite redirectionné vers la page principale, où il a le choix de créer une salle ou en rejoindre une autre déjà existante.<br>
### Créer une salle
Une fois dans la salle l'utilisateur peut commencer à ajouter des musiques, ainsi qu'inviter d'autres utilisateurs à travers le QRCode. Les utilisateurs connectés peuvent voter afin de déplacer les chansons vers le haut et vers le bas, lorsque le classement se fait par "Vote". Le mode "Dernier ajout" élimine cette fonction. Le bouton "Bloquer l'ajout" permet d'arrêter temporairement l'ajout de chansons.
### Rejoindre une salle
En plus de rejoindre une salle simplement en tapant l'URL, les utilisateurs peuvent se servir de cette section afin de scanner le QRCode d'une salle déjà en cours.

#### Note
Par manque de temps, certaines fonctions ne sont pas encore disponibles/fonctionelles.<br>
Le QRCode ne peut pas être généré (appuier sur le bouton QRCode récupére cependant l'URL de la salle)<br>
Le scanner de QRCode n'est pas encore fonctionnel à 100%<br>


## Dépendances 
twbs:bootstrap (style) <br>
kadira:blaze-layout (rendering templates)<br>
kadira:flow-router (routing)<br>
msavin:mongol (devtool)<br>
alanning:roles (roles)<br>
adrianliaw:youtube-iframe-api (youtube)<br>
renaldo:youtube-api (youtube)<br>
jayuda:flx-qrcode (qrcode)<br>
gwendall:auth-client-callbacks (onLogin callbacks)<br>
todda00:friendly-slugs (slugs)<br>
hitchcott:qr-scanner (scanner qrcode)<br>


## Contributeurs
Arnaud Stephan, Fábio Cabral, Oriane Van Uchelen, Noémie Carette
