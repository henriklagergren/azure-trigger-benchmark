import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Consumption Budget for a Management Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleGroup = new azure.management.Group("exampleGroup", {displayName: "example"});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "eastus"});
 * const exampleBudgetManagementGroup = new azure.consumption.BudgetManagementGroup("exampleBudgetManagementGroup", {
 *     managementGroupId: exampleGroup.id,
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
 * Management Group Consumption Budgets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:consumption/budgetManagementGroup:BudgetManagementGroup example /providers/Microsoft.Management/managementGroups/00000000-0000-0000-0000-000000000000/providers/Microsoft.Consumption/budgets/budget1
 * ```
 */
export declare class BudgetManagementGroup extends pulumi.CustomResource {
    /**
     * Get an existing BudgetManagementGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BudgetManagementGroupState, opts?: pulumi.CustomResourceOptions): BudgetManagementGroup;
    /**
     * Returns true if the given object is an instance of BudgetManagementGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BudgetManagementGroup;
    /**
     * The total amount of cost to track with the budget.
     */
    readonly amount: pulumi.Output<number>;
    /**
     * The ETag of the Management Group Consumption Budget.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * A `filter` block as defined below.
     */
    readonly filter: pulumi.Output<outputs.consumption.BudgetManagementGroupFilter | undefined>;
    /**
     * The ID of the Management Group. Changing this forces a new resource to be created.
     */
    readonly managementGroupId: pulumi.Output<string>;
    /**
     * The name which should be used for this Management Group Consumption Budget. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    readonly notifications: pulumi.Output<outputs.consumption.BudgetManagementGroupNotification[]>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    readonly timeGrain: pulumi.Output<string | undefined>;
    /**
     * A `timePeriod` block as defined below.
     */
    readonly timePeriod: pulumi.Output<outputs.consumption.BudgetManagementGroupTimePeriod>;
    /**
     * Create a BudgetManagementGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BudgetManagementGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BudgetManagementGroup resources.
 */
export interface BudgetManagementGroupState {
    /**
     * The total amount of cost to track with the budget.
     */
    amount?: pulumi.Input<number>;
    /**
     * The ETag of the Management Group Consumption Budget.
     */
    etag?: pulumi.Input<string>;
    /**
     * A `filter` block as defined below.
     */
    filter?: pulumi.Input<inputs.consumption.BudgetManagementGroupFilter>;
    /**
     * The ID of the Management Group. Changing this forces a new resource to be created.
     */
    managementGroupId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Management Group Consumption Budget. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    notifications?: pulumi.Input<pulumi.Input<inputs.consumption.BudgetManagementGroupNotification>[]>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * A `timePeriod` block as defined below.
     */
    timePeriod?: pulumi.Input<inputs.consumption.BudgetManagementGroupTimePeriod>;
}
/**
 * The set of arguments for constructing a BudgetManagementGroup resource.
 */
export interface BudgetManagementGroupArgs {
    /**
     * The total amount of cost to track with the budget.
     */
    amount: pulumi.Input<number>;
    /**
     * The ETag of the Management Group Consumption Budget.
     */
    etag?: pulumi.Input<string>;
    /**
     * A `filter` block as defined below.
     */
    filter?: pulumi.Input<inputs.consumption.BudgetManagementGroupFilter>;
    /**
     * The ID of the Management Group. Changing this forces a new resource to be created.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The name which should be used for this Management Group Consumption Budget. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `notification` blocks as defined below.
     */
    notifications: pulumi.Input<pulumi.Input<inputs.consumption.BudgetManagementGroupNotification>[]>;
    /**
     * The time covered by a budget. Tracking of the amount will be reset based on the time grain. Must be one of `Monthly`, `Quarterly`, `Annually`, `BillingMonth`, `BillingQuarter`, or `BillingYear`. Defaults to `Monthly`.
     */
    timeGrain?: pulumi.Input<string>;
    /**
     * A `timePeriod` block as defined below.
     */
    timePeriod: pulumi.Input<inputs.consumption.BudgetManagementGroupTimePeriod>;
}
