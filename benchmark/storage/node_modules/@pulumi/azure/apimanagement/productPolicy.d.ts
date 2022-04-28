import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management Product Policy
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleProduct = azure.apimanagement.getProduct({
 *     productId: "my-product",
 *     apiManagementName: "example-apim",
 *     resourceGroupName: "search-service",
 * });
 * const exampleProductPolicy = new azure.apimanagement.ProductPolicy("exampleProductPolicy", {
 *     productId: exampleProduct.then(exampleProduct => exampleProduct.productId),
 *     apiManagementName: exampleProduct.then(exampleProduct => exampleProduct.apiManagementName),
 *     resourceGroupName: exampleProduct.then(exampleProduct => exampleProduct.resourceGroupName),
 *     xmlContent: `<policies>
 *   <inbound>
 *     <find-and-replace from="xyz" to="abc" />
 *   </inbound>
 * </policies>
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * API Management Product Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/productPolicy:ProductPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/products/exampleId/policies/policy
 * ```
 */
export declare class ProductPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ProductPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProductPolicyState, opts?: pulumi.CustomResourceOptions): ProductPolicy;
    /**
     * Returns true if the given object is an instance of ProductPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProductPolicy;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly productId: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The XML Content for this Policy.
     */
    readonly xmlContent: pulumi.Output<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    readonly xmlLink: pulumi.Output<string | undefined>;
    /**
     * Create a ProductPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProductPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ProductPolicy resources.
 */
export interface ProductPolicyState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    productId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The XML Content for this Policy.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ProductPolicy resource.
 */
export interface ProductPolicyArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The ID of the API Management Product within the API Management Service. Changing this forces a new resource to be created.
     */
    productId: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The XML Content for this Policy.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
