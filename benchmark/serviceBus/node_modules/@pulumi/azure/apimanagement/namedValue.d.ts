import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an API Management Named Value.
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
 * const exampleNamedValue = new azure.apimanagement.NamedValue("exampleNamedValue", {
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
 *  $ pulumi import azure:apimanagement/namedValue:NamedValue example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-resources/providers/Microsoft.ApiManagement/service/example-apim/namedValues/example-apimp
 * ```
 */
export declare class NamedValue extends pulumi.CustomResource {
    /**
     * Get an existing NamedValue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamedValueState, opts?: pulumi.CustomResourceOptions): NamedValue;
    /**
     * Returns true if the given object is an instance of NamedValue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamedValue;
    /**
     * The name of the API Management Service in which the API Management Named Value should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The display name of this API Management Named Value.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The name of the API Management Named Value. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Named Value should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies whether the API Management Named Value is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    readonly secret: pulumi.Output<boolean | undefined>;
    /**
     * A list of tags to be applied to the API Management Named Value.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * The value of this API Management Named Value.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * A `valueFromKeyVault` block as defined below.
     */
    readonly valueFromKeyVault: pulumi.Output<outputs.apimanagement.NamedValueValueFromKeyVault | undefined>;
    /**
     * Create a NamedValue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamedValueArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NamedValue resources.
 */
export interface NamedValueState {
    /**
     * The name of the API Management Service in which the API Management Named Value should exist. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The display name of this API Management Named Value.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the API Management Named Value. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Named Value should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies whether the API Management Named Value is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    secret?: pulumi.Input<boolean>;
    /**
     * A list of tags to be applied to the API Management Named Value.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of this API Management Named Value.
     */
    value?: pulumi.Input<string>;
    /**
     * A `valueFromKeyVault` block as defined below.
     */
    valueFromKeyVault?: pulumi.Input<inputs.apimanagement.NamedValueValueFromKeyVault>;
}
/**
 * The set of arguments for constructing a NamedValue resource.
 */
export interface NamedValueArgs {
    /**
     * The name of the API Management Service in which the API Management Named Value should exist. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The display name of this API Management Named Value.
     */
    displayName: pulumi.Input<string>;
    /**
     * The name of the API Management Named Value. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Named Value should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies whether the API Management Named Value is secret. Valid values are `true` or `false`. The default value is `false`.
     */
    secret?: pulumi.Input<boolean>;
    /**
     * A list of tags to be applied to the API Management Named Value.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The value of this API Management Named Value.
     */
    value?: pulumi.Input<string>;
    /**
     * A `valueFromKeyVault` block as defined below.
     */
    valueFromKeyVault?: pulumi.Input<inputs.apimanagement.NamedValueValueFromKeyVault>;
}
