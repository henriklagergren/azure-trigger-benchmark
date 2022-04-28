import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an App Service Static Site.
 *
 * ->**NOTE:** After the Static Site is provisioned, you'll need to associate your target repository, which contains your web app, to the Static Site, by following the [Azure Static Site document](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.appservice.StaticSite("example", {
 *     location: "West Europe",
 *     resourceGroupName: "example",
 * });
 * ```
 *
 * ## Import
 *
 * Static Web Apps can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/staticSite:StaticSite example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Web/staticSites/my-static-site1
 * ```
 */
export declare class StaticSite extends pulumi.CustomResource {
    /**
     * Get an existing StaticSite resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StaticSiteState, opts?: pulumi.CustomResourceOptions): StaticSite;
    /**
     * Returns true if the given object is an instance of StaticSite.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StaticSite;
    /**
     * The API key of this Static Web App, which is used for later interacting with this Static Web App from other clients, e.g. Github Action.
     */
    readonly apiKey: pulumi.Output<string>;
    /**
     * The default host name of the Static Web App.
     */
    readonly defaultHostName: pulumi.Output<string>;
    readonly identity: pulumi.Output<outputs.appservice.StaticSiteIdentity | undefined>;
    /**
     * The Azure Region where the Static Web App should exist. Changing this forces a new Static Web App to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Static Web App. Changing this forces a new Static Web App to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Static Web App should exist. Changing this forces a new Static Web App to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the sku size of the Static Web App. Possible values are "Free" or "Standard". Defaults to "Free".
     */
    readonly skuSize: pulumi.Output<string | undefined>;
    /**
     * Specifies the sku tier of the Static Web App. Possible values are "Free" or "Standard". Defaults to "Free".
     */
    readonly skuTier: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a StaticSite resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticSiteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StaticSite resources.
 */
export interface StaticSiteState {
    /**
     * The API key of this Static Web App, which is used for later interacting with this Static Web App from other clients, e.g. Github Action.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * The default host name of the Static Web App.
     */
    defaultHostName?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.appservice.StaticSiteIdentity>;
    /**
     * The Azure Region where the Static Web App should exist. Changing this forces a new Static Web App to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Static Web App. Changing this forces a new Static Web App to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Static Web App should exist. Changing this forces a new Static Web App to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the sku size of the Static Web App. Possible values are "Free" or "Standard". Defaults to "Free".
     */
    skuSize?: pulumi.Input<string>;
    /**
     * Specifies the sku tier of the Static Web App. Possible values are "Free" or "Standard". Defaults to "Free".
     */
    skuTier?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a StaticSite resource.
 */
export interface StaticSiteArgs {
    identity?: pulumi.Input<inputs.appservice.StaticSiteIdentity>;
    /**
     * The Azure Region where the Static Web App should exist. Changing this forces a new Static Web App to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Static Web App. Changing this forces a new Static Web App to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Static Web App should exist. Changing this forces a new Static Web App to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the sku size of the Static Web App. Possible values are "Free" or "Standard". Defaults to "Free".
     */
    skuSize?: pulumi.Input<string>;
    /**
     * Specifies the sku tier of the Static Web App. Possible values are "Free" or "Standard". Defaults to "Free".
     */
    skuTier?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
