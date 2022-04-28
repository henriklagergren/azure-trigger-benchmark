import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Container Registry scope map.  Scope Maps are a preview feature only available in Premium SKU Container registries.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleRegistry = new azure.containerservice.Registry("exampleRegistry", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "Premium",
 *     adminEnabled: false,
 *     georeplicationLocations: [
 *         "East US",
 *         "West Europe",
 *     ],
 * });
 * const exampleRegistryScopeMap = new azure.containerservice.RegistryScopeMap("exampleRegistryScopeMap", {
 *     containerRegistryName: azurerm_container_registry.acr.name,
 *     resourceGroupName: azurerm_resource_group.rg.name,
 *     actions: [
 *         "repositories/repo1/content/read",
 *         "repositories/repo1/content/write",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Container Registries can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:containerservice/registryScopeMap:RegistryScopeMap example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/mygroup1/providers/Microsoft.ContainerRegistry/registries/myregistry1/scopeMaps/scopemap1
 * ```
 */
export declare class RegistryScopeMap extends pulumi.CustomResource {
    /**
     * Get an existing RegistryScopeMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryScopeMapState, opts?: pulumi.CustomResourceOptions): RegistryScopeMap;
    /**
     * Returns true if the given object is an instance of RegistryScopeMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegistryScopeMap;
    /**
     * A list of actions to attach to the scope map (e.g. `repo/content/read`, `repo2/content/delete`).
     */
    readonly actions: pulumi.Output<string[]>;
    /**
     * The name of the Container Registry. Changing this forces a new resource to be created.
     */
    readonly containerRegistryName: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the scope map. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Container Registry token. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a RegistryScopeMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryScopeMapArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RegistryScopeMap resources.
 */
export interface RegistryScopeMapState {
    /**
     * A list of actions to attach to the scope map (e.g. `repo/content/read`, `repo2/content/delete`).
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Container Registry. Changing this forces a new resource to be created.
     */
    containerRegistryName?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the scope map. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Container Registry token. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RegistryScopeMap resource.
 */
export interface RegistryScopeMapArgs {
    /**
     * A list of actions to attach to the scope map (e.g. `repo/content/read`, `repo2/content/delete`).
     */
    actions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Container Registry. Changing this forces a new resource to be created.
     */
    containerRegistryName: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the scope map. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Container Registry token. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
