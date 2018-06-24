Feature: US02 Fatiguer

En tant qu'alpiniste
Je souhaite fatiguer
Afin de mettre à jour mon état de forme

Scenario Outline: fatiguer
Given Etant donné un alpiniste avec une forme <f>
When Il tente l'ascension d'une montagne nécessitant un équipement <e> et de difficulté <d>
Then Sa nouvelle forme <nf> est diminuée

Examples:
|f|e|d|nf|
|50|10|20|20|
|30|80|180|0|
