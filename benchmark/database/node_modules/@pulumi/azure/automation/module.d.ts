import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Automation Module.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.automation.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: [{
 *         name: "Basic",
 *     }],
 * });
 * const exampleModule = new azure.automation.Module("exampleModule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     moduleLink: {
 *         uri: "https://devopsgallerystorage.blob.core.windows.net/packages/xactivedirectory.2.19.0.nupkg",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Automation Modules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/module:Module module1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/modules/module1
 * ```
 */
export declare class Module extends pulumi.CustomResource {
    /**
     * Get an existing Module resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ModuleState, opts?: pulumi.CustomResourceOptions): Module;
    /**
     * Returns true if the given object is an instance of Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Module;
    /**
     * The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The published Module link.
     */
    readonly moduleLink: pulumi.Output<outputs.automation.ModuleModuleLink>;
    /**
     * Specifies the name of the Module. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Module resources.
 */
export interface ModuleState {
    /**
     * The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The published Module link.
     */
    moduleLink?: pulumi.Input<inputs.automation.ModuleModuleLink>;
    /**
     * Specifies the name of the Module. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Module resource.
 */
export interface ModuleArgs {
    /**
     * The name of the automation account in which the Module is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The published Module link.
     */
    moduleLink: pulumi.Input<inputs.automation.ModuleModuleLink>;
    /**
     * Specifies the name of the Module. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Module is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
