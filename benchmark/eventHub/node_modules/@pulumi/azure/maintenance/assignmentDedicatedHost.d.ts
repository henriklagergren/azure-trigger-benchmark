import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a maintenance assignment to Dedicated Host.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDedicatedHostGroup = new azure.compute.DedicatedHostGroup("exampleDedicatedHostGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     platformFaultDomainCount: 2,
 * });
 * const exampleDedicatedHost = new azure.compute.DedicatedHost("exampleDedicatedHost", {
 *     location: exampleResourceGroup.location,
 *     dedicatedHostGroupId: exampleDedicatedHostGroup.id,
 *     skuName: "DSv3-Type1",
 *     platformFaultDomain: 1,
 * });
 * const exampleConfiguration = new azure.maintenance.Configuration("exampleConfiguration", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     scope: "All",
 * });
 * const exampleAssignmentDedicatedHost = new azure.maintenance.AssignmentDedicatedHost("exampleAssignmentDedicatedHost", {
 *     location: exampleResourceGroup.location,
 *     maintenanceConfigurationId: exampleConfiguration.id,
 *     dedicatedHostId: exampleDedicatedHost.id,
 * });
 * ```
 *
 * ## Import
 *
 * Maintenance Assignment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:maintenance/assignmentDedicatedHost:AssignmentDedicatedHost example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resGroup1/providers/microsoft.compute/hostGroups/group1/hosts/host1/providers/Microsoft.Maintenance/configurationAssignments/assign1
 * ```
 */
export declare class AssignmentDedicatedHost extends pulumi.CustomResource {
    /**
     * Get an existing AssignmentDedicatedHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssignmentDedicatedHostState, opts?: pulumi.CustomResourceOptions): AssignmentDedicatedHost;
    /**
     * Returns true if the given object is an instance of AssignmentDedicatedHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AssignmentDedicatedHost;
    /**
     * Specifies the Dedicated Host ID to which the Maintenance Configuration will be assigned. Changing this forces a new resource to be created.
     */
    readonly dedicatedHostId: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the ID of the Maintenance Configuration Resource. Changing this forces a new resource to be created.
     */
    readonly maintenanceConfigurationId: pulumi.Output<string>;
    /**
     * Create a AssignmentDedicatedHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssignmentDedicatedHostArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AssignmentDedicatedHost resources.
 */
export interface AssignmentDedicatedHostState {
    /**
     * Specifies the Dedicated Host ID to which the Maintenance Configuration will be assigned. Changing this forces a new resource to be created.
     */
    dedicatedHostId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Maintenance Configuration Resource. Changing this forces a new resource to be created.
     */
    maintenanceConfigurationId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AssignmentDedicatedHost resource.
 */
export interface AssignmentDedicatedHostArgs {
    /**
     * Specifies the Dedicated Host ID to which the Maintenance Configuration will be assigned. Changing this forces a new resource to be created.
     */
    dedicatedHostId: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Maintenance Configuration Resource. Changing this forces a new resource to be created.
     */
    maintenanceConfigurationId: pulumi.Input<string>;
}
