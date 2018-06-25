package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Alpiniste;
import projet_Agile.Magasin;
import projet_Agile.Ski;
import projet_Agile.Stock;


public class GestionAlpinisteMagasin {
	Magasin mama;
	Alpiniste alpi;
	Ski ski;
	

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
	
	@Given("^un alpiniste avec une forme de (\\d+)$")
	public void un_alpiniste_avec_une_forme_de(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    alpi = new Alpiniste("",0,arg1,0);
	    mama = Magasin.getMagasin();
	    alpi.setMagasin(mama);
	}

	@When("^demande conseil a un magasin$")
	public void demande_conseil_a_un_magasin() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    alpi.notifierMagasin();
	}

	@Then("^sa nouvelle forme est (\\d+)$")
	public void sa_nouvelle_forme_est(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(alpi.getForme(),arg1);
	}
	
	@Given("^un alpiniste et un magasin avec un stock$")
	public void un_alpiniste_et_un_magasin_avec_un_stock() throws Throwable {
		Stock sto = new Stock();
		ski = new Ski();
		sto.skis.add(ski);
		mama = Magasin.getMagasin();
		mama.stock = sto;
		mama.setBudget(0);
		alpi = new Alpiniste("",0,0,0);
	}


	@When("^il achete (\\d+) paire de ski$")
	public void il_achete_paire_de_ski(int arg1) throws Throwable {
	    mama.venteSki(ski);
	}

	

	@Then("^le stock du magasin diminue de un$")
	public void le_stock_du_magasin_diminue_de_un() throws Throwable {
	    assertEquals(mama.getStock().skis.size(), 0);
	}

}