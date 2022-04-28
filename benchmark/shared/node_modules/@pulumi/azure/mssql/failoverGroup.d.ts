import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Microsoft Azure SQL Failover Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const primary = new azure.mssql.Server("primary", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "missadministrator",
 *     administratorLoginPassword: "thisIsKat11",
 * });
 * const secondary = new azure.mssql.Server("secondary", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "missadministrator",
 *     administratorLoginPassword: "thisIsKat12",
 * });
 * const exampleDatabase = new azure.mssql.Database("exampleDatabase", {
 *     serverId: primary.id,
 *     skuName: "S1",
 *     collation: "SQL_Latin1_General_CP1_CI_AS",
 *     maxSizeGb: "200",
 * });
 * const exampleFailoverGroup = new azure.mssql.FailoverGroup("exampleFailoverGroup", {
 *     serverId: primary.id,
 *     databases: [exampleDatabase.id],
 *     partnerServers: [{
 *         id: secondary.id,
 *     }],
 *     readWriteEndpointFailoverPolicy: {
 *         mode: "Automatic",
 *         graceMinutes: 80,
 *     },
 *     tags: {
 *         environment: "prod",
 *         database: "example",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Failover Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/failoverGroup:FailoverGroup example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Sql/servers/server1/failoverGroups/failoverGroup1
 * ```
 */
export declare class FailoverGroup extends pulumi.CustomResource {
    /**
     * Get an existing FailoverGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FailoverGroupState, opts?: pulumi.CustomResourceOptions): FailoverGroup;
    /**
     * Returns true if the given object is an instance of FailoverGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FailoverGroup;
    /**
     * A set of database names to include in the failover group.
     */
    readonly databases: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Failover Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `partnerServer` block as defined below.
     */
    readonly partnerServers: pulumi.Output<outputs.mssql.FailoverGroupPartnerServer[]>;
    /**
     * A `readWriteEndpointFailoverPolicy` block as defined below.
     */
    readonly readWriteEndpointFailoverPolicy: pulumi.Output<outputs.mssql.FailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * Whether failover is enabled for the readonly endpoint. Defaults to `false`.
     */
    readonly readonlyEndpointFailoverPolicyEnabled: pulumi.Output<boolean>;
    /**
     * The ID of the primary SQL Server on which to create the failover group. Changing this forces a new resource to be created.
     */
    readonly serverId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a FailoverGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FailoverGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FailoverGroup resources.
 */
export interface FailoverGroupState {
    /**
     * A set of database names to include in the failover group.
     */
    databases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Failover Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `partnerServer` block as defined below.
     */
    partnerServers?: pulumi.Input<pulumi.Input<inputs.mssql.FailoverGroupPartnerServer>[]>;
    /**
     * A `readWriteEndpointFailoverPolicy` block as defined below.
     */
    readWriteEndpointFailoverPolicy?: pulumi.Input<inputs.mssql.FailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * Whether failover is enabled for the readonly endpoint. Defaults to `false`.
     */
    readonlyEndpointFailoverPolicyEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the primary SQL Server on which to create the failover group. Changing this forces a new resource to be created.
     */
    serverId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a FailoverGroup resource.
 */
export interface FailoverGroupArgs {
    /**
     * A set of database names to include in the failover group.
     */
    databases?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Failover Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `partnerServer` block as defined below.
     */
    partnerServers: pulumi.Input<pulumi.Input<inputs.mssql.FailoverGroupPartnerServer>[]>;
    /**
     * A `readWriteEndpointFailoverPolicy` block as defined below.
     */
    readWriteEndpointFailoverPolicy: pulumi.Input<inputs.mssql.FailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * Whether failover is enabled for the readonly endpoint. Defaults to `false`.
     */
    readonlyEndpointFailoverPolicyEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the primary SQL Server on which to create the failover group. Changing this forces a new resource to be created.
     */
    serverId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
