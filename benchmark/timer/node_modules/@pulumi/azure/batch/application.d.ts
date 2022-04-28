import * as pulumi from "@pulumi/pulumi";
/**
 * Manages Azure Batch Application instance.
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
 * const exampleBatch_accountAccount = new azure.batch.Account("exampleBatch/accountAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     poolAllocationMode: "BatchService",
 *     storageAccountId: exampleAccount.id,
 * });
 * const exampleApplication = new azure.batch.Application("exampleApplication", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleBatch / accountAccount.name,
 * });
 * ```
 *
 * ## Import
 *
 * Batch Applications can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:batch/application:Application example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-rg/providers/Microsoft.Batch/batchAccounts/exampleba/applications/example-batch-application
 * ```
 */
export declare class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application;
    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Application;
    /**
     * The name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string. Defaults to `true`.
     */
    readonly allowUpdates: pulumi.Output<boolean | undefined>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    readonly defaultVersion: pulumi.Output<string | undefined>;
    /**
     * The display name for the application.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The name of the application. This must be unique within the account. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group that contains the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * The name of the Batch account. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string. Defaults to `true`.
     */
    allowUpdates?: pulumi.Input<boolean>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    defaultVersion?: pulumi.Input<string>;
    /**
     * The display name for the application.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the application. This must be unique within the account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The name of the Batch account. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * A value indicating whether packages within the application may be overwritten using the same version string. Defaults to `true`.
     */
    allowUpdates?: pulumi.Input<boolean>;
    /**
     * The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package.
     */
    defaultVersion?: pulumi.Input<string>;
    /**
     * The display name for the application.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the application. This must be unique within the account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the Batch account. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
