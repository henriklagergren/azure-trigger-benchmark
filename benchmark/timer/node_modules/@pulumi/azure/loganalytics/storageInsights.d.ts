import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics Storage Insights resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "PerGB2018",
 *     retentionInDays: 30,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleStorageInsights = new azure.loganalytics.StorageInsights("exampleStorageInsights", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceId: exampleAnalyticsWorkspace.id,
 *     storageAccountId: exampleAccount.id,
 *     storageAccountKey: exampleAccount.primaryAccessKey,
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Storage Insight Configs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/storageInsights:StorageInsights example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/storageInsightConfigs/storageInsight1
 * ```
 */
export declare class StorageInsights extends pulumi.CustomResource {
    /**
     * Get an existing StorageInsights resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StorageInsightsState, opts?: pulumi.CustomResourceOptions): StorageInsights;
    /**
     * Returns true if the given object is an instance of StorageInsights.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StorageInsights;
    /**
     * The names of the blob containers that the workspace should read.
     */
    readonly blobContainerNames: pulumi.Output<string[] | undefined>;
    /**
     * The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Storage Account used by this Log Analytics Storage Insights.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * The storage access key to be used to connect to the storage account.
     */
    readonly storageAccountKey: pulumi.Output<string>;
    /**
     * The names of the Azure tables that the workspace should read.
     */
    readonly tableNames: pulumi.Output<string[] | undefined>;
    /**
     * A mapping of tags which should be assigned to the Log Analytics Storage Insights.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a StorageInsights resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageInsightsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StorageInsights resources.
 */
export interface StorageInsightsState {
    /**
     * The names of the blob containers that the workspace should read.
     */
    blobContainerNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account used by this Log Analytics Storage Insights.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The storage access key to be used to connect to the storage account.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The names of the Azure tables that the workspace should read.
     */
    tableNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags which should be assigned to the Log Analytics Storage Insights.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StorageInsights resource.
 */
export interface StorageInsightsArgs {
    /**
     * The names of the blob containers that the workspace should read.
     */
    blobContainerNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for this Log Analytics Storage Insights. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Storage Account used by this Log Analytics Storage Insights.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * The storage access key to be used to connect to the storage account.
     */
    storageAccountKey: pulumi.Input<string>;
    /**
     * The names of the Azure tables that the workspace should read.
     */
    tableNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags which should be assigned to the Log Analytics Storage Insights.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Log Analytics Workspace within which the Storage Insights should exist. Changing this forces a new Log Analytics Storage Insights to be created.
     */
    workspaceId: pulumi.Input<string>;
}
