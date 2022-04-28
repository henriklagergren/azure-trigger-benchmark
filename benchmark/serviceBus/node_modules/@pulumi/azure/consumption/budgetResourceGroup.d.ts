import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Resource Group Consumption Budget.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "eastus"});
 * const exampleActionGroup = new azure.monitoring.ActionGroup("exampleActionGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     shortName: "example",
 * });
 * const exampleBudgetResourceGroup = new azure.consumption.BudgetResourceGroup("exampleBudgetResourceGroup", {
 *     resourceGroupId: exampleResourceGroup.id,
 *     amount: 1000,
 *     timeGrain: "Monthly",
 *     timePeriod: {
 *         startDate: "2022-06-01T00:00:00Z",
 *         endDate: "2022-07-01T00:00:00Z",
 *     },
 *     filter: {
 *         dimensions: [{
 *             name: "ResourceId",
 *             values: [exampleActionGroup.id],
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
 *             thresholdType: "Forecasted",
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
 * Resource Group Consumption Budgets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:consumption/budgetResourceGroup:BudgetResourceGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1/providers/Microsoft.Consumption/budgets/resourceGroup1
 * ```
 */
export declare class BudgetResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing BudgetResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BudgetResourceGroupState, opts?: pulumi.CustomResourceOptions): BudgetResourceGroup;
    /**
     * Returns true if the given object is an instance of BudgetResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BudgetResourceGroup;
    /**
     * The total amount of cost to track with the budget.
     */
    readonly amount: pulumi.Output<number>;
    /**
     * The ETag of the Resource Group Consumption Budget
     */
    readonly etag: pulumi.Output<string>;
    /**
     * A `filter` block as defined below.
     */
    readonly filter: pulumi.Output<outputs.consumption.BudgetResourceGroupFilter | undefined>;
    /**
     * The name which should be used for this Resource Group Consumption Budget. Changing this forces a new Resource Group Consumption Budget to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    readonly notifications: pulumi.Output<outputs.consumption.BudgetResourceGroupNotification[]>;
    /**
     * The ID of the Resource Group to create the consumption budget for in the form of /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1. Changing this forces a new Resource Group Consumption Budget to be created.
     */
    readonly resourceGroupId: pulumi.Output<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    readonly timeGrain: pulumi.Output<string | undefined>;
    /**
     * A `timePeriod` block as defined below.
     */
    readonly timePeriod: pulumi.Output<outputs.consumption.BudgetResourceGroupTimePeriod>;
    /**
     * Create a BudgetResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetResourceGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BudgetResourceGroup resources.
 */
export interface BudgetResourceGroupState {
    /**
     * The total amount of cost to track with the budget.
     */
    amount?: pulumi.Input<number>;
    /**
     * The ETag of the Resource Group Consumption Budget
     */
    etag?: pulumi.Input<string>;
    /**
     * A `filter` block as defined below.
     */
    filter?: pulumi.Input<inputs.consumption.BudgetResourceGroupFilter>;
    /**
     * The name which should be used for this Resource Group Consumption Budget. Changing this forces a new Resource Group Consumption Budget to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    notifications?: pulumi.Input<pulumi.Input<inputs.consumption.BudgetResourceGroupNotification>[]>;
    /**
     * The ID of the Resource Group to create the consumption budget for in the form of /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1. Changing this forces a new Resource Group Consumption Budget to be created.
     */
    resourceGroupId?: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * A `timePeriod` block as defined below.
     */
    timePeriod?: pulumi.Input<inputs.consumption.BudgetResourceGroupTimePeriod>;
}
/**
 * The set of arguments for constructing a BudgetResourceGroup resource.
 */
export interface BudgetResourceGroupArgs {
    /**
     * The total amount of cost to track with the budget.
     */
    amount: pulumi.Input<number>;
    /**
     * The ETag of the Resource Group Consumption Budget
     */
    etag?: pulumi.Input<string>;
    /**
     * A `filter` block as defined below.
     */
    filter?: pulumi.Input<inputs.consumption.BudgetResourceGroupFilter>;
    /**
     * The name which should be used for this Resource Group Consumption Budget. Changing this forces a new Resource Group Consumption Budget to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    notifications: pulumi.Input<pulumi.Input<inputs.consumption.BudgetResourceGroupNotification>[]>;
    /**
     * The ID of the Resource Group to create the consumption budget for in the form of /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1. Changing this forces a new Resource Group Consumption Budget to be created.
     */
    resourceGroupId: pulumi.Input<string>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * A `timePeriod` block as defined below.
     */
    timePeriod: pulumi.Input<inputs.consumption.BudgetResourceGroupTimePeriod>;
}
