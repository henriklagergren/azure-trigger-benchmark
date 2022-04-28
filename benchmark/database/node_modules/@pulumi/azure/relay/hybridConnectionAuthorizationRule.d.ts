import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Relay Hybrid Connection Authorization Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.relay.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Standard",
 *     tags: {
 *         source: "terraform",
 *     },
 * });
 * const exampleHybridConnection = new azure.relay.HybridConnection("exampleHybridConnection", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     relayNamespaceName: exampleNamespace.name,
 *     requiresClientAuthorization: false,
 *     userMetadata: "testmetadata",
 * });
 * const exampleHybridConnectionAuthorizationRule = new azure.relay.HybridConnectionAuthorizationRule("exampleHybridConnectionAuthorizationRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     hybridConnectionName: exampleHybridConnection.name,
 *     namespaceName: exampleNamespace.name,
 *     listen: true,
 *     send: true,
 *     manage: false,
 * });
 * ```
 *
 * ## Import
 *
 * Azure Relay Hybrid Connection Authorization Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:relay/hybridConnectionAuthorizationRule:HybridConnectionAuthorizationRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Relay/namespaces/namespace1/hybridConnections/connection1/authorizationRules/rule1
 * ```
 */
export declare class HybridConnectionAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing HybridConnectionAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HybridConnectionAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): HybridConnectionAuthorizationRule;
    /**
     * Returns true if the given object is an instance of HybridConnectionAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HybridConnectionAuthorizationRule;
    /**
     * Name of the Azure Relay Hybrid Connection for which this Azure Relay Hybrid Connection Authorization Rule will be created. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    readonly hybridConnectionName: pulumi.Output<string>;
    /**
     * Grants listen access to this Authorization Rule. Defaults to `false`.
     */
    readonly listen: pulumi.Output<boolean | undefined>;
    /**
     * Grants manage access to this Authorization Rule. When this property is `true` - both `listen` and `send` must be set to `true` too. Defaults to `false`.
     */
    readonly manage: pulumi.Output<boolean | undefined>;
    /**
     * The name which should be used for this Azure Relay Hybrid Connection Authorization Rule. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the Azure Relay Namespace for which this Azure Relay Hybrid Connection Authorization Rule will be created. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The Primary Connection String for the Azure Relay Hybrid Connection Authorization Rule.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The Primary Key for the Azure Relay Hybrid Connection Authorization Rule.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Azure Relay Hybrid Connection Authorization Rule should exist. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Connection String for the Azure Relay Hybrid Connection Authorization Rule.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The Secondary Key for the Azure Relay Hybrid Connection Authorization Rule.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * Grants send access to this Authorization Rule. Defaults to `false`.
     */
    readonly send: pulumi.Output<boolean | undefined>;
    /**
     * Create a HybridConnectionAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridConnectionAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering HybridConnectionAuthorizationRule resources.
 */
export interface HybridConnectionAuthorizationRuleState {
    /**
     * Name of the Azure Relay Hybrid Connection for which this Azure Relay Hybrid Connection Authorization Rule will be created. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    hybridConnectionName?: pulumi.Input<string>;
    /**
     * Grants listen access to this Authorization Rule. Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Grants manage access to this Authorization Rule. When this property is `true` - both `listen` and `send` must be set to `true` too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * The name which should be used for this Azure Relay Hybrid Connection Authorization Rule. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the Azure Relay Namespace for which this Azure Relay Hybrid Connection Authorization Rule will be created. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The Primary Connection String for the Azure Relay Hybrid Connection Authorization Rule.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The Primary Key for the Azure Relay Hybrid Connection Authorization Rule.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Relay Hybrid Connection Authorization Rule should exist. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Connection String for the Azure Relay Hybrid Connection Authorization Rule.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The Secondary Key for the Azure Relay Hybrid Connection Authorization Rule.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Grants send access to this Authorization Rule. Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a HybridConnectionAuthorizationRule resource.
 */
export interface HybridConnectionAuthorizationRuleArgs {
    /**
     * Name of the Azure Relay Hybrid Connection for which this Azure Relay Hybrid Connection Authorization Rule will be created. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    hybridConnectionName: pulumi.Input<string>;
    /**
     * Grants listen access to this Authorization Rule. Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Grants manage access to this Authorization Rule. When this property is `true` - both `listen` and `send` must be set to `true` too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * The name which should be used for this Azure Relay Hybrid Connection Authorization Rule. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the Azure Relay Namespace for which this Azure Relay Hybrid Connection Authorization Rule will be created. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Relay Hybrid Connection Authorization Rule should exist. Changing this forces a new Azure Relay Hybrid Connection Authorization Rule to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Grants send access to this Authorization Rule. Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
