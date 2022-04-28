import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Policy Assignment to a Management Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleGroup = new azure.management.Group("exampleGroup", {displayName: "Some Management Group"});
 * const exampleDefinition = new azure.policy.Definition("exampleDefinition", {
 *     policyType: "Custom",
 *     mode: "All",
 *     managementGroupId: exampleGroup.groupId,
 *     policyRule: `	{
 *     "if": {
 *       "not": {
 *         "field": "location",
 *         "equals": "westeurope"
 *       }
 *     },
 *     "then": {
 *       "effect": "Deny"
 *     }
 *   }
 * `,
 * });
 * const exampleGroupPolicyAssignment = new azure.management.GroupPolicyAssignment("exampleGroupPolicyAssignment", {
 *     policyDefinitionId: exampleDefinition.id,
 *     managementGroupId: exampleGroup.id,
 * });
 * ```
 *
 * ## Import
 *
 * Management Group Policy Assignments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:management/groupPolicyAssignment:GroupPolicyAssignment example /providers/Microsoft.Management/managementGroups/group1/providers/Microsoft.Authorization/policyAssignments/assignment1
 * ```
 */
export declare class GroupPolicyAssignment extends pulumi.CustomResource {
    /**
     * Get an existing GroupPolicyAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupPolicyAssignmentState, opts?: pulumi.CustomResourceOptions): GroupPolicyAssignment;
    /**
     * Returns true if the given object is an instance of GroupPolicyAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GroupPolicyAssignment;
    /**
     * A description which should be used for this Policy Assignment.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Display Name for this Policy Assignment.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * Specifies if this Policy should be enforced or not?
     */
    readonly enforce: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.management.GroupPolicyAssignmentIdentity | undefined>;
    /**
     * The Azure Region where the Policy Assignment should exist. Changing this forces a new Policy Assignment to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID of the Management Group. Changing this forces a new Policy Assignment to be created.
     */
    readonly managementGroupId: pulumi.Output<string>;
    /**
     * A JSON mapping of any Metadata for this Policy.
     */
    readonly metadata: pulumi.Output<string>;
    /**
     * The name which should be used for this Policy Assignment. Changing this forces a new Policy Assignment to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `nonComplianceMessage` blocks as defined below.
     */
    readonly nonComplianceMessages: pulumi.Output<outputs.management.GroupPolicyAssignmentNonComplianceMessage[] | undefined>;
    /**
     * Specifies a list of Resource Scopes (for example a Subscription, or a Resource Group) within this Management Group which are excluded from this Policy.
     */
    readonly notScopes: pulumi.Output<string[] | undefined>;
    /**
     * A JSON mapping of any Parameters for this Policy.
     */
    readonly parameters: pulumi.Output<string | undefined>;
    /**
     * The ID of the Policy Definition or Policy Definition Set. Changing this forces a new Policy Assignment to be created.
     */
    readonly policyDefinitionId: pulumi.Output<string>;
    /**
     * Create a GroupPolicyAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupPolicyAssignmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GroupPolicyAssignment resources.
 */
export interface GroupPolicyAssignmentState {
    /**
     * A description which should be used for this Policy Assignment.
     */
    description?: pulumi.Input<string>;
    /**
     * The Display Name for this Policy Assignment.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies if this Policy should be enforced or not?
     */
    enforce?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.management.GroupPolicyAssignmentIdentity>;
    /**
     * The Azure Region where the Policy Assignment should exist. Changing this forces a new Policy Assignment to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Management Group. Changing this forces a new Policy Assignment to be created.
     */
    managementGroupId?: pulumi.Input<string>;
    /**
     * A JSON mapping of any Metadata for this Policy.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name which should be used for this Policy Assignment. Changing this forces a new Policy Assignment to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `nonComplianceMessage` blocks as defined below.
     */
    nonComplianceMessages?: pulumi.Input<pulumi.Input<inputs.management.GroupPolicyAssignmentNonComplianceMessage>[]>;
    /**
     * Specifies a list of Resource Scopes (for example a Subscription, or a Resource Group) within this Management Group which are excluded from this Policy.
     */
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A JSON mapping of any Parameters for this Policy.
     */
    parameters?: pulumi.Input<string>;
    /**
     * The ID of the Policy Definition or Policy Definition Set. Changing this forces a new Policy Assignment to be created.
     */
    policyDefinitionId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GroupPolicyAssignment resource.
 */
export interface GroupPolicyAssignmentArgs {
    /**
     * A description which should be used for this Policy Assignment.
     */
    description?: pulumi.Input<string>;
    /**
     * The Display Name for this Policy Assignment.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies if this Policy should be enforced or not?
     */
    enforce?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.management.GroupPolicyAssignmentIdentity>;
    /**
     * The Azure Region where the Policy Assignment should exist. Changing this forces a new Policy Assignment to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Management Group. Changing this forces a new Policy Assignment to be created.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * A JSON mapping of any Metadata for this Policy.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name which should be used for this Policy Assignment. Changing this forces a new Policy Assignment to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `nonComplianceMessage` blocks as defined below.
     */
    nonComplianceMessages?: pulumi.Input<pulumi.Input<inputs.management.GroupPolicyAssignmentNonComplianceMessage>[]>;
    /**
     * Specifies a list of Resource Scopes (for example a Subscription, or a Resource Group) within this Management Group which are excluded from this Policy.
     */
    notScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A JSON mapping of any Parameters for this Policy.
     */
    parameters?: pulumi.Input<string>;
    /**
     * The ID of the Policy Definition or Policy Definition Set. Changing this forces a new Policy Assignment to be created.
     */
    policyDefinitionId: pulumi.Input<string>;
}
