import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Database Migration Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.databasemigration.getService({
 *     name: "example-dms",
 *     resourceGroupName: "example-rg",
 * });
 * export const azurermDmsId = example.then(example => example.id);
 * ```
 */
export declare function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult>;
/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceArgs {
    /**
     * Specify the name of the database migration service.
     */
    name: string;
    /**
     * Specifies the Name of the Resource Group within which the database migration service exists
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getService.
 */
export interface GetServiceResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The sku name of database migration service.
     */
    readonly skuName: string;
    /**
     * The ID of the virtual subnet resource to which the database migration service exists.
     */
    readonly subnetId: string;
    /**
     * A mapping of tags to assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult>;
/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceOutputArgs {
    /**
     * Specify the name of the database migration service.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the Name of the Resource Group within which the database migration service exists
     */
    resourceGroupName: pulumi.Input<string>;
}
