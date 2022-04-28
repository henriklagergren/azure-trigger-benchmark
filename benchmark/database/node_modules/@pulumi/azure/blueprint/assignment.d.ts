import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Blueprint Assignment resource
 *
 * > **NOTE:** Azure Blueprints are in Preview and potentially subject to breaking change without notice.
 *
 * > **NOTE:** Azure Blueprint Assignments can only be applied to Subscriptions.  Assignments to Management Groups is not currently supported by the service or by this provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleSubscription = azure.core.getSubscription({});
 * const exampleDefinition = exampleSubscription.then(exampleSubscription => azure.blueprint.getDefinition({
 *     name: "exampleBlueprint",
 *     scopeId: exampleSubscription.id,
 * }));
 * const examplePublishedVersion = Promise.all([exampleDefinition, exampleDefinition]).then(([exampleDefinition, exampleDefinition1]) => azure.blueprint.getPublishedVersion({
 *     scopeId: exampleDefinition.scopeId,
 *     blueprintName: exampleDefinition1.name,
 *     version: "v1.0.0",
 * }));
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {
 *     location: "West Europe",
 *     tags: {
 *         Environment: "example",
 *     },
 * });
 * const exampleUserAssignedIdentity = new azure.authorization.UserAssignedIdentity("exampleUserAssignedIdentity", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const operator = new azure.authorization.Assignment("operator", {
 *     scope: exampleSubscription.then(exampleSubscription => exampleSubscription.id),
 *     roleDefinitionName: "Blueprint Operator",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const owner = new azure.authorization.Assignment("owner", {
 *     scope: exampleSubscription.then(exampleSubscription => exampleSubscription.id),
 *     roleDefinitionName: "Owner",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const exampleAssignment = new azure.blueprint.Assignment("exampleAssignment", {
 *     targetSubscriptionId: exampleSubscription.then(exampleSubscription => exampleSubscription.id),
 *     versionId: examplePublishedVersion.then(examplePublishedVersion => examplePublishedVersion.id),
 *     location: exampleResourceGroup.location,
 *     lockMode: "AllResourcesDoNotDelete",
 *     lockExcludePrincipals: [current.then(current => current.objectId)],
 *     identity: {
 *         type: "UserAssigned",
 *         identityIds: [exampleUserAssignedIdentity.id],
 *     },
 *     resourceGroups: `    {
 *       "ResourceGroup": {
 *         "name": "exampleRG-bp"
 *       }
 *     }
 * `,
 *     parameterValues: `    {
 *       "allowedlocationsforresourcegroups_listOfAllowedLocations": {
 *         "value": ["westus", "westus2", "eastus", "centralus", "centraluseuap", "southcentralus", "northcentralus", "westcentralus", "eastus2", "eastus2euap", "brazilsouth", "brazilus", "northeurope", "westeurope", "eastasia", "southeastasia", "japanwest", "japaneast", "koreacentral", "koreasouth", "indiasouth", "indiawest", "indiacentral", "australiaeast", "australiasoutheast", "canadacentral", "canadaeast", "uknorth", "uksouth2", "uksouth", "ukwest", "francecentral", "francesouth", "australiacentral", "australiacentral2", "uaecentral", "uaenorth", "southafricanorth", "southafricawest", "switzerlandnorth", "switzerlandwest", "germanynorth", "germanywestcentral", "norwayeast", "norwaywest"]
 *       }
 *     }
 * `,
 * }, {
 *     dependsOn: [
 *         operator,
 *         owner,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Azure Blueprint Assignments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:blueprint/assignment:Assignment example "/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Blueprint/blueprintAssignments/assignSimpleBlueprint"
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
     * The name of the blueprint assigned
     */
    readonly blueprintName: pulumi.Output<string>;
    /**
     * The Description on the Blueprint
     */
    readonly description: pulumi.Output<string>;
    /**
     * The display name of the blueprint
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.blueprint.AssignmentIdentity>;
    /**
     * The Azure location of the Assignment.
     */
    readonly location: pulumi.Output<string>;
    /**
     * a list of up to 200 actions that are permitted to bypass the locks applied by the Blueprint.
     */
    readonly lockExcludeActions: pulumi.Output<string[] | undefined>;
    /**
     * a list of up to 5 Principal IDs that are permitted to bypass the locks applied by the Blueprint.
     */
    readonly lockExcludePrincipals: pulumi.Output<string[] | undefined>;
    /**
     * The locking mode of the Blueprint Assignment.  One of `None` (Default), `AllResourcesReadOnly`, or `AllResourcesDoNotDelete`.
     */
    readonly lockMode: pulumi.Output<string | undefined>;
    /**
     * The name of the Blueprint Assignment
     */
    readonly name: pulumi.Output<string>;
    /**
     * a JSON string to supply Blueprint Assignment parameter values.
     */
    readonly parameterValues: pulumi.Output<string | undefined>;
    /**
     * a JSON string to supply the Blueprint Resource Group information.
     */
    readonly resourceGroups: pulumi.Output<string | undefined>;
    /**
     * The Subscription ID the Blueprint Published Version is to be applied to.
     */
    readonly targetSubscriptionId: pulumi.Output<string>;
    /**
     * The Identity type for the Managed Service Identity. Currently only `UserAssigned` is supported.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The ID of the Published Version of the blueprint to be assigned.
     */
    readonly versionId: pulumi.Output<string>;
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
     * The name of the blueprint assigned
     */
    blueprintName?: pulumi.Input<string>;
    /**
     * The Description on the Blueprint
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the blueprint
     */
    displayName?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.blueprint.AssignmentIdentity>;
    /**
     * The Azure location of the Assignment.
     */
    location?: pulumi.Input<string>;
    /**
     * a list of up to 200 actions that are permitted to bypass the locks applied by the Blueprint.
     */
    lockExcludeActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of up to 5 Principal IDs that are permitted to bypass the locks applied by the Blueprint.
     */
    lockExcludePrincipals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The locking mode of the Blueprint Assignment.  One of `None` (Default), `AllResourcesReadOnly`, or `AllResourcesDoNotDelete`.
     */
    lockMode?: pulumi.Input<string>;
    /**
     * The name of the Blueprint Assignment
     */
    name?: pulumi.Input<string>;
    /**
     * a JSON string to supply Blueprint Assignment parameter values.
     */
    parameterValues?: pulumi.Input<string>;
    /**
     * a JSON string to supply the Blueprint Resource Group information.
     */
    resourceGroups?: pulumi.Input<string>;
    /**
     * The Subscription ID the Blueprint Published Version is to be applied to.
     */
    targetSubscriptionId?: pulumi.Input<string>;
    /**
     * The Identity type for the Managed Service Identity. Currently only `UserAssigned` is supported.
     */
    type?: pulumi.Input<string>;
    /**
     * The ID of the Published Version of the blueprint to be assigned.
     */
    versionId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Assignment resource.
 */
export interface AssignmentArgs {
    /**
     * An `identity` block as defined below.
     */
    identity: pulumi.Input<inputs.blueprint.AssignmentIdentity>;
    /**
     * The Azure location of the Assignment.
     */
    location?: pulumi.Input<string>;
    /**
     * a list of up to 200 actions that are permitted to bypass the locks applied by the Blueprint.
     */
    lockExcludeActions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of up to 5 Principal IDs that are permitted to bypass the locks applied by the Blueprint.
     */
    lockExcludePrincipals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The locking mode of the Blueprint Assignment.  One of `None` (Default), `AllResourcesReadOnly`, or `AllResourcesDoNotDelete`.
     */
    lockMode?: pulumi.Input<string>;
    /**
     * The name of the Blueprint Assignment
     */
    name?: pulumi.Input<string>;
    /**
     * a JSON string to supply Blueprint Assignment parameter values.
     */
    parameterValues?: pulumi.Input<string>;
    /**
     * a JSON string to supply the Blueprint Resource Group information.
     */
    resourceGroups?: pulumi.Input<string>;
    /**
     * The Subscription ID the Blueprint Published Version is to be applied to.
     */
    targetSubscriptionId: pulumi.Input<string>;
    /**
     * The ID of the Published Version of the blueprint to be assigned.
     */
    versionId: pulumi.Input<string>;
}
