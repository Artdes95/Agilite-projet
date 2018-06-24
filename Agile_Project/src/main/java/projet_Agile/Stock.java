package projet_Agile;

import java.util.ArrayList;

public class Stock {
	
	public ArrayList<Ski> skis;
	public ArrayList<Fixation> fixs;

	public Stock() {
		skis = new ArrayList<Ski>();
		fixs = new ArrayList<Fixation>();
	}
	
	public Ski getSki(int id) {
		for(int i=0;i<skis.size();i++) {
			if(skis.get(i).getX() == id) return skis.get(i);
		}
		return null;
	}

}
