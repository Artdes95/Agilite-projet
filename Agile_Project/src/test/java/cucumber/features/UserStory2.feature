Feature: Gestion du Buget

Scenario Outline: Achat de Skis
Given je dispose d'un magasin avec <n> budget d'achat
When achat d'une paires de skis pour <k> euros
Then le <nouveau> budget doit diminuer en conséquence

Examples:
|n|k|nouveau|
|100|50|50|
|1000|1000|0|

Scenario Outline: Refus d'achat par manque de budget
Given je dispose d'un magasin avec <n> budget d'achat
When achat d'une paires de skis pour <k> euros
Then refus budget insuffisant

Examples:
|n|k|
|100|150|
|0|10|
