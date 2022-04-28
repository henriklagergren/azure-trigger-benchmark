import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Analysis Services Server.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const server = new azure.analysisservices.Server("server", {
 *     location: "northeurope",
 *     resourceGroupName: rg.name,
 *     sku: "S0",
 *     adminUsers: ["myuser@domain.tld"],
 *     enablePowerBiService: true,
 *     ipv4FirewallRules: [{
 *         name: "myRule1",
 *         rangeStart: "210.117.252.0",
 *         rangeEnd: "210.117.252.255",
 *     }],
 *     tags: {
 *         abc: 123,
 *     },
 * });
 * ```
 *
 * > **NOTE:** The server resource will automatically be started and stopped during an update if it is in `paused` state.
 *
 * ## Import
 *
 * Analysis Services Server can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:analysisservices/server:Server server /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourcegroup1/providers/Microsoft.AnalysisServices/servers/server1
 * ```
 */
export declare class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server;
    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Server;
    /**
     * List of email addresses of admin users.
     */
    readonly adminUsers: pulumi.Output<string[] | undefined>;
    /**
     * URI and SAS token for a blob container to store backups.
     */
    readonly backupBlobContainerUri: pulumi.Output<string | undefined>;
    /**
     * Indicates if the Power BI service is allowed to access or not.
     */
    readonly enablePowerBiService: pulumi.Output<boolean | undefined>;
    /**
     * One or more `ipv4FirewallRule` block(s) as defined below.
     */
    readonly ipv4FirewallRules: pulumi.Output<outputs.analysisservices.ServerIpv4FirewallRule[] | undefined>;
    /**
     * The Azure location where the Analysis Services Server exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the firewall rule.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Controls how the read-write server is used in the query pool. If this value is set to `All` then read-write servers are also used for queries. Otherwise with `ReadOnly` these servers do not participate in query operations.
     */
    readonly querypoolConnectionMode: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Analysis Services Server should be exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The full name of the Analysis Services Server.
     */
    readonly serverFullName: pulumi.Output<string>;
    /**
     * SKU for the Analysis Services Server. Possible values are: `D1`, `B1`, `B2`, `S0`, `S1`, `S2`, `S4`, `S8`, `S9`, `S8v2` and `S9v2`.
     */
    readonly sku: pulumi.Output<string>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    /**
     * List of email addresses of admin users.
     */
    adminUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URI and SAS token for a blob container to store backups.
     */
    backupBlobContainerUri?: pulumi.Input<string>;
    /**
     * Indicates if the Power BI service is allowed to access or not.
     */
    enablePowerBiService?: pulumi.Input<boolean>;
    /**
     * One or more `ipv4FirewallRule` block(s) as defined below.
     */
    ipv4FirewallRules?: pulumi.Input<pulumi.Input<inputs.analysisservices.ServerIpv4FirewallRule>[]>;
    /**
     * The Azure location where the Analysis Services Server exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the firewall rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Controls how the read-write server is used in the query pool. If this value is set to `All` then read-write servers are also used for queries. Otherwise with `ReadOnly` these servers do not participate in query operations.
     */
    querypoolConnectionMode?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Analysis Services Server should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The full name of the Analysis Services Server.
     */
    serverFullName?: pulumi.Input<string>;
    /**
     * SKU for the Analysis Services Server. Possible values are: `D1`, `B1`, `B2`, `S0`, `S1`, `S2`, `S4`, `S8`, `S9`, `S8v2` and `S9v2`.
     */
    sku?: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * List of email addresses of admin users.
     */
    adminUsers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * URI and SAS token for a blob container to store backups.
     */
    backupBlobContainerUri?: pulumi.Input<string>;
    /**
     * Indicates if the Power BI service is allowed to access or not.
     */
    enablePowerBiService?: pulumi.Input<boolean>;
    /**
     * One or more `ipv4FirewallRule` block(s) as defined below.
     */
    ipv4FirewallRules?: pulumi.Input<pulumi.Input<inputs.analysisservices.ServerIpv4FirewallRule>[]>;
    /**
     * The Azure location where the Analysis Services Server exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the firewall rule.
     */
    name?: pulumi.Input<string>;
    /**
     * Controls how the read-write server is used in the query pool. If this value is set to `All` then read-write servers are also used for queries. Otherwise with `ReadOnly` these servers do not participate in query operations.
     */
    querypoolConnectionMode?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Analysis Services Server should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU for the Analysis Services Server. Possible values are: `D1`, `B1`, `B2`, `S0`, `S1`, `S2`, `S4`, `S8`, `S9`, `S8v2` and `S9v2`.
     */
    sku: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
