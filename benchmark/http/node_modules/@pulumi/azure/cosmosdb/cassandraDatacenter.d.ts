import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Cassandra Datacenter.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/24"],
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     scope: exampleVirtualNetwork.id,
 *     roleDefinitionName: "Network Contributor",
 *     principalId: "e5007d2c-4b13-4a74-9b6a-605d99f03501",
 * });
 * const exampleCassandraCluster = new azure.cosmosdb.CassandraCluster("exampleCassandraCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     delegatedManagementSubnetId: exampleSubnet.id,
 *     defaultAdminPassword: "Password1234",
 * });
 * const exampleCassandraDatacenter = new azure.cosmosdb.CassandraDatacenter("exampleCassandraDatacenter", {
 *     location: exampleCassandraCluster.location,
 *     cassandraClusterId: exampleCassandraCluster.id,
 *     delegatedManagementSubnetId: exampleSubnet.id,
 *     nodeCount: 3,
 *     diskCount: 4,
 *     skuName: "Standard_DS14_v2",
 *     availabilityZonesEnabled: false,
 * });
 * ```
 *
 * ## Import
 *
 * Cassandra Datacenters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/cassandraDatacenter:CassandraDatacenter example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.DocumentDB/cassandraClusters/cluster1/dataCenters/dc1
 * ```
 */
export declare class CassandraDatacenter extends pulumi.CustomResource {
    /**
     * Get an existing CassandraDatacenter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CassandraDatacenterState, opts?: pulumi.CustomResourceOptions): CassandraDatacenter;
    /**
     * Returns true if the given object is an instance of CassandraDatacenter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CassandraDatacenter;
    /**
     * Determines whether availability zones are enabled. Defaults to `true`.
     */
    readonly availabilityZonesEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Cassandra Cluster. Changing this forces a new Cassandra Datacenter to be created.
     */
    readonly cassandraClusterId: pulumi.Output<string>;
    /**
     * The ID of the delegated management subnet for this Cassandra Datacenter. Changing this forces a new Cassandra Datacenter to be created.
     */
    readonly delegatedManagementSubnetId: pulumi.Output<string>;
    /**
     * Determines the number of p30 disks that are attached to each node. Defaults to `4`.
     */
    readonly diskCount: pulumi.Output<number | undefined>;
    /**
     * The Azure Region where the Cassandra Datacenter should exist. Changing this forces a new Cassandra Datacenter to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Cassandra Datacenter. Changing this forces a new Cassandra Datacenter to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of nodes the Cassandra Datacenter should have. The number should be equal or greater than `3`. Defaults to `3`.
     */
    readonly nodeCount: pulumi.Output<number | undefined>;
    /**
     * Determines the selected sku. Defaults to Standard_DS14_v2.
     */
    readonly skuName: pulumi.Output<string | undefined>;
    /**
     * Create a CassandraDatacenter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CassandraDatacenterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CassandraDatacenter resources.
 */
export interface CassandraDatacenterState {
    /**
     * Determines whether availability zones are enabled. Defaults to `true`.
     */
    availabilityZonesEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Cassandra Cluster. Changing this forces a new Cassandra Datacenter to be created.
     */
    cassandraClusterId?: pulumi.Input<string>;
    /**
     * The ID of the delegated management subnet for this Cassandra Datacenter. Changing this forces a new Cassandra Datacenter to be created.
     */
    delegatedManagementSubnetId?: pulumi.Input<string>;
    /**
     * Determines the number of p30 disks that are attached to each node. Defaults to `4`.
     */
    diskCount?: pulumi.Input<number>;
    /**
     * The Azure Region where the Cassandra Datacenter should exist. Changing this forces a new Cassandra Datacenter to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Cassandra Datacenter. Changing this forces a new Cassandra Datacenter to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of nodes the Cassandra Datacenter should have. The number should be equal or greater than `3`. Defaults to `3`.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * Determines the selected sku. Defaults to Standard_DS14_v2.
     */
    skuName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CassandraDatacenter resource.
 */
export interface CassandraDatacenterArgs {
    /**
     * Determines whether availability zones are enabled. Defaults to `true`.
     */
    availabilityZonesEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Cassandra Cluster. Changing this forces a new Cassandra Datacenter to be created.
     */
    cassandraClusterId: pulumi.Input<string>;
    /**
     * The ID of the delegated management subnet for this Cassandra Datacenter. Changing this forces a new Cassandra Datacenter to be created.
     */
    delegatedManagementSubnetId: pulumi.Input<string>;
    /**
     * Determines the number of p30 disks that are attached to each node. Defaults to `4`.
     */
    diskCount?: pulumi.Input<number>;
    /**
     * The Azure Region where the Cassandra Datacenter should exist. Changing this forces a new Cassandra Datacenter to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Cassandra Datacenter. Changing this forces a new Cassandra Datacenter to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of nodes the Cassandra Datacenter should have. The number should be equal or greater than `3`. Defaults to `3`.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * Determines the selected sku. Defaults to Standard_DS14_v2.
     */
    skuName?: pulumi.Input<string>;
}
