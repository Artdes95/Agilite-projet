$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ascension.feature");
formatter.feature({
  "line": 1,
  "name": "US01 Tenter une ascension",
  "description": "\nEn tant qu\u0027alpiniste\nJe souhaite tenter l\u0027ascension \nAfin de la réussir ou de l\u0027échouer",
  "id": "us01-tenter-une-ascension",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "réussir une ascension",
  "description": "",
  "id": "us01-tenter-une-ascension;réussir-une-ascension",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Etant donné un alpiniste avec une forme \u003cf\u003e un poids \u003cp\u003e et une taille \u003ct\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement \u003ce\u003e et de difficulté \u003cd\u003e étant à sa portée",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Il réussit l\u0027ascension \u003ca\u003e et sa forme \u003cnf\u003e est différente",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "us01-tenter-une-ascension;réussir-une-ascension;",
  "rows": [
    {
      "cells": [
        "f",
        "p",
        "t",
        "e",
        "d",
        "a",
        "nf"
      ],
      "line": 13,
      "id": "us01-tenter-une-ascension;réussir-une-ascension;;1"
    },
    {
      "cells": [
        "50",
        "80",
        "180",
        "10",
        "20",
        "1",
        "20"
      ],
      "line": 14,
      "id": "us01-tenter-une-ascension;réussir-une-ascension;;2"
    },
    {
      "cells": [
        "30",
        "80",
        "180",
        "10",
        "20",
        "1",
        "0"
      ],
      "line": 15,
      "id": "us01-tenter-une-ascension;réussir-une-ascension;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "réussir une ascension",
  "description": "",
  "id": "us01-tenter-une-ascension;réussir-une-ascension;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Etant donné un alpiniste avec une forme 50 un poids 80 et une taille 180",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement 10 et de difficulté 20 étant à sa portée",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Il réussit l\u0027ascension 1 et sa forme 20 est différente",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 40
    },
    {
      "val": "80",
      "offset": 52
    },
    {
      "val": "180",
      "offset": 69
    }
  ],
  "location": "StepAscension.etant_donné_un_alpiniste_avec_une_forme_un_poids_et_une_taille(int,int,int)"
});
formatter.result({
  "duration": 146112807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    },
    {
      "val": "20",
      "offset": 82
    }
  ],
  "location": "StepAscension.il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté_étant_à_sa_portée(int,int)"
});
formatter.result({
  "duration": 177767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "20",
      "offset": 37
    }
  ],
  "location": "StepAscension.il_réussit_l_ascension_et_sa_forme_est_différente(int,int)"
});
formatter.result({
  "duration": 5250961,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "réussir une ascension",
  "description": "",
  "id": "us01-tenter-une-ascension;réussir-une-ascension;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Etant donné un alpiniste avec une forme 30 un poids 80 et une taille 180",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement 10 et de difficulté 20 étant à sa portée",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Il réussit l\u0027ascension 1 et sa forme 0 est différente",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 40
    },
    {
      "val": "80",
      "offset": 52
    },
    {
      "val": "180",
      "offset": 69
    }
  ],
  "location": "StepAscension.etant_donné_un_alpiniste_avec_une_forme_un_poids_et_une_taille(int,int,int)"
});
formatter.result({
  "duration": 2007996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    },
    {
      "val": "20",
      "offset": 82
    }
  ],
  "location": "StepAscension.il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté_étant_à_sa_portée(int,int)"
});
formatter.result({
  "duration": 126584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "0",
      "offset": 37
    }
  ],
  "location": "StepAscension.il_réussit_l_ascension_et_sa_forme_est_différente(int,int)"
});
formatter.result({
  "duration": 142928,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "ne pas réussir une ascension",
  "description": "",
  "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Etant donné un alpiniste avec une forme \u003cf\u003e un poids \u003cp\u003e et une taille \u003ct\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement \u003ce\u003e et de difficulté \u003cd\u003e n\u0027étant pas à sa portée",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Il ne réussit pas l\u0027ascension \u003ca\u003e et sa forme \u003cnf\u003e est nulle",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension;",
  "rows": [
    {
      "cells": [
        "f",
        "p",
        "t",
        "e",
        "d",
        "a",
        "nf"
      ],
      "line": 24,
      "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension;;1"
    },
    {
      "cells": [
        "50",
        "80",
        "180",
        "10",
        "60",
        "0",
        "0"
      ],
      "line": 25,
      "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension;;2"
    },
    {
      "cells": [
        "29",
        "80",
        "180",
        "10",
        "30",
        "0",
        "0"
      ],
      "line": 26,
      "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "ne pas réussir une ascension",
  "description": "",
  "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Etant donné un alpiniste avec une forme 50 un poids 80 et une taille 180",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement 10 et de difficulté 60 n\u0027étant pas à sa portée",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Il ne réussit pas l\u0027ascension 0 et sa forme 0 est nulle",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 40
    },
    {
      "val": "80",
      "offset": 52
    },
    {
      "val": "180",
      "offset": 69
    }
  ],
  "location": "StepAscension.etant_donné_un_alpiniste_avec_une_forme_un_poids_et_une_taille(int,int,int)"
});
formatter.result({
  "duration": 207653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    },
    {
      "val": "60",
      "offset": 82
    }
  ],
  "location": "StepAscension.il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté_n_étant_pas_à_sa_portée(int,int)"
});
formatter.result({
  "duration": 148085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "StepAscension.il_ne_réussit_pas_l_ascension_et_sa_forme_est_nulle(int,int)"
});
formatter.result({
  "duration": 123969,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "ne pas réussir une ascension",
  "description": "",
  "id": "us01-tenter-une-ascension;ne-pas-réussir-une-ascension;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Etant donné un alpiniste avec une forme 29 un poids 80 et une taille 180",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement 10 et de difficulté 30 n\u0027étant pas à sa portée",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Il ne réussit pas l\u0027ascension 0 et sa forme 0 est nulle",
  "matchedColumns": [
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 40
    },
    {
      "val": "80",
      "offset": 52
    },
    {
      "val": "180",
      "offset": 69
    }
  ],
  "location": "StepAscension.etant_donné_un_alpiniste_avec_une_forme_un_poids_et_une_taille(int,int,int)"
});
formatter.result({
  "duration": 186385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    },
    {
      "val": "30",
      "offset": 82
    }
  ],
  "location": "StepAscension.il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté_n_étant_pas_à_sa_portée(int,int)"
});
formatter.result({
  "duration": 139922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "StepAscension.il_ne_réussit_pas_l_ascension_et_sa_forme_est_nulle(int,int)"
});
formatter.result({
  "duration": 125026,
  "status": "passed"
});
formatter.uri("Fatigue.feature");
formatter.feature({
  "line": 1,
  "name": "US02 Fatiguer",
  "description": "\nEn tant qu\u0027alpiniste\nJe souhaite fatiguer\nAfin de mettre à jour mon état de forme",
  "id": "us02-fatiguer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "fatiguer",
  "description": "",
  "id": "us02-fatiguer;fatiguer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Etant donné un alpiniste avec une forme \u003cf\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement \u003ce\u003e et de difficulté \u003cd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Sa nouvelle forme \u003cnf\u003e est diminuée",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "us02-fatiguer;fatiguer;",
  "rows": [
    {
      "cells": [
        "f",
        "e",
        "d",
        "nf"
      ],
      "line": 13,
      "id": "us02-fatiguer;fatiguer;;1"
    },
    {
      "cells": [
        "50",
        "10",
        "20",
        "20"
      ],
      "line": 14,
      "id": "us02-fatiguer;fatiguer;;2"
    },
    {
      "cells": [
        "30",
        "80",
        "180",
        "0"
      ],
      "line": 15,
      "id": "us02-fatiguer;fatiguer;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "fatiguer",
  "description": "",
  "id": "us02-fatiguer;fatiguer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Etant donné un alpiniste avec une forme 50",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement 10 et de difficulté 20",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Sa nouvelle forme 20 est diminuée",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 40
    }
  ],
  "location": "StepFatigue.etant_donné_un_alpiniste_avec_une_forme(int)"
});
formatter.result({
  "duration": 193863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 62
    },
    {
      "val": "20",
      "offset": 82
    }
  ],
  "location": "StepFatigue.il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté(int,int)"
});
formatter.result({
  "duration": 182522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 18
    }
  ],
  "location": "StepFatigue.sa_nouvelle_forme_en_diminuée(int)"
});
formatter.result({
  "duration": 280894,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "fatiguer",
  "description": "",
  "id": "us02-fatiguer;fatiguer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Etant donné un alpiniste avec une forme 30",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Il tente l\u0027ascension d\u0027une montagne nécessitant un équipement 80 et de difficulté 180",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Sa nouvelle forme 0 est diminuée",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 40
    }
  ],
  "location": "StepFatigue.etant_donné_un_alpiniste_avec_une_forme(int)"
});
formatter.result({
  "duration": 124710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 62
    },
    {
      "val": "180",
      "offset": 82
    }
  ],
  "location": "StepFatigue.il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté(int,int)"
});
formatter.result({
  "duration": 139663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepFatigue.sa_nouvelle_forme_en_diminuée(int)"
});
formatter.result({
  "duration": 113392,
  "status": "passed"
});
formatter.uri("UserStory1.feature");
formatter.feature({
  "line": 1,
  "name": "Gestion des Stocks",
  "description": "",
  "id": "gestion-des-stocks",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Achat de n paire de Ski",
  "description": "",
  "id": "gestion-des-stocks;achat-de-n-paire-de-ski",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec \u003cs\u003e ski en stock",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat de \u003cn\u003e paire de ski",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le \u003cnombre\u003e de ski en stock doit augmenter en consequence",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "gestion-des-stocks;achat-de-n-paire-de-ski;",
  "rows": [
    {
      "cells": [
        "s",
        "n",
        "nombre"
      ],
      "line": 9,
      "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;1"
    },
    {
      "cells": [
        "1",
        "2",
        "3"
      ],
      "line": 10,
      "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;2"
    },
    {
      "cells": [
        "3",
        "5",
        "8"
      ],
      "line": 11,
      "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;3"
    },
    {
      "cells": [
        "10",
        "100",
        "110"
      ],
      "line": 12,
      "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Achat de n paire de Ski",
  "description": "",
  "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec 1 ski en stock",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat de 2 paire de ski",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le 3 de ski en stock doit augmenter en consequence",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "GestionDesStock.je_dispose_d_un_magasin_avec_ski_en_stock(int)"
});
formatter.result({
  "duration": 183046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "GestionDesStock.achat_de_paire_de_ski(int)"
});
formatter.result({
  "duration": 110378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 3
    }
  ],
  "location": "GestionDesStock.le_de_ski_en_stock_doit_augmenter_en_consequence(int)"
});
formatter.result({
  "duration": 94066,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Achat de n paire de Ski",
  "description": "",
  "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec 3 ski en stock",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat de 5 paire de ski",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le 8 de ski en stock doit augmenter en consequence",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "GestionDesStock.je_dispose_d_un_magasin_avec_ski_en_stock(int)"
});
formatter.result({
  "duration": 89292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "GestionDesStock.achat_de_paire_de_ski(int)"
});
formatter.result({
  "duration": 91535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 3
    }
  ],
  "location": "GestionDesStock.le_de_ski_en_stock_doit_augmenter_en_consequence(int)"
});
formatter.result({
  "duration": 101018,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Achat de n paire de Ski",
  "description": "",
  "id": "gestion-des-stocks;achat-de-n-paire-de-ski;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec 10 ski en stock",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat de 100 paire de ski",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le 110 de ski en stock doit augmenter en consequence",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 29
    }
  ],
  "location": "GestionDesStock.je_dispose_d_un_magasin_avec_ski_en_stock(int)"
});
formatter.result({
  "duration": 172583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "GestionDesStock.achat_de_paire_de_ski(int)"
});
formatter.result({
  "duration": 165959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "110",
      "offset": 3
    }
  ],
  "location": "GestionDesStock.le_de_ski_en_stock_doit_augmenter_en_consequence(int)"
});
formatter.result({
  "duration": 104084,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Vente d\u0027une paire de ski avec fixation",
  "description": "",
  "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "je dispose d\u0027un magasin avec \u003cs\u003e ski et \u003cf\u003e fixations en stock",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "vente de une paire de ski avec fixation",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "le \u003cnouveauNombreSki\u003e et le \u003cnouveauNombreFix\u003e en stock doivent baisser de un",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation;",
  "rows": [
    {
      "cells": [
        "s",
        "f",
        "nouveauNombreSki",
        "nouveauNombreFix"
      ],
      "line": 20,
      "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "0",
        "0"
      ],
      "line": 21,
      "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation;;2"
    },
    {
      "cells": [
        "3",
        "5",
        "2",
        "4"
      ],
      "line": 22,
      "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Vente d\u0027une paire de ski avec fixation",
  "description": "",
  "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "je dispose d\u0027un magasin avec 1 ski et 1 fixations en stock",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "vente de une paire de ski avec fixation",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "le 0 et le 0 en stock doivent baisser de un",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    },
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "GestionDesStock.je_dispose_d_un_magasin_avec_ski_et_fixations_en_stock(int,int)"
});
formatter.result({
  "duration": 1043904,
  "status": "passed"
});
formatter.match({
  "location": "GestionDesStock.vente_de_une_paire_de_ski_avec_fixation()"
});
formatter.result({
  "duration": 184234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 3
    },
    {
      "val": "0",
      "offset": 11
    }
  ],
  "location": "GestionDesStock.le_et_le_en_stock_doivent_baisser_de_un(int,int)"
});
formatter.result({
  "duration": 130985,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Vente d\u0027une paire de ski avec fixation",
  "description": "",
  "id": "gestion-des-stocks;vente-d\u0027une-paire-de-ski-avec-fixation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "je dispose d\u0027un magasin avec 3 ski et 5 fixations en stock",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "vente de une paire de ski avec fixation",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "le 2 et le 4 en stock doivent baisser de un",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    },
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "GestionDesStock.je_dispose_d_un_magasin_avec_ski_et_fixations_en_stock(int,int)"
});
formatter.result({
  "duration": 178816,
  "status": "passed"
});
formatter.match({
  "location": "GestionDesStock.vente_de_une_paire_de_ski_avec_fixation()"
});
formatter.result({
  "duration": 55987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 3
    },
    {
      "val": "4",
      "offset": 11
    }
  ],
  "location": "GestionDesStock.le_et_le_en_stock_doivent_baisser_de_un(int,int)"
});
formatter.result({
  "duration": 157168,
  "status": "passed"
});
formatter.uri("UserStory2.feature");
formatter.feature({
  "line": 1,
  "name": "Gestion du Buget",
  "description": "",
  "id": "gestion-du-buget",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Achat de Skis",
  "description": "",
  "id": "gestion-du-buget;achat-de-skis",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec \u003cn\u003e budget d\u0027achat",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat d\u0027une paires de skis pour \u003ck\u003e euros",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le \u003cnouveau\u003e budget doit diminuer en conséquence",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "gestion-du-buget;achat-de-skis;",
  "rows": [
    {
      "cells": [
        "n",
        "k",
        "nouveau"
      ],
      "line": 9,
      "id": "gestion-du-buget;achat-de-skis;;1"
    },
    {
      "cells": [
        "100",
        "50",
        "50"
      ],
      "line": 10,
      "id": "gestion-du-buget;achat-de-skis;;2"
    },
    {
      "cells": [
        "1000",
        "1000",
        "0"
      ],
      "line": 11,
      "id": "gestion-du-buget;achat-de-skis;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Achat de Skis",
  "description": "",
  "id": "gestion-du-buget;achat-de-skis;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec 100 budget d\u0027achat",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat d\u0027une paires de skis pour 50 euros",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le 50 budget doit diminuer en conséquence",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "GestionDuBudget.je_dispose_d_un_magasin_avec_budget_d_achat(int)"
});
formatter.result({
  "duration": 293499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 32
    }
  ],
  "location": "GestionDuBudget.achat_d_une_paires_de_skis_pour_euros(int)"
});
formatter.result({
  "duration": 119193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 3
    }
  ],
  "location": "GestionDuBudget.le_budget_doit_diminuer_en_conséquence(int)"
});
formatter.result({
  "duration": 77671,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Achat de Skis",
  "description": "",
  "id": "gestion-du-buget;achat-de-skis;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec 1000 budget d\u0027achat",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "achat d\u0027une paires de skis pour 1000 euros",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le 0 budget doit diminuer en conséquence",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 29
    }
  ],
  "location": "GestionDuBudget.je_dispose_d_un_magasin_avec_budget_d_achat(int)"
});
formatter.result({
  "duration": 131537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 32
    }
  ],
  "location": "GestionDuBudget.achat_d_une_paires_de_skis_pour_euros(int)"
});
formatter.result({
  "duration": 104311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 3
    }
  ],
  "location": "GestionDuBudget.le_budget_doit_diminuer_en_conséquence(int)"
});
formatter.result({
  "duration": 89786,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Refus d\u0027achat par manque de budget",
  "description": "",
  "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "je dispose d\u0027un magasin avec \u003cn\u003e budget d\u0027achat",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "achat d\u0027une paires de skis pour \u003ck\u003e euros",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "refus budget insuffisant",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget;",
  "rows": [
    {
      "cells": [
        "n",
        "k"
      ],
      "line": 19,
      "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget;;1"
    },
    {
      "cells": [
        "100",
        "150"
      ],
      "line": 20,
      "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget;;2"
    },
    {
      "cells": [
        "0",
        "10"
      ],
      "line": 21,
      "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Refus d\u0027achat par manque de budget",
  "description": "",
  "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "je dispose d\u0027un magasin avec 100 budget d\u0027achat",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "achat d\u0027une paires de skis pour 150 euros",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "refus budget insuffisant",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 29
    }
  ],
  "location": "GestionDuBudget.je_dispose_d_un_magasin_avec_budget_d_achat(int)"
});
formatter.result({
  "duration": 110167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 32
    }
  ],
  "location": "GestionDuBudget.achat_d_une_paires_de_skis_pour_euros(int)"
});
formatter.result({
  "duration": 83961,
  "status": "passed"
});
formatter.match({
  "location": "GestionDuBudget.refus_budget_insuffisant()"
});
formatter.result({
  "duration": 46046,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Refus d\u0027achat par manque de budget",
  "description": "",
  "id": "gestion-du-buget;refus-d\u0027achat-par-manque-de-budget;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "je dispose d\u0027un magasin avec 0 budget d\u0027achat",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "achat d\u0027une paires de skis pour 10 euros",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "refus budget insuffisant",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 29
    }
  ],
  "location": "GestionDuBudget.je_dispose_d_un_magasin_avec_budget_d_achat(int)"
});
formatter.result({
  "duration": 124454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 32
    }
  ],
  "location": "GestionDuBudget.achat_d_une_paires_de_skis_pour_euros(int)"
});
formatter.result({
  "duration": 102810,
  "status": "passed"
});
formatter.match({
  "location": "GestionDuBudget.refus_budget_insuffisant()"
});
formatter.result({
  "duration": 39148,
  "status": "passed"
});
formatter.uri("UserStory3.feature");
formatter.feature({
  "line": 1,
  "name": "Gestion des Skis Défecteux",
  "description": "",
  "id": "gestion-des-skis-défecteux",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Retrait d\u0027une paire de skis cassée",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec un stock de ski",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "retrait du ski \u003cx\u003e du stock",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le ski x n\u0027\u0027est plus présent dans le stock",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée;",
  "rows": [
    {
      "cells": [
        "x"
      ],
      "line": 9,
      "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 10,
      "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée;;2"
    },
    {
      "cells": [
        "3"
      ],
      "line": 11,
      "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Retrait d\u0027une paire de skis cassée",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec un stock de ski",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "retrait du ski 1 du stock",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le ski x n\u0027\u0027est plus présent dans le stock",
  "keyword": "Then "
});
formatter.match({
  "location": "GestionDesSkisDefect.je_dispose_d_un_magasin_avec_un_stock_de_ski()"
});
formatter.result({
  "duration": 126583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "GestionDesSkisDefect.retrait_du_ski_du_stock(int)"
});
formatter.result({
  "duration": 147799,
  "status": "passed"
});
formatter.match({
  "location": "GestionDesSkisDefect.le_ski_x_n_est_plus_présent_dans_le_stock()"
});
formatter.result({
  "duration": 74780,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Retrait d\u0027une paire de skis cassée",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-d\u0027une-paire-de-skis-cassée;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "je dispose d\u0027un magasin avec un stock de ski",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "retrait du ski 3 du stock",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "le ski x n\u0027\u0027est plus présent dans le stock",
  "keyword": "Then "
});
formatter.match({
  "location": "GestionDesSkisDefect.je_dispose_d_un_magasin_avec_un_stock_de_ski()"
});
formatter.result({
  "duration": 49470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "GestionDesSkisDefect.retrait_du_ski_du_stock(int)"
});
formatter.result({
  "duration": 110470,
  "status": "passed"
});
formatter.match({
  "location": "GestionDesSkisDefect.le_ski_x_n_est_plus_présent_dans_le_stock()"
});
formatter.result({
  "duration": 28634,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Retrait de tous les skis d\u0027une marque donnée",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "je dispose d\u0027un magasin avec un stock de ski",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "retrait de tous les skis de la \u003cmarque\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "le stock ne dispose plus de skis de la \u003cmarque\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée;",
  "rows": [
    {
      "cells": [
        "marque"
      ],
      "line": 19,
      "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée;;1"
    },
    {
      "cells": [
        "\"Salomon\""
      ],
      "line": 20,
      "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée;;2"
    },
    {
      "cells": [
        "\"Rossignol\""
      ],
      "line": 21,
      "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Retrait de tous les skis d\u0027une marque donnée",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "je dispose d\u0027un magasin avec un stock de ski",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "retrait de tous les skis de la \"Salomon\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "le stock ne dispose plus de skis de la \"Salomon\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GestionDesSkisDefect.je_dispose_d_un_magasin_avec_un_stock_de_ski()"
});
formatter.result({
  "duration": 54040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salomon",
      "offset": 32
    }
  ],
  "location": "GestionDesSkisDefect.retrait_de_tous_les_skis_de_la(String)"
});
formatter.result({
  "duration": 5174144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salomon",
      "offset": 40
    }
  ],
  "location": "GestionDesSkisDefect.le_stock_ne_dispose_plus_de_skis_de_la(String)"
});
formatter.result({
  "duration": 119673,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Retrait de tous les skis d\u0027une marque donnée",
  "description": "",
  "id": "gestion-des-skis-défecteux;retrait-de-tous-les-skis-d\u0027une-marque-donnée;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "je dispose d\u0027un magasin avec un stock de ski",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "retrait de tous les skis de la \"Rossignol\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "le stock ne dispose plus de skis de la \"Rossignol\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GestionDesSkisDefect.je_dispose_d_un_magasin_avec_un_stock_de_ski()"
});
formatter.result({
  "duration": 48372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rossignol",
      "offset": 32
    }
  ],
  "location": "GestionDesSkisDefect.retrait_de_tous_les_skis_de_la(String)"
});
formatter.result({
  "duration": 96701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rossignol",
      "offset": 40
    }
  ],
  "location": "GestionDesSkisDefect.le_stock_ne_dispose_plus_de_skis_de_la(String)"
});
formatter.result({
  "duration": 66284,
  "status": "passed"
});
formatter.uri("UserStoryJoin.feature");
formatter.feature({
  "line": 1,
  "name": "Relation alpiniste magasin",
  "description": "",
  "id": "relation-alpiniste-magasin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "s\u0027abonne au magasin",
  "description": "",
  "id": "relation-alpiniste-magasin;s\u0027abonne-au-magasin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "un alpiniste et un magasin",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "alpiniste s\u0027abonne au magasin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "l\u0027alpiniste est abonner au magasin",
  "keyword": "Then "
});
formatter.match({
  "location": "GestionAlpinisteMagasin.un_alpiniste_et_un_magasin()"
});
formatter.result({
  "duration": 102917,
  "status": "passed"
});
formatter.match({
  "location": "GestionAlpinisteMagasin.alpiniste_s_abonne_au_magasin()"
});
formatter.result({
  "duration": 54992,
  "status": "passed"
});
formatter.match({
  "location": "GestionAlpinisteMagasin.l_alpiniste_est_abonner_au_magasin()"
});
formatter.result({
  "duration": 60071,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "demande des conseils au magasin",
  "description": "",
  "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "un alpiniste avec une forme de \u003cf\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "demande conseil a un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "sa nouvelle forme est \u003cnf\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin;",
  "rows": [
    {
      "cells": [
        "f",
        "nf"
      ],
      "line": 14,
      "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin;;1"
    },
    {
      "cells": [
        "30",
        "50"
      ],
      "line": 15,
      "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin;;2"
    },
    {
      "cells": [
        "90",
        "100"
      ],
      "line": 16,
      "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "demande des conseils au magasin",
  "description": "",
  "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "un alpiniste avec une forme de 30",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "demande conseil a un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "sa nouvelle forme est 50",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 31
    }
  ],
  "location": "GestionAlpinisteMagasin.un_alpiniste_avec_une_forme_de(int)"
});
formatter.result({
  "duration": 292399,
  "status": "passed"
});
formatter.match({
  "location": "GestionAlpinisteMagasin.demande_conseil_a_un_magasin()"
});
formatter.result({
  "duration": 76212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 22
    }
  ],
  "location": "GestionAlpinisteMagasin.sa_nouvelle_forme_est(int)"
});
formatter.result({
  "duration": 108742,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "demande des conseils au magasin",
  "description": "",
  "id": "relation-alpiniste-magasin;demande-des-conseils-au-magasin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "un alpiniste avec une forme de 90",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "demande conseil a un magasin",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "sa nouvelle forme est 100",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 31
    }
  ],
  "location": "GestionAlpinisteMagasin.un_alpiniste_avec_une_forme_de(int)"
});
formatter.result({
  "duration": 124892,
  "status": "passed"
});
formatter.match({
  "location": "GestionAlpinisteMagasin.demande_conseil_a_un_magasin()"
});
formatter.result({
  "duration": 34993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 22
    }
  ],
  "location": "GestionAlpinisteMagasin.sa_nouvelle_forme_est(int)"
});
formatter.result({
  "duration": 522678,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "l\u0027alpiniste achete du materiel",
  "description": "",
  "id": "relation-alpiniste-magasin;l\u0027alpiniste-achete-du-materiel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "un alpiniste et un magasin avec un stock",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "il achete 1 paire de ski",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "le stock du magasin diminue de un",
  "keyword": "Then "
});
formatter.match({
  "location": "GestionAlpinisteMagasin.un_alpiniste_et_un_magasin_avec_un_stock()"
});
formatter.result({
  "duration": 90133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "GestionAlpinisteMagasin.il_achete_paire_de_ski(int)"
});
formatter.result({
  "duration": 100107,
  "status": "passed"
});
formatter.match({
  "location": "GestionAlpinisteMagasin.le_stock_du_magasin_diminue_de_un()"
});
formatter.result({
  "duration": 37303,
  "status": "passed"
});
});