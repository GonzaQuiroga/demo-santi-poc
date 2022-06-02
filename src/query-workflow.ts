import { WorkflowClient } from "@temporalio/client";
import { getStatus } from "./workflows";

export async function queryWorkflow(workflowId: string): Promise<any> {
  const client = new WorkflowClient();

  const handle = await client.getHandle(workflowId);

  const res = await handle.query(getStatus);
  return res;
}
