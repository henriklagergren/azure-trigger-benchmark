import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import { Kind } from "./index";
/**
 * Manages an App Service Plan component.
 *
 * ## Example Usage
 * ### Dedicated)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * ```
 * ### Shared / Consumption Plan)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "FunctionApp",
 *     sku: {
 *         tier: "Dynamic",
 *         size: "Y1",
 *     },
 * });
 * ```
 * ### Linux)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "Linux",
 *     reserved: true,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * ```
 * ### Windows Container)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "xenon",
 *     isXenon: true,
 *     sku: {
 *         tier: "PremiumContainer",
 *         size: "PC2",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * App Service Plan instances can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/plan:Plan instance1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/serverfarms/instance1
 * ```
 */
export declare class Plan extends pulumi.CustomResource {
    /**
     * Get an existing Plan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlanState, opts?: pulumi.CustomResourceOptions): Plan;
    /**
     * Returns true if the given object is an instance of Plan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Plan;
    /**
     * The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
     */
    readonly appServiceEnvironmentId: pulumi.Output<string | undefined>;
    readonly isXenon: pulumi.Output<boolean | undefined>;
    /**
     * The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux`, `elastic` (for Premium Consumption) and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan.
     */
    readonly maximumElasticWorkerCount: pulumi.Output<number>;
    /**
     * The maximum number of workers supported with the App Service Plan's sku.
     */
    readonly maximumNumberOfWorkers: pulumi.Output<number>;
    /**
     * Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
     */
    readonly perSiteScaling: pulumi.Output<boolean | undefined>;
    /**
     * Is this App Service Plan `Reserved`. Defaults to `false`.
     */
    readonly reserved: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to create the App Service Plan component.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sku` block as documented below.
     */
    readonly sku: pulumi.Output<outputs.appservice.PlanSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies if the App Service Plan should be Zone Redundant. Changing this forces a new resource to be created. Defaults to `false`.
     */
    readonly zoneRedundant: pulumi.Output<boolean | undefined>;
    /**
     * Create a Plan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Plan resources.
 */
export interface PlanState {
    /**
     * The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
     */
    appServiceEnvironmentId?: pulumi.Input<string>;
    isXenon?: pulumi.Input<boolean>;
    /**
     * The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux`, `elastic` (for Premium Consumption) and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string | Kind>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan.
     */
    maximumElasticWorkerCount?: pulumi.Input<number>;
    /**
     * The maximum number of workers supported with the App Service Plan's sku.
     */
    maximumNumberOfWorkers?: pulumi.Input<number>;
    /**
     * Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
     */
    perSiteScaling?: pulumi.Input<boolean>;
    /**
     * Is this App Service Plan `Reserved`. Defaults to `false`.
     */
    reserved?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the App Service Plan component.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sku` block as documented below.
     */
    sku?: pulumi.Input<inputs.appservice.PlanSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies if the App Service Plan should be Zone Redundant. Changing this forces a new resource to be created. Defaults to `false`.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Plan resource.
 */
export interface PlanArgs {
    /**
     * The ID of the App Service Environment where the App Service Plan should be located. Changing forces a new resource to be created.
     */
    appServiceEnvironmentId?: pulumi.Input<string>;
    isXenon?: pulumi.Input<boolean>;
    /**
     * The kind of the App Service Plan to create. Possible values are `Windows` (also available as `App`), `Linux`, `elastic` (for Premium Consumption) and `FunctionApp` (for a Consumption Plan). Defaults to `Windows`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string | Kind>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan.
     */
    maximumElasticWorkerCount?: pulumi.Input<number>;
    /**
     * Specifies the name of the App Service Plan component. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Can Apps assigned to this App Service Plan be scaled independently? If set to `false` apps assigned to this plan will scale to all instances of the plan.  Defaults to `false`.
     */
    perSiteScaling?: pulumi.Input<boolean>;
    /**
     * Is this App Service Plan `Reserved`. Defaults to `false`.
     */
    reserved?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the App Service Plan component.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as documented below.
     */
    sku: pulumi.Input<inputs.appservice.PlanSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies if the App Service Plan should be Zone Redundant. Changing this forces a new resource to be created. Defaults to `false`.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
