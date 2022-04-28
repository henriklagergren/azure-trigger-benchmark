import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a DevSpace Controller.
 *
 * > **NOTE:** Microsoft will be retiring Azure Dev Spaces on 31 October 2023, please see the product [documentation](https://azure.microsoft.com/en-us/updates/azure-dev-spaces-is-retiring-on-31-october-2023/) for more information.
 *
 * !> **NOTE:** The Azure API no longer allows provisioning new DevSpace Controllers - as such this resource exists only to allow existing users to continue managing these in the provider at this time.
 *
 * ## Import
 *
 * DevSpace Controller's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devspace/controller:Controller controller1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DevSpaces/controllers/controller1Name
 * ```
 */
export declare class Controller extends pulumi.CustomResource {
    /**
     * Get an existing Controller resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ControllerState, opts?: pulumi.CustomResourceOptions): Controller;
    /**
     * Returns true if the given object is an instance of Controller.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Controller;
    /**
     * DNS name for accessing DataPlane services.
     */
    readonly dataPlaneFqdn: pulumi.Output<string>;
    /**
     * The host suffix for the DevSpace Controller.
     */
    readonly hostSuffix: pulumi.Output<string>;
    /**
     * Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the SKU Name for this DevSpace Controller. Possible values are `S1`.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Base64 encoding of `kubeConfigRaw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    readonly targetContainerHostCredentialsBase64: pulumi.Output<string>;
    /**
     * The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    readonly targetContainerHostResourceId: pulumi.Output<string>;
    /**
     * Create a Controller resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ControllerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Controller resources.
 */
export interface ControllerState {
    /**
     * DNS name for accessing DataPlane services.
     */
    dataPlaneFqdn?: pulumi.Input<string>;
    /**
     * The host suffix for the DevSpace Controller.
     */
    hostSuffix?: pulumi.Input<string>;
    /**
     * Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this DevSpace Controller. Possible values are `S1`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Base64 encoding of `kubeConfigRaw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    targetContainerHostCredentialsBase64?: pulumi.Input<string>;
    /**
     * The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    targetContainerHostResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Controller resource.
 */
export interface ControllerArgs {
    /**
     * Specifies the supported location where the DevSpace Controller should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the DevSpace Controller. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the DevSpace Controller resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this DevSpace Controller. Possible values are `S1`.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Base64 encoding of `kubeConfigRaw` of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    targetContainerHostCredentialsBase64: pulumi.Input<string>;
    /**
     * The resource id of Azure Kubernetes Service cluster. Changing this forces a new resource to be created.
     */
    targetContainerHostResourceId: pulumi.Input<string>;
}
