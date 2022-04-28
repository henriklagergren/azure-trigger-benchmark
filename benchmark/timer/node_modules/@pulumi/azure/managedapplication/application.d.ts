import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Managed Application.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const builtin = azure.authorization.getRoleDefinition({
 *     name: "Contributor",
 * });
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDefinition = new azure.managedapplication.Definition("exampleDefinition", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     lockLevel: "ReadOnly",
 *     packageFileUri: "https://github.com/Azure/azure-managedapp-samples/raw/master/Managed Application Sample Packages/201-managed-storage-account/managedstorage.zip",
 *     displayName: "TestManagedAppDefinition",
 *     description: "Test Managed App Definition",
 *     authorizations: [{
 *         servicePrincipalId: current.then(current => current.objectId),
 *         roleDefinitionId: Promise.all([builtin.then(builtin => builtin.id.split("/")), builtin.then(builtin => builtin.id.split("/")).length]).then(([split, length]) => split[length - 1]),
 *     }],
 * });
 * const exampleApplication = new azure.managedapplication.Application("exampleApplication", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "ServiceCatalog",
 *     managedResourceGroupName: "infrastructureGroup",
 *     applicationDefinitionId: exampleDefinition.id,
 *     parameters: {
 *         location: exampleResourceGroup.location,
 *         storageAccountNamePrefix: "storeNamePrefix",
 *         storageAccountType: "Standard_LRS",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Managed Application can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:managedapplication/application:Application example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Solutions/applications/app1
 * ```
 */
export declare class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application;
    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Application;
    /**
     * The application definition ID to deploy.
     */
    readonly applicationDefinitionId: pulumi.Output<string | undefined>;
    /**
     * The kind of the managed application to deploy. Possible values are `MarketPlace` and `ServiceCatalog`. Changing this forces a new resource to be created.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the target resource group where all the resources deployed by the managed application will reside. Changing this forces a new resource to be created.
     */
    readonly managedResourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the name of the Managed Application. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name and value pairs that define the managed application outputs.
     */
    readonly outputs: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The parameter values to pass to the Managed Application. This field is a json object that allows you to assign parameters to this Managed Application.
     */
    readonly parameterValues: pulumi.Output<string>;
    /**
     * A mapping of name and value pairs to pass to the managed application as parameters.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * One `plan` block as defined below.
     */
    readonly plan: pulumi.Output<outputs.managedapplication.ApplicationPlan | undefined>;
    /**
     * The name of the Resource Group where the Managed Application should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * The application definition ID to deploy.
     */
    applicationDefinitionId?: pulumi.Input<string>;
    /**
     * The kind of the managed application to deploy. Possible values are `MarketPlace` and `ServiceCatalog`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the target resource group where all the resources deployed by the managed application will reside. Changing this forces a new resource to be created.
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Application. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name and value pairs that define the managed application outputs.
     */
    outputs?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The parameter values to pass to the Managed Application. This field is a json object that allows you to assign parameters to this Managed Application.
     */
    parameterValues?: pulumi.Input<string>;
    /**
     * A mapping of name and value pairs to pass to the managed application as parameters.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * One `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.managedapplication.ApplicationPlan>;
    /**
     * The name of the Resource Group where the Managed Application should exist. Changing this forces a new resource to be created.
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
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * The application definition ID to deploy.
     */
    applicationDefinitionId?: pulumi.Input<string>;
    /**
     * The kind of the managed application to deploy. Possible values are `MarketPlace` and `ServiceCatalog`. Changing this forces a new resource to be created.
     */
    kind: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the target resource group where all the resources deployed by the managed application will reside. Changing this forces a new resource to be created.
     */
    managedResourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Application. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The parameter values to pass to the Managed Application. This field is a json object that allows you to assign parameters to this Managed Application.
     */
    parameterValues?: pulumi.Input<string>;
    /**
     * A mapping of name and value pairs to pass to the managed application as parameters.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * One `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.managedapplication.ApplicationPlan>;
    /**
     * The name of the Resource Group where the Managed Application should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
