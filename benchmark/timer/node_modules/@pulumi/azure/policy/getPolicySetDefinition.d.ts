import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Policy Set Definition.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.policy.getPolicySetDefinition({
 *     displayName: "Policy Set Definition Example",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getPolicySetDefinition(args?: GetPolicySetDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicySetDefinitionResult>;
/**
 * A collection of arguments for invoking getPolicySetDefinition.
 */
export interface GetPolicySetDefinitionArgs {
    /**
     * Specifies the display name of the Policy Set Definition. Conflicts with `name`.
     */
    displayName?: string;
    /**
     * Only retrieve Policy Set Definitions from this Management Group.
     */
    managementGroupName?: string;
    /**
     * Specifies the name of the Policy Set Definition. Conflicts with `displayName`.
     */
    name?: string;
}
/**
 * A collection of values returned by getPolicySetDefinition.
 */
export interface GetPolicySetDefinitionResult {
    /**
     * The description of this policy definition group.
     */
    readonly description: string;
    /**
     * The display name of this policy definition group.
     */
    readonly displayName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly managementGroupName?: string;
    /**
     * Any Metadata defined in the Policy Set Definition.
     */
    readonly metadata: string;
    /**
     * The name of this policy definition group.
     */
    readonly name: string;
    /**
     * The mapping of the parameter values for the referenced policy rule. The keys are the parameter names.
     */
    readonly parameters: string;
    /**
     * One or more `policyDefinitionGroup` blocks as defined below.
     */
    readonly policyDefinitionGroups: outputs.policy.GetPolicySetDefinitionPolicyDefinitionGroup[];
    /**
     * One or more `policyDefinitionReference` blocks as defined below.
     */
    readonly policyDefinitionReferences: outputs.policy.GetPolicySetDefinitionPolicyDefinitionReference[];
    /**
     * The policy definitions contained within the policy set definition.
     */
    readonly policyDefinitions: string;
    /**
     * The Type of the Policy Set Definition.
     */
    readonly policyType: string;
}
export declare function getPolicySetDefinitionOutput(args?: GetPolicySetDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicySetDefinitionResult>;
/**
 * A collection of arguments for invoking getPolicySetDefinition.
 */
export interface GetPolicySetDefinitionOutputArgs {
    /**
     * Specifies the display name of the Policy Set Definition. Conflicts with `name`.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Only retrieve Policy Set Definitions from this Management Group.
     */
    managementGroupName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Policy Set Definition. Conflicts with `displayName`.
     */
    name?: pulumi.Input<string>;
}
