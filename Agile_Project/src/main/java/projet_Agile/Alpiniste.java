package projet_Agile;

public class Alpiniste {
    private String nom;
    private int taille;
    private int forme;
    private int poids;
    
	public IObservateur getMagasin() {
		return magasin;
	}

	public void setMagasin(IObservateur magasin) {
		this.magasin = magasin;
	}


	private IObservateur magasin;
    
    public Alpiniste (String n, int t, int f, int p) {
        nom=n;
        taille=t;
        if(f>=0&&f<=100)forme=f;
        else forme=50;
        poids=p;
    }
	
	public Alpiniste() {
		// TODO Auto-generated constructor stub
	}

	public void notifierMagasin(){
		if(magasin != null) magasin.chgmtForme(this);
	}
	public void setMagasin(Magasin magasin){
		this.magasin = magasin;
	}
	
    public String getNom() {
        return nom;
    }

    public int getTaille() {
        return taille;
    }

    public int getForme() {
        return forme;
    }

    public int getPoids() {
        return poids;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setTaille(int taille) {
        this.taille = taille;
    }

    public void setPoids(int poids) {
        this.poids = poids;
    }

    public void setForme(int forme) {
        if(forme>=0&&forme<=100)this.forme = forme;
    }
    
    public int ascension(int poidsEquipement, int difficulté) {
        if(poidsEquipement<0||difficulté<0||difficulté>200)return -1;
        else {
            if(forme*taille/((poids+poidsEquipement)*2)>=difficulté) {
                fatigue(poidsEquipement, difficulté);
                return 1;
            }
            else {
                setForme(0);
                return 0;
            }
        }
    }
    
    public void fatigue(int poidsEq,int diff) {
        int forme=getForme()-(diff  + poidsEq);
        if(forme<=0)setForme(0);
        if(forme>0)setForme(forme);
    }


	public void abonner(Magasin magasin) {
		this.magasin = magasin;
	}
}