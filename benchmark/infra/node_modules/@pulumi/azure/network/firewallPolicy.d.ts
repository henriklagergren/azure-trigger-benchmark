import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Firewall Policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.network.FirewallPolicy("example", {
 *     location: "West Europe",
 *     resourceGroupName: "example",
 * });
 * ```
 *
 * ## Import
 *
 * Firewall Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/firewallPolicy:FirewallPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/firewallPolicies/policy1
 * ```
 */
export declare class FirewallPolicy extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallPolicyState, opts?: pulumi.CustomResourceOptions): FirewallPolicy;
    /**
     * Returns true if the given object is an instance of FirewallPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallPolicy;
    /**
     * The ID of the base Firewall Policy.
     */
    readonly basePolicyId: pulumi.Output<string | undefined>;
    /**
     * A list of reference to child Firewall Policies of this Firewall Policy.
     */
    readonly childPolicies: pulumi.Output<string[]>;
    /**
     * A `dns` block as defined below.
     */
    readonly dns: pulumi.Output<outputs.network.FirewallPolicyDns | undefined>;
    /**
     * A list of references to Azure Firewalls that this Firewall Policy is associated with.
     */
    readonly firewalls: pulumi.Output<string[]>;
    /**
     * An `identity` block as defined below. Changing this forces a new Firewall Policy to be created.
     */
    readonly identity: pulumi.Output<outputs.network.FirewallPolicyIdentity | undefined>;
    /**
     * An `insights` block as defined below.
     */
    readonly insights: pulumi.Output<outputs.network.FirewallPolicyInsights | undefined>;
    /**
     * A `intrusionDetection` block as defined below.
     */
    readonly intrusionDetection: pulumi.Output<outputs.network.FirewallPolicyIntrusionDetection | undefined>;
    /**
     * The Azure Region where the Firewall Policy should exist. Changing this forces a new Firewall Policy to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Firewall Policy. Changing this forces a new Firewall Policy to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of private IP ranges to which traffic will not be SNAT.
     */
    readonly privateIpRanges: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Resource Group where the Firewall Policy should exist. Changing this forces a new Firewall Policy to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A list of references to Firewall Policy Rule Collection Groups that belongs to this Firewall Policy.
     */
    readonly ruleCollectionGroups: pulumi.Output<string[]>;
    /**
     * The SKU Tier of the Firewall Policy. Possible values are `Standard`, `Premium`. Changing this forces a new Firewall Policy to be created.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Firewall Policy.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `threatIntelligenceAllowlist` block as defined below.
     */
    readonly threatIntelligenceAllowlist: pulumi.Output<outputs.network.FirewallPolicyThreatIntelligenceAllowlist | undefined>;
    /**
     * The operation mode for Threat Intelligence. Possible values are `Alert`, `Deny` and `Off`. Defaults to `Alert`.
     */
    readonly threatIntelligenceMode: pulumi.Output<string | undefined>;
    /**
     * A `tlsCertificate` block as defined below.
     */
    readonly tlsCertificate: pulumi.Output<outputs.network.FirewallPolicyTlsCertificate | undefined>;
    /**
     * Create a FirewallPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallPolicy resources.
 */
export interface FirewallPolicyState {
    /**
     * The ID of the base Firewall Policy.
     */
    basePolicyId?: pulumi.Input<string>;
    /**
     * A list of reference to child Firewall Policies of this Firewall Policy.
     */
    childPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `dns` block as defined below.
     */
    dns?: pulumi.Input<inputs.network.FirewallPolicyDns>;
    /**
     * A list of references to Azure Firewalls that this Firewall Policy is associated with.
     */
    firewalls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `identity` block as defined below. Changing this forces a new Firewall Policy to be created.
     */
    identity?: pulumi.Input<inputs.network.FirewallPolicyIdentity>;
    /**
     * An `insights` block as defined below.
     */
    insights?: pulumi.Input<inputs.network.FirewallPolicyInsights>;
    /**
     * A `intrusionDetection` block as defined below.
     */
    intrusionDetection?: pulumi.Input<inputs.network.FirewallPolicyIntrusionDetection>;
    /**
     * The Azure Region where the Firewall Policy should exist. Changing this forces a new Firewall Policy to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Firewall Policy. Changing this forces a new Firewall Policy to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of private IP ranges to which traffic will not be SNAT.
     */
    privateIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group where the Firewall Policy should exist. Changing this forces a new Firewall Policy to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A list of references to Firewall Policy Rule Collection Groups that belongs to this Firewall Policy.
     */
    ruleCollectionGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The SKU Tier of the Firewall Policy. Possible values are `Standard`, `Premium`. Changing this forces a new Firewall Policy to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Firewall Policy.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `threatIntelligenceAllowlist` block as defined below.
     */
    threatIntelligenceAllowlist?: pulumi.Input<inputs.network.FirewallPolicyThreatIntelligenceAllowlist>;
    /**
     * The operation mode for Threat Intelligence. Possible values are `Alert`, `Deny` and `Off`. Defaults to `Alert`.
     */
    threatIntelligenceMode?: pulumi.Input<string>;
    /**
     * A `tlsCertificate` block as defined below.
     */
    tlsCertificate?: pulumi.Input<inputs.network.FirewallPolicyTlsCertificate>;
}
/**
 * The set of arguments for constructing a FirewallPolicy resource.
 */
export interface FirewallPolicyArgs {
    /**
     * The ID of the base Firewall Policy.
     */
    basePolicyId?: pulumi.Input<string>;
    /**
     * A `dns` block as defined below.
     */
    dns?: pulumi.Input<inputs.network.FirewallPolicyDns>;
    /**
     * An `identity` block as defined below. Changing this forces a new Firewall Policy to be created.
     */
    identity?: pulumi.Input<inputs.network.FirewallPolicyIdentity>;
    /**
     * An `insights` block as defined below.
     */
    insights?: pulumi.Input<inputs.network.FirewallPolicyInsights>;
    /**
     * A `intrusionDetection` block as defined below.
     */
    intrusionDetection?: pulumi.Input<inputs.network.FirewallPolicyIntrusionDetection>;
    /**
     * The Azure Region where the Firewall Policy should exist. Changing this forces a new Firewall Policy to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Firewall Policy. Changing this forces a new Firewall Policy to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of private IP ranges to which traffic will not be SNAT.
     */
    privateIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group where the Firewall Policy should exist. Changing this forces a new Firewall Policy to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU Tier of the Firewall Policy. Possible values are `Standard`, `Premium`. Changing this forces a new Firewall Policy to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Firewall Policy.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `threatIntelligenceAllowlist` block as defined below.
     */
    threatIntelligenceAllowlist?: pulumi.Input<inputs.network.FirewallPolicyThreatIntelligenceAllowlist>;
    /**
     * The operation mode for Threat Intelligence. Possible values are `Alert`, `Deny` and `Off`. Defaults to `Alert`.
     */
    threatIntelligenceMode?: pulumi.Input<string>;
    /**
     * A `tlsCertificate` block as defined below.
     */
    tlsCertificate?: pulumi.Input<inputs.network.FirewallPolicyTlsCertificate>;
}
