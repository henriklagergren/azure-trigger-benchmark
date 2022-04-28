import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Relay Hybrid Connection.
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
 *         source: "managed",
 *     },
 * });
 * const exampleHybridConnection = new azure.relay.HybridConnection("exampleHybridConnection", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     relayNamespaceName: exampleNamespace.name,
 *     requiresClientAuthorization: false,
 *     userMetadata: "testmetadata",
 * });
 * ```
 *
 * ## Import
 *
 * Relay Hybrid Connection's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:relay/hybridConnection:HybridConnection relay1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Relay/namespaces/relay1/hybridConnections/hconn1
 * ```
 */
export declare class HybridConnection extends pulumi.CustomResource {
    /**
     * Get an existing HybridConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HybridConnectionState, opts?: pulumi.CustomResourceOptions): HybridConnection;
    /**
     * Returns true if the given object is an instance of HybridConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HybridConnection;
    /**
     * Specifies the name of the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Azure Relay in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    readonly relayNamespaceName: pulumi.Output<string>;
    /**
     * Specify if client authorization is needed for this hybrid connection. True by default. Changing this forces a new resource to be created.
     */
    readonly requiresClientAuthorization: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    readonly userMetadata: pulumi.Output<string | undefined>;
    /**
     * Create a HybridConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering HybridConnection resources.
 */
export interface HybridConnectionState {
    /**
     * Specifies the name of the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Azure Relay in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    relayNamespaceName?: pulumi.Input<string>;
    /**
     * Specify if client authorization is needed for this hybrid connection. True by default. Changing this forces a new resource to be created.
     */
    requiresClientAuthorization?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    userMetadata?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a HybridConnection resource.
 */
export interface HybridConnectionArgs {
    /**
     * Specifies the name of the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Azure Relay in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    relayNamespaceName: pulumi.Input<string>;
    /**
     * Specify if client authorization is needed for this hybrid connection. True by default. Changing this forces a new resource to be created.
     */
    requiresClientAuthorization?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Azure Relay Hybrid Connection. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The usermetadata is a placeholder to store user-defined string data for the hybrid connection endpoint. For example, it can be used to store descriptive data, such as a list of teams and their contact information. Also, user-defined configuration settings can be stored.
     */
    userMetadata?: pulumi.Input<string>;
}
