import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a user assigned identity.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleUserAssignedIdentity = new azure.authorization.UserAssignedIdentity("exampleUserAssignedIdentity", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * ```
 *
 * ## Import
 *
 * User Assigned Identities can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:authorization/userAssignedIdentity:UserAssignedIdentity exampleIdentity /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/acceptanceTestResourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testIdentity
 * ```
 */
export declare class UserAssignedIdentity extends pulumi.CustomResource {
    /**
     * Get an existing UserAssignedIdentity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserAssignedIdentityState, opts?: pulumi.CustomResourceOptions): UserAssignedIdentity;
    /**
     * Returns true if the given object is an instance of UserAssignedIdentity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is UserAssignedIdentity;
    /**
     * Client ID associated with the user assigned identity.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * The location/region where the user assigned identity is
     * created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the user assigned identity. Changing this forces a
     * new identity to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Service Principal ID associated with the user assigned identity.
     */
    readonly principalId: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the user assigned identity.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Tenant ID associated with the user assigned identity.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a UserAssignedIdentity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserAssignedIdentityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering UserAssignedIdentity resources.
 */
export interface UserAssignedIdentityState {
    /**
     * Client ID associated with the user assigned identity.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The location/region where the user assigned identity is
     * created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the user assigned identity. Changing this forces a
     * new identity to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Service Principal ID associated with the user assigned identity.
     */
    principalId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the user assigned identity.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Tenant ID associated with the user assigned identity.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a UserAssignedIdentity resource.
 */
export interface UserAssignedIdentityArgs {
    /**
     * The location/region where the user assigned identity is
     * created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the user assigned identity. Changing this forces a
     * new identity to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the user assigned identity.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
