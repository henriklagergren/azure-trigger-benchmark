import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Spring Cloud Storage.
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
 *     accountReplicationType: "GRS",
 * });
 * const exampleSpringCloudService = new azure.appplatform.SpringCloudService("exampleSpringCloudService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSpringCloudStorage = new azure.appplatform.SpringCloudStorage("exampleSpringCloudStorage", {
 *     springCloudServiceId: exampleSpringCloudService.id,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountKey: exampleAccount.primaryAccessKey,
 * });
 * ```
 *
 * ## Import
 *
 * Spring Cloud Storages can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appplatform/springCloudStorage:SpringCloudStorage example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resourceGroup1/providers/Microsoft.AppPlatform/Spring/service1/storages/storage1
 * ```
 */
export declare class SpringCloudStorage extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudStorageState, opts?: pulumi.CustomResourceOptions): SpringCloudStorage;
    /**
     * Returns true if the given object is an instance of SpringCloudStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SpringCloudStorage;
    /**
     * The name which should be used for this Spring Cloud Storage. Changing this forces a new Spring Cloud Storage to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Spring Cloud Service where the Spring Cloud Storage should exist. Changing this forces a new Spring Cloud Storage to be created.
     */
    readonly springCloudServiceId: pulumi.Output<string>;
    /**
     * The access key of the Azure Storage Account.
     */
    readonly storageAccountKey: pulumi.Output<string>;
    /**
     * The account name of the Azure Storage Account.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * Create a SpringCloudStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudStorageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SpringCloudStorage resources.
 */
export interface SpringCloudStorageState {
    /**
     * The name which should be used for this Spring Cloud Storage. Changing this forces a new Spring Cloud Storage to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Spring Cloud Service where the Spring Cloud Storage should exist. Changing this forces a new Spring Cloud Storage to be created.
     */
    springCloudServiceId?: pulumi.Input<string>;
    /**
     * The access key of the Azure Storage Account.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The account name of the Azure Storage Account.
     */
    storageAccountName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SpringCloudStorage resource.
 */
export interface SpringCloudStorageArgs {
    /**
     * The name which should be used for this Spring Cloud Storage. Changing this forces a new Spring Cloud Storage to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Spring Cloud Service where the Spring Cloud Storage should exist. Changing this forces a new Spring Cloud Storage to be created.
     */
    springCloudServiceId: pulumi.Input<string>;
    /**
     * The access key of the Azure Storage Account.
     */
    storageAccountKey: pulumi.Input<string>;
    /**
     * The account name of the Azure Storage Account.
     */
    storageAccountName: pulumi.Input<string>;
}
