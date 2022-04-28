import * as pulumi from "@pulumi/pulumi";
/**
 * Manages Portal Tenant Configuration.
 *
 * > **Note:** User has to be `Contributor` or `Owner` at scope `/` for managing this resource.
 *
 * > **Note:** The Service Principal with Tenant Admin can be created by `az ad sp create-for-rbac --name "<sp name>" --role="Contributor" --scopes="/"`.
 *
 * > **Note:** The Service Principal can be granted Tenant Admin permission by `az role assignment create --assignee "<app id>" --role "Contributor" --scope "/"`.
 *
 * > **Note:** While assigning the role to the existing/new Service Principal at the Tenant Scope, the user assigning role must already have the `Owner` role assigned at the Tenant Scope.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.PortalTenantConfiguration("example", {
 *     privateMarkdownStorageEnforced: true,
 * });
 * ```
 *
 * ## Import
 *
 * Portal Tenant Configurations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:core/portalTenantConfiguration:PortalTenantConfiguration example /providers/Microsoft.Portal/tenantConfigurations/default
 * ```
 */
export declare class PortalTenantConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing PortalTenantConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PortalTenantConfigurationState, opts?: pulumi.CustomResourceOptions): PortalTenantConfiguration;
    /**
     * Returns true if the given object is an instance of PortalTenantConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PortalTenantConfiguration;
    /**
     * Is the private tile markdown storage which used to display custom dynamic and static content enabled?
     */
    readonly privateMarkdownStorageEnforced: pulumi.Output<boolean>;
    /**
     * Create a PortalTenantConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PortalTenantConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PortalTenantConfiguration resources.
 */
export interface PortalTenantConfigurationState {
    /**
     * Is the private tile markdown storage which used to display custom dynamic and static content enabled?
     */
    privateMarkdownStorageEnforced?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a PortalTenantConfiguration resource.
 */
export interface PortalTenantConfigurationArgs {
    /**
     * Is the private tile markdown storage which used to display custom dynamic and static content enabled?
     */
    privateMarkdownStorageEnforced: pulumi.Input<boolean>;
}
