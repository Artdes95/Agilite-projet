package projet_Agile;

/**
 * Write a description of class Fixation here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Fixation
{
    // instance variables - replace the example below with your own
    private String name;
    private double price;
    private Ski skiki;
    
    public Fixation()
    {
    }
    public Fixation(String name, double price, Ski skiki)
    {
        this.name = name;
        this.price = price;
        this.skiki = skiki;
    }
    public double getPrice()
    {
        return this.price;
    }
    public String getName()
    {
        return this.name;
    }
    public Ski getSki()
    {
        return this.skiki;
    }
    public double totalPrice()
    {
        return this.price + this.skiki.getPrice();
    }
}
