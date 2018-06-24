Feature: Gestion des Skis Défecteux

Scenario Outline: Retrait d'une paire de skis cassée
Given je dispose d'un magasin avec un stock de ski
When retrait du ski <x> du stock
Then le ski x n''est plus présent dans le stock

Examples:
|x|
|1|
|3|

Scenario Outline: Retrait de tous les skis d'une marque donnée
Given je dispose d'un magasin avec un stock de ski
When retrait de tous les skis de la <marque>
Then le stock ne dispose plus de skis de la <marque>

Examples:
|marque|
|"Salomon"|
|"Rossignol"|


