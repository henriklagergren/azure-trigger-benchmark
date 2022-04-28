import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Automation Connection with type `AzureServicePrincipal`.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleClientConfig = azure.core.getClientConfig({});
 * const exampleAccount = new azure.automation.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: [{
 *         name: "Basic",
 *     }],
 * });
 * const exampleConnectionServicePrincipal = new azure.automation.ConnectionServicePrincipal("exampleConnectionServicePrincipal", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     applicationId: "00000000-0000-0000-0000-000000000000",
 *     tenantId: exampleClientConfig.then(exampleClientConfig => exampleClientConfig.tenantId),
 *     subscriptionId: exampleClientConfig.then(exampleClientConfig => exampleClientConfig.subscriptionId),
 *     certificateThumbprint: fs.readFileSync("automation_certificate_test.thumb"),
 * });
 * ```
 *
 * ## Import
 *
 * Automation Connection can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/connectionServicePrincipal:ConnectionServicePrincipal conn1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/connections/conn1
 * ```
 */
export declare class ConnectionServicePrincipal extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionServicePrincipal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionServicePrincipalState, opts?: pulumi.CustomResourceOptions): ConnectionServicePrincipal;
    /**
     * Returns true if the given object is an instance of ConnectionServicePrincipal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionServicePrincipal;
    /**
     * The (Client) ID of the Service Principal.
     */
    readonly applicationId: pulumi.Output<string>;
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The thumbprint of the Service Principal Certificate.
     */
    readonly certificateThumbprint: pulumi.Output<string>;
    /**
     * A description for this Connection.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Connection. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Connection is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The subscription GUID.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * The ID of the Tenant the Service Principal is assigned in.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a ConnectionServicePrincipal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionServicePrincipalArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionServicePrincipal resources.
 */
export interface ConnectionServicePrincipalState {
    /**
     * The (Client) ID of the Service Principal.
     */
    applicationId?: pulumi.Input<string>;
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The thumbprint of the Service Principal Certificate.
     */
    certificateThumbprint?: pulumi.Input<string>;
    /**
     * A description for this Connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Connection is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The subscription GUID.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The ID of the Tenant the Service Principal is assigned in.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ConnectionServicePrincipal resource.
 */
export interface ConnectionServicePrincipalArgs {
    /**
     * The (Client) ID of the Service Principal.
     */
    applicationId: pulumi.Input<string>;
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The thumbprint of the Service Principal Certificate.
     */
    certificateThumbprint: pulumi.Input<string>;
    /**
     * A description for this Connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Connection is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subscription GUID.
     */
    subscriptionId: pulumi.Input<string>;
    /**
     * The ID of the Tenant the Service Principal is assigned in.
     */
    tenantId: pulumi.Input<string>;
}
