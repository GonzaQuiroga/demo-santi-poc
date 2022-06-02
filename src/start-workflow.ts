import { WorkflowClient } from '@temporalio/client';
import { santiTests } from './workflows';

export async function start_workflow(workflowId: string): Promise<void> {
  const client = new WorkflowClient();
  console.log(workflowId);
  const _handle = await client.start(santiTests, {
    taskQueue: 'signals-queries',
    workflowId,
  });

  console.log("starting santiP-to tests"); 
}
