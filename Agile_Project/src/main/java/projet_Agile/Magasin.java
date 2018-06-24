package projet_Agile;

interface IObservateur
{
	public void chgmtForme(Alpiniste alpi);
}

public class Magasin implements IObservateur{
	private static Magasin magasin;
	
	private double budget;
	public Stock stock;

	public static Magasin getMagasin(){
		if(magasin == null) magasin = new Magasin();
		return magasin;
	}
	
	@SuppressWarnings("unused")
	private Magasin(Stock stock, double budget) {
		this.budget = budget;
		this.stock=stock;
	}
	
	public Magasin() {
		// TODO Auto-generated constructor stub
	}

	public void chgmtForme(Alpiniste alpi){
		
	}
	
	public int achatSki(Ski ski) {
		if(ski.getPrice() > budget) return -1;
		stock.skis.add(ski);
		budget-=ski.getPrice();
		return 1;
	}
	
	public void venteSki(Ski ski) {
		stock.skis.remove(ski);
		budget += ski.getPrice();
	}
	public void venteFix(Fixation fix) {
		stock.fixs.remove(fix);
		budget += fix.getPrice();
	}
	
	public double getBudget() {
		return budget;
	}

	public void setBudget(double budget) {
		this.budget = budget;
	}

	public Stock getStock() {
		return stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

}
