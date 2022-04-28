import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Subscription Consumption Budget.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getSubscription({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "eastus"});
 * const exampleActionGroup = new azure.monitoring.ActionGroup("exampleActionGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     shortName: "example",
 * });
 * const exampleBudgetSubscription = new azure.consumption.BudgetSubscription("exampleBudgetSubscription", {
 *     subscriptionId: current.then(current => current.id),
 *     amount: 1000,
 *     timeGrain: "Monthly",
 *     timePeriod: {
 *         startDate: "2022-06-01T00:00:00Z",
 *         endDate: "2022-07-01T00:00:00Z",
 *     },
 *     filter: {
 *         dimensions: [{
 *             name: "ResourceGroupName",
 *             values: [exampleResourceGroup.name],
 *         }],
 *         tags: [{
 *             name: "foo",
 *             values: [
 *                 "bar",
 *                 "baz",
 *             ],
 *         }],
 *     },
 *     notifications: [
 *         {
 *             enabled: true,
 *             threshold: 90,
 *             operator: "EqualTo",
 *             contactEmails: [
 *                 "foo@example.com",
 *                 "bar@example.com",
 *             ],
 *             contactGroups: [exampleActionGroup.id],
 *             contactRoles: ["Owner"],
 *         },
 *         {
 *             enabled: false,
 *             threshold: 100,
 *             operator: "GreaterThan",
 *             thresholdType: "Forecasted",
 *             contactEmails: [
 *                 "foo@example.com",
 *                 "bar@example.com",
 *             ],
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Subscription Consumption Budgets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:consumption/budgetSubscription:BudgetSubscription example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Consumption/budgets/subscription1
 * ```
 */
export declare class BudgetSubscription extends pulumi.CustomResource {
    /**
     * Get an existing BudgetSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BudgetSubscriptionState, opts?: pulumi.CustomResourceOptions): BudgetSubscription;
    /**
     * Returns true if the given object is an instance of BudgetSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BudgetSubscription;
    /**
     * The total amount of cost to track with the budget.
     */
    readonly amount: pulumi.Output<number>;
    /**
     * The ETag of the Subscription Consumption Budget.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * A `filter` block as defined below.
     */
    readonly filter: pulumi.Output<outputs.consumption.BudgetSubscriptionFilter | undefined>;
    /**
     * The name which should be used for this Subscription Consumption Budget. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    readonly notifications: pulumi.Output<outputs.consumption.BudgetSubscriptionNotification[]>;
    /**
     * The ID of the Subscription for which to create a Consumption Budget. Changing this forces a new resource to be created.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    readonly timeGrain: pulumi.Output<string | undefined>;
    /**
     * A `timePeriod` block as defined below.
     */
    readonly timePeriod: pulumi.Output<outputs.consumption.BudgetSubscriptionTimePeriod>;
    /**
     * Create a BudgetSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BudgetSubscription resources.
 */
export interface BudgetSubscriptionState {
    /**
     * The total amount of cost to track with the budget.
     */
    amount?: pulumi.Input<number>;
    /**
     * The ETag of the Subscription Consumption Budget.
     */
    etag?: pulumi.Input<string>;
    /**
     * A `filter` block as defined below.
     */
    filter?: pulumi.Input<inputs.consumption.BudgetSubscriptionFilter>;
    /**
     * The name which should be used for this Subscription Consumption Budget. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    notifications?: pulumi.Input<pulumi.Input<inputs.consumption.BudgetSubscriptionNotification>[]>;
    /**
     * The ID of the Subscription for which to create a Consumption Budget. Changing this forces a new resource to be created.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * A `timePeriod` block as defined below.
     */
    timePeriod?: pulumi.Input<inputs.consumption.BudgetSubscriptionTimePeriod>;
}
/**
 * The set of arguments for constructing a BudgetSubscription resource.
 */
export interface BudgetSubscriptionArgs {
    /**
     * The total amount of cost to track with the budget.
     */
    amount: pulumi.Input<number>;
    /**
     * The ETag of the Subscription Consumption Budget.
     */
    etag?: pulumi.Input<string>;
    /**
     * A `filter` block as defined below.
     */
    filter?: pulumi.Input<inputs.consumption.BudgetSubscriptionFilter>;
    /**
     * The name which should be used for this Subscription Consumption Budget. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    notifications: pulumi.Input<pulumi.Input<inputs.consumption.BudgetSubscriptionNotification>[]>;
    /**
     * The ID of the Subscription for which to create a Consumption Budget. Changing this forces a new resource to be created.
     */
    subscriptionId: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * A `timePeriod` block as defined below.
     */
    timePeriod: pulumi.Input<inputs.consumption.BudgetSubscriptionTimePeriod>;
}
