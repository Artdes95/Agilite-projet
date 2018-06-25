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
		if(alpi.getForme() > 80) alpi.setForme(100);
		else alpi.setForme(alpi.getForme() + 20);
	}
	
	public int achatSki(Ski ski) {
		if(ski.getPrice() > budget) return -1;
		stock.skis.add(ski);
		budget-=ski.getPrice();
		return 1;
	}
	
	public void venteSki(Ski ski) {
		if(stock.skis.contains(ski)) {stock.skis.remove(ski);
		budget += ski.getPrice();
		}
	}
	
	public void venteFix(Fixation fix) {
		if(stock.fixs.contains(fix)) {stock.fixs.remove(fix);
		budget += fix.getPrice();}
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
