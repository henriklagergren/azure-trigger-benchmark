import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Subscription Template Deployment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.SubscriptionTemplateDeployment("example", {
 *     location: "West Europe",
 *     templateContent: ` {
 *    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
 *    "contentVersion": "1.0.0.0",
 *    "parameters": {},
 *    "variables": {},
 *    "resources": [
 *      {
 *        "type": "Microsoft.Resources/resourceGroups",
 *        "apiVersion": "2018-05-01",
 *        "location": "West Europe",
 *        "name": "some-resource-group",
 *        "properties": {}
 *      }
 *    ]
 *  }
 *  `,
 * });
 * ```
 *
 * ## Import
 *
 * Subscription Template Deployments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:core/subscriptionTemplateDeployment:SubscriptionTemplateDeployment example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Resources/deployments/template1
 * ```
 */
export declare class SubscriptionTemplateDeployment extends pulumi.CustomResource {
    /**
     * Get an existing SubscriptionTemplateDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubscriptionTemplateDeploymentState, opts?: pulumi.CustomResourceOptions): SubscriptionTemplateDeployment;
    /**
     * Returns true if the given object is an instance of SubscriptionTemplateDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SubscriptionTemplateDeployment;
    /**
     * The Debug Level which should be used for this Subscription Template Deployment. Possible values are `none`, `requestContent`, `responseContent` and `requestContent, responseContent`.
     */
    readonly debugLevel: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the Subscription Template Deployment should exist. Changing this forces a new Subscription Template Deployment to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Subscription Template Deployment. Changing this forces a new Subscription Template Deployment to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The JSON Content of the Outputs of the ARM Template Deployment.
     */
    readonly outputContent: pulumi.Output<string>;
    /**
     * The contents of the ARM Template parameters file - containing a JSON list of parameters.
     */
    readonly parametersContent: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Subscription Template Deployment.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The contents of the ARM Template which should be deployed into this Subscription.
     */
    readonly templateContent: pulumi.Output<string>;
    /**
     * The ID of the Template Spec Version to deploy into the Subscription. Cannot be specified with `templateContent`.
     */
    readonly templateSpecVersionId: pulumi.Output<string | undefined>;
    /**
     * Create a SubscriptionTemplateDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SubscriptionTemplateDeploymentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SubscriptionTemplateDeployment resources.
 */
export interface SubscriptionTemplateDeploymentState {
    /**
     * The Debug Level which should be used for this Subscription Template Deployment. Possible values are `none`, `requestContent`, `responseContent` and `requestContent, responseContent`.
     */
    debugLevel?: pulumi.Input<string>;
    /**
     * The Azure Region where the Subscription Template Deployment should exist. Changing this forces a new Subscription Template Deployment to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Subscription Template Deployment. Changing this forces a new Subscription Template Deployment to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The JSON Content of the Outputs of the ARM Template Deployment.
     */
    outputContent?: pulumi.Input<string>;
    /**
     * The contents of the ARM Template parameters file - containing a JSON list of parameters.
     */
    parametersContent?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Subscription Template Deployment.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The contents of the ARM Template which should be deployed into this Subscription.
     */
    templateContent?: pulumi.Input<string>;
    /**
     * The ID of the Template Spec Version to deploy into the Subscription. Cannot be specified with `templateContent`.
     */
    templateSpecVersionId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SubscriptionTemplateDeployment resource.
 */
export interface SubscriptionTemplateDeploymentArgs {
    /**
     * The Debug Level which should be used for this Subscription Template Deployment. Possible values are `none`, `requestContent`, `responseContent` and `requestContent, responseContent`.
     */
    debugLevel?: pulumi.Input<string>;
    /**
     * The Azure Region where the Subscription Template Deployment should exist. Changing this forces a new Subscription Template Deployment to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Subscription Template Deployment. Changing this forces a new Subscription Template Deployment to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The contents of the ARM Template parameters file - containing a JSON list of parameters.
     */
    parametersContent?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Subscription Template Deployment.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The contents of the ARM Template which should be deployed into this Subscription.
     */
    templateContent?: pulumi.Input<string>;
    /**
     * The ID of the Template Spec Version to deploy into the Subscription. Cannot be specified with `templateContent`.
     */
    templateSpecVersionId?: pulumi.Input<string>;
}
