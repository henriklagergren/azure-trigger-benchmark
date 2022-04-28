import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Configures the specified Policy Definition at the specified Scope. Also, Policy Set Definitions are supported.
 *
 * !> **Note:** The `azure.policy.Assignment` resource has been deprecated in favour of the `azure.management.GroupPolicyAssignment`, `azure.core.ResourcePolicyAssignment`, `azure.core.ResourceGroupPolicyAssignment` and `azure.core.SubscriptionPolicyAssignment` resources and will be removed in v3.0 of the Azure Provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleDefinition = new azure.policy.Definition("exampleDefinition", {
 *     policyType: "Custom",
 *     mode: "All",
 *     displayName: "my-policy-definition",
 *     policyRule: `	{
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
 *     parameters: `	{
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
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAssignment = new azure.policy.Assignment("exampleAssignment", {
 *     scope: exampleResourceGroup.id,
 *     policyDefinitionId: exampleDefinition.id,
 *     description: "Policy Assignment created via an Acceptance Test",
 *     displayName: "My Example Policy Assignment",
 *     metadata: `    {
 *     "category": "General"
 *     }
 * `,
 *     parameters: `{
 *   "allowedLocations": {
 *     "value": [ "West Europe" ]
 *   }
 * }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Policy Assignments can be imported using the `policy name`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:policy/assignment:Assignment assignment1 /subscriptions/00000000-0000-0000-000000000000/providers/Microsoft.Authorization/policyAssignments/assignment1
 * ```
 */
export declare class Assignment extends pulumi.CustomResource {
    /**
     * Get an existing Assignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssignmentState, opts?: pulumi.CustomResourceOptions): Assignment;
    /**
     * Returns true if the given object is an instance of Assignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Assignment;
    /**
     * A description to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * Can be set to 'true' or 'false' to control whether the assignment is enforced (true) or not (false). Default is 'true'.
     */
    readonly enforcementMode: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.policy.AssignmentIdentity>;
    /**
     * The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The metadata for the policy assignment. This is a JSON string representing additional metadata that should be stored with the policy assignment.
     */
    readonly metadata: pulumi.Output<string>;
    /**
     * The name of the Policy Assignment. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`).
     */
    readonly notScopes: pulumi.Output<string[] | undefined>;
    /**
     * Parameters for the policy definition. This field is a JSON string that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
     */
    readonly parameters: pulumi.Output<string | undefined>;
    /**
     * The ID of the Policy Definition to be applied at the specified Scope.
     */
    readonly policyDefinitionId: pulumi.Output<string>;
    /**
     * The Scope at which the Policy Assignment should be applied, which must be a Resource ID (such as Subscription e.g. `/subscriptions/00000000-0000-0000-000000000000` or a Resource Group e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Output<string>;
    /**
     * Create a Assignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssignmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Assignment resources.
 */
export interface AssignmentState {
    /**
     * A description to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Can be set to 'true' or 'false' to control whether the assignment is enforced (true) or not (false). Default is 'true'.
     */
    enforcementMode?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.policy.AssignmentIdentity>;
    /**
     * The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The metadata for the policy assignment. This is a JSON string representing additional metadata that should be stored with the policy assignment.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name of the Policy Assignment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`).
     */
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Parameters for the policy definition. This field is a JSON string that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
     */
    parameters?: pulumi.Input<string>;
    /**
     * The ID of the Policy Definition to be applied at the specified Scope.
     */
    policyDefinitionId?: pulumi.Input<string>;
    /**
     * The Scope at which the Policy Assignment should be applied, which must be a Resource ID (such as Subscription e.g. `/subscriptions/00000000-0000-0000-000000000000` or a Resource Group e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). Changing this forces a new resource to be created.
     */
    scope?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Assignment resource.
 */
export interface AssignmentArgs {
    /**
     * A description to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * A friendly display name to use for this Policy Assignment. Changing this forces a new resource to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Can be set to 'true' or 'false' to control whether the assignment is enforced (true) or not (false). Default is 'true'.
     */
    enforcementMode?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.policy.AssignmentIdentity>;
    /**
     * The Azure location where this policy assignment should exist. This is required when an Identity is assigned. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The metadata for the policy assignment. This is a JSON string representing additional metadata that should be stored with the policy assignment.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name of the Policy Assignment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of the Policy Assignment's excluded scopes. The list must contain Resource IDs (such as Subscriptions e.g. `/subscriptions/00000000-0000-0000-000000000000` or Resource Groups e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`).
     */
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Parameters for the policy definition. This field is a JSON string that maps to the Parameters field from the Policy Definition. Changing this forces a new resource to be created.
     */
    parameters?: pulumi.Input<string>;
    /**
     * The ID of the Policy Definition to be applied at the specified Scope.
     */
    policyDefinitionId: pulumi.Input<string>;
    /**
     * The Scope at which the Policy Assignment should be applied, which must be a Resource ID (such as Subscription e.g. `/subscriptions/00000000-0000-0000-000000000000` or a Resource Group e.g.`/subscriptions/00000000-0000-0000-000000000000/resourceGroups/myResourceGroup`). Changing this forces a new resource to be created.
     */
    scope: pulumi.Input<string>;
}
