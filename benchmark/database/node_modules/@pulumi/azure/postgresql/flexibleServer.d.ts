import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a PostgreSQL Flexible Server.
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
 *     addressPrefixes: ["10.0.2.0/24"],
 *     serviceEndpoints: ["Microsoft.Storage"],
 *     delegations: [{
 *         name: "fs",
 *         serviceDelegation: {
 *             name: "Microsoft.DBforPostgreSQL/flexibleServers",
 *             actions: ["Microsoft.Network/virtualNetworks/subnets/join/action"],
 *         },
 *     }],
 * });
 * const exampleZone = new azure.privatedns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const exampleZoneVirtualNetworkLink = new azure.privatedns.ZoneVirtualNetworkLink("exampleZoneVirtualNetworkLink", {
 *     privateDnsZoneName: exampleZone.name,
 *     virtualNetworkId: exampleVirtualNetwork.id,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleFlexibleServer = new azure.postgresql.FlexibleServer("exampleFlexibleServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12",
 *     delegatedSubnetId: exampleSubnet.id,
 *     privateDnsZoneId: exampleZone.id,
 *     administratorLogin: "psqladmin",
 *     administratorPassword: "H@Sh1CoR3!",
 *     zone: "1",
 *     storageMb: 32768,
 *     skuName: "GP_Standard_D4s_v3",
 * }, {
 *     dependsOn: [exampleZoneVirtualNetworkLink],
 * });
 * ```
 *
 * ## Import
 *
 * PostgreSQL Flexible Servers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:postgresql/flexibleServer:FlexibleServer example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DBforPostgreSQL/flexibleServers/server1
 * ```
 */
export declare class FlexibleServer extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleServerState, opts?: pulumi.CustomResourceOptions): FlexibleServer;
    /**
     * Returns true if the given object is an instance of FlexibleServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlexibleServer;
    /**
     * The Administrator Login for the PostgreSQL Flexible Server. Required when `createMode` is `Default`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly administratorLogin: pulumi.Output<string>;
    /**
     * The Password associated with the `administratorLogin` for the PostgreSQL Flexible Server. Required when `createMode` is `Default`.
     */
    readonly administratorPassword: pulumi.Output<string | undefined>;
    /**
     * The backup retention days for the PostgreSQL Flexible Server. Possible values are between `7` and `35` days.
     */
    readonly backupRetentionDays: pulumi.Output<number>;
    /**
     * The status showing whether the data encryption is enabled with a customer-managed key.
     *
     * @deprecated This attribute has been removed from the API and will be removed in version 3.0 of the provider.
     */
    readonly cmkEnabled: pulumi.Output<string>;
    /**
     * The creation mode which can be used to restore or replicate existing servers. Possible values are `Default` and `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly createMode: pulumi.Output<string | undefined>;
    /**
     * The ID of the virtual network subnet to create the PostgreSQL Flexible Server. The provided subnet should not have any other resource deployed in it and this subnet will be delegated to the PostgreSQL Flexible Server, if not already delegated. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly delegatedSubnetId: pulumi.Output<string | undefined>;
    /**
     * The FQDN of the PostgreSQL Flexible Server.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * Is Geo-Redundant backup enabled on the PostgreSQL Flexible Server. Defaults to `false`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly geoRedundantBackupEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `highAvailability` block as defined below.
     */
    readonly highAvailability: pulumi.Output<outputs.postgresql.FlexibleServerHighAvailability | undefined>;
    /**
     * The Azure Region where the PostgreSQL Flexible Server should exist. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `maintenanceWindow` block as defined below.
     */
    readonly maintenanceWindow: pulumi.Output<outputs.postgresql.FlexibleServerMaintenanceWindow | undefined>;
    /**
     * The name which should be used for this PostgreSQL Flexible Server. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The point in time to restore from `creationSourceServerId` when `createMode` is `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly pointInTimeRestoreTimeInUtc: pulumi.Output<string | undefined>;
    /**
     * The ID of the private dns zone to create the PostgreSQL Flexible Server. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly privateDnsZoneId: pulumi.Output<string>;
    /**
     * Is public network access enabled?
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean>;
    /**
     * The name of the Resource Group where the PostgreSQL Flexible Server should exist. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SKU Name for the PostgreSQL Flexible Server. The name of the SKU, follows the `tier` + `name` pattern (e.g. `B_Standard_B1ms`, `GP_Standard_D2s_v3`, `MO_Standard_E4s_v3`).
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * The resource ID of the source PostgreSQL Flexible Server to be restored. Required when `createMode` is `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly sourceServerId: pulumi.Output<string | undefined>;
    /**
     * The max storage allowed for the PostgreSQL Flexible Server. Possible values are `32768`, `65536`, `131072`, `262144`, `524288`, `1048576`, `2097152`, `4194304`, `8388608`, `16777216`, and `33554432`.
     */
    readonly storageMb: pulumi.Output<number>;
    /**
     * A mapping of tags which should be assigned to the PostgreSQL Flexible Server.
     * *
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The version of PostgreSQL Flexible Server to use. Possible values are `11`,`12` and `13`. Required when `createMode` is `Default`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    readonly version: pulumi.Output<string>;
    /**
     * The Availability Zone of the PostgreSQL Flexible Server. Possible values are `1`, `2` and `3`.
     */
    readonly zone: pulumi.Output<string | undefined>;
    /**
     * Create a FlexibleServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlexibleServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlexibleServer resources.
 */
export interface FlexibleServerState {
    /**
     * The Administrator Login for the PostgreSQL Flexible Server. Required when `createMode` is `Default`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The Password associated with the `administratorLogin` for the PostgreSQL Flexible Server. Required when `createMode` is `Default`.
     */
    administratorPassword?: pulumi.Input<string>;
    /**
     * The backup retention days for the PostgreSQL Flexible Server. Possible values are between `7` and `35` days.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * The status showing whether the data encryption is enabled with a customer-managed key.
     *
     * @deprecated This attribute has been removed from the API and will be removed in version 3.0 of the provider.
     */
    cmkEnabled?: pulumi.Input<string>;
    /**
     * The creation mode which can be used to restore or replicate existing servers. Possible values are `Default` and `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    createMode?: pulumi.Input<string>;
    /**
     * The ID of the virtual network subnet to create the PostgreSQL Flexible Server. The provided subnet should not have any other resource deployed in it and this subnet will be delegated to the PostgreSQL Flexible Server, if not already delegated. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    delegatedSubnetId?: pulumi.Input<string>;
    /**
     * The FQDN of the PostgreSQL Flexible Server.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Is Geo-Redundant backup enabled on the PostgreSQL Flexible Server. Defaults to `false`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    geoRedundantBackupEnabled?: pulumi.Input<boolean>;
    /**
     * A `highAvailability` block as defined below.
     */
    highAvailability?: pulumi.Input<inputs.postgresql.FlexibleServerHighAvailability>;
    /**
     * The Azure Region where the PostgreSQL Flexible Server should exist. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `maintenanceWindow` block as defined below.
     */
    maintenanceWindow?: pulumi.Input<inputs.postgresql.FlexibleServerMaintenanceWindow>;
    /**
     * The name which should be used for this PostgreSQL Flexible Server. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The point in time to restore from `creationSourceServerId` when `createMode` is `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    pointInTimeRestoreTimeInUtc?: pulumi.Input<string>;
    /**
     * The ID of the private dns zone to create the PostgreSQL Flexible Server. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    privateDnsZoneId?: pulumi.Input<string>;
    /**
     * Is public network access enabled?
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the PostgreSQL Flexible Server should exist. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SKU Name for the PostgreSQL Flexible Server. The name of the SKU, follows the `tier` + `name` pattern (e.g. `B_Standard_B1ms`, `GP_Standard_D2s_v3`, `MO_Standard_E4s_v3`).
     */
    skuName?: pulumi.Input<string>;
    /**
     * The resource ID of the source PostgreSQL Flexible Server to be restored. Required when `createMode` is `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    sourceServerId?: pulumi.Input<string>;
    /**
     * The max storage allowed for the PostgreSQL Flexible Server. Possible values are `32768`, `65536`, `131072`, `262144`, `524288`, `1048576`, `2097152`, `4194304`, `8388608`, `16777216`, and `33554432`.
     */
    storageMb?: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the PostgreSQL Flexible Server.
     * *
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The version of PostgreSQL Flexible Server to use. Possible values are `11`,`12` and `13`. Required when `createMode` is `Default`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    version?: pulumi.Input<string>;
    /**
     * The Availability Zone of the PostgreSQL Flexible Server. Possible values are `1`, `2` and `3`.
     */
    zone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FlexibleServer resource.
 */
export interface FlexibleServerArgs {
    /**
     * The Administrator Login for the PostgreSQL Flexible Server. Required when `createMode` is `Default`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The Password associated with the `administratorLogin` for the PostgreSQL Flexible Server. Required when `createMode` is `Default`.
     */
    administratorPassword?: pulumi.Input<string>;
    /**
     * The backup retention days for the PostgreSQL Flexible Server. Possible values are between `7` and `35` days.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * The creation mode which can be used to restore or replicate existing servers. Possible values are `Default` and `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    createMode?: pulumi.Input<string>;
    /**
     * The ID of the virtual network subnet to create the PostgreSQL Flexible Server. The provided subnet should not have any other resource deployed in it and this subnet will be delegated to the PostgreSQL Flexible Server, if not already delegated. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    delegatedSubnetId?: pulumi.Input<string>;
    /**
     * Is Geo-Redundant backup enabled on the PostgreSQL Flexible Server. Defaults to `false`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    geoRedundantBackupEnabled?: pulumi.Input<boolean>;
    /**
     * A `highAvailability` block as defined below.
     */
    highAvailability?: pulumi.Input<inputs.postgresql.FlexibleServerHighAvailability>;
    /**
     * The Azure Region where the PostgreSQL Flexible Server should exist. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `maintenanceWindow` block as defined below.
     */
    maintenanceWindow?: pulumi.Input<inputs.postgresql.FlexibleServerMaintenanceWindow>;
    /**
     * The name which should be used for this PostgreSQL Flexible Server. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The point in time to restore from `creationSourceServerId` when `createMode` is `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    pointInTimeRestoreTimeInUtc?: pulumi.Input<string>;
    /**
     * The ID of the private dns zone to create the PostgreSQL Flexible Server. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    privateDnsZoneId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the PostgreSQL Flexible Server should exist. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU Name for the PostgreSQL Flexible Server. The name of the SKU, follows the `tier` + `name` pattern (e.g. `B_Standard_B1ms`, `GP_Standard_D2s_v3`, `MO_Standard_E4s_v3`).
     */
    skuName?: pulumi.Input<string>;
    /**
     * The resource ID of the source PostgreSQL Flexible Server to be restored. Required when `createMode` is `PointInTimeRestore`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    sourceServerId?: pulumi.Input<string>;
    /**
     * The max storage allowed for the PostgreSQL Flexible Server. Possible values are `32768`, `65536`, `131072`, `262144`, `524288`, `1048576`, `2097152`, `4194304`, `8388608`, `16777216`, and `33554432`.
     */
    storageMb?: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the PostgreSQL Flexible Server.
     * *
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The version of PostgreSQL Flexible Server to use. Possible values are `11`,`12` and `13`. Required when `createMode` is `Default`. Changing this forces a new PostgreSQL Flexible Server to be created.
     */
    version?: pulumi.Input<string>;
    /**
     * The Availability Zone of the PostgreSQL Flexible Server. Possible values are `1`, `2` and `3`.
     */
    zone?: pulumi.Input<string>;
}
