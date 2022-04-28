import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Custom Action within a Logic App Workflow
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleWorkflow = new azure.logicapps.Workflow("exampleWorkflow", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleActionCustom = new azure.logicapps.ActionCustom("exampleActionCustom", {
 *     logicAppId: exampleWorkflow.id,
 *     body: `{
 *     "description": "A variable to configure the auto expiration age in days. Configured in negative number. Default is -30 (30 days old).",
 *     "inputs": {
 *         "variables": [
 *             {
 *                 "name": "ExpirationAgeInDays",
 *                 "type": "Integer",
 *                 "value": -30
 *             }
 *         ]
 *     },
 *     "runAfter": {},
 *     "type": "InitializeVariable"
 * }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Custom Actions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/actionCustom:ActionCustom custom1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Logic/workflows/workflow1/actions/custom1
 * ```
 */
export declare class ActionCustom extends pulumi.CustomResource {
    /**
     * Get an existing ActionCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionCustomState, opts?: pulumi.CustomResourceOptions): ActionCustom;
    /**
     * Returns true if the given object is an instance of ActionCustom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActionCustom;
    /**
     * Specifies the JSON Blob defining the Body of this Custom Action.
     */
    readonly body: pulumi.Output<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: pulumi.Output<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a ActionCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionCustomArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ActionCustom resources.
 */
export interface ActionCustomState {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Action.
     */
    body?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId?: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ActionCustom resource.
 */
export interface ActionCustomArgs {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Action.
     */
    body: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
