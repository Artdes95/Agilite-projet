package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Magasin;
import projet_Agile.Ski;
import projet_Agile.Stock;

public class GestionDuBudget {
	Magasin magasin;
	Ski ski;
	@Given("^je dispose d'un magasin avec (\\d+) budget d'achat$")
	public void je_dispose_d_un_magasin_avec_budget_d_achat(int arg1) throws Throwable {
	    magasin = Magasin.getMagasin();
		magasin.setStock(new Stock());
		magasin.setBudget(arg1);
	}

	@When("^achat d'une paires de skis pour (\\d+) euros$")
	public void achat_d_une_paires_de_skis_pour_euros(int arg1) throws Throwable {
	    ski = new Ski("TATA",arg1);
	    magasin.achatSki(ski);
	}
	
	@Then("^le (\\d+) budget doit diminuer en conséquence$")
	public void le_budget_doit_diminuer_en_conséquence(int arg1) throws Throwable {
	    assertEquals((int)magasin.getBudget(), arg1);
	}


	@Then("^refus budget insuffisant$")
	public void refus_budget_insuffisant() throws Throwable {
	   assertEquals(magasin.achatSki(ski),-1);
	}


}
