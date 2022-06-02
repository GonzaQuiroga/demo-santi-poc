import express, { Request, Response } from "express";
import { start_workflow } from "../start-workflow";
import bodyParser from "body-parser";
import { queryWorkflow } from "../query-workflow";

const port = 3002;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/start_test", async (req: Request, res: Response) => {
  const { workflowId } = req.body;
  await start_workflow(workflowId);
  res.send("ok!");
});

app.get("/query_test/:workflowId", async (req: Request, res: Response) => {
  const { workflowId } = req.params;
  const result: any = await queryWorkflow(workflowId);
  res.send(result);
});

app.listen(port, () => {
  console.log("  Press CTRL-C to stop\n");
});
