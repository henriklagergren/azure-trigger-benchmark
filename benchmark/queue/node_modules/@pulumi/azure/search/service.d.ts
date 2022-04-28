import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Search Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.search.Service("exampleService", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "standard",
 * });
 * ```
 *
 * ## Import
 *
 * Search Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:search/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Search/searchServices/service1
 * ```
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * A list of IPv4 addresses or CIDRs that are allowed access to the search service endpoint.
     */
    readonly allowedIps: pulumi.Output<string[] | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.search.ServiceIdentity | undefined>;
    /**
     * The Azure Region where the Search Service should exist. Changing this forces a new Search Service to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Name which should be used for this Search Service. Changing this forces a new Search Service to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of partitions which should be created.
     */
    readonly partitionCount: pulumi.Output<number>;
    /**
     * The Primary Key used for Search Service Administration.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for this resource. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `queryKeys` block as defined below.
     */
    readonly queryKeys: pulumi.Output<outputs.search.ServiceQueryKey[]>;
    /**
     * The number of replica's which should be created.
     */
    readonly replicaCount: pulumi.Output<number>;
    /**
     * The name of the Resource Group where the Search Service should exist. Changing this forces a new Search Service to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Key used for Search Service Administration.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * The SKU which should be used for this Search Service. Possible values are `basic`, `free`, `standard`, `standard2`, `standard3`, `storageOptimizedL1` and `storageOptimizedL2`. Changing this forces a new Search Service to be created.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Search Service.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * A list of IPv4 addresses or CIDRs that are allowed access to the search service endpoint.
     */
    allowedIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.search.ServiceIdentity>;
    /**
     * The Azure Region where the Search Service should exist. Changing this forces a new Search Service to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this Search Service. Changing this forces a new Search Service to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of partitions which should be created.
     */
    partitionCount?: pulumi.Input<number>;
    /**
     * The Primary Key used for Search Service Administration.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this resource. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * A `queryKeys` block as defined below.
     */
    queryKeys?: pulumi.Input<pulumi.Input<inputs.search.ServiceQueryKey>[]>;
    /**
     * The number of replica's which should be created.
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * The name of the Resource Group where the Search Service should exist. Changing this forces a new Search Service to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Key used for Search Service Administration.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * The SKU which should be used for this Search Service. Possible values are `basic`, `free`, `standard`, `standard2`, `standard3`, `storageOptimizedL1` and `storageOptimizedL2`. Changing this forces a new Search Service to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Search Service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * A list of IPv4 addresses or CIDRs that are allowed access to the search service endpoint.
     */
    allowedIps?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.search.ServiceIdentity>;
    /**
     * The Azure Region where the Search Service should exist. Changing this forces a new Search Service to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this Search Service. Changing this forces a new Search Service to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of partitions which should be created.
     */
    partitionCount?: pulumi.Input<number>;
    /**
     * Whether or not public network access is allowed for this resource. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The number of replica's which should be created.
     */
    replicaCount?: pulumi.Input<number>;
    /**
     * The name of the Resource Group where the Search Service should exist. Changing this forces a new Search Service to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU which should be used for this Search Service. Possible values are `basic`, `free`, `standard`, `standard2`, `standard3`, `storageOptimizedL1` and `storageOptimizedL2`. Changing this forces a new Search Service to be created.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Search Service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
