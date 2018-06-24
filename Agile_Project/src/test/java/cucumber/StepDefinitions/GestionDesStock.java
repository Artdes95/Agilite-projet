package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Fixation;
import projet_Agile.Magasin;
import projet_Agile.Ski;
import projet_Agile.Stock;

public class GestionDesStock {
	
	Magasin magasin;

	@Given("^je dispose d'un magasin avec (\\d+) ski en stock$")
	public void je_dispose_d_un_magasin_avec_ski_en_stock(int arg1) throws Throwable {

		Stock sto = new Stock();
		for(int i=0;i<arg1;i++) {
			sto.skis.add(new Ski());
		}
		magasin = Magasin.getMagasin();
		magasin.stock = sto;
		magasin.setBudget(0);
	}
	@When("^achat de (\\d+) paire de ski$")
	public void achat_de_paire_de_ski(int arg1) throws Throwable {
		for(int i = 0; i<arg1; i++) {
			magasin.achatSki(new Ski());
		}
		
	}
	@Then("^le (\\d+) de ski en stock doit augmenter en consequence$")
	public void le_de_ski_en_stock_doit_augmenter_en_consequence(int arg1){
		assertEquals(arg1,magasin.stock.skis.size());
	}

	
	
	
	
	@Given("^je dispose d'un magasin avec (\\d+) ski et (\\d+) fixations en stock$")
	public void je_dispose_d_un_magasin_avec_ski_et_fixations_en_stock(int arg1, int arg2) throws Throwable {
		Stock sto = new Stock();
		for(int i=0;i<arg1;i++) {
			sto.skis.add(new Ski());
		}
		for(int i=0;i<arg2;i++) {
			sto.fixs.add(new Fixation());
		}
		magasin = Magasin.getMagasin();
		magasin.stock = sto;
		magasin.setBudget(0);
	}

	@When("^vente de une paire de ski avec fixation$")
	public void vente_de_une_paire_de_ski_avec_fixation() throws Throwable {
		Fixation fix = magasin.stock.fixs.get(0);
	    magasin.venteFix(fix);
	    Ski ski = magasin.stock.skis.get(0);
	    magasin.venteSki(ski);
	}

	@Then("^le (\\d+) et le (\\d+) en stock doivent baisser de un$")
	public void le_et_le_en_stock_doivent_baisser_de_un(int arg1, int arg2) throws Throwable {
	    assertEquals(arg1,magasin.stock.skis.size());
	    assertEquals(arg2,magasin.stock.fixs.size());
	}
	
}
