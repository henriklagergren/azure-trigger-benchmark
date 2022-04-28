import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management Property.
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
 *     publisherName: "pub1",
 *     publisherEmail: "pub1@email.com",
 *     skuName: "Developer_1",
 * });
 * const exampleProperty = new azure.apimanagement.Property("exampleProperty", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     displayName: "ExampleProperty",
 *     value: "Example Value",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Properties can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/property:Property example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-resources/providers/Microsoft.ApiManagement/service/example-apim/namedValues/example-apimp
 * ```
 */
export declare class Property extends pulumi.CustomResource {
    /**
     * Get an existing Property resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PropertyState, opts?: pulumi.CustomResourceOptions): Property;
    /**
     * Returns true if the given object is an instance of Property.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Property;
    /**
     * The name of the API Management Service in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The display name of this API Management Property.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The name of the API Management Property. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies whether the API Management Property is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    readonly secret: pulumi.Output<boolean | undefined>;
    /**
     * A list of tags to be applied to the API Management Property.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * The value of this API Management Property.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a Property resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PropertyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Property resources.
 */
export interface PropertyState {
    /**
     * The name of the API Management Service in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The display name of this API Management Property.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the API Management Property. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies whether the API Management Property is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    secret?: pulumi.Input<boolean>;
    /**
     * A list of tags to be applied to the API Management Property.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of this API Management Property.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Property resource.
 */
export interface PropertyArgs {
    /**
     * The name of the API Management Service in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The display name of this API Management Property.
     */
    displayName: pulumi.Input<string>;
    /**
     * The name of the API Management Property. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Property should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies whether the API Management Property is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    secret?: pulumi.Input<boolean>;
    /**
     * A list of tags to be applied to the API Management Property.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of this API Management Property.
     */
    value: pulumi.Input<string>;
}
