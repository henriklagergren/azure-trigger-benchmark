import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Azure Web Application Firewall Policy instance.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePolicy = new azure.waf.Policy("examplePolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     customRules: [
 *         {
 *             name: "Rule1",
 *             priority: 1,
 *             ruleType: "MatchRule",
 *             matchConditions: [{
 *                 matchVariables: [{
 *                     variableName: "RemoteAddr",
 *                 }],
 *                 operator: "IPMatch",
 *                 negationCondition: false,
 *                 matchValues: [
 *                     "192.168.1.0/24",
 *                     "10.0.0.0/24",
 *                 ],
 *             }],
 *             action: "Block",
 *         },
 *         {
 *             name: "Rule2",
 *             priority: 2,
 *             ruleType: "MatchRule",
 *             matchConditions: [
 *                 {
 *                     matchVariables: [{
 *                         variableName: "RemoteAddr",
 *                     }],
 *                     operator: "IPMatch",
 *                     negationCondition: false,
 *                     matchValues: ["192.168.1.0/24"],
 *                 },
 *                 {
 *                     matchVariables: [{
 *                         variableName: "RequestHeaders",
 *                         selector: "UserAgent",
 *                     }],
 *                     operator: "Contains",
 *                     negationCondition: false,
 *                     matchValues: ["Windows"],
 *                 },
 *             ],
 *             action: "Block",
 *         },
 *     ],
 *     policySettings: {
 *         enabled: true,
 *         mode: "Prevention",
 *         requestBodyCheck: true,
 *         fileUploadLimitInMb: 100,
 *         maxRequestBodySizeInKb: 128,
 *     },
 *     managedRules: {
 *         exclusions: [
 *             {
 *                 matchVariable: "RequestHeaderNames",
 *                 selector: "x-company-secret-header",
 *                 selectorMatchOperator: "Equals",
 *             },
 *             {
 *                 matchVariable: "RequestCookieNames",
 *                 selector: "too-tasty",
 *                 selectorMatchOperator: "EndsWith",
 *             },
 *         ],
 *         managedRuleSets: [{
 *             type: "OWASP",
 *             version: "3.1",
 *             ruleGroupOverrides: [{
 *                 ruleGroupName: "REQUEST-920-PROTOCOL-ENFORCEMENT",
 *                 disabledRules: [
 *                     "920300",
 *                     "920440",
 *                 ],
 *             }],
 *         }],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Web Application Firewall Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:waf/policy:Policy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-rg/providers/Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies/example-wafpolicy
 * ```
 */
export declare class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy;
    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Policy;
    /**
     * One or more `customRules` blocks as defined below.
     */
    readonly customRules: pulumi.Output<outputs.waf.PolicyCustomRule[] | undefined>;
    /**
     * A list of HTTP Listener IDs from an `azure.network.ApplicationGateway`.
     */
    readonly httpListenerIds: pulumi.Output<string[]>;
    /**
     * Resource location. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `managedRules` blocks as defined below.
     */
    readonly managedRules: pulumi.Output<outputs.waf.PolicyManagedRules>;
    /**
     * The name of the policy. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of URL Path Map Path Rule IDs from an `azure.network.ApplicationGateway`.
     */
    readonly pathBasedRuleIds: pulumi.Output<string[]>;
    /**
     * A `policySettings` block as defined below.
     */
    readonly policySettings: pulumi.Output<outputs.waf.PolicyPolicySettings | undefined>;
    /**
     * The name of the resource group. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the Web Application Firewall Policy.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * One or more `customRules` blocks as defined below.
     */
    customRules?: pulumi.Input<pulumi.Input<inputs.waf.PolicyCustomRule>[]>;
    /**
     * A list of HTTP Listener IDs from an `azure.network.ApplicationGateway`.
     */
    httpListenerIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource location. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `managedRules` blocks as defined below.
     */
    managedRules?: pulumi.Input<inputs.waf.PolicyManagedRules>;
    /**
     * The name of the policy. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of URL Path Map Path Rule IDs from an `azure.network.ApplicationGateway`.
     */
    pathBasedRuleIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `policySettings` block as defined below.
     */
    policySettings?: pulumi.Input<inputs.waf.PolicyPolicySettings>;
    /**
     * The name of the resource group. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Web Application Firewall Policy.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * One or more `customRules` blocks as defined below.
     */
    customRules?: pulumi.Input<pulumi.Input<inputs.waf.PolicyCustomRule>[]>;
    /**
     * Resource location. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `managedRules` blocks as defined below.
     */
    managedRules: pulumi.Input<inputs.waf.PolicyManagedRules>;
    /**
     * The name of the policy. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `policySettings` block as defined below.
     */
    policySettings?: pulumi.Input<inputs.waf.PolicyPolicySettings>;
    /**
     * The name of the resource group. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Web Application Firewall Policy.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
