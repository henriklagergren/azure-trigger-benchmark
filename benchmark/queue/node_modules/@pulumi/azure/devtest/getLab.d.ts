import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Dev Test Lab.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.devtest.getLab({
 *     name: "example-lab",
 *     resourceGroupName: "example-resources",
 * });
 * export const uniqueIdentifier = example.then(example => example.uniqueIdentifier);
 * ```
 */
export declare function getLab(args: GetLabArgs, opts?: pulumi.InvokeOptions): Promise<GetLabResult>;
/**
 * A collection of arguments for invoking getLab.
 */
export interface GetLabArgs {
    /**
     * The name of the Dev Test Lab.
     */
    name: string;
    /**
     * The Name of the Resource Group where the Dev Test Lab exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getLab.
 */
export interface GetLabResult {
    /**
     * The ID of the Storage Account used for Artifact Storage.
     */
    readonly artifactsStorageAccountId: string;
    /**
     * The ID of the Default Premium Storage Account for this Dev Test Lab.
     */
    readonly defaultPremiumStorageAccountId: string;
    /**
     * The ID of the Default Storage Account for this Dev Test Lab.
     */
    readonly defaultStorageAccountId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The ID of the Key used for this Dev Test Lab.
     */
    readonly keyVaultId: string;
    /**
     * The Azure location where the Dev Test Lab exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The ID of the Storage Account used for Storage of Premium Data Disk.
     */
    readonly premiumDataDiskStorageAccountId: string;
    readonly resourceGroupName: string;
    /**
     * The type of storage used by the Dev Test Lab.
     */
    readonly storageType: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The unique immutable identifier of the Dev Test Lab.
     */
    readonly uniqueIdentifier: string;
}
export declare function getLabOutput(args: GetLabOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLabResult>;
/**
 * A collection of arguments for invoking getLab.
 */
export interface GetLabOutputArgs {
    /**
     * The name of the Dev Test Lab.
     */
    name: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the Dev Test Lab exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
