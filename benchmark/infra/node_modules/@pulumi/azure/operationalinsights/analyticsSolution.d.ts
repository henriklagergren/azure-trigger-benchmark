import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Log Analytics (formally Operational Insights) Solution.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const workspace = new random.RandomId("workspace", {
 *     keepers: {
 *         group_name: exampleResourceGroup.name,
 *     },
 *     byteLength: 8,
 * });
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "PerGB2018",
 * });
 * const exampleAnalyticsSolution = new azure.operationalinsights.AnalyticsSolution("exampleAnalyticsSolution", {
 *     solutionName: "ContainerInsights",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceResourceId: exampleAnalyticsWorkspace.id,
 *     workspaceName: exampleAnalyticsWorkspace.name,
 *     plan: {
 *         publisher: "Microsoft",
 *         product: "OMSGallery/ContainerInsights",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Solutions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:operationalinsights/analyticsSolution:AnalyticsSolution solution1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.OperationsManagement/solutions/solution1
 * ```
 */
export declare class AnalyticsSolution extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsSolution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnalyticsSolutionState, opts?: pulumi.CustomResourceOptions): AnalyticsSolution;
    /**
     * Returns true if the given object is an instance of AnalyticsSolution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AnalyticsSolution;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `plan` block as documented below.
     */
    readonly plan: pulumi.Output<outputs.operationalinsights.AnalyticsSolutionPlan>;
    /**
     * The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
     */
    readonly solutionName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
     */
    readonly workspaceName: pulumi.Output<string>;
    /**
     * The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
     */
    readonly workspaceResourceId: pulumi.Output<string>;
    /**
     * Create a AnalyticsSolution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsSolutionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AnalyticsSolution resources.
 */
export interface AnalyticsSolutionState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `plan` block as documented below.
     */
    plan?: pulumi.Input<inputs.operationalinsights.AnalyticsSolutionPlan>;
    /**
     * The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
     */
    solutionName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
     */
    workspaceName?: pulumi.Input<string>;
    /**
     * The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
     */
    workspaceResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AnalyticsSolution resource.
 */
export interface AnalyticsSolutionArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `plan` block as documented below.
     */
    plan: pulumi.Input<inputs.operationalinsights.AnalyticsSolutionPlan>;
    /**
     * The name of the resource group in which the Log Analytics solution is created. Changing this forces a new resource to be created. Note: The solution and its related workspace can only exist in the same resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the name of the solution to be deployed. See [here for options](https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-add-solutions).Changing this forces a new resource to be created.
     */
    solutionName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The full name of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
     */
    workspaceName: pulumi.Input<string>;
    /**
     * The full resource ID of the Log Analytics workspace with which the solution will be linked. Changing this forces a new resource to be created.
     */
    workspaceResourceId: pulumi.Input<string>;
}
