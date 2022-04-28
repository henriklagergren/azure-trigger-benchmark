import * as pulumi from "@pulumi/pulumi";
/**
 * Allows you to add, update, or remove an Azure Data Lake Store to a subnet of a virtual network.
 *
 * > **Note:** This resoruce manages an `Azure Data Lake Storage Gen1`, previously known as `Azure Data Lake Store`.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "northeurope"});
 * const vnet = new azure.network.VirtualNetwork("vnet", {
 *     addressSpaces: ["10.7.29.0/29"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const subnet = new azure.network.Subnet("subnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: vnet.name,
 *     addressPrefixes: ["10.7.29.0/29"],
 *     serviceEndpoints: ["Microsoft.AzureActiveDirectory"],
 * });
 * const exampleStore = new azure.datalake.Store("exampleStore", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const adlsvnetrule = new azure.datalake.StoreVirtualNetworkRule("adlsvnetrule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleStore.name,
 *     subnetId: subnet.id,
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Store Virtual Network Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datalake/storeVirtualNetworkRule:StoreVirtualNetworkRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.DataLakeStore/accounts/myaccount/virtualNetworkRules/vnetrulename
 * ```
 */
export declare class StoreVirtualNetworkRule extends pulumi.CustomResource {
    /**
     * Get an existing StoreVirtualNetworkRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreVirtualNetworkRuleState, opts?: pulumi.CustomResourceOptions): StoreVirtualNetworkRule;
    /**
     * Returns true if the given object is an instance of StoreVirtualNetworkRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StoreVirtualNetworkRule;
    /**
     * The name of the Data Lake Store to which this Data Lake Store virtual network rule will be applied to. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The name of the Data Lake Store virtual network rule. Changing this forces a new resource to be created. Cannot be empty and must only contain alphanumeric characters, underscores, periods and hyphens. Cannot start with a period, underscore or hyphen, and cannot end with a period and a hyphen.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group where the Data Lake Store resides. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the subnet that the Data Lake Store will be connected to.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * Create a StoreVirtualNetworkRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreVirtualNetworkRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StoreVirtualNetworkRule resources.
 */
export interface StoreVirtualNetworkRuleState {
    /**
     * The name of the Data Lake Store to which this Data Lake Store virtual network rule will be applied to. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The name of the Data Lake Store virtual network rule. Changing this forces a new resource to be created. Cannot be empty and must only contain alphanumeric characters, underscores, periods and hyphens. Cannot start with a period, underscore or hyphen, and cannot end with a period and a hyphen.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group where the Data Lake Store resides. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the subnet that the Data Lake Store will be connected to.
     */
    subnetId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StoreVirtualNetworkRule resource.
 */
export interface StoreVirtualNetworkRuleArgs {
    /**
     * The name of the Data Lake Store to which this Data Lake Store virtual network rule will be applied to. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Data Lake Store virtual network rule. Changing this forces a new resource to be created. Cannot be empty and must only contain alphanumeric characters, underscores, periods and hyphens. Cannot start with a period, underscore or hyphen, and cannot end with a period and a hyphen.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group where the Data Lake Store resides. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the subnet that the Data Lake Store will be connected to.
     */
    subnetId: pulumi.Input<string>;
}
