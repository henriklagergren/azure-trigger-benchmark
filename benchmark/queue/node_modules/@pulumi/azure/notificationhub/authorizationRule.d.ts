import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Authorization Rule associated with a Notification Hub within a Notification Hub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.notificationhub.Namespace("exampleNamespace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     namespaceType: "NotificationHub",
 *     skuName: "Free",
 * });
 * const exampleHub = new azure.notificationhub.Hub("exampleHub", {
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleAuthorizationRule = new azure.notificationhub.AuthorizationRule("exampleAuthorizationRule", {
 *     notificationHubName: exampleHub.name,
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     manage: true,
 *     send: true,
 *     listen: true,
 * });
 * ```
 *
 * ## Import
 *
 * Notification Hub Authorization Rule can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:notificationhub/authorizationRule:AuthorizationRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.NotificationHubs/namespaces/namespace1/notificationHubs/hub1/authorizationRules/rule1
 * ```
 */
export declare class AuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthorizationRuleState, opts?: pulumi.CustomResourceOptions): AuthorizationRule;
    /**
     * Returns true if the given object is an instance of AuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AuthorizationRule;
    /**
     * Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
     */
    readonly listen: pulumi.Output<boolean | undefined>;
    /**
     * Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
     */
    readonly manage: pulumi.Output<boolean | undefined>;
    /**
     * The name to use for this Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
     */
    readonly notificationHubName: pulumi.Output<string>;
    /**
     * The Primary Access Key associated with this Authorization Rule.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Access Key associated with this Authorization Rule.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
     */
    readonly send: pulumi.Output<boolean | undefined>;
    /**
     * Create a AuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AuthorizationRule resources.
 */
export interface AuthorizationRuleState {
    /**
     * Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * The name to use for this Authorization Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
     */
    notificationHubName?: pulumi.Input<string>;
    /**
     * The Primary Access Key associated with this Authorization Rule.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Access Key associated with this Authorization Rule.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a AuthorizationRule resource.
 */
export interface AuthorizationRuleArgs {
    /**
     * Does this Authorization Rule have Listen access to the Notification Hub? Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have Manage access to the Notification Hub? Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * The name to use for this Authorization Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which the Notification Hub exists. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the Notification Hub for which the Authorization Rule should be created. Changing this forces a new resource to be created.
     */
    notificationHubName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have Send access to the Notification Hub? Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
