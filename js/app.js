


var app = angular.module('store', []);

app.controller('Unit_aoe', function($scope, $http) {
  $http.get('data/AgeOfEmpireUnit.json')
	.then(function (response) {
      $scope.myData = response.nom;
  });
});


var unit=[
   {
       "Nom":"Arbaletrier",
       "Type":"Archer"	 ,

       "Nourriture":0,
       "Or":45,
       "Bois":25,
	   
       "PV":40,
       "Armure":0,
       "Armurevsjet":0,
       "Tempsdecreation":27,
       "Vitesse":"M",
       "Attaque":6,
       "Portee":5,
	   
	   "Age":4,
	   "Batiment":"Archerie",
	   "Lignedemire":7,
	   "Vitessedattaque":2.07,
	   "Evolution":"/",
	   
       "Bonus 1":"",
       "Bonus 2":"",
       "Bonus 3":"",
       "Bonus 4":""
   },
    {
       "Nom":"Piquier",
       "Type":"Infanterie",
       "Nourriture":35,
       "Or":0,
       "Bois":25,
       "PV":55,
       "Armure":0,
       "Armure vs jet":0,
       "Tempsdecreation":22,
       "Vitesse":"Moyen",
       "Attaque":4,
       "Portee":0,
       "Bonus 1":"Cavalerie",
       "Bonus 2":"",
       "Bonus 3":"",
       "Bonus 4":"",
	   
	   "Age":3,
	   "Batiment":"Caserne",
	   "Lignedemire":4,
	   "Vitessedattaque":3,
	   "Evolution":"/"
   },
   {
       "Nom":"Archer a plumes",
       "Type":"Archer",
       "Nourriture":0,
       "Or":46,
       "Bois":46,
       "PV":50,
       "Armure":0,
       "Armure vs jet":1,
       "Tempsdecreation":16,
       "Vitesse":"MF",
       "Attaque":5,
       "Portee":5,
       "Bonus 1":"",
       "Bonus 2":"",
       "Bonus 3":"",
       "Bonus 4":"",
	   	   	   	   "Age":3,
	   "Batiment":"Chateau",
	   "Lignedemire":7,
	   "Vitessedattaque":1.9,
	   "Evolution":"Archer a plumes d elite" 
   },{
       "Nom":"Samourai",
       "Type":"Infanterie",
       "Nourriture":60,
       "Or":30,
       "Bois":0,
       "PV":60,
       "Armure":1,
       "Armure vs jet":1,
       "Tempsdecreation":9,
       "Vitesse":"Moyen",
       "Attaque":8,
       "Portee":0,
       "Bonus 1":"Batiments",
       "Bonus 2":"Unite unique",
       "Bonus 3":"",
       "Bonus 4":"",
	   	   	   	   	   "Age":3,
	   "Batiment":"Chateau",
	   "Lignedemire":4,
	   "Vitessedattaque":1.9,
	   "Evolution":"Samurai d elite" 
   },
    {
       "Nom":"Belier de siege",
       "Type":"Arme de siege",
       "Nourriture":0,
       "Or":75,
       "Bois":160,
       "PV":270,
       "Armure":2,
       "Armure vs jet":2,
       "Tempsdecreation":36,
       "Vitesse":"Lent",
       "Attaque":4,
       "Portee":0,
       "Bonus 1":"Batiments",
       "Bonus 2":"Scorpions",
       "Bonus 3":"Trebuchets",
       "Bonus 4":"Mangoneau",
	   
	   "Age":4,
	   "Batiment":"Atelier de siege",
	   "Lignedemire":3,
	   "Vitessedattaque":5,
	   "Evolution":"/"
   },
    {
       "Nom":"Tirailleur",
       "Type":"Archer",
       "Nourriture":25,
       "Or":0,
       "Bois":35,
       "PV":30,
       "Armure":0,
       "Armure vs jet":2,
       "Tempsdecreation":22,
       "Vitesse":"Lent",
       "Attaque":2,
       "Portee":4,
       "Bonus 1":"Lancier",
       "Bonus 2":"Archers",
       "Bonus 3":"",
       "Bonus 4":"",
	   
	   "Age":2,
	   "Batiment":"Archerie",
	   "Lignedemire":6,
	   "Vitessedattaque":3.04,
	   "Evolution":"Tirailleur d elite"
   },
   {
       "Nom":"Lancier",
       "Type":"Infanterie",
       "Nourriture":35,
       "Or":0,
       "Bois":25,
       "PV":45,
       "Armure":0,
       "Armure vs jet":0,
       "Tempsdecreation":22,
       "Vitesse":"Moyen",
       "Attaque":3,
       "Portee":0,
       "Bonus 1":"Cavalerie",
       "Bonus 2":"",
       "Bonus 3":"",
       "Bonus 4":"",
	   
	   	   "Age":2,
	   "Batiment":"Caserne",
	   "Lignedemire":4,
	   "Vitessedattaque":3,
	   "Evolution":"Piquier"
   },
   {
       "Nom":"Tarkan",
       "Type":"Cavalerie",
       "Nourriture":60,
       "Or":60,
       "Bois":0,
       "PV":90,
       "Armure":1,
       "Armure vs jet":2,
       "Tempsdecreation":14,
       "Vitesse":"Rapide",
       "Attaque":7,
       "Portee":0,
       "Bonus 1":"Batiments",
       "Bonus 2":"",
       "Bonus 3":"",
       "Bonus 4":"",
	   	    "Age":3,
	   "Batiment":"Chateau",
	   "Lignedemire":5,
	   "Vitessedattaque":2.14,
	   "Evolution":"Tarkan d elite" 
 
	   
   },
   {
       "Nom":"Chevalier teutonique ",
       "Type":"Infanterie",
       "Nourriture":85,
       "Or":40,
       "Bois":0,
       "PV":70,
       "Armure":5,
       "Armure vs jet":2,
       "Tempsdecreation":12,
       "Vitesse":"Lent",
       "Attaque":12,
       "Portee":0,
       "Bonus 1":"Batiments",
       "Bonus 2":"",
       "Bonus 3":"",
       "Bonus 4":"",
	   
	    "Age":3,
	   "Batiment":"Chateau",
	   "Lignedemire":5,
	   "Vitessedattaque":2,
	   "Evolution":"Chevalier Teutonique d elite" 
 
   }
];

var civ=[
	{
		"Nom" :"Britanniques",
		"Specialite" : "Archers à pied",
		"UniteUnique1" : "Longbowman",
		"Technologie1" : "Yeomen",
		"Technologie2" : "Warwolf",
		"Merveille" : "Aachen Cathedral",
		"BonusEquipe" : "Archers tirent 20% plus vite",
		"Bonus1civilisation" : "Centre Ville coûte 50% moins de bois après avoir atteint l'âge Castle",
		"Bonus2civilisation" : "Les archers à pied ont une portée de +1/+2 dans le Château / Âge Impérial",
		"Bonus3civilisation" : "Les bergers travaillent 25% plus vite",
	},

	{
		"Nom" :"Byzantines",
		"Specialite" :"Défense",
		"UniteUnique1" : "Cataphract",
		"Technologie1" : "Feu grec",
		"Technologie2" : "Logistica",
		"Merveille" : "Hagia Sophia",
		"BonusEquipe" : "Les moines guérissent +50% plus vite",
		"Bonus1civilisation" : "Bâtiments ont +10%/ + 20%/30%/ +40% HP dans le Noir/Féodal/Château/Imperial Age",
		"Bonus2civilisation" : "Chameaux , Tirailleurs et lanciers sont 25% moins cher",
		"Bonus3civilisation" : "Navires de feu attaquent 20% plus rapide",
		"Bonus4civilisation" : "Faire progresser l' époque impériale est 33% moins cher",
		"Bonus5civilisation" : "Tour de garde est gratuite",
	},

	{
		"Nom" :"Celtes",
		"Specialite" :"Infanterie",
		"UniteUnique1" : "Woad Raider",
		"Technologie1" : "Stronghold",
		"Technologie2" : "Celtica Furor",
		"Merveille" : "Rock of Cashel",
		"BonusEquipe" : "Ateliers de siège travaillent 20% plus rapide",
		"Bonus1civilisation" : "Infanterie se déplace 15% plus rapide",
		"Bonus2civilisation" : "Les bûcherons travaillent 15% plus vite",
		"Bonus3civilisation" : "Siege armes feu 20% plus rapide",
		"Bonus4civilisation" : "Herdables au sein de l' unité Celtic de Lign of Sight ne peuvent pas être volés",
	},
];

var bat=[
   {
       "Nom":"Caserne",
       "Bois":175,
	   "Commentaire":"Utilisee pour creer et ameliorer l'infanterie.",
	   
       "PV":1200,
	   "Attaque":0,
       "Armure":0,
       "Armurevsjet":0,
       "Portee":0,
	   "Age":1
   },
   {
       "Nom":"Port",
       "Bois":150,
	   "Commentaire":"Utilisee pour construire et ameliorer les navire, recvoir la nourriture des bateaux de peche et commercer avec les autres joueurs par voie maritime.",
	   
       "PV":1800,
	   "Attaque":0,
       "Armure":0,
       "Armurevsjet":7,
       "Portee":0,
	   "Age":1
   },
   {
       "Nom":"Poste avance",
       "Bois":25,
	   "Pierre":5,
	   "Commentaire":"Point dobservation fixe qui fournit un avertissement lors d'activite ennemis dans les environs. Les postes avances ne vous permettent pas d'attaquer ou de rassembler vos unites a l'interieur.",
	   
       "PV":500,
	   "Attaque":0,
       "Armure":0,
       "Armurevsjet":0,
       "Portee":0,
	   "Age":1
   },
 ];
 
 var tech=[
	 {
		"Nom": "Ville de surveillance",
		 "Cout": "75 nourritures",
		"Description": "Bâtiment LOS +4"
	},
	{
		"Nom": "Patrouille de la ville",
		"Cout": "300 nourritures 200 or",
		"Description": "Bâtiment LOS +4"
	},
	{
		"Nom": "Grue de tapis roulant",
		"Cout": "300 nourritures 200 bois",
		"Description": "Les villageois construisent 20% plus vite"
	},
	{
		"Nom": "Maçonnerie",
		"Cout": "150 nourritures 175 bois",
		"Description": "Bâtiments + 10% HP et + 1 / + 1 armure"
	},
	{
		"Nom": "Architecture",
		"Cout": "300 nourritures 200 bois",
		"Description": "Bâtiments + 10% HP et + 1 / + 1 armure"
	},
 ];



app.controller('Batiment_aoe', function($scope) {
      $scope.myData = bat;
});

app.controller('Civilisation_aoe', function($scope) {
      $scope.myData = civ;
});

app.controller('Technologie_aoe', function($scope) {
      $scope.myData = tech;
});