import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Management Lock which is scoped to a Subscription, Resource Group or Resource.
 *
 * ## Example Usage
 * ### Subscription Level Lock)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getSubscription({});
 * const subscription_level = new azure.management.Lock("subscription-level", {
 *     scope: current.then(current => current.id),
 *     lockLevel: "CanNotDelete",
 *     notes: "Items can't be deleted in this subscription!",
 * });
 * ```
 *
 * ## Example Usage (Resource Group Level Lock)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const resource_group_level = new azure.management.Lock("resource-group-level", {
 *     scope: example.id,
 *     lockLevel: "ReadOnly",
 *     notes: "This Resource Group is Read-Only",
 * });
 * ```
 * ### Resource Level Lock)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 *     idleTimeoutInMinutes: 30,
 * });
 * const public_ip = new azure.management.Lock("public-ip", {
 *     scope: examplePublicIp.id,
 *     lockLevel: "CanNotDelete",
 *     notes: "Locked because it's needed by a third-party",
 * });
 * ```
 *
 * ## Import
 *
 * Management Locks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:management/lock:Lock lock1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Authorization/locks/lock1
 * ```
 */
export declare class Lock extends pulumi.CustomResource {
    /**
     * Get an existing Lock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LockState, opts?: pulumi.CustomResourceOptions): Lock;
    /**
     * Returns true if the given object is an instance of Lock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Lock;
    /**
     * Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
     */
    readonly lockLevel: pulumi.Output<string>;
    /**
     * Specifies the name of the Management Lock. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Output<string>;
    /**
     * Create a Lock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LockArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Lock resources.
 */
export interface LockState {
    /**
     * Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
     */
    lockLevel?: pulumi.Input<string>;
    /**
     * Specifies the name of the Management Lock. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
     */
    notes?: pulumi.Input<string>;
    /**
     * Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
     */
    scope?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Lock resource.
 */
export interface LockArgs {
    /**
     * Specifies the Level to be used for this Lock. Possible values are `CanNotDelete` and `ReadOnly`. Changing this forces a new resource to be created.
     */
    lockLevel: pulumi.Input<string>;
    /**
     * Specifies the name of the Management Lock. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies some notes about the lock. Maximum of 512 characters. Changing this forces a new resource to be created.
     */
    notes?: pulumi.Input<string>;
    /**
     * Specifies the scope at which the Management Lock should be created. Changing this forces a new resource to be created.
     */
    scope: pulumi.Input<string>;
}
