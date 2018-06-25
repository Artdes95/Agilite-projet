Feature: Relation alpiniste magasin

Scenario: s'abonne au magasin
Given un alpiniste et un magasin
When alpiniste s'abonne au magasin
Then l'alpiniste est abonner au magasin

Scenario Outline: demande des conseils au magasin
Given un alpiniste avec une forme de <f>
When demande conseil a un magasin
Then sa nouvelle forme est <nf>

Examples:
|f|nf|
|30|50|
|90|100|

Scenario: l'alpiniste achete du materiel
Given un alpiniste et un magasin avec un stock
When il achete 1 paire de ski
Then le stock du magasin diminue de un
