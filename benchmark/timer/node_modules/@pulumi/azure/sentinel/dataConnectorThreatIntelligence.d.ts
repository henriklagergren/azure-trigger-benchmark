import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Threat Intelligence Data Connector.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "PerGB2018",
 * });
 * const exampleAnalyticsSolution = new azure.operationalinsights.AnalyticsSolution("exampleAnalyticsSolution", {
 *     solutionName: "SecurityInsights",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceResourceId: exampleAnalyticsWorkspace.id,
 *     workspaceName: exampleAnalyticsWorkspace.name,
 *     plan: {
 *         publisher: "Microsoft",
 *         product: "OMSGallery/SecurityInsights",
 *     },
 * });
 * const exampleDataConnectorThreatIntelligence = new azure.sentinel.DataConnectorThreatIntelligence("exampleDataConnectorThreatIntelligence", {logAnalyticsWorkspaceId: exampleAnalyticsSolution.workspaceResourceId});
 * ```
 *
 * ## Import
 *
 * Threat Intelligence Data Connectors can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/dataConnectorThreatIntelligence:DataConnectorThreatIntelligence example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/dataConnectors/dc1
 * ```
 */
export declare class DataConnectorThreatIntelligence extends pulumi.CustomResource {
    /**
     * Get an existing DataConnectorThreatIntelligence resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataConnectorThreatIntelligenceState, opts?: pulumi.CustomResourceOptions): DataConnectorThreatIntelligence;
    /**
     * Returns true if the given object is an instance of DataConnectorThreatIntelligence.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataConnectorThreatIntelligence;
    /**
     * The ID of the Log Analytics Workspace that this Threat Intelligence Data Connector resides in. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Threat Intelligence Data Connector. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the tenant that this Threat Intelligence Data Connector connects to. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a DataConnectorThreatIntelligence resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataConnectorThreatIntelligenceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataConnectorThreatIntelligence resources.
 */
export interface DataConnectorThreatIntelligenceState {
    /**
     * The ID of the Log Analytics Workspace that this Threat Intelligence Data Connector resides in. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Threat Intelligence Data Connector. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the tenant that this Threat Intelligence Data Connector connects to. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DataConnectorThreatIntelligence resource.
 */
export interface DataConnectorThreatIntelligenceArgs {
    /**
     * The ID of the Log Analytics Workspace that this Threat Intelligence Data Connector resides in. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Threat Intelligence Data Connector. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the tenant that this Threat Intelligence Data Connector connects to. Changing this forces a new Threat Intelligence Data Connector to be created.
     */
    tenantId?: pulumi.Input<string>;
}
