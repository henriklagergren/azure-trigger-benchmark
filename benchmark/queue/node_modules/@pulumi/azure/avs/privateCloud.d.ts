import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Import
 *
 * Vmware Private Clouds can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:avs/privateCloud:PrivateCloud example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AVS/PrivateClouds/privateCloud1
 * ```
 */
export declare class PrivateCloud extends pulumi.CustomResource {
    /**
     * Get an existing PrivateCloud resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateCloudState, opts?: pulumi.CustomResourceOptions): PrivateCloud;
    /**
     * Returns true if the given object is an instance of PrivateCloud.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateCloud;
    /**
     * A `circuit` block as defined below.
     */
    readonly circuits: pulumi.Output<outputs.avs.PrivateCloudCircuit[]>;
    /**
     * The endpoint for the HCX Cloud Manager.
     */
    readonly hcxCloudManagerEndpoint: pulumi.Output<string>;
    /**
     * Is the Private Cluster connected to the internet? This field can not updated with `management_cluster.0.size` together.
     * > **NOTE :** `internetConnectionEnabled` and `management_cluster.0.size` cannot be updated at the same time.
     */
    readonly internetConnectionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The Azure Region where the Vmware Private Cloud should exist. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `managementCluster` block as defined below.
     * > **NOTE :** `internetConnectionEnabled` and `management_cluster.0.size` cannot be updated at the same time.
     */
    readonly managementCluster: pulumi.Output<outputs.avs.PrivateCloudManagementCluster>;
    /**
     * The network used to access vCenter Server and NSX-T Manager.
     */
    readonly managementSubnetCidr: pulumi.Output<string>;
    /**
     * The name which should be used for this Vmware Private Cloud. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The subnet which should be unique across virtual network in your subscription as well as on-premise. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly networkSubnetCidr: pulumi.Output<string>;
    /**
     * The thumbprint of the NSX-T Manager SSL certificate.
     */
    readonly nsxtCertificateThumbprint: pulumi.Output<string>;
    /**
     * The endpoint for the NSX-T Data Center manager.
     */
    readonly nsxtManagerEndpoint: pulumi.Output<string>;
    /**
     * The password of the NSX-T Manager. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly nsxtPassword: pulumi.Output<string | undefined>;
    /**
     * The network which is used for virtual machine cold migration, cloning, and snapshot migration.
     */
    readonly provisioningSubnetCidr: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Vmware Private Cloud should exist. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Name of the SKU used for this Private Cloud. Possible values are `av20`, `av36` and `av36t`. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Vmware Private Cloud.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The thumbprint of the vCenter Server SSL certificate.
     */
    readonly vcenterCertificateThumbprint: pulumi.Output<string>;
    /**
     * The password of the vCenter admin. Changing this forces a new Vmware Private Cloud to be created.
     */
    readonly vcenterPassword: pulumi.Output<string | undefined>;
    /**
     * The endpoint for Virtual Center Server Appliance.
     */
    readonly vcsaEndpoint: pulumi.Output<string>;
    /**
     * The network which is used for live migration of virtual machines.
     */
    readonly vmotionSubnetCidr: pulumi.Output<string>;
    /**
     * Create a PrivateCloud resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateCloudArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PrivateCloud resources.
 */
export interface PrivateCloudState {
    /**
     * A `circuit` block as defined below.
     */
    circuits?: pulumi.Input<pulumi.Input<inputs.avs.PrivateCloudCircuit>[]>;
    /**
     * The endpoint for the HCX Cloud Manager.
     */
    hcxCloudManagerEndpoint?: pulumi.Input<string>;
    /**
     * Is the Private Cluster connected to the internet? This field can not updated with `management_cluster.0.size` together.
     * > **NOTE :** `internetConnectionEnabled` and `management_cluster.0.size` cannot be updated at the same time.
     */
    internetConnectionEnabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region where the Vmware Private Cloud should exist. Changing this forces a new Vmware Private Cloud to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `managementCluster` block as defined below.
     * > **NOTE :** `internetConnectionEnabled` and `management_cluster.0.size` cannot be updated at the same time.
     */
    managementCluster?: pulumi.Input<inputs.avs.PrivateCloudManagementCluster>;
    /**
     * The network used to access vCenter Server and NSX-T Manager.
     */
    managementSubnetCidr?: pulumi.Input<string>;
    /**
     * The name which should be used for this Vmware Private Cloud. Changing this forces a new Vmware Private Cloud to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The subnet which should be unique across virtual network in your subscription as well as on-premise. Changing this forces a new Vmware Private Cloud to be created.
     */
    networkSubnetCidr?: pulumi.Input<string>;
    /**
     * The thumbprint of the NSX-T Manager SSL certificate.
     */
    nsxtCertificateThumbprint?: pulumi.Input<string>;
    /**
     * The endpoint for the NSX-T Data Center manager.
     */
    nsxtManagerEndpoint?: pulumi.Input<string>;
    /**
     * The password of the NSX-T Manager. Changing this forces a new Vmware Private Cloud to be created.
     */
    nsxtPassword?: pulumi.Input<string>;
    /**
     * The network which is used for virtual machine cold migration, cloning, and snapshot migration.
     */
    provisioningSubnetCidr?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Vmware Private Cloud should exist. Changing this forces a new Vmware Private Cloud to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Name of the SKU used for this Private Cloud. Possible values are `av20`, `av36` and `av36t`. Changing this forces a new Vmware Private Cloud to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Vmware Private Cloud.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The thumbprint of the vCenter Server SSL certificate.
     */
    vcenterCertificateThumbprint?: pulumi.Input<string>;
    /**
     * The password of the vCenter admin. Changing this forces a new Vmware Private Cloud to be created.
     */
    vcenterPassword?: pulumi.Input<string>;
    /**
     * The endpoint for Virtual Center Server Appliance.
     */
    vcsaEndpoint?: pulumi.Input<string>;
    /**
     * The network which is used for live migration of virtual machines.
     */
    vmotionSubnetCidr?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PrivateCloud resource.
 */
export interface PrivateCloudArgs {
    /**
     * Is the Private Cluster connected to the internet? This field can not updated with `management_cluster.0.size` together.
     * > **NOTE :** `internetConnectionEnabled` and `management_cluster.0.size` cannot be updated at the same time.
     */
    internetConnectionEnabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region where the Vmware Private Cloud should exist. Changing this forces a new Vmware Private Cloud to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `managementCluster` block as defined below.
     * > **NOTE :** `internetConnectionEnabled` and `management_cluster.0.size` cannot be updated at the same time.
     */
    managementCluster: pulumi.Input<inputs.avs.PrivateCloudManagementCluster>;
    /**
     * The name which should be used for this Vmware Private Cloud. Changing this forces a new Vmware Private Cloud to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The subnet which should be unique across virtual network in your subscription as well as on-premise. Changing this forces a new Vmware Private Cloud to be created.
     */
    networkSubnetCidr: pulumi.Input<string>;
    /**
     * The password of the NSX-T Manager. Changing this forces a new Vmware Private Cloud to be created.
     */
    nsxtPassword?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Vmware Private Cloud should exist. Changing this forces a new Vmware Private Cloud to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Name of the SKU used for this Private Cloud. Possible values are `av20`, `av36` and `av36t`. Changing this forces a new Vmware Private Cloud to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Vmware Private Cloud.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The password of the vCenter admin. Changing this forces a new Vmware Private Cloud to be created.
     */
    vcenterPassword?: pulumi.Input<string>;
}
