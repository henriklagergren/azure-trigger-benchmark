import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Subscription within a API Management Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleService = azure.apimanagement.getService({
 *     name: "example-apim",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleProduct = Promise.all([exampleService, exampleService]).then(([exampleService, exampleService1]) => azure.apimanagement.getProduct({
 *     productId: "00000000-0000-0000-0000-000000000000",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleService1.resourceGroupName,
 * }));
 * const exampleUser = Promise.all([exampleService, exampleService]).then(([exampleService, exampleService1]) => azure.apimanagement.getUser({
 *     userId: "11111111-1111-1111-1111-111111111111",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleService1.resourceGroupName,
 * }));
 * const exampleSubscription = new azure.apimanagement.Subscription("exampleSubscription", {
 *     apiManagementName: exampleService.then(exampleService => exampleService.name),
 *     resourceGroupName: exampleService.then(exampleService => exampleService.resourceGroupName),
 *     userId: exampleUser.then(exampleUser => exampleUser.id),
 *     productId: exampleProduct.then(exampleProduct => exampleProduct.id),
 *     displayName: "Parser API",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Subscriptions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/subscription:Subscription example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-resources/providers/Microsoft.ApiManagement/service/example-apim/subscriptions/subscription-name
 * ```
 */
export declare class Subscription extends pulumi.CustomResource {
    /**
     * Get an existing Subscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubscriptionState, opts?: pulumi.CustomResourceOptions): Subscription;
    /**
     * Returns true if the given object is an instance of Subscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Subscription;
    /**
     * Determines whether tracing can be enabled.  Defaults to `true`.
     */
    readonly allowTracing: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the API which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    readonly apiId: pulumi.Output<string | undefined>;
    /**
     * The name of the API Management Service where this Subscription should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The display name of this Subscription.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The primary subscription key to use for the subscription.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The ID of the Product which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    readonly productId: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary subscription key to use for the subscription.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * The state of this Subscription. Possible values are `active`, `cancelled`, `expired`, `rejected`, `submitted` and `suspended`. Defaults to `submitted`.
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * An Identifier which should used as the ID of this Subscription. If not specified a new Subscription ID will be generated. Changing this forces a new resource to be created.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * The ID of the User which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    readonly userId: pulumi.Output<string | undefined>;
    /**
     * Create a Subscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubscriptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Subscription resources.
 */
export interface SubscriptionState {
    /**
     * Determines whether tracing can be enabled.  Defaults to `true`.
     */
    allowTracing?: pulumi.Input<boolean>;
    /**
     * The ID of the API which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    apiId?: pulumi.Input<string>;
    /**
     * The name of the API Management Service where this Subscription should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The display name of this Subscription.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The primary subscription key to use for the subscription.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The ID of the Product which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    productId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary subscription key to use for the subscription.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * The state of this Subscription. Possible values are `active`, `cancelled`, `expired`, `rejected`, `submitted` and `suspended`. Defaults to `submitted`.
     */
    state?: pulumi.Input<string>;
    /**
     * An Identifier which should used as the ID of this Subscription. If not specified a new Subscription ID will be generated. Changing this forces a new resource to be created.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The ID of the User which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    userId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Subscription resource.
 */
export interface SubscriptionArgs {
    /**
     * Determines whether tracing can be enabled.  Defaults to `true`.
     */
    allowTracing?: pulumi.Input<boolean>;
    /**
     * The ID of the API which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    apiId?: pulumi.Input<string>;
    /**
     * The name of the API Management Service where this Subscription should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The display name of this Subscription.
     */
    displayName: pulumi.Input<string>;
    /**
     * The primary subscription key to use for the subscription.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The ID of the Product which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    productId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The secondary subscription key to use for the subscription.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * The state of this Subscription. Possible values are `active`, `cancelled`, `expired`, `rejected`, `submitted` and `suspended`. Defaults to `submitted`.
     */
    state?: pulumi.Input<string>;
    /**
     * An Identifier which should used as the ID of this Subscription. If not specified a new Subscription ID will be generated. Changing this forces a new resource to be created.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The ID of the User which should be assigned to this Subscription. Changing this forces a new resource to be created.
     */
    userId?: pulumi.Input<string>;
}
