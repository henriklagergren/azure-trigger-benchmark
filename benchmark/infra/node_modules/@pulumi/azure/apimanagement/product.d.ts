import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management Product.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@exmaple.com",
 *     skuName: "Developer_1",
 * });
 * const exampleProduct = new azure.apimanagement.Product("exampleProduct", {
 *     productId: "test-product",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     displayName: "Test Product",
 *     subscriptionRequired: true,
 *     approvalRequired: true,
 *     published: true,
 * });
 * ```
 *
 * ## Import
 *
 * API Management Products can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/product:Product example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/products/myproduct
 * ```
 */
export declare class Product extends pulumi.CustomResource {
    /**
     * Get an existing Product resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProductState, opts?: pulumi.CustomResourceOptions): Product;
    /**
     * Returns true if the given object is an instance of Product.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Product;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * Do subscribers need to be approved prior to being able to use the Product?
     */
    readonly approvalRequired: pulumi.Output<boolean | undefined>;
    /**
     * A description of this Product, which may include HTML formatting tags.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Display Name for this API Management Product.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The Identifier for this Product, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId: pulumi.Output<string>;
    /**
     * Is this Product Published?
     */
    readonly published: pulumi.Output<boolean>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Is a Subscription required to access API's included in this Product?
     */
    readonly subscriptionRequired: pulumi.Output<boolean>;
    /**
     * The number of subscriptions a user can have to this Product at the same time.
     */
    readonly subscriptionsLimit: pulumi.Output<number | undefined>;
    /**
     * The Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
     */
    readonly terms: pulumi.Output<string | undefined>;
    /**
     * Create a Product resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Product resources.
 */
export interface ProductState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * Do subscribers need to be approved prior to being able to use the Product?
     */
    approvalRequired?: pulumi.Input<boolean>;
    /**
     * A description of this Product, which may include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The Display Name for this API Management Product.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Identifier for this Product, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    productId?: pulumi.Input<string>;
    /**
     * Is this Product Published?
     */
    published?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Is a Subscription required to access API's included in this Product?
     */
    subscriptionRequired?: pulumi.Input<boolean>;
    /**
     * The number of subscriptions a user can have to this Product at the same time.
     */
    subscriptionsLimit?: pulumi.Input<number>;
    /**
     * The Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
     */
    terms?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Product resource.
 */
export interface ProductArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * Do subscribers need to be approved prior to being able to use the Product?
     */
    approvalRequired?: pulumi.Input<boolean>;
    /**
     * A description of this Product, which may include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The Display Name for this API Management Product.
     */
    displayName: pulumi.Input<string>;
    /**
     * The Identifier for this Product, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    productId: pulumi.Input<string>;
    /**
     * Is this Product Published?
     */
    published: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Is a Subscription required to access API's included in this Product?
     */
    subscriptionRequired: pulumi.Input<boolean>;
    /**
     * The number of subscriptions a user can have to this Product at the same time.
     */
    subscriptionsLimit?: pulumi.Input<number>;
    /**
     * The Terms and Conditions for this Product, which must be accepted by Developers before they can begin the Subscription process.
     */
    terms?: pulumi.Input<string>;
}
