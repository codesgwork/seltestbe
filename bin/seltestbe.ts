// #!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SeltestbeStack } from '../lib/seltestbe-stack';
import { BillingStack } from '../lib/billing-stack';

const app = new cdk.App();

new SeltestbeStack(app, 'SeltestbeStack', {
  stackName: 'SELtest',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

// new BillingStack(app, 'BillingStack', {
//   budgetAmount: 5,
//   emailAddress: 'skyinnk.tech@gmail.com',
// });