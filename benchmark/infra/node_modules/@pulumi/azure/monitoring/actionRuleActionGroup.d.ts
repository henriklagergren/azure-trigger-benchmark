import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Monitor Action Rule which type is action group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleActionGroup = new azure.monitoring.ActionGroup("exampleActionGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     shortName: "exampleactiongroup",
 * });
 * const exampleActionRuleActionGroup = new azure.monitoring.ActionRuleActionGroup("exampleActionRuleActionGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     actionGroupId: exampleActionGroup.id,
 *     scope: {
 *         type: "ResourceGroup",
 *         resourceIds: [exampleResourceGroup.id],
 *     },
 *     tags: {
 *         foo: "bar",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Monitor Action Rule can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/actionRuleActionGroup:ActionRuleActionGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AlertsManagement/actionRules/actionRule1
 * ```
 */
export declare class ActionRuleActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing ActionRuleActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionRuleActionGroupState, opts?: pulumi.CustomResourceOptions): ActionRuleActionGroup;
    /**
     * Returns true if the given object is an instance of ActionRuleActionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActionRuleActionGroup;
    /**
     * Specifies the resource id of monitor action group.
     */
    readonly actionGroupId: pulumi.Output<string>;
    /**
     * A `condition` block as defined below.
     */
    readonly condition: pulumi.Output<outputs.monitoring.ActionRuleActionGroupCondition | undefined>;
    /**
     * Specifies a description for the Action Rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Is the Action Rule enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the Monitor Action Rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the resource group in which the Monitor Action Rule should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `scope` block as defined below.
     */
    readonly scope: pulumi.Output<outputs.monitoring.ActionRuleActionGroupScope | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ActionRuleActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionRuleActionGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ActionRuleActionGroup resources.
 */
export interface ActionRuleActionGroupState {
    /**
     * Specifies the resource id of monitor action group.
     */
    actionGroupId?: pulumi.Input<string>;
    /**
     * A `condition` block as defined below.
     */
    condition?: pulumi.Input<inputs.monitoring.ActionRuleActionGroupCondition>;
    /**
     * Specifies a description for the Action Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the Action Rule enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Monitor Action Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group in which the Monitor Action Rule should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `scope` block as defined below.
     */
    scope?: pulumi.Input<inputs.monitoring.ActionRuleActionGroupScope>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ActionRuleActionGroup resource.
 */
export interface ActionRuleActionGroupArgs {
    /**
     * Specifies the resource id of monitor action group.
     */
    actionGroupId: pulumi.Input<string>;
    /**
     * A `condition` block as defined below.
     */
    condition?: pulumi.Input<inputs.monitoring.ActionRuleActionGroupCondition>;
    /**
     * Specifies a description for the Action Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the Action Rule enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Monitor Action Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group in which the Monitor Action Rule should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `scope` block as defined below.
     */
    scope?: pulumi.Input<inputs.monitoring.ActionRuleActionGroupScope>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
