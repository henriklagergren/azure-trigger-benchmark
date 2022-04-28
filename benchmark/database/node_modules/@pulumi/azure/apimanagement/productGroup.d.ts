import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management Product Assignment to a Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleService = azure.apimanagement.getService({
 *     name: "example-api",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleProduct = Promise.all([exampleService, exampleService]).then(([exampleService, exampleService1]) => azure.apimanagement.getProduct({
 *     productId: "my-product",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleService1.resourceGroupName,
 * }));
 * const exampleGroup = Promise.all([exampleService, exampleService]).then(([exampleService, exampleService1]) => azure.apimanagement.getGroup({
 *     name: "my-group",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleService1.resourceGroupName,
 * }));
 * const exampleProductGroup = new azure.apimanagement.ProductGroup("exampleProductGroup", {
 *     productId: exampleProduct.then(exampleProduct => exampleProduct.productId),
 *     groupName: exampleGroup.then(exampleGroup => exampleGroup.name),
 *     apiManagementName: exampleService.then(exampleService => exampleService.name),
 *     resourceGroupName: exampleService.then(exampleService => exampleService.resourceGroupName),
 * });
 * ```
 *
 * ## Import
 *
 * API Management Product Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/productGroup:ProductGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/products/exampleId/groups/groupId
 * ```
 */
export declare class ProductGroup extends pulumi.CustomResource {
    /**
     * Get an existing ProductGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProductGroupState, opts?: pulumi.CustomResourceOptions): ProductGroup;
    /**
     * Returns true if the given object is an instance of ProductGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProductGroup;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly groupName: pulumi.Output<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a ProductGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ProductGroup resources.
 */
export interface ProductGroupState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    groupName?: pulumi.Input<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    productId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ProductGroup resource.
 */
export interface ProductGroupArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    groupName: pulumi.Input<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    productId: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
