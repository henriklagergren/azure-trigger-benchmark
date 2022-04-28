import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Stack HCI Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as azuread from "@pulumi/azuread";
 *
 * const exampleApplication = azuread.getApplication({
 *     name: "example-app",
 * });
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleHciCluster = new azure.stack.HciCluster("exampleHciCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clientId: exampleApplication.then(exampleApplication => exampleApplication.applicationId),
 *     tenantId: current.then(current => current.tenantId),
 * });
 * ```
 *
 * ## Import
 *
 * Azure Stack HCI Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:stack/hciCluster:HciCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AzureStackHCI/clusters/cluster1
 * ```
 */
export declare class HciCluster extends pulumi.CustomResource {
    /**
     * Get an existing HciCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HciClusterState, opts?: pulumi.CustomResourceOptions): HciCluster;
    /**
     * Returns true if the given object is an instance of HciCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HciCluster;
    /**
     * The Client ID of the Azure Active Directory which is used by the Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * The Azure Region where the Azure Stack HCI Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Azure Stack HCI Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Azure Stack HCI Cluster.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Tenant ID of the Azure Active Directory which is used by the Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a HciCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HciClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering HciCluster resources.
 */
export interface HciClusterState {
    /**
     * The Client ID of the Azure Active Directory which is used by the Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Azure Region where the Azure Stack HCI Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Stack HCI Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Azure Stack HCI Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Tenant ID of the Azure Active Directory which is used by the Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a HciCluster resource.
 */
export interface HciClusterArgs {
    /**
     * The Client ID of the Azure Active Directory which is used by the Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    clientId: pulumi.Input<string>;
    /**
     * The Azure Region where the Azure Stack HCI Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Stack HCI Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Azure Stack HCI Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Tenant ID of the Azure Active Directory which is used by the Azure Stack HCI Cluster. Changing this forces a new resource to be created.
     */
    tenantId?: pulumi.Input<string>;
}
