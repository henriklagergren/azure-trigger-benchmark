import * as pulumi from "@pulumi/pulumi";
/**
 * Manages private and isolated Logic App instances within an Azure virtual network.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     addressSpaces: ["10.0.0.0/22"],
 * });
 * const isesubnet1 = new azure.network.Subnet("isesubnet1", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/26"],
 *     delegations: [{
 *         name: "integrationServiceEnvironments",
 *         serviceDelegation: {
 *             name: "Microsoft.Logic/integrationServiceEnvironments",
 *         },
 *     }],
 * });
 * const isesubnet2 = new azure.network.Subnet("isesubnet2", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.64/26"],
 * });
 * const isesubnet3 = new azure.network.Subnet("isesubnet3", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.128/26"],
 * });
 * const isesubnet4 = new azure.network.Subnet("isesubnet4", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.192/26"],
 * });
 * const exampleInterationServiceEnvironment = new azure.logicapps.InterationServiceEnvironment("exampleInterationServiceEnvironment", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Developer_0",
 *     accessEndpointType: "Internal",
 *     virtualNetworkSubnetIds: [
 *         isesubnet1.id,
 *         isesubnet2.id,
 *         isesubnet3.id,
 *         isesubnet4.id,
 *     ],
 *     tags: {
 *         environment: "development",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Integration Service Environments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/interationServiceEnvironment:InterationServiceEnvironment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationServiceEnvironments/ise1
 * ```
 */
export declare class InterationServiceEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing InterationServiceEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterationServiceEnvironmentState, opts?: pulumi.CustomResourceOptions): InterationServiceEnvironment;
    /**
     * Returns true if the given object is an instance of InterationServiceEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterationServiceEnvironment;
    /**
     * The type of access endpoint to use for the Integration Service Environment. Possible Values are `Internal` and `External`. Changing this forces a new Integration Service Environment to be created.
     */
    readonly accessEndpointType: pulumi.Output<string>;
    /**
     * The list of access endpoint ip addresses of connector.
     */
    readonly connectorEndpointIpAddresses: pulumi.Output<string[]>;
    /**
     * The list of outgoing ip addresses of connector.
     */
    readonly connectorOutboundIpAddresses: pulumi.Output<string[]>;
    /**
     * The Azure Region where the Integration Service Environment should exist. Changing this forces a new Integration Service Environment to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Integration Service Environment. Changing this forces a new Integration Service Environment to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Integration Service Environment should exist. Changing this forces a new Integration Service Environment to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The sku name and capacity of the Integration Service Environment. Possible Values for `sku` element are `Developer` and `Premium` and possible values for the `capacity` element are from `0` to `10`.  Defaults to `sku` of `Developer` with a `Capacity` of `0` (e.g. `Developer_0`). Changing this forces a new Integration Service Environment to be created when `sku` element is not the same with existing one.
     */
    readonly skuName: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags which should be assigned to the Integration Service Environment.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of virtual network subnet ids to be used by Integration Service Environment. Exactly four distinct ids to subnets must be provided. Changing this forces a new Integration Service Environment to be created.
     */
    readonly virtualNetworkSubnetIds: pulumi.Output<string[]>;
    /**
     * The list of access endpoint ip addresses of workflow.
     */
    readonly workflowEndpointIpAddresses: pulumi.Output<string[]>;
    /**
     * The list of outgoing ip addresses of workflow.
     */
    readonly workflowOutboundIpAddresses: pulumi.Output<string[]>;
    /**
     * Create a InterationServiceEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterationServiceEnvironmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterationServiceEnvironment resources.
 */
export interface InterationServiceEnvironmentState {
    /**
     * The type of access endpoint to use for the Integration Service Environment. Possible Values are `Internal` and `External`. Changing this forces a new Integration Service Environment to be created.
     */
    accessEndpointType?: pulumi.Input<string>;
    /**
     * The list of access endpoint ip addresses of connector.
     */
    connectorEndpointIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of outgoing ip addresses of connector.
     */
    connectorOutboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Azure Region where the Integration Service Environment should exist. Changing this forces a new Integration Service Environment to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Integration Service Environment. Changing this forces a new Integration Service Environment to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Integration Service Environment should exist. Changing this forces a new Integration Service Environment to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The sku name and capacity of the Integration Service Environment. Possible Values for `sku` element are `Developer` and `Premium` and possible values for the `capacity` element are from `0` to `10`.  Defaults to `sku` of `Developer` with a `Capacity` of `0` (e.g. `Developer_0`). Changing this forces a new Integration Service Environment to be created when `sku` element is not the same with existing one.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Integration Service Environment.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of virtual network subnet ids to be used by Integration Service Environment. Exactly four distinct ids to subnets must be provided. Changing this forces a new Integration Service Environment to be created.
     */
    virtualNetworkSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of access endpoint ip addresses of workflow.
     */
    workflowEndpointIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of outgoing ip addresses of workflow.
     */
    workflowOutboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a InterationServiceEnvironment resource.
 */
export interface InterationServiceEnvironmentArgs {
    /**
     * The type of access endpoint to use for the Integration Service Environment. Possible Values are `Internal` and `External`. Changing this forces a new Integration Service Environment to be created.
     */
    accessEndpointType: pulumi.Input<string>;
    /**
     * The Azure Region where the Integration Service Environment should exist. Changing this forces a new Integration Service Environment to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Integration Service Environment. Changing this forces a new Integration Service Environment to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Integration Service Environment should exist. Changing this forces a new Integration Service Environment to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku name and capacity of the Integration Service Environment. Possible Values for `sku` element are `Developer` and `Premium` and possible values for the `capacity` element are from `0` to `10`.  Defaults to `sku` of `Developer` with a `Capacity` of `0` (e.g. `Developer_0`). Changing this forces a new Integration Service Environment to be created when `sku` element is not the same with existing one.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Integration Service Environment.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of virtual network subnet ids to be used by Integration Service Environment. Exactly four distinct ids to subnets must be provided. Changing this forces a new Integration Service Environment to be created.
     */
    virtualNetworkSubnetIds: pulumi.Input<pulumi.Input<string>[]>;
}
