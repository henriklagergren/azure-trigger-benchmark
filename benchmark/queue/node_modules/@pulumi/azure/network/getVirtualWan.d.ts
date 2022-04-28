import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Virtual Wan.
 */
export declare function getVirtualWan(args: GetVirtualWanArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualWanResult>;
/**
 * A collection of arguments for invoking getVirtualWan.
 */
export interface GetVirtualWanArgs {
    /**
     * The name of this Virtual Wan.
     */
    name: string;
    /**
     * The name of the Resource Group where the Virtual Wan exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getVirtualWan.
 */
export interface GetVirtualWanResult {
    /**
     * Is branch to branch traffic is allowed?
     */
    readonly allowBranchToBranchTraffic: boolean;
    /**
     * Is VPN Encryption disabled?
     */
    readonly disableVpnEncryption: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the Virtual Wan exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The Office365 Local Breakout Category.
     */
    readonly office365LocalBreakoutCategory: string;
    readonly resourceGroupName: string;
    /**
     * Type of Virtual Wan (Basic or Standard).
     */
    readonly sku: string;
    /**
     * A mapping of tags assigned to the Virtual Wan.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * A list of Virtual Hubs ID's attached to this Virtual WAN.
     */
    readonly virtualHubIds: string[];
    /**
     * A list of VPN Site ID's attached to this Virtual WAN.
     */
    readonly vpnSiteIds: string[];
}
export declare function getVirtualWanOutput(args: GetVirtualWanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualWanResult>;
/**
 * A collection of arguments for invoking getVirtualWan.
 */
export interface GetVirtualWanOutputArgs {
    /**
     * The name of this Virtual Wan.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Virtual Wan exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
