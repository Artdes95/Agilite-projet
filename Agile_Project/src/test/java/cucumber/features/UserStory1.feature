Feature: Gestion des Stocks

Scenario Outline: Achat de n paire de Ski
Given je dispose d'un magasin avec <s> ski en stock
When achat de <n> paire de ski
Then le <nombre> de ski en stock doit augmenter en consequence

Examples:
|s|n|nombre|
|1|2|3|
|3|5|8|
|10|100|110|

Scenario Outline: Vente d'une paire de ski avec fixation
Given je dispose d'un magasin avec <s> ski et <f> fixations en stock
When vente de une paire de ski avec fixation
Then le <nouveauNombreSki> et le <nouveauNombreFix> en stock doivent baisser de un

Examples:
|s|f|nouveauNombreSki|nouveauNombreFix|
|1|1|0|0|
|3|5|2|4|




