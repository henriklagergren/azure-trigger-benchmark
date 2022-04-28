import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Cost Management Export for a Resource Group.
 *
 * !> **Note:** The `azure.costmanagement.ResourceGroupExport` resource has been deprecated in favour of the `azure.core.ResourceGroupCostManagementExport` resource and will be removed in v3.0 of the Azure Provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleResourceGroupExport = new azure.costmanagement.ResourceGroupExport("exampleResourceGroupExport", {
 *     resourceGroupId: exampleResourceGroup.id,
 *     recurrenceType: "Monthly",
 *     recurrencePeriodStart: "2020-08-18T00:00:00Z",
 *     recurrencePeriodEnd: "2020-09-18T00:00:00Z",
 *     deliveryInfo: {
 *         storageAccountId: exampleAccount.id,
 *         containerName: "examplecontainer",
 *         rootFolderPath: "/root/updated",
 *     },
 *     query: {
 *         type: "Usage",
 *         timeFrame: "WeekToDate",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Cost Management Export for a Resource Group can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:costmanagement/resourceGroupExport:ResourceGroupExport example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.CostManagement/exports/example
 * ```
 */
export declare class ResourceGroupExport extends pulumi.CustomResource {
    /**
     * Get an existing ResourceGroupExport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceGroupExportState, opts?: pulumi.CustomResourceOptions): ResourceGroupExport;
    /**
     * Returns true if the given object is an instance of ResourceGroupExport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ResourceGroupExport;
    /**
     * Is the cost management export active? Default is `true`.
     */
    readonly active: pulumi.Output<boolean | undefined>;
    /**
     * A `deliveryInfo` block as defined below.
     */
    readonly deliveryInfo: pulumi.Output<outputs.costmanagement.ResourceGroupExportDeliveryInfo>;
    /**
     * Specifies the name of the Cost Management Export. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `query` block as defined below.
     */
    readonly query: pulumi.Output<outputs.costmanagement.ResourceGroupExportQuery>;
    /**
     * The date the export will stop capturing information.
     */
    readonly recurrencePeriodEnd: pulumi.Output<string>;
    /**
     * The date the export will start capturing information.
     */
    readonly recurrencePeriodStart: pulumi.Output<string>;
    /**
     * How often the requested information will be exported. Valid values include `Annually`, `Daily`, `Monthly`, `Weekly`.
     */
    readonly recurrenceType: pulumi.Output<string>;
    /**
     * The id of the resource group in which to export information.
     */
    readonly resourceGroupId: pulumi.Output<string>;
    /**
     * Create a ResourceGroupExport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceGroupExportArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ResourceGroupExport resources.
 */
export interface ResourceGroupExportState {
    /**
     * Is the cost management export active? Default is `true`.
     */
    active?: pulumi.Input<boolean>;
    /**
     * A `deliveryInfo` block as defined below.
     */
    deliveryInfo?: pulumi.Input<inputs.costmanagement.ResourceGroupExportDeliveryInfo>;
    /**
     * Specifies the name of the Cost Management Export. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `query` block as defined below.
     */
    query?: pulumi.Input<inputs.costmanagement.ResourceGroupExportQuery>;
    /**
     * The date the export will stop capturing information.
     */
    recurrencePeriodEnd?: pulumi.Input<string>;
    /**
     * The date the export will start capturing information.
     */
    recurrencePeriodStart?: pulumi.Input<string>;
    /**
     * How often the requested information will be exported. Valid values include `Annually`, `Daily`, `Monthly`, `Weekly`.
     */
    recurrenceType?: pulumi.Input<string>;
    /**
     * The id of the resource group in which to export information.
     */
    resourceGroupId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ResourceGroupExport resource.
 */
export interface ResourceGroupExportArgs {
    /**
     * Is the cost management export active? Default is `true`.
     */
    active?: pulumi.Input<boolean>;
    /**
     * A `deliveryInfo` block as defined below.
     */
    deliveryInfo: pulumi.Input<inputs.costmanagement.ResourceGroupExportDeliveryInfo>;
    /**
     * Specifies the name of the Cost Management Export. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `query` block as defined below.
     */
    query: pulumi.Input<inputs.costmanagement.ResourceGroupExportQuery>;
    /**
     * The date the export will stop capturing information.
     */
    recurrencePeriodEnd: pulumi.Input<string>;
    /**
     * The date the export will start capturing information.
     */
    recurrencePeriodStart: pulumi.Input<string>;
    /**
     * How often the requested information will be exported. Valid values include `Annually`, `Daily`, `Monthly`, `Weekly`.
     */
    recurrenceType: pulumi.Input<string>;
    /**
     * The id of the resource group in which to export information.
     */
    resourceGroupId: pulumi.Input<string>;
}
