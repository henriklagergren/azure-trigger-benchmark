import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Load Test.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLoadTest = new azure.loadtest.LoadTest("exampleLoadTest", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: "West Europe",
 * });
 * ```
 *
 * ## Import
 *
 * Load tests can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loadtest/loadTest:LoadTest example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.LoadTestService/loadtests/example
 * ```
 */
export declare class LoadTest extends pulumi.CustomResource {
    /**
     * Get an existing LoadTest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadTestState, opts?: pulumi.CustomResourceOptions): LoadTest;
    /**
     * Returns true if the given object is an instance of LoadTest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LoadTest;
    /**
     * Public URI of the Data Plane.
     */
    readonly dataplaneUri: pulumi.Output<string>;
    /**
     * The Azure Region where the Load Test should exist. Changing this forces a new Load Test to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Load Test. Changing this forces a new Load Test to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Load Test should exist. Changing this forces a new Load Test to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Load Test.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a LoadTest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadTestArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LoadTest resources.
 */
export interface LoadTestState {
    /**
     * Public URI of the Data Plane.
     */
    dataplaneUri?: pulumi.Input<string>;
    /**
     * The Azure Region where the Load Test should exist. Changing this forces a new Load Test to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Load Test. Changing this forces a new Load Test to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Load Test should exist. Changing this forces a new Load Test to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Load Test.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a LoadTest resource.
 */
export interface LoadTestArgs {
    /**
     * The Azure Region where the Load Test should exist. Changing this forces a new Load Test to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Load Test. Changing this forces a new Load Test to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Load Test should exist. Changing this forces a new Load Test to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Load Test.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
