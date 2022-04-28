import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an HTTP Action within a Logic App Workflow
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
 * const exampleActionHttp = new azure.logicapps.ActionHttp("exampleActionHttp", {
 *     logicAppId: exampleWorkflow.id,
 *     method: "GET",
 *     uri: "http://example.com/some-webhook",
 * });
 * ```
 *
 * ## Import
 *
 * Logic App HTTP Actions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/actionHttp:ActionHttp webhook1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Logic/workflows/workflow1/actions/webhook1
 * ```
 */
export declare class ActionHttp extends pulumi.CustomResource {
    /**
     * Get an existing ActionHttp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionHttpState, opts?: pulumi.CustomResourceOptions): ActionHttp;
    /**
     * Returns true if the given object is an instance of ActionHttp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActionHttp;
    /**
     * Specifies the HTTP Body that should be sent to the `uri` when this HTTP Action is triggered.
     */
    readonly body: pulumi.Output<string | undefined>;
    /**
     * Specifies a Map of Key-Value Pairs that should be sent to the `uri` when this HTTP Action is triggered.
     */
    readonly headers: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: pulumi.Output<string>;
    /**
     * Specifies the HTTP Method which should be used for this HTTP Action. Possible values include `DELETE`, `GET`, `PATCH`, `POST` and `PUT`.
     */
    readonly method: pulumi.Output<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the place of the HTTP Action in the Logic App Workflow. If not specified, the HTTP Action is right after the Trigger. A `runAfter` block is as defined below.
     */
    readonly runAfters: pulumi.Output<outputs.logicapps.ActionHttpRunAfter[] | undefined>;
    /**
     * Specifies the URI which will be called when this HTTP Action is triggered.
     */
    readonly uri: pulumi.Output<string>;
    /**
     * Create a ActionHttp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionHttpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ActionHttp resources.
 */
export interface ActionHttpState {
    /**
     * Specifies the HTTP Body that should be sent to the `uri` when this HTTP Action is triggered.
     */
    body?: pulumi.Input<string>;
    /**
     * Specifies a Map of Key-Value Pairs that should be sent to the `uri` when this HTTP Action is triggered.
     */
    headers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId?: pulumi.Input<string>;
    /**
     * Specifies the HTTP Method which should be used for this HTTP Action. Possible values include `DELETE`, `GET`, `PATCH`, `POST` and `PUT`.
     */
    method?: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the place of the HTTP Action in the Logic App Workflow. If not specified, the HTTP Action is right after the Trigger. A `runAfter` block is as defined below.
     */
    runAfters?: pulumi.Input<pulumi.Input<inputs.logicapps.ActionHttpRunAfter>[]>;
    /**
     * Specifies the URI which will be called when this HTTP Action is triggered.
     */
    uri?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ActionHttp resource.
 */
export interface ActionHttpArgs {
    /**
     * Specifies the HTTP Body that should be sent to the `uri` when this HTTP Action is triggered.
     */
    body?: pulumi.Input<string>;
    /**
     * Specifies a Map of Key-Value Pairs that should be sent to the `uri` when this HTTP Action is triggered.
     */
    headers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId: pulumi.Input<string>;
    /**
     * Specifies the HTTP Method which should be used for this HTTP Action. Possible values include `DELETE`, `GET`, `PATCH`, `POST` and `PUT`.
     */
    method: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Action to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the place of the HTTP Action in the Logic App Workflow. If not specified, the HTTP Action is right after the Trigger. A `runAfter` block is as defined below.
     */
    runAfters?: pulumi.Input<pulumi.Input<inputs.logicapps.ActionHttpRunAfter>[]>;
    /**
     * Specifies the URI which will be called when this HTTP Action is triggered.
     */
    uri: pulumi.Input<string>;
}
