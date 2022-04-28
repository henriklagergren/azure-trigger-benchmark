import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing MariaDB Server.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const dbServer = azure.mariadb.getMariaDbServer({
 *     name: "mariadb-server",
 *     resourceGroupName: azurerm_mariadb_server.example.resource_group_name,
 * });
 * export const mariadbServerId = data.azurerm_mariadb_server.example.id;
 * ```
 */
export declare function getMariaDbServer(args: GetMariaDbServerArgs, opts?: pulumi.InvokeOptions): Promise<GetMariaDbServerResult>;
/**
 * A collection of arguments for invoking getMariaDbServer.
 */
export interface GetMariaDbServerArgs {
    /**
     * The name of the MariaDB Server to retrieve information about.
     */
    name: string;
    /**
     * The name of the resource group where the MariaDB Server exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getMariaDbServer.
 */
export interface GetMariaDbServerResult {
    /**
     * The Administrator Login for the MariaDB Server.
     */
    readonly administratorLogin: string;
    /**
     * The FQDN of the MariaDB Server.
     */
    readonly fqdn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The SKU Name for this MariaDB Server.
     */
    readonly skuName: string;
    /**
     * The SSL being enforced on connections.
     */
    readonly sslEnforcement: string;
    /**
     * A `storageProfile` block as defined below.
     */
    readonly storageProfiles: outputs.mariadb.GetMariaDbServerStorageProfile[];
    /**
     * A mapping of tags assigned to the resource.
     * ---
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The version of MariaDB being used.
     */
    readonly version: string;
}
export declare function getMariaDbServerOutput(args: GetMariaDbServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMariaDbServerResult>;
/**
 * A collection of arguments for invoking getMariaDbServer.
 */
export interface GetMariaDbServerOutputArgs {
    /**
     * The name of the MariaDB Server to retrieve information about.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group where the MariaDB Server exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
