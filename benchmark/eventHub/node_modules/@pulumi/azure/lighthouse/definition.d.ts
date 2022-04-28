import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a [Lighthouse](https://docs.microsoft.com/en-us/azure/lighthouse) Definition.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const contributor = azure.authorization.getRoleDefinition({
 *     roleDefinitionId: "b24988ac-6180-42a0-ab88-20f7382dd24c",
 * });
 * const example = new azure.lighthouse.Definition("example", {
 *     description: "This is a lighthouse definition created IaC",
 *     managingTenantId: "00000000-0000-0000-0000-000000000000",
 *     scope: "/subscriptions/00000000-0000-0000-0000-000000000000",
 *     authorizations: [{
 *         principalId: "00000000-0000-0000-0000-000000000000",
 *         roleDefinitionId: contributor.then(contributor => contributor.roleDefinitionId),
 *         principalDisplayName: "Tier 1 Support",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Lighthouse Definitions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lighthouse/definition:Definition example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.ManagedServices/registrationDefinitions/00000000-0000-0000-0000-000000000000
 * ```
 */
export declare class Definition extends pulumi.CustomResource {
    /**
     * Get an existing Definition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefinitionState, opts?: pulumi.CustomResourceOptions): Definition;
    /**
     * Returns true if the given object is an instance of Definition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Definition;
    /**
     * An authorization block as defined below.
     */
    readonly authorizations: pulumi.Output<outputs.lighthouse.DefinitionAuthorization[]>;
    /**
     * A description of the Lighthouse Definition.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A unique UUID/GUID which identifies this lighthouse definition - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    readonly lighthouseDefinitionId: pulumi.Output<string>;
    /**
     * The ID of the managing tenant. Changing this forces a new resource to be created.
     */
    readonly managingTenantId: pulumi.Output<string>;
    /**
     * The name of the Lighthouse Definition. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `plan` block as defined below.
     */
    readonly plan: pulumi.Output<outputs.lighthouse.DefinitionPlan | undefined>;
    /**
     * The ID of the managed subscription. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Output<string>;
    /**
     * Create a Definition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Definition resources.
 */
export interface DefinitionState {
    /**
     * An authorization block as defined below.
     */
    authorizations?: pulumi.Input<pulumi.Input<inputs.lighthouse.DefinitionAuthorization>[]>;
    /**
     * A description of the Lighthouse Definition.
     */
    description?: pulumi.Input<string>;
    /**
     * A unique UUID/GUID which identifies this lighthouse definition - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    lighthouseDefinitionId?: pulumi.Input<string>;
    /**
     * The ID of the managing tenant. Changing this forces a new resource to be created.
     */
    managingTenantId?: pulumi.Input<string>;
    /**
     * The name of the Lighthouse Definition. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.lighthouse.DefinitionPlan>;
    /**
     * The ID of the managed subscription. Changing this forces a new resource to be created.
     */
    scope?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Definition resource.
 */
export interface DefinitionArgs {
    /**
     * An authorization block as defined below.
     */
    authorizations: pulumi.Input<pulumi.Input<inputs.lighthouse.DefinitionAuthorization>[]>;
    /**
     * A description of the Lighthouse Definition.
     */
    description?: pulumi.Input<string>;
    /**
     * A unique UUID/GUID which identifies this lighthouse definition - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    lighthouseDefinitionId?: pulumi.Input<string>;
    /**
     * The ID of the managing tenant. Changing this forces a new resource to be created.
     */
    managingTenantId: pulumi.Input<string>;
    /**
     * The name of the Lighthouse Definition. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.lighthouse.DefinitionPlan>;
    /**
     * The ID of the managed subscription. Changing this forces a new resource to be created.
     */
    scope: pulumi.Input<string>;
}
