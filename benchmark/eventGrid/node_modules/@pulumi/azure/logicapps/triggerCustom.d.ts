import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Custom Trigger within a Logic App Workflow
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
 * const exampleTriggerCustom = new azure.logicapps.TriggerCustom("exampleTriggerCustom", {
 *     logicAppId: exampleWorkflow.id,
 *     body: `{
 *   "recurrence": {
 *     "frequency": "Day",
 *     "interval": 1
 *   },
 *   "type": "Recurrence"
 * }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Custom Triggers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/triggerCustom:TriggerCustom custom1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Logic/workflows/workflow1/triggers/custom1
 * ```
 */
export declare class TriggerCustom extends pulumi.CustomResource {
    /**
     * Get an existing TriggerCustom resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerCustomState, opts?: pulumi.CustomResourceOptions): TriggerCustom;
    /**
     * Returns true if the given object is an instance of TriggerCustom.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TriggerCustom;
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    readonly body: pulumi.Output<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: pulumi.Output<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a TriggerCustom resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerCustomArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TriggerCustom resources.
 */
export interface TriggerCustomState {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    body?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId?: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TriggerCustom resource.
 */
export interface TriggerCustomArgs {
    /**
     * Specifies the JSON Blob defining the Body of this Custom Trigger.
     */
    body: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
