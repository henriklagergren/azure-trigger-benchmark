import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Automation Connection.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
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
 * const exampleConnection = new azure.automation.Connection("exampleConnection", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     type: "AzureServicePrincipal",
 *     values: {
 *         ApplicationId: "00000000-0000-0000-0000-000000000000",
 *         TenantId: exampleClientConfig.then(exampleClientConfig => exampleClientConfig.tenantId),
 *         SubscriptionId: exampleClientConfig.then(exampleClientConfig => exampleClientConfig.subscriptionId),
 *         CertificateThumbprint: "sample-certificate-thumbprint",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Automation Connection can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/connection:Connection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/connections/conn1
 * ```
 */
export declare class Connection extends pulumi.CustomResource {
    /**
     * Get an existing Connection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionState, opts?: pulumi.CustomResourceOptions): Connection;
    /**
     * Returns true if the given object is an instance of Connection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Connection;
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
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
     * The type of the Connection - can be either builtin type such as `Azure`, `AzureClassicCertificate`, and `AzureServicePrincipal`, or a user defined types. Changing this forces a new resource to be created.
     */
    readonly type: pulumi.Output<string>;
    /**
     * A mapping of key value pairs passed to the connection. Different `type` needs different parameters in the `values`. Builtin types have required field values as below:
     */
    readonly values: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Create a Connection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Connection resources.
 */
export interface ConnectionState {
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
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
     * The type of the Connection - can be either builtin type such as `Azure`, `AzureClassicCertificate`, and `AzureServicePrincipal`, or a user defined types. Changing this forces a new resource to be created.
     */
    type?: pulumi.Input<string>;
    /**
     * A mapping of key value pairs passed to the connection. Different `type` needs different parameters in the `values`. Builtin types have required field values as below:
     */
    values?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Connection resource.
 */
export interface ConnectionArgs {
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
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
     * The type of the Connection - can be either builtin type such as `Azure`, `AzureClassicCertificate`, and `AzureServicePrincipal`, or a user defined types. Changing this forces a new resource to be created.
     */
    type: pulumi.Input<string>;
    /**
     * A mapping of key value pairs passed to the connection. Different `type` needs different parameters in the `values`. Builtin types have required field values as below:
     */
    values: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
