import org.junit.After;
import org.junit.Before;
import junit.framework.*;
import projet_Agile.Fixation;
import projet_Agile.Ski;


/**
 * The test class SkiTest.
 *
 * @author  (your name)
 * @version (a version number or a date)
 */
public class SkiTest extends TestCase
{
    private Ski skikiTest;
    private Fixation fifixTest;
    /**
     * Default constructor for test class SkiTest
     */
    public SkiTest()
    {
    }
    public void testNewSki()
    {
        setUp();
        assertEquals(fifixTest.getPrice(),50.0);
        assertEquals(skikiTest.getBrand(),"brand1");
    }
    @Before
    public void setUp()
    {
        skikiTest = new Ski("brand1",100);
        fifixTest = new Fixation("fix1",50,skikiTest);
        skikiTest.setFix(fifixTest);
        
    }
    @After
    public void tearDown()
    {
    }
}
