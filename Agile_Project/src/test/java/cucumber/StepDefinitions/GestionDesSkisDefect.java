package cucumber.StepDefinitions;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import projet_Agile.Magasin;
import projet_Agile.Ski;
import projet_Agile.Stock;

public class GestionDesSkisDefect {
	Magasin magasin;
	Ski ski;
	@Given("^je dispose d'un magasin avec un stock de ski$")
	public void je_dispose_d_un_magasin_avec_un_stock_de_ski() throws Throwable {
	    magasin = Magasin.getMagasin();
	    magasin.setStock(new Stock());
	    magasin.setBudget(0);
	    for(int i=1;i<6;i++) {
	    	magasin.stock.skis.add(new Ski("Rossignol",100,i));
	    }
	}
	@When("^retrait du ski (\\d+) du stock$")
	public void retrait_du_ski_du_stock(int arg1) throws Throwable {
	    ski = magasin.stock.getSki(arg1);
	    magasin.stock.skis.remove(ski);
	}

	@Then("^le ski x n''est plus présent dans le stock$")
	public void le_ski_x_n_est_plus_présent_dans_le_stock() throws Throwable {
	    assertEquals(magasin.stock.skis.contains(ski),false);
	}
	


	@When("^retrait de tous les skis de la \"(.*?)\"$")
	public void retrait_de_tous_les_skis_de_la(String arg1) throws Throwable {
		int count =0;
		ArrayList<Integer> ints = new ArrayList<Integer>();
	    for(int i =0; i<magasin.getStock().skis.size(); i++) {
	    	if(magasin.getStock().skis.get(i).getBrand().equals(arg1)) {
	    		ints.add(i-count++);
	    	}
	    }
	    for(int i=0;i<ints.size();i++) {
	    	magasin.stock.skis.remove((int)ints.get(i));
	    }
	}

	@Then("^le stock ne dispose plus de skis de la \"(.*?)\"$")
	public void le_stock_ne_dispose_plus_de_skis_de_la(String arg1) throws Throwable {
		int count =0;
		for(int i =0; i<magasin.getStock().skis.size(); i++) {
	    	if(magasin.getStock().skis.get(i).getBrand().equals(arg1)) {
	    		count++;
	    	}
	    }
	    assertEquals(0,count);
	}


}
