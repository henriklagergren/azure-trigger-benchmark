import * as pulumi from "@pulumi/pulumi";
/**
 * Manages the Pricing Tier for Azure Security Center in the current subscription.
 *
 * > **NOTE:** Deletion of this resource does not change or reset the pricing tier to `Free`
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.securitycenter.SubscriptionPricing("example", {
 *     resourceType: "VirtualMachines",
 *     tier: "Standard",
 * });
 * ```
 *
 * ## Import
 *
 * The pricing tier can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:securitycenter/subscriptionPricing:SubscriptionPricing example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Security/pricings/<resource_type>
 * ```
 */
export declare class SubscriptionPricing extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionPricing resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubscriptionPricingState, opts?: pulumi.CustomResourceOptions): SubscriptionPricing;
    /**
     * Returns true if the given object is an instance of SubscriptionPricing.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SubscriptionPricing;
    /**
     * The resource type this setting affects. Possible values are `AppServices`, `ContainerRegistry`, `KeyVaults`, `KubernetesService`, `SqlServers`, `SqlServerVirtualMachines`, `StorageAccounts`, `VirtualMachines`, `Arm`, `OpenSourceRelationalDatabases`, `Containers` and `Dns`. Defaults to `VirtualMachines`.
     */
    readonly resourceType: pulumi.Output<string | undefined>;
    /**
     * The pricing tier to use. Possible values are `Free` and `Standard`.
     */
    readonly tier: pulumi.Output<string>;
    /**
     * Create a SubscriptionPricing resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionPricingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SubscriptionPricing resources.
 */
export interface SubscriptionPricingState {
    /**
     * The resource type this setting affects. Possible values are `AppServices`, `ContainerRegistry`, `KeyVaults`, `KubernetesService`, `SqlServers`, `SqlServerVirtualMachines`, `StorageAccounts`, `VirtualMachines`, `Arm`, `OpenSourceRelationalDatabases`, `Containers` and `Dns`. Defaults to `VirtualMachines`.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * The pricing tier to use. Possible values are `Free` and `Standard`.
     */
    tier?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SubscriptionPricing resource.
 */
export interface SubscriptionPricingArgs {
    /**
     * The resource type this setting affects. Possible values are `AppServices`, `ContainerRegistry`, `KeyVaults`, `KubernetesService`, `SqlServers`, `SqlServerVirtualMachines`, `StorageAccounts`, `VirtualMachines`, `Arm`, `OpenSourceRelationalDatabases`, `Containers` and `Dns`. Defaults to `VirtualMachines`.
     */
    resourceType?: pulumi.Input<string>;
    /**
     * The pricing tier to use. Possible values are `Free` and `Standard`.
     */
    tier: pulumi.Input<string>;
}
