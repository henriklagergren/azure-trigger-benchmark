import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Policy Remediation at the specified Scope.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDefinition = new azure.policy.Definition("exampleDefinition", {
 *     policyType: "Custom",
 *     mode: "All",
 *     displayName: "my-policy-definition",
 *     policyRule: `    {
 *     "if": {
 *       "not": {
 *         "field": "location",
 *         "in": "[parameters('allowedLocations')]"
 *       }
 *     },
 *     "then": {
 *       "effect": "audit"
 *     }
 *   }
 * `,
 *     parameters: `    {
 *     "allowedLocations": {
 *       "type": "Array",
 *       "metadata": {
 *         "description": "The list of allowed locations for resources.",
 *         "displayName": "Allowed locations",
 *         "strongType": "location"
 *       }
 *     }
 *   }
 * `,
 * });
 * const exampleAssignment = new azure.policy.Assignment("exampleAssignment", {
 *     scope: exampleResourceGroup.id,
 *     policyDefinitionId: exampleDefinition.id,
 *     description: "Policy Assignment created via an Acceptance Test",
 *     displayName: "My Example Policy Assignment",
 *     parameters: `{
 *   "allowedLocations": {
 *     "value": [ "West Europe" ]
 *   }
 * }
 * `,
 * });
 * const exampleRemediation = new azure.policy.Remediation("exampleRemediation", {
 *     scope: exampleAssignment.scope,
 *     policyAssignmentId: exampleAssignment.id,
 *     locationFilters: ["West Europe"],
 * });
 * ```
 *
 * ## Import
 *
 * Policy Remediations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:policy/remediation:Remediation example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.PolicyInsights/remediations/remediation1
 * ```
 *
 *  or
 *
 * ```sh
 *  $ pulumi import azure:policy/remediation:Remediation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.PolicyInsights/remediations/remediation1
 * ```
 *
 *  or
 *
 * ```sh
 *  $ pulumi import azure:policy/remediation:Remediation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Compute/virtualMachines/vm1/providers/Microsoft.PolicyInsights/remediations/remediation1
 * ```
 *
 *  or
 *
 * ```sh
 *  $ pulumi import azure:policy/remediation:Remediation example /providers/Microsoft.Management/managementGroups/my-mgmt-group-id/providers/Microsoft.PolicyInsights/remediations/remediation1
 * ```
 */
export declare class Remediation extends pulumi.CustomResource {
    /**
     * Get an existing Remediation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RemediationState, opts?: pulumi.CustomResourceOptions): Remediation;
    /**
     * Returns true if the given object is an instance of Remediation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Remediation;
    /**
     * A list of the resource locations that will be remediated.
     */
    readonly locationFilters: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Policy Remediation. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Policy Assignment that should be remediated.
     */
    readonly policyAssignmentId: pulumi.Output<string>;
    /**
     * The unique ID for the policy definition within the policy set definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    readonly policyDefinitionReferenceId: pulumi.Output<string | undefined>;
    /**
     * The way that resources to remediate are discovered. Possible values are `ExistingNonCompliant`, `ReEvaluateCompliance`. Defaults to `ExistingNonCompliant`.
     */
    readonly resourceDiscoveryMode: pulumi.Output<string | undefined>;
    /**
     * The Scope at which the Policy Remediation should be applied. Changing this forces a new resource to be created. A scope must be a Resource ID out of one of the following list:
     */
    readonly scope: pulumi.Output<string>;
    /**
     * Create a Remediation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RemediationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Remediation resources.
 */
export interface RemediationState {
    /**
     * A list of the resource locations that will be remediated.
     */
    locationFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Policy Remediation. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Policy Assignment that should be remediated.
     */
    policyAssignmentId?: pulumi.Input<string>;
    /**
     * The unique ID for the policy definition within the policy set definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    policyDefinitionReferenceId?: pulumi.Input<string>;
    /**
     * The way that resources to remediate are discovered. Possible values are `ExistingNonCompliant`, `ReEvaluateCompliance`. Defaults to `ExistingNonCompliant`.
     */
    resourceDiscoveryMode?: pulumi.Input<string>;
    /**
     * The Scope at which the Policy Remediation should be applied. Changing this forces a new resource to be created. A scope must be a Resource ID out of one of the following list:
     */
    scope?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Remediation resource.
 */
export interface RemediationArgs {
    /**
     * A list of the resource locations that will be remediated.
     */
    locationFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Policy Remediation. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Policy Assignment that should be remediated.
     */
    policyAssignmentId: pulumi.Input<string>;
    /**
     * The unique ID for the policy definition within the policy set definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition.
     */
    policyDefinitionReferenceId?: pulumi.Input<string>;
    /**
     * The way that resources to remediate are discovered. Possible values are `ExistingNonCompliant`, `ReEvaluateCompliance`. Defaults to `ExistingNonCompliant`.
     */
    resourceDiscoveryMode?: pulumi.Input<string>;
    /**
     * The Scope at which the Policy Remediation should be applied. Changing this forces a new resource to be created. A scope must be a Resource ID out of one of the following list:
     */
    scope: pulumi.Input<string>;
}
