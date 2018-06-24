import org.junit.After;
import org.junit.Before;
import junit.framework.*;
import projet_Agile.Fixation;
import projet_Agile.Magasin;
import projet_Agile.Ski;
import projet_Agile.Stock;


public class MagasinTest extends TestCase{
	
	public MagasinTest() {
		// TODO Auto-generated constructor stub
	}


	public void testAchatSki() {
		Ski s1 =new Ski("SKI1",100,1);
		Stock st = new Stock();
		Magasin.getMagasin().setStock(st);
		Magasin.getMagasin().setBudget(200);

		int res=Magasin.getMagasin().achatSki(s1);
		assertEquals(res,1);
		assertEquals(Magasin.getMagasin().getBudget(),100.0);
		assertEquals(Magasin.getMagasin().getStock().getSki(1),s1);

		Ski s2=new Ski("SKI2",100,2);
		res=Magasin.getMagasin().achatSki(s2);
		assertEquals(res,1);
		assertEquals(Magasin.getMagasin().getBudget(),0.0);
		assertEquals(Magasin.getMagasin().getStock().getSki(2),s2);

		Ski s3=new Ski("SKI3",100,3);
		res=Magasin.getMagasin().achatSki(s3);
		assertEquals(res,-1);
		assertEquals(Magasin.getMagasin().getBudget(),0.0);
		assertEquals(Magasin.getMagasin().getStock().getSki(3),null);
		}

	public void testVenteSki() {
		Ski s1 =new Ski("SKI1",100,1);
		Ski s2=new Ski("SKI2",150,2);
		Ski s3=new Ski("SKI3",100,3);
		Stock st = new Stock();
		Magasin.getMagasin().setStock(st);
		Magasin.getMagasin().setBudget(400);
		Magasin.getMagasin().achatSki(s1);
		Magasin.getMagasin().achatSki(s2);
		Magasin.getMagasin().achatSki(s3);

		Magasin.getMagasin().venteSki(s2);
		assertEquals(Magasin.getMagasin().getBudget(),200.0);
		assertEquals(Magasin.getMagasin().getStock().getSki(2),null);

		Magasin.getMagasin().venteSki(s2);
		assertEquals(Magasin.getMagasin().getBudget(),200.0);
		assertEquals(Magasin.getMagasin().getStock().getSki(2),null);
		}

}