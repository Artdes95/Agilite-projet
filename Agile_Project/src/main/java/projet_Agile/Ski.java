package projet_Agile;
import java.util.ArrayList;


/**
 * Write a description of class Ski here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Ski
{
    // instance variables - replace the example below with your own
    private int x;
    private String brand;
    private double price;
    
    
    
    private ArrayList<Fixation> fifix;
    /**
     * Constructor for objects of class Ski
     */
    public Ski()
    {
    }
    
    public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public Ski(String brand, double price, int id)
    {
        this.price = price;
        this.brand = brand;
        x = id;
        fifix = new ArrayList<Fixation>();
    }
    public Ski(String brand, double price)
    {
        this.price = price;
        this.brand = brand;
        fifix = new ArrayList<Fixation>();
    }
    public String getBrand()
    {
        return this.brand;
    }
    public double getPrice()
    {
        return this.price;
    }
    public void setBrand(String brand)
    {
        this.brand = brand;
    }
    public void setPrice(double price)
    {
        this.price = price;
    }
    public void setFix(Fixation fifix)
    {
        this.fifix.add(fifix);
    }
    public double discount(double pourcentage)
    {
        return this.price * pourcentage;
    }
}
