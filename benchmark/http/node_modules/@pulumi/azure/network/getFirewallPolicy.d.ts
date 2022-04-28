import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Firewall Policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getFirewallPolicy({
 *     name: "existing",
 *     resourceGroupName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getFirewallPolicy(args: GetFirewallPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallPolicyResult>;
/**
 * A collection of arguments for invoking getFirewallPolicy.
 */
export interface GetFirewallPolicyArgs {
    /**
     * The name of this Firewall Policy.
     */
    name: string;
    /**
     * The name of the Resource Group where the Firewall Policy exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getFirewallPolicy.
 */
export interface GetFirewallPolicyResult {
    readonly basePolicyId: string;
    readonly childPolicies: string[];
    readonly dns: outputs.network.GetFirewallPolicyDn[];
    readonly firewalls: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly ruleCollectionGroups: string[];
    /**
     * A mapping of tags assigned to the Firewall Policy.
     */
    readonly tags: {
        [key: string]: string;
    };
    readonly threatIntelligenceAllowlists: outputs.network.GetFirewallPolicyThreatIntelligenceAllowlist[];
    readonly threatIntelligenceMode: string;
}
export declare function getFirewallPolicyOutput(args: GetFirewallPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallPolicyResult>;
/**
 * A collection of arguments for invoking getFirewallPolicy.
 */
export interface GetFirewallPolicyOutputArgs {
    /**
     * The name of this Firewall Policy.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Firewall Policy exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
