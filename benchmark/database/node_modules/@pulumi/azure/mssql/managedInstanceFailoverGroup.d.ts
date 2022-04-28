import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Import
 *
 * SQL Instance Failover Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/managedInstanceFailoverGroup:ManagedInstanceFailoverGroup example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Sql/locations/Location/instanceFailoverGroups/failoverGroup1
 * ```
 */
export declare class ManagedInstanceFailoverGroup extends pulumi.CustomResource {
    /**
     * Get an existing ManagedInstanceFailoverGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedInstanceFailoverGroupState, opts?: pulumi.CustomResourceOptions): ManagedInstanceFailoverGroup;
    /**
     * Returns true if the given object is an instance of ManagedInstanceFailoverGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedInstanceFailoverGroup;
    /**
     * The Azure Region where the Managed Instance Failover Group should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID of the Azure SQL Managed Instance which will be replicated using a Managed Instance Failover Group. Changing this forces a new resource to be created.
     */
    readonly managedInstanceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Managed Instance Failover Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Azure SQL Managed Instance which will be replicated to. Changing this forces a new resource to be created.
     */
    readonly partnerManagedInstanceId: pulumi.Output<string>;
    /**
     * A `partnerRegion` block as defined below.
     */
    readonly partnerRegions: pulumi.Output<outputs.mssql.ManagedInstanceFailoverGroupPartnerRegion[]>;
    /**
     * A `readWriteEndpointFailoverPolicy` block as defined below.
     */
    readonly readWriteEndpointFailoverPolicy: pulumi.Output<outputs.mssql.ManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * Failover policy for the read-only endpoint. Defaults to `false`.
     */
    readonly readonlyEndpointFailoverPolicyEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The partner replication role of the Managed Instance Failover Group.
     */
    readonly role: pulumi.Output<string>;
    /**
     * Create a ManagedInstanceFailoverGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedInstanceFailoverGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedInstanceFailoverGroup resources.
 */
export interface ManagedInstanceFailoverGroupState {
    /**
     * The Azure Region where the Managed Instance Failover Group should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Azure SQL Managed Instance which will be replicated using a Managed Instance Failover Group. Changing this forces a new resource to be created.
     */
    managedInstanceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Managed Instance Failover Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Azure SQL Managed Instance which will be replicated to. Changing this forces a new resource to be created.
     */
    partnerManagedInstanceId?: pulumi.Input<string>;
    /**
     * A `partnerRegion` block as defined below.
     */
    partnerRegions?: pulumi.Input<pulumi.Input<inputs.mssql.ManagedInstanceFailoverGroupPartnerRegion>[]>;
    /**
     * A `readWriteEndpointFailoverPolicy` block as defined below.
     */
    readWriteEndpointFailoverPolicy?: pulumi.Input<inputs.mssql.ManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * Failover policy for the read-only endpoint. Defaults to `false`.
     */
    readonlyEndpointFailoverPolicyEnabled?: pulumi.Input<boolean>;
    /**
     * The partner replication role of the Managed Instance Failover Group.
     */
    role?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedInstanceFailoverGroup resource.
 */
export interface ManagedInstanceFailoverGroupArgs {
    /**
     * The Azure Region where the Managed Instance Failover Group should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Azure SQL Managed Instance which will be replicated using a Managed Instance Failover Group. Changing this forces a new resource to be created.
     */
    managedInstanceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Managed Instance Failover Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Azure SQL Managed Instance which will be replicated to. Changing this forces a new resource to be created.
     */
    partnerManagedInstanceId: pulumi.Input<string>;
    /**
     * A `readWriteEndpointFailoverPolicy` block as defined below.
     */
    readWriteEndpointFailoverPolicy: pulumi.Input<inputs.mssql.ManagedInstanceFailoverGroupReadWriteEndpointFailoverPolicy>;
    /**
     * Failover policy for the read-only endpoint. Defaults to `false`.
     */
    readonlyEndpointFailoverPolicyEnabled?: pulumi.Input<boolean>;
}
