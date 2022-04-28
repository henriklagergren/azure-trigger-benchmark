import * as pulumi from "@pulumi/pulumi";
/**
 * ## Import
 *
 * Databricks Workspace Customer Managed Key can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:databricks/workspaceCustomerManagedKey:WorkspaceCustomerManagedKey workspace1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Databricks/customerManagedKey/workspace1
 * ```
 */
export declare class WorkspaceCustomerManagedKey extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceCustomerManagedKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceCustomerManagedKeyState, opts?: pulumi.CustomResourceOptions): WorkspaceCustomerManagedKey;
    /**
     * Returns true if the given object is an instance of WorkspaceCustomerManagedKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceCustomerManagedKey;
    /**
     * The ID of the Key Vault.
     */
    readonly keyVaultKeyId: pulumi.Output<string>;
    /**
     * The ID of the Databricks workspace.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a WorkspaceCustomerManagedKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceCustomerManagedKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WorkspaceCustomerManagedKey resources.
 */
export interface WorkspaceCustomerManagedKeyState {
    /**
     * The ID of the Key Vault.
     */
    keyVaultKeyId?: pulumi.Input<string>;
    /**
     * The ID of the Databricks workspace.
     */
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WorkspaceCustomerManagedKey resource.
 */
export interface WorkspaceCustomerManagedKeyArgs {
    /**
     * The ID of the Key Vault.
     */
    keyVaultKeyId: pulumi.Input<string>;
    /**
     * The ID of the Databricks workspace.
     */
    workspaceId: pulumi.Input<string>;
}
