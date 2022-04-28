import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Logic App Integration Account Assembly.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIntegrationAccount = new azure.logicapps.IntegrationAccount("exampleIntegrationAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Basic",
 * });
 * const exampleIntegrationAccountAssembly = new azure.logicapps.IntegrationAccountAssembly("exampleIntegrationAccountAssembly", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     integrationAccountName: exampleIntegrationAccount.name,
 *     assemblyName: "TestAssembly",
 *     content: Buffer.from(fs.readFileSync("testdata/log4net.dll"), 'binary').toString('base64'),
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Account Assemblies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccountAssembly:IntegrationAccountAssembly example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1/assemblies/assembly1
 * ```
 */
export declare class IntegrationAccountAssembly extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountAssembly resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountAssemblyState, opts?: pulumi.CustomResourceOptions): IntegrationAccountAssembly;
    /**
     * Returns true if the given object is an instance of IntegrationAccountAssembly.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountAssembly;
    /**
     * The name of the Logic App Integration Account Assembly.
     */
    readonly assemblyName: pulumi.Output<string>;
    /**
     * The version of the Logic App Integration Account Assembly. Defaults to `0.0.0.0`.
     */
    readonly assemblyVersion: pulumi.Output<string | undefined>;
    /**
     * The content of the Logic App Integration Account Assembly.
     */
    readonly content: pulumi.Output<string | undefined>;
    /**
     * The content link URI of the Logic App Integration Account Assembly.
     */
    readonly contentLinkUri: pulumi.Output<string | undefined>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    readonly integrationAccountName: pulumi.Output<string>;
    /**
     * The metadata of the Logic App Integration Account Assembly.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name which should be used for this Logic App Integration Account Assembly Artifact. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Assembly Artifact should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountAssembly resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountAssemblyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccountAssembly resources.
 */
export interface IntegrationAccountAssemblyState {
    /**
     * The name of the Logic App Integration Account Assembly.
     */
    assemblyName?: pulumi.Input<string>;
    /**
     * The version of the Logic App Integration Account Assembly. Defaults to `0.0.0.0`.
     */
    assemblyVersion?: pulumi.Input<string>;
    /**
     * The content of the Logic App Integration Account Assembly.
     */
    content?: pulumi.Input<string>;
    /**
     * The content link URI of the Logic App Integration Account Assembly.
     */
    contentLinkUri?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * The metadata of the Logic App Integration Account Assembly.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name which should be used for this Logic App Integration Account Assembly Artifact. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Assembly Artifact should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationAccountAssembly resource.
 */
export interface IntegrationAccountAssemblyArgs {
    /**
     * The name of the Logic App Integration Account Assembly.
     */
    assemblyName: pulumi.Input<string>;
    /**
     * The version of the Logic App Integration Account Assembly. Defaults to `0.0.0.0`.
     */
    assemblyVersion?: pulumi.Input<string>;
    /**
     * The content of the Logic App Integration Account Assembly.
     */
    content?: pulumi.Input<string>;
    /**
     * The content link URI of the Logic App Integration Account Assembly.
     */
    contentLinkUri?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The metadata of the Logic App Integration Account Assembly.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name which should be used for this Logic App Integration Account Assembly Artifact. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Assembly Artifact should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
