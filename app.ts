import express, {
  type Request,
  type Response
} from 'express'
import dotenv from "dotenv"
import * as transactions from './src/controllers/transactions'
import * as accounts from './src/controllers/accounts'
import { handleHttpError } from './src/utils/handleHTTPResponses'

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
//endpoints routes
app.get('/transactions', async function (_: Request, res: Response) {
  try {
    const result = await transactions.listTransactions();
    return res.status(200).send({
      code: 200,
      message: 'found transactions',
      body: result
    })
  } catch (error) {
    handleHttpError(res, 'Error getting the transactions ' + error)
  }
})
app.post('/transaction', async function (req: Request, res: Response) {
  try {
    const result = await transactions.newTransaction(req.body);
    if(result === 'error not enough money for this transaction'){
      return res.status(409).send({
        code: 409,
        message: result,
      })
    }
    return res.status(200).send({
      code: 200,
      message: 'Your transaction was successful',
      body: result
    })
  } catch (error) {
    handleHttpError(res, 'Error doing your transaction ' + error)
  }
})
app.get('/transactions/:min/:max', async function (req: Request, res: Response) {
  const min = parseInt(req.params.min)
  const max = parseInt(req.params.max)
  try {
    const result = await transactions.getTransactionsBetween(min,max);
    return res.status(200).send({
      code: 200,
      message: 'your transactions in that values are',
      body: result
    })
  } catch (error) {
    handleHttpError(res, 'Error getting the transactions  ' + error)
  }
})
app.get('/transaction/:id', async function (req: Request, res: Response) {
  const id = parseInt(req.params.id)
  try {
    const result = await transactions.getTransactionById(id);
    return res.status(200).send({
      code: 200,
      message: 'your transaction',
      body: result
    })
  } catch (error) {
    handleHttpError(res, 'Error getting your balance ' + error)
  }
})
app.get('/balance/:id', async function (req: Request, res: Response) {
  const id = parseInt(req.params.id)
  try {
    const result = await accounts.getBalanceOfAccount(id);
    return res.status(200).send({
      code: 200,
      message: 'your actual balance',
      body: result
    })
  } catch (error) {
    handleHttpError(res, 'Error getting your balance ' + error)
  }
})

const start = async (): Promise<void> => {
  try {
    app.listen(PORT, () => { // 
      console.log("Server started on port : " + PORT);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();