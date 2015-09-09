import javax.script.*;
import java.io.FileReader;
import java.util.Scanner;
public class RiotAPIChallenge {
    public static void main(String[] args) throws Exception{
        ScriptEngine engine = new ScriptEngineManager(null).getEngineByName("nashorn");
        Scanner s = new Scanner(System.in);
        String name = "currygobbler";
        String key = "564c7a22-1f85-469d-8d6f-730e719cf649";
        engine.put("out",System.out);
        engine.put("sumName", name);
        engine.put("APIKEY", key);
        FileReader fr = new FileReader("./lookupSum.js"); 
        Object o = engine.eval(fr);
//https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=564c7a22-1f85-469d-8d6f-730e719cf649
    }
}