import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Synapse Linked Service.
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
 *     accountKind: "BlobStorage",
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 *     managedVirtualNetworkEnabled: true,
 * });
 * const exampleFirewallRule = new azure.synapse.FirewallRule("exampleFirewallRule", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     startIpAddress: "0.0.0.0",
 *     endIpAddress: "255.255.255.255",
 * });
 * const exampleLinkedService = new azure.synapse.LinkedService("exampleLinkedService", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     type: "AzureBlobStorage",
 *     typePropertiesJson: `{
 *   "connectionString": "${azurerm_storage_account.test.primary_connection_string}"
 * }
 * `,
 * }, {
 *     dependsOn: [exampleFirewallRule],
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Linked Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/linkedService:LinkedService example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Synapse/workspaces/workspace1/linkedservices/linkedservice1
 * ```
 */
export declare class LinkedService extends pulumi.CustomResource {
    /**
     * Get an existing LinkedService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceState, opts?: pulumi.CustomResourceOptions): LinkedService;
    /**
     * Returns true if the given object is an instance of LinkedService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedService;
    /**
     * A map of additional properties to associate with the Synapse Linked Service.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Synapse Linked Service.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The description for the Synapse Linked Service.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A `integrationRuntime` block as defined below.
     */
    readonly integrationRuntime: pulumi.Output<outputs.synapse.LinkedServiceIntegrationRuntime | undefined>;
    /**
     * The name which should be used for this Synapse Linked Service. Changing this forces a new Synapse Linked Service to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Synapse Linked Service.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Synapse Workspace ID in which to associate the Linked Service with. Changing this forces a new Synapse Linked Service to be created.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * The type of data stores that will be connected to Synapse. For full list of supported data stores, please refer to [Azure Synapse connector](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview). Changing this forces a new Synapse Linked Service to be created.
     */
    readonly type: pulumi.Output<string>;
    /**
     * A JSON object that contains the properties of the Synapse Linked Service.
     */
    readonly typePropertiesJson: pulumi.Output<string>;
    /**
     * Create a LinkedService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedService resources.
 */
export interface LinkedServiceState {
    /**
     * A map of additional properties to associate with the Synapse Linked Service.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Synapse Linked Service.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The description for the Synapse Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * A `integrationRuntime` block as defined below.
     */
    integrationRuntime?: pulumi.Input<inputs.synapse.LinkedServiceIntegrationRuntime>;
    /**
     * The name which should be used for this Synapse Linked Service. Changing this forces a new Synapse Linked Service to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Synapse Linked Service.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Synapse Workspace ID in which to associate the Linked Service with. Changing this forces a new Synapse Linked Service to be created.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
    /**
     * The type of data stores that will be connected to Synapse. For full list of supported data stores, please refer to [Azure Synapse connector](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview). Changing this forces a new Synapse Linked Service to be created.
     */
    type?: pulumi.Input<string>;
    /**
     * A JSON object that contains the properties of the Synapse Linked Service.
     */
    typePropertiesJson?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinkedService resource.
 */
export interface LinkedServiceArgs {
    /**
     * A map of additional properties to associate with the Synapse Linked Service.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Synapse Linked Service.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The description for the Synapse Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * A `integrationRuntime` block as defined below.
     */
    integrationRuntime?: pulumi.Input<inputs.synapse.LinkedServiceIntegrationRuntime>;
    /**
     * The name which should be used for this Synapse Linked Service. Changing this forces a new Synapse Linked Service to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Synapse Linked Service.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Synapse Workspace ID in which to associate the Linked Service with. Changing this forces a new Synapse Linked Service to be created.
     */
    synapseWorkspaceId: pulumi.Input<string>;
    /**
     * The type of data stores that will be connected to Synapse. For full list of supported data stores, please refer to [Azure Synapse connector](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview). Changing this forces a new Synapse Linked Service to be created.
     */
    type: pulumi.Input<string>;
    /**
     * A JSON object that contains the properties of the Synapse Linked Service.
     */
    typePropertiesJson: pulumi.Input<string>;
}
