package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Alpiniste;

public class StepFatigue {
	Alpiniste a2;

	@Given("^Etant donné un alpiniste avec une forme (\\d+)$")
	public void etant_donné_un_alpiniste_avec_une_forme(int arg1) throws Throwable {
	    a2=new Alpiniste("Pierre",180,arg1,80);
	}

	@When("^Il tente l'ascension d'une montagne nécessitant un équipement (\\d+) et de difficulté (\\d+)$")
	public void il_tente_l_ascension_d_une_montagne_nécessitant_un_équipement_et_de_difficulté(int arg1, int arg2) throws Throwable {
	    a2.ascension(arg1,arg2);
	}

	@Then("^Sa nouvelle forme (\\d+) est diminuée$")
	public void sa_nouvelle_forme_en_diminuée(int arg1) throws Throwable {
	    assertEquals(a2.getForme(),arg1);
	}

}
