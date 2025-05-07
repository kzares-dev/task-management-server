import { config } from "dotenv";
import { bool, envsafe, port, str, } from "envsafe";

config();

export const env = envsafe({
   
    PORT: port({
        devDefault: 3001,
        desc: 'The port the app is running on',
        example: 80,
    }),
 
});
