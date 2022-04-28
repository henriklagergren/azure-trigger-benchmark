import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing PostgreSQL Flexible Server.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.postgresql.getFlexibleServer({
 *     name: "existing-postgresql-fs",
 *     resourceGroupName: "existing-postgresql-resgroup",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getFlexibleServer(args: GetFlexibleServerArgs, opts?: pulumi.InvokeOptions): Promise<GetFlexibleServerResult>;
/**
 * A collection of arguments for invoking getFlexibleServer.
 */
export interface GetFlexibleServerArgs {
    /**
     * The name of this PostgreSQL Flexible Server.
     */
    name: string;
    /**
     * The name of the Resource Group where the PostgreSQL Flexible Server exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getFlexibleServer.
 */
export interface GetFlexibleServerResult {
    /**
     * The Administrator Login for the PostgreSQL Flexible Server.
     */
    readonly administratorLogin: string;
    /**
     * The backup retention days for the PostgreSQL Flexible Server.
     */
    readonly backupRetentionDays: number;
    /**
     * The status showing whether the data encryption is enabled with a customer-managed key.
     *
     * @deprecated This attribute has been removed from the API and will be removed in version 3.0 of the provider.
     */
    readonly cmkEnabled: string;
    /**
     * The ID of the virtual network subnet to create the PostgreSQL Flexible Server.
     */
    readonly delegatedSubnetId: string;
    /**
     * The FQDN of the PostgreSQL Flexible Server.
     */
    readonly fqdn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the PostgreSQL Flexible Server exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * Is public network access enabled?
     */
    readonly publicNetworkAccessEnabled: boolean;
    readonly resourceGroupName: string;
    /**
     * The SKU Name for the PostgreSQL Flexible Server. The name of the SKU, follows the `tier` + `name` pattern (e.g. `B_Standard_B1ms`, `GP_Standard_D2s_v3`, `MO_Standard_E4s_v3`).
     */
    readonly skuName: string;
    /**
     * The max storage allowed for the PostgreSQL Flexible Server.
     */
    readonly storageMb: number;
    /**
     * A mapping of tags assigned to the PostgreSQL Flexible Server.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The version of PostgreSQL Flexible Server to use.
     */
    readonly version: string;
}
export declare function getFlexibleServerOutput(args: GetFlexibleServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlexibleServerResult>;
/**
 * A collection of arguments for invoking getFlexibleServer.
 */
export interface GetFlexibleServerOutputArgs {
    /**
     * The name of this PostgreSQL Flexible Server.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the PostgreSQL Flexible Server exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
