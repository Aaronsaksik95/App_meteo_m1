# App_meteo_m1

Cette Application a été codé sur la plateforme IOS.


## Une application de météo pour toutes les villes de France:


  - Un design et des fonctionnalitées inspiré au maximum de l'application météo d'apple.
  - Des données récupérées de l'api "Météo Concept".
  - Toutes les descriptifs méteorologiques du moment, les images de fonds et les emojis de météo 
    stocker dans un Objet Weather et récuperer en fonction de la key "weather" envoyé par l'api.
    Cela permet le design le plus ressemblant possible de App Apple.
  - Le component intitulé "infoDay" qui est cencé indiqué la météo heure par heure à dû 
    être revisité car l'api en version gratuite ne proposé que des tranches horaires de 
    3 heures donc j'ai dû doubler le map pour plus de ressemblance.
  
## Fonctionnalitées de l'application:

  - Recherche de ville de France dynamique.
  - Page de météo de la ville en question sur le moment et sur 14 jours.
  - Possibilité d'ajouter cette ville dans ça WishList.
  - Possibilité de la supprimer avec un swiper button.

Une petite application avec peu de fonctionnalitées mais ressemblante à l'original.

### Une petite erreur que j'ai compris mais que je n'arrive pas à regler car j'ai besoin de mon scrollView:

VirtualizedLists should never be nested inside plain ScrollViews with the same 
orientation because it can break windowing and other functionality

### Etapes de lanceme :

```git clone project```
```npm install```
```cd ios```
```pod install```
```cd ..```
```npm run ios```
```pod run start```
