Feature: US01 Tenter une ascension

Scenario Outline: réussir une ascension
Given Etant donné un alpiniste avec une forme <f> un poids <p> et une taille <t>
When Il tente l'ascension d'une montagne nécessitant un équipement <e> et de difficulté <d> étant à sa portée
Then Il réussi l'ascension <a> et sa forme <nf> en diminuée de <d> et <e>

Examples:
|f|p|t|e|d|a|nf|
|50|80|180|10|20|1|20|
|30|80|180|10|20|1|0|

Scenario Outline: ne pas réussir une ascension
Given Etant donné un alpiniste avec une forme <f> un poids <p> et une taille <t>
When Il tente l'ascension d'une montagne nécessitant un équipement <e> et de difficulté <d> n'étant pas à sa portée
Then Il ne réussi pas l'ascension <a> et sa forme <nf> est à 0

Examples:
|f|p|t|e|d|a|nf|
|50|80|180|10|60|0|0|
|29|80|180|10|20|0|0|
