import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Blob Event Trigger inside an Azure Data Factory.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const examplePipeline = new azure.datafactory.Pipeline("examplePipeline", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleTriggerBlobEvent = new azure.datafactory.TriggerBlobEvent("exampleTriggerBlobEvent", {
 *     dataFactoryId: exampleFactory.id,
 *     storageAccountId: exampleAccount.id,
 *     events: [
 *         "Microsoft.Storage.BlobCreated",
 *         "Microsoft.Storage.BlobDeleted",
 *     ],
 *     blobPathEndsWith: ".txt",
 *     ignoreEmptyBlobs: true,
 *     activated: true,
 *     annotations: [
 *         "test1",
 *         "test2",
 *         "test3",
 *     ],
 *     description: "example description",
 *     pipelines: [{
 *         name: examplePipeline.name,
 *         parameters: {
 *             Env: "Prod",
 *         },
 *     }],
 *     additionalProperties: {
 *         foo: "foo1",
 *         bar: "bar2",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Blob Event Trigger can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/triggerBlobEvent:TriggerBlobEvent example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/triggers/example
 * ```
 */
export declare class TriggerBlobEvent extends pulumi.CustomResource {
    /**
     * Get an existing TriggerBlobEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerBlobEventState, opts?: pulumi.CustomResourceOptions): TriggerBlobEvent;
    /**
     * Returns true if the given object is an instance of TriggerBlobEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TriggerBlobEvent;
    /**
     * Specifies if the Data Factory Blob Event Trigger is activated. Defaults to `true`.
     */
    readonly activated: pulumi.Output<boolean | undefined>;
    /**
     * A map of additional properties to associate with the Data Factory Blob Event Trigger.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Blob Event Trigger.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The pattern that blob path starts with for trigger to fire.
     */
    readonly blobPathBeginsWith: pulumi.Output<string | undefined>;
    /**
     * The pattern that blob path ends with for trigger to fire.
     */
    readonly blobPathEndsWith: pulumi.Output<string | undefined>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The description for the Data Factory Blob Event Trigger.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * List of events that will fire this trigger. Possible values are `Microsoft.Storage.BlobCreated` and `Microsoft.Storage.BlobDeleted`.
     */
    readonly events: pulumi.Output<string[]>;
    /**
     * are blobs with zero bytes ignored?
     */
    readonly ignoreEmptyBlobs: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the Data Factory Blob Event Trigger. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `pipeline` blocks as defined below.
     */
    readonly pipelines: pulumi.Output<outputs.datafactory.TriggerBlobEventPipeline[]>;
    /**
     * The ID of Storage Account in which blob event will be listened. Changing this forces a new resource.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * Create a TriggerBlobEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerBlobEventArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TriggerBlobEvent resources.
 */
export interface TriggerBlobEventState {
    /**
     * Specifies if the Data Factory Blob Event Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * A map of additional properties to associate with the Data Factory Blob Event Trigger.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Blob Event Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The pattern that blob path starts with for trigger to fire.
     */
    blobPathBeginsWith?: pulumi.Input<string>;
    /**
     * The pattern that blob path ends with for trigger to fire.
     */
    blobPathEndsWith?: pulumi.Input<string>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Blob Event Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * List of events that will fire this trigger. Possible values are `Microsoft.Storage.BlobCreated` and `Microsoft.Storage.BlobDeleted`.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * are blobs with zero bytes ignored?
     */
    ignoreEmptyBlobs?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Data Factory Blob Event Trigger. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `pipeline` blocks as defined below.
     */
    pipelines?: pulumi.Input<pulumi.Input<inputs.datafactory.TriggerBlobEventPipeline>[]>;
    /**
     * The ID of Storage Account in which blob event will be listened. Changing this forces a new resource.
     */
    storageAccountId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TriggerBlobEvent resource.
 */
export interface TriggerBlobEventArgs {
    /**
     * Specifies if the Data Factory Blob Event Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * A map of additional properties to associate with the Data Factory Blob Event Trigger.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Blob Event Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The pattern that blob path starts with for trigger to fire.
     */
    blobPathBeginsWith?: pulumi.Input<string>;
    /**
     * The pattern that blob path ends with for trigger to fire.
     */
    blobPathEndsWith?: pulumi.Input<string>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * The description for the Data Factory Blob Event Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * List of events that will fire this trigger. Possible values are `Microsoft.Storage.BlobCreated` and `Microsoft.Storage.BlobDeleted`.
     */
    events: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * are blobs with zero bytes ignored?
     */
    ignoreEmptyBlobs?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Data Factory Blob Event Trigger. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `pipeline` blocks as defined below.
     */
    pipelines: pulumi.Input<pulumi.Input<inputs.datafactory.TriggerBlobEventPipeline>[]>;
    /**
     * The ID of Storage Account in which blob event will be listened. Changing this forces a new resource.
     */
    storageAccountId: pulumi.Input<string>;
}
