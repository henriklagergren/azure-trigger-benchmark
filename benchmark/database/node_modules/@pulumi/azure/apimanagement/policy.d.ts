import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management service Policy.
 *
 * > **NOTE:** This resource will, upon creation, **overwrite any existing policy in the API Management service**, as there is no feasible way to test whether the policy has been modified from the default. Similarly, when this resource is destroyed, the API Management service will revert to its default policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "pub1",
 *     publisherEmail: "pub1@email.com",
 *     skuName: "Developer_1",
 * });
 * const exampleNamedValue = new azure.apimanagement.NamedValue("exampleNamedValue", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     displayName: "ExampleProperty",
 *     value: "Example Value",
 * });
 * const examplePolicy = new azure.apimanagement.Policy("examplePolicy", {
 *     apiManagementId: exampleService.id,
 *     xmlContent: fs.readFileSync("example.xml"),
 * });
 * ```
 *
 * ## Import
 *
 * API Management service Policys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/policy:Policy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/instance1/policies/policy
 * ```
 */
export declare class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy;
    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Policy;
    /**
     * The ID of the API Management service. Changing this forces a new API Management service Policy to be created.
     */
    readonly apiManagementId: pulumi.Output<string>;
    /**
     * The XML Content for this Policy as a string.
     */
    readonly xmlContent: pulumi.Output<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    readonly xmlLink: pulumi.Output<string | undefined>;
    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * The ID of the API Management service. Changing this forces a new API Management service Policy to be created.
     */
    apiManagementId?: pulumi.Input<string>;
    /**
     * The XML Content for this Policy as a string.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * The ID of the API Management service. Changing this forces a new API Management service Policy to be created.
     */
    apiManagementId: pulumi.Input<string>;
    /**
     * The XML Content for this Policy as a string.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
