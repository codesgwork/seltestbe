import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_budgets as budgets } from 'aws-cdk-lib';

export interface BudgetProps {
  budgetAmount: number;
  emailAddress: string;
}

export class Budget extends Construct {
  constructor(scope: Construct, id: string, props: BudgetProps) {
    super(scope, id);
    const cfnBudget = new budgets.CfnBudget(this, 'CnfCostBudget', {
      budget: {
        budgetType: 'COST',
        timeUnit: 'MONTHLY',
        budgetName: 'semobudget',

        budgetLimit: {
          amount: props.budgetAmount,
          unit: 'USD',
        },
      },
      // the properties below are optional
      notificationsWithSubscribers: [
        {
          notification: {
            comparisonOperator: 'GREATER_THAN',
            notificationType: 'ACTUAL',
            threshold: 100,
            thresholdType: 'PERCENTAGE',
          },
          subscribers: [
            {
              address: props.emailAddress,
              subscriptionType: 'EMAIL',
            },
          ],
        },
      ],
    });
  }
}
