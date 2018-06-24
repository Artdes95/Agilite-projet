package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Alpiniste;
import projet_Agile.Magasin;


public class GestionAlpinisteMagasin {
	Magasin mama;
	Alpiniste alpi;
	

	@Given("^un alpiniste et un magasin$")
	public void un_alpiniste_et_un_magasin() throws Throwable {
		mama = Magasin.getMagasin();
		alpi = new Alpiniste();
	}

	@When("^alpiniste s'abonne au magasin$")
	public void alpiniste_s_abonne_au_magasin() throws Throwable {
		alpi.abonner(mama);
	}

	@Then("^l'alpiniste est abonner au magasin$")
	public void l_alpiniste_est_abonner_au_magasin() throws Throwable {
		assertEquals(alpi.getMagasin()==mama,true);
	}

}