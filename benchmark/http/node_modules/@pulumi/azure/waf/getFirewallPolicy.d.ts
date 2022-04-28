import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Web Application Firewall Policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.waf.getFirewallPolicy({
 *     resourceGroupName: "existing",
 *     name: "existing",
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
     * The name of the Web Application Firewall Policy
     */
    name: string;
    /**
     * The name of the Resource Group where the Web Application Firewall Policy exists.
     */
    resourceGroupName: string;
    tags?: {
        [key: string]: string;
    };
}
/**
 * A collection of values returned by getFirewallPolicy.
 */
export interface GetFirewallPolicyResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function getFirewallPolicyOutput(args: GetFirewallPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallPolicyResult>;
/**
 * A collection of arguments for invoking getFirewallPolicy.
 */
export interface GetFirewallPolicyOutputArgs {
    /**
     * The name of the Web Application Firewall Policy
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Web Application Firewall Policy exists.
     */
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
