Feature: US01 Tenter une ascension

En tant qu'alpiniste
Je souhaite tenter l'ascension 
Afin de la réussir ou de l'échouer

Scenario Outline: réussir une ascension
Given Etant donné un alpiniste avec une forme <f> un poids <p> et une taille <t>
When Il tente l'ascension d'une montagne nécessitant un équipement <e> et de difficulté <d> étant à sa portée
Then Il réussit l'ascension <a> et sa forme <nf> est différente

Examples:
|f|p|t|e|d|a|nf|
|50|80|180|10|20|1|20|
|30|80|180|10|20|1|0|


Scenario Outline: ne pas réussir une ascension
Given Etant donné un alpiniste avec une forme <f> un poids <p> et une taille <t>
When Il tente l'ascension d'une montagne nécessitant un équipement <e> et de difficulté <d> n'étant pas à sa portée
Then Il ne réussit pas l'ascension <a> et sa forme <nf> est nulle

Examples:
|f|p|t|e|d|a|nf|
|50|80|180|10|60|0|0|
|29|80|180|10|30|0|0|
