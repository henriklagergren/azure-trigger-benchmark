import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Managed Application Definition.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDefinition = new azure.managedapplication.Definition("exampleDefinition", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     lockLevel: "ReadOnly",
 *     packageFileUri: "https://github.com/Azure/azure-managedapp-samples/raw/master/Managed Application Sample Packages/201-managed-storage-account/managedstorage.zip",
 *     displayName: "TestManagedApplicationDefinition",
 *     description: "Test Managed Application Definition",
 *     authorizations: [{
 *         servicePrincipalId: current.then(current => current.objectId),
 *         roleDefinitionId: "a094b430-dad3-424d-ae58-13f72fd72591",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Managed Application Definition can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:managedapplication/definition:Definition example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Solutions/applicationDefinitions/appDefinition1
 * ```
 */
export declare class Definition extends pulumi.CustomResource {
    /**
     * Get an existing Definition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefinitionState, opts?: pulumi.CustomResourceOptions): Definition;
    /**
     * Returns true if the given object is an instance of Definition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Definition;
    /**
     * One or more `authorization` block defined below.
     */
    readonly authorizations: pulumi.Output<outputs.managedapplication.DefinitionAuthorization[] | undefined>;
    /**
     * Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
     */
    readonly createUiDefinition: pulumi.Output<string | undefined>;
    /**
     * Specifies the managed application definition description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the managed application definition display name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
     */
    readonly lockLevel: pulumi.Output<string>;
    /**
     * Specifies the inline main template json which has resources to be provisioned.
     */
    readonly mainTemplate: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Is the package enabled? Defaults to `true`.
     */
    readonly packageEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the managed application definition package file Uri.
     */
    readonly packageFileUri: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Definition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Definition resources.
 */
export interface DefinitionState {
    /**
     * One or more `authorization` block defined below.
     */
    authorizations?: pulumi.Input<pulumi.Input<inputs.managedapplication.DefinitionAuthorization>[]>;
    /**
     * Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
     */
    createUiDefinition?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition display name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
     */
    lockLevel?: pulumi.Input<string>;
    /**
     * Specifies the inline main template json which has resources to be provisioned.
     */
    mainTemplate?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Is the package enabled? Defaults to `true`.
     */
    packageEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the managed application definition package file Uri.
     */
    packageFileUri?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Definition resource.
 */
export interface DefinitionArgs {
    /**
     * One or more `authorization` block defined below.
     */
    authorizations?: pulumi.Input<pulumi.Input<inputs.managedapplication.DefinitionAuthorization>[]>;
    /**
     * Specifies the `createUiDefinition` json for the backing template with `Microsoft.Solutions/applications` resource.
     */
    createUiDefinition?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the managed application definition display name.
     */
    displayName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the managed application lock level. Valid values include `CanNotDelete`, `None`, `ReadOnly`. Changing this forces a new resource to be created.
     */
    lockLevel: pulumi.Input<string>;
    /**
     * Specifies the inline main template json which has resources to be provisioned.
     */
    mainTemplate?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Application Definition. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Is the package enabled? Defaults to `true`.
     */
    packageEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the managed application definition package file Uri.
     */
    packageFileUri?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Managed Application Definition should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
