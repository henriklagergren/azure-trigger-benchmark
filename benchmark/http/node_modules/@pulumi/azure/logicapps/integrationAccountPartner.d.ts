import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Logic App Integration Account Partner.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIntegrationAccount = new azure.logicapps.IntegrationAccount("exampleIntegrationAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Standard",
 * });
 * const exampleIntegrationAccountPartner = new azure.logicapps.IntegrationAccountPartner("exampleIntegrationAccountPartner", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     integrationAccountName: exampleIntegrationAccount.name,
 *     businessIdentities: [{
 *         qualifier: "ZZ",
 *         value: "AA",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Account Partners can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccountPartner:IntegrationAccountPartner example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1/partners/partner1
 * ```
 */
export declare class IntegrationAccountPartner extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountPartner resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountPartnerState, opts?: pulumi.CustomResourceOptions): IntegrationAccountPartner;
    /**
     * Returns true if the given object is an instance of IntegrationAccountPartner.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountPartner;
    /**
     * A `businessIdentity` block as documented below.
     */
    readonly businessIdentities: pulumi.Output<outputs.logicapps.IntegrationAccountPartnerBusinessIdentity[]>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    readonly integrationAccountName: pulumi.Output<string>;
    /**
     * A JSON mapping of any Metadata for this Logic App Integration Account Partner.
     */
    readonly metadata: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this Logic App Integration Account Partner. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Partner should exist. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountPartner resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountPartnerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccountPartner resources.
 */
export interface IntegrationAccountPartnerState {
    /**
     * A `businessIdentity` block as documented below.
     */
    businessIdentities?: pulumi.Input<pulumi.Input<inputs.logicapps.IntegrationAccountPartnerBusinessIdentity>[]>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * A JSON mapping of any Metadata for this Logic App Integration Account Partner.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account Partner. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Partner should exist. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationAccountPartner resource.
 */
export interface IntegrationAccountPartnerArgs {
    /**
     * A `businessIdentity` block as documented below.
     */
    businessIdentities: pulumi.Input<pulumi.Input<inputs.logicapps.IntegrationAccountPartnerBusinessIdentity>[]>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * A JSON mapping of any Metadata for this Logic App Integration Account Partner.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account Partner. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Partner should exist. Changing this forces a new Logic App Integration Account Partner to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
