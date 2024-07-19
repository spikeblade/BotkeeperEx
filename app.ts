import express, {
    type Request,
    type Response
  } from 'express'
import dotenv from "dotenv"


dotenv.config()

const app = express();
const PORT = process.env.NODE_DOCKER_PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// route for health check
app.get('/health_check', function (_: Request, res: Response) {
    return res.status(200).send({
      code: 200,
      message: 'healthy'
    })
  })



const start = async (): Promise<void> => {
    try {
      app.listen(PORT, () => { // 
        console.log("Server started on port : "+PORT);
      });
    } catch (error) {
      console.error(error); 
      process.exit(1); 
    }
  };
  
  void start();