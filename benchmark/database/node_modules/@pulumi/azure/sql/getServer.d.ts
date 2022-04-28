import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.sql.getServer({
 *     name: "examplesqlservername",
 *     resourceGroupName: "example-resources",
 * });
 * export const sqlServerId = example.then(example => example.id);
 * ```
 */
export declare function getServer(args: GetServerArgs, opts?: pulumi.InvokeOptions): Promise<GetServerResult>;
/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerArgs {
    /**
     * The name of the SQL Server.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group where the SQL Server exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getServer.
 */
export interface GetServerResult {
    /**
     * The administrator username of the SQL Server.
     */
    readonly administratorLogin: string;
    /**
     * The fully qualified domain name of the SQL Server.
     */
    readonly fqdn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * An `identity` block as defined below.
     */
    readonly identities: outputs.sql.GetServerIdentity[];
    /**
     * The location of the Resource Group in which the SQL Server exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The version of the SQL Server.
     */
    readonly version: string;
}
export declare function getServerOutput(args: GetServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServerResult>;
/**
 * A collection of arguments for invoking getServer.
 */
export interface GetServerOutputArgs {
    /**
     * The name of the SQL Server.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the SQL Server exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
