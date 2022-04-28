import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Automation Connection with type `Azure`.
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
 * const exampleCertificate = new azure.automation.Certificate("exampleCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     base64: Buffer.from(fs.readFileSync("certificate.pfx"), 'binary').toString('base64'),
 * });
 * const exampleConnectionCertificate = new azure.automation.ConnectionCertificate("exampleConnectionCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     automationCertificateName: exampleCertificate.name,
 *     subscriptionId: exampleClientConfig.then(exampleClientConfig => exampleClientConfig.subscriptionId),
 * });
 * ```
 *
 * ## Import
 *
 * Automation Connection can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/connectionCertificate:ConnectionCertificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/connections/conn1
 * ```
 */
export declare class ConnectionCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionCertificateState, opts?: pulumi.CustomResourceOptions): ConnectionCertificate;
    /**
     * Returns true if the given object is an instance of ConnectionCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConnectionCertificate;
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The name of the automation certificate.
     */
    readonly automationCertificateName: pulumi.Output<string>;
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
     * The id of subscription where the automation certificate exists.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * Create a ConnectionCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionCertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConnectionCertificate resources.
 */
export interface ConnectionCertificateState {
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The name of the automation certificate.
     */
    automationCertificateName?: pulumi.Input<string>;
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
     * The id of subscription where the automation certificate exists.
     */
    subscriptionId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ConnectionCertificate resource.
 */
export interface ConnectionCertificateArgs {
    /**
     * The name of the automation account in which the Connection is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of the automation certificate.
     */
    automationCertificateName: pulumi.Input<string>;
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
     * The id of subscription where the automation certificate exists.
     */
    subscriptionId: pulumi.Input<string>;
}
