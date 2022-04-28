import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Import
 *
 * Front Door Custom Https Configurations can be imported using the `resource id` of the Front Door Custom Https Configuration, e.g.
 *
 * ```sh
 *  $ pulumi import azure:frontdoor/customHttpsConfiguration:CustomHttpsConfiguration example_custom_https_1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/frontDoors/frontdoor1/customHttpsConfiguration/endpoint1
 * ```
 */
export declare class CustomHttpsConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing CustomHttpsConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomHttpsConfigurationState, opts?: pulumi.CustomResourceOptions): CustomHttpsConfiguration;
    /**
     * Returns true if the given object is an instance of CustomHttpsConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomHttpsConfiguration;
    /**
     * A `customHttpsConfiguration` block as defined below.
     */
    readonly customHttpsConfiguration: pulumi.Output<outputs.frontdoor.CustomHttpsConfigurationCustomHttpsConfiguration | undefined>;
    /**
     * Should the HTTPS protocol be enabled for this custom domain associated with the Front Door?
     */
    readonly customHttpsProvisioningEnabled: pulumi.Output<boolean>;
    /**
     * The ID of the FrontDoor Frontend Endpoint which this configuration refers to.
     */
    readonly frontendEndpointId: pulumi.Output<string>;
    /**
     * Create a CustomHttpsConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomHttpsConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CustomHttpsConfiguration resources.
 */
export interface CustomHttpsConfigurationState {
    /**
     * A `customHttpsConfiguration` block as defined below.
     */
    customHttpsConfiguration?: pulumi.Input<inputs.frontdoor.CustomHttpsConfigurationCustomHttpsConfiguration>;
    /**
     * Should the HTTPS protocol be enabled for this custom domain associated with the Front Door?
     */
    customHttpsProvisioningEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the FrontDoor Frontend Endpoint which this configuration refers to.
     */
    frontendEndpointId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CustomHttpsConfiguration resource.
 */
export interface CustomHttpsConfigurationArgs {
    /**
     * A `customHttpsConfiguration` block as defined below.
     */
    customHttpsConfiguration?: pulumi.Input<inputs.frontdoor.CustomHttpsConfigurationCustomHttpsConfiguration>;
    /**
     * Should the HTTPS protocol be enabled for this custom domain associated with the Front Door?
     */
    customHttpsProvisioningEnabled: pulumi.Input<boolean>;
    /**
     * The ID of the FrontDoor Frontend Endpoint which this configuration refers to.
     */
    frontendEndpointId: pulumi.Input<string>;
}
