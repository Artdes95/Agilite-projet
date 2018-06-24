package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Alpiniste;

public class StepAscension {
	
	Alpiniste a1;
	int res;
	
	@Given("^Etant donné un alpiniste avec une forme (\\d+) un poids (\\d+) et une taille (\\d+)$")
	public void etant_donné_un_alpiniste_avec_une_forme_un_poids_et_une_taille(int arg1, int arg2, int arg3) throws Throwable {
	     a1 = new Alpiniste ("Jean", arg3, arg1, arg2);
	}

	@When("^Il tente l'ascension d'une montagne nécessitant un équipement (\\d+) et de difficulté (\\d+) étant à sa portée$")
	public void il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté_étant_à_sa_portée(int arg1, int arg2) throws Throwable {
	    res=a1.ascension(arg1,arg2);
	}

	
	@Then("^Il réussit l'ascension (\\d+) et sa forme (\\d+) est différente$")
	public void il_réussit_l_ascension_et_sa_forme_est_différente(int arg1, int arg2) throws Throwable {
		assertEquals(arg1,res);
	    assertEquals(a1.getForme(),arg2);
	}

	@When("^Il tente l'ascension d'une montagne nécessitant un équipement (\\d+) et de difficulté (\\d+) n'étant pas à sa portée$")
	public void il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté_n_étant_pas_à_sa_portée(int arg1, int arg2) throws Throwable {
		res=a1.ascension(arg1,arg2);
	}

	@Then("^Il ne réussit pas l'ascension (\\d+) et sa forme (\\d+) est nulle$")
	public void il_ne_réussit_pas_l_ascension_et_sa_forme_est_nulle(int arg1, int arg2) throws Throwable {
		assertEquals(arg1,res);
	    assertEquals(a1.getForme(),arg2);
	}

}
