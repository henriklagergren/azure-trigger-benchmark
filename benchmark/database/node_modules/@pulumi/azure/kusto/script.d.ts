import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto Script.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.kusto.Cluster("exampleCluster", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Dev(No SLA)_Standard_D11_v2",
 *         capacity: 1,
 *     },
 * });
 * const exampleDatabase = new azure.kusto.Database("exampleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterName: exampleCluster.name,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleBlob = new azure.storage.Blob("exampleBlob", {
 *     storageAccountName: exampleAccount.name,
 *     storageContainerName: exampleContainer.name,
 *     type: "Block",
 *     sourceContent: ".create table MyTable (Level:string, Timestamp:datetime, UserId:string, TraceId:string, Message:string, ProcessId:int32)",
 * });
 * const exampleAccountBlobContainerSAS = azure.storage.getAccountBlobContainerSASOutput({
 *     connectionString: exampleAccount.primaryConnectionString,
 *     containerName: exampleContainer.name,
 *     httpsOnly: true,
 *     start: "2017-03-21",
 *     expiry: "2022-03-21",
 *     permissions: {
 *         read: true,
 *         add: false,
 *         create: false,
 *         write: true,
 *         "delete": false,
 *         list: true,
 *     },
 * });
 * const exampleScript = new azure.kusto.Script("exampleScript", {
 *     databaseId: exampleDatabase.id,
 *     url: exampleBlob.id,
 *     sasToken: exampleAccountBlobContainerSAS.apply(exampleAccountBlobContainerSAS => exampleAccountBlobContainerSAS.sas),
 *     continueOnErrorsEnabled: true,
 *     forceAnUpdateWhenValueChanged: "first",
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Scripts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/script:Script example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Kusto/Clusters/cluster1/Databases/database1/Scripts/script1
 * ```
 */
export declare class Script extends pulumi.CustomResource {
    /**
     * Get an existing Script resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScriptState, opts?: pulumi.CustomResourceOptions): Script;
    /**
     * Returns true if the given object is an instance of Script.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Script;
    /**
     * Flag that indicates whether to continue if one of the command fails.
     */
    readonly continueOnErrorsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Kusto Database. Changing this forces a new Kusto Script to be created.
     */
    readonly databaseId: pulumi.Output<string>;
    /**
     * A unique string. If changed the script will be applied again.
     */
    readonly forceAnUpdateWhenValueChanged: pulumi.Output<string>;
    /**
     * The name which should be used for this Kusto Script. Changing this forces a new Kusto Script to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The SAS token used to access the script.
     */
    readonly sasToken: pulumi.Output<string>;
    /**
     * The url to the KQL script blob file. Please reference [this documentation](https://docs.microsoft.com/en-us/azure/data-explorer/database-script) that describes the commands that are allowed in the script.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a Script resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScriptArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Script resources.
 */
export interface ScriptState {
    /**
     * Flag that indicates whether to continue if one of the command fails.
     */
    continueOnErrorsEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Kusto Database. Changing this forces a new Kusto Script to be created.
     */
    databaseId?: pulumi.Input<string>;
    /**
     * A unique string. If changed the script will be applied again.
     */
    forceAnUpdateWhenValueChanged?: pulumi.Input<string>;
    /**
     * The name which should be used for this Kusto Script. Changing this forces a new Kusto Script to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The SAS token used to access the script.
     */
    sasToken?: pulumi.Input<string>;
    /**
     * The url to the KQL script blob file. Please reference [this documentation](https://docs.microsoft.com/en-us/azure/data-explorer/database-script) that describes the commands that are allowed in the script.
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Script resource.
 */
export interface ScriptArgs {
    /**
     * Flag that indicates whether to continue if one of the command fails.
     */
    continueOnErrorsEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Kusto Database. Changing this forces a new Kusto Script to be created.
     */
    databaseId: pulumi.Input<string>;
    /**
     * A unique string. If changed the script will be applied again.
     */
    forceAnUpdateWhenValueChanged?: pulumi.Input<string>;
    /**
     * The name which should be used for this Kusto Script. Changing this forces a new Kusto Script to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The SAS token used to access the script.
     */
    sasToken: pulumi.Input<string>;
    /**
     * The url to the KQL script blob file. Please reference [this documentation](https://docs.microsoft.com/en-us/azure/data-explorer/database-script) that describes the commands that are allowed in the script.
     */
    url: pulumi.Input<string>;
}
