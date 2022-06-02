import * as wf from "@temporalio/workflow";

export const getStatus = wf.defineQuery<string>("getStatus");

export async function santiTests(): Promise<void> {
  let status = "starting";

  wf.setHandler(getStatus, () => status);

  //here raise first test request using activity
  await wf.sleep(10000);
  status = "first test passed";

  //here raise second test request using activity
  await wf.sleep(10000);
  status = "second test passed";

  //complete
  await wf.sleep(10000);
  status = "all test completed";

  return console.log("Completed");
}
