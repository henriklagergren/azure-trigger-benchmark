import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Dev Test Lab.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLab = new azure.devtest.Lab("exampleLab", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         Sydney: "Australia",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Dev Test Labs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devtest/lab:Lab lab1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DevTestLab/labs/lab1
 * ```
 */
export declare class Lab extends pulumi.CustomResource {
    /**
     * Get an existing Lab resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LabState, opts?: pulumi.CustomResourceOptions): Lab;
    /**
     * Returns true if the given object is an instance of Lab.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Lab;
    /**
     * The ID of the Storage Account used for Artifact Storage.
     */
    readonly artifactsStorageAccountId: pulumi.Output<string>;
    /**
     * The ID of the Default Premium Storage Account for this Dev Test Lab.
     */
    readonly defaultPremiumStorageAccountId: pulumi.Output<string>;
    /**
     * The ID of the Default Storage Account for this Dev Test Lab.
     */
    readonly defaultStorageAccountId: pulumi.Output<string>;
    /**
     * The ID of the Key used for this Dev Test Lab.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Storage Account used for Storage of Premium Data Disk.
     */
    readonly premiumDataDiskStorageAccountId: pulumi.Output<string>;
    /**
     * The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
     */
    readonly storageType: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The unique immutable identifier of the Dev Test Lab.
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * Create a Lab resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Lab resources.
 */
export interface LabState {
    /**
     * The ID of the Storage Account used for Artifact Storage.
     */
    artifactsStorageAccountId?: pulumi.Input<string>;
    /**
     * The ID of the Default Premium Storage Account for this Dev Test Lab.
     */
    defaultPremiumStorageAccountId?: pulumi.Input<string>;
    /**
     * The ID of the Default Storage Account for this Dev Test Lab.
     */
    defaultStorageAccountId?: pulumi.Input<string>;
    /**
     * The ID of the Key used for this Dev Test Lab.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account used for Storage of Premium Data Disk.
     */
    premiumDataDiskStorageAccountId?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
     */
    storageType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of the Dev Test Lab.
     */
    uniqueIdentifier?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Lab resource.
 */
export interface LabArgs {
    /**
     * Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
     */
    storageType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
