import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a HTTP Request Trigger within a Logic App Workflow
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
 * const exampleTriggerHttpRequest = new azure.logicapps.TriggerHttpRequest("exampleTriggerHttpRequest", {
 *     logicAppId: exampleWorkflow.id,
 *     schema: `{
 *     "type": "object",
 *     "properties": {
 *         "hello": {
 *             "type": "string"
 *         }
 *     }
 * }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Logic App HTTP Request Triggers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/triggerHttpRequest:TriggerHttpRequest request1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Logic/workflows/workflow1/triggers/request1
 * ```
 */
export declare class TriggerHttpRequest extends pulumi.CustomResource {
    /**
     * Get an existing TriggerHttpRequest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerHttpRequestState, opts?: pulumi.CustomResourceOptions): TriggerHttpRequest;
    /**
     * Returns true if the given object is an instance of TriggerHttpRequest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TriggerHttpRequest;
    /**
     * The URL for the workflow trigger
     */
    readonly callbackUrl: pulumi.Output<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly logicAppId: pulumi.Output<string>;
    /**
     * Specifies the HTTP Method which the request be using. Possible values include `DELETE`, `GET`, `PATCH`, `POST` or `PUT`.
     */
    readonly method: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the HTTP Request Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Relative Path used for this Request.
     */
    readonly relativePath: pulumi.Output<string | undefined>;
    /**
     * A JSON Blob defining the Schema of the incoming request. This needs to be valid JSON.
     */
    readonly schema: pulumi.Output<string>;
    /**
     * Create a TriggerHttpRequest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerHttpRequestArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TriggerHttpRequest resources.
 */
export interface TriggerHttpRequestState {
    /**
     * The URL for the workflow trigger
     */
    callbackUrl?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId?: pulumi.Input<string>;
    /**
     * Specifies the HTTP Method which the request be using. Possible values include `DELETE`, `GET`, `PATCH`, `POST` or `PUT`.
     */
    method?: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Request Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Relative Path used for this Request.
     */
    relativePath?: pulumi.Input<string>;
    /**
     * A JSON Blob defining the Schema of the incoming request. This needs to be valid JSON.
     */
    schema?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TriggerHttpRequest resource.
 */
export interface TriggerHttpRequestArgs {
    /**
     * Specifies the ID of the Logic App Workflow. Changing this forces a new resource to be created.
     */
    logicAppId: pulumi.Input<string>;
    /**
     * Specifies the HTTP Method which the request be using. Possible values include `DELETE`, `GET`, `PATCH`, `POST` or `PUT`.
     */
    method?: pulumi.Input<string>;
    /**
     * Specifies the name of the HTTP Request Trigger to be created within the Logic App Workflow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Relative Path used for this Request.
     */
    relativePath?: pulumi.Input<string>;
    /**
     * A JSON Blob defining the Schema of the incoming request. This needs to be valid JSON.
     */
    schema: pulumi.Input<string>;
}
