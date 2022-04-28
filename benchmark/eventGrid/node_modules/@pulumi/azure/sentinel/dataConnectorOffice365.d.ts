import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Office 365 Data Connector.
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
 * const exampleDataConnectorOffice365 = new azure.sentinel.DataConnectorOffice365("exampleDataConnectorOffice365", {logAnalyticsWorkspaceId: exampleAnalyticsSolution.workspaceResourceId});
 * ```
 *
 * ## Import
 *
 * Office 365 Data Connectors can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/dataConnectorOffice365:DataConnectorOffice365 example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/dataConnectors/dc1
 * ```
 */
export declare class DataConnectorOffice365 extends pulumi.CustomResource {
    /**
     * Get an existing DataConnectorOffice365 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataConnectorOffice365State, opts?: pulumi.CustomResourceOptions): DataConnectorOffice365;
    /**
     * Returns true if the given object is an instance of DataConnectorOffice365.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataConnectorOffice365;
    /**
     * Should the Exchange data connector be enabled? Defaults to `true`.
     */
    readonly exchangeEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Log Analytics Workspace that this Office 365 Data Connector resides in. Changing this forces a new Office 365 Data Connector to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Office 365 Data Connector. Changing this forces a new Office 365 Data Connector to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Should the SharePoint data connector be enabled? Defaults to `true`.
     */
    readonly sharepointEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Should the Microsoft Teams data connector be enabled? Defaults to `true`.
     */
    readonly teamsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Tenant that this Office 365 Data Connector connects to. Changing this forces a new Office 365 Data Connector to be created.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a DataConnectorOffice365 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataConnectorOffice365Args, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataConnectorOffice365 resources.
 */
export interface DataConnectorOffice365State {
    /**
     * Should the Exchange data connector be enabled? Defaults to `true`.
     */
    exchangeEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace that this Office 365 Data Connector resides in. Changing this forces a new Office 365 Data Connector to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Office 365 Data Connector. Changing this forces a new Office 365 Data Connector to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Should the SharePoint data connector be enabled? Defaults to `true`.
     */
    sharepointEnabled?: pulumi.Input<boolean>;
    /**
     * Should the Microsoft Teams data connector be enabled? Defaults to `true`.
     */
    teamsEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Tenant that this Office 365 Data Connector connects to. Changing this forces a new Office 365 Data Connector to be created.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DataConnectorOffice365 resource.
 */
export interface DataConnectorOffice365Args {
    /**
     * Should the Exchange data connector be enabled? Defaults to `true`.
     */
    exchangeEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace that this Office 365 Data Connector resides in. Changing this forces a new Office 365 Data Connector to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Office 365 Data Connector. Changing this forces a new Office 365 Data Connector to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Should the SharePoint data connector be enabled? Defaults to `true`.
     */
    sharepointEnabled?: pulumi.Input<boolean>;
    /**
     * Should the Microsoft Teams data connector be enabled? Defaults to `true`.
     */
    teamsEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Tenant that this Office 365 Data Connector connects to. Changing this forces a new Office 365 Data Connector to be created.
     */
    tenantId?: pulumi.Input<string>;
}
