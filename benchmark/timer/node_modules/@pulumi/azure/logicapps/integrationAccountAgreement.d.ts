import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Logic App Integration Account Agreement.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const testResourceGroup = new azure.core.ResourceGroup("testResourceGroup", {location: "West Europe"});
 * const testIntegrationAccount = new azure.logicapps.IntegrationAccount("testIntegrationAccount", {
 *     location: testResourceGroup.location,
 *     resourceGroupName: testResourceGroup.name,
 *     skuName: "Standard",
 * });
 * const host = new azure.logicapps.IntegrationAccountPartner("host", {
 *     resourceGroupName: testResourceGroup.name,
 *     integrationAccountName: testIntegrationAccount.name,
 *     businessIdentities: [{
 *         qualifier: "AS2Identity",
 *         value: "FabrikamNY",
 *     }],
 * });
 * const guest = new azure.logicapps.IntegrationAccountPartner("guest", {
 *     resourceGroupName: testResourceGroup.name,
 *     integrationAccountName: testIntegrationAccount.name,
 *     businessIdentities: [{
 *         qualifier: "AS2Identity",
 *         value: "FabrikamDC",
 *     }],
 * });
 * const testIntegrationAccountAgreement = new azure.logicapps.IntegrationAccountAgreement("testIntegrationAccountAgreement", {
 *     resourceGroupName: testResourceGroup.name,
 *     integrationAccountName: testIntegrationAccount.name,
 *     agreementType: "AS2",
 *     hostPartnerName: host.name,
 *     guestPartnerName: guest.name,
 *     content: fs.readFileSync("testdata/integration_account_agreement_content_as2.json"),
 *     hostIdentity: {
 *         qualifier: "AS2Identity",
 *         value: "FabrikamNY",
 *     },
 *     guestIdentity: {
 *         qualifier: "AS2Identity",
 *         value: "FabrikamDC",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Account Agreements can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccountAgreement:IntegrationAccountAgreement example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1/agreements/agreement1
 * ```
 */
export declare class IntegrationAccountAgreement extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountAgreement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountAgreementState, opts?: pulumi.CustomResourceOptions): IntegrationAccountAgreement;
    /**
     * Returns true if the given object is an instance of IntegrationAccountAgreement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountAgreement;
    /**
     * The type of the Logic App Integration Account Agreement. Possible values are `AS2`, `X12` and `Edifact`.
     */
    readonly agreementType: pulumi.Output<string>;
    /**
     * The content of the Logic App Integration Account Agreement.
     */
    readonly content: pulumi.Output<string>;
    /**
     * A `guestIdentity` block as documented below.
     */
    readonly guestIdentity: pulumi.Output<outputs.logicapps.IntegrationAccountAgreementGuestIdentity>;
    /**
     * The name of the guest Logic App Integration Account Partner.
     */
    readonly guestPartnerName: pulumi.Output<string>;
    /**
     * A `hostIdentity` block as documented below.
     */
    readonly hostIdentity: pulumi.Output<outputs.logicapps.IntegrationAccountAgreementHostIdentity>;
    /**
     * The name of the host Logic App Integration Account Partner.
     */
    readonly hostPartnerName: pulumi.Output<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    readonly integrationAccountName: pulumi.Output<string>;
    /**
     * The metadata of the Logic App Integration Account Agreement.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name which should be used for this Logic App Integration Account Agreement. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Agreement should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountAgreement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountAgreementArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccountAgreement resources.
 */
export interface IntegrationAccountAgreementState {
    /**
     * The type of the Logic App Integration Account Agreement. Possible values are `AS2`, `X12` and `Edifact`.
     */
    agreementType?: pulumi.Input<string>;
    /**
     * The content of the Logic App Integration Account Agreement.
     */
    content?: pulumi.Input<string>;
    /**
     * A `guestIdentity` block as documented below.
     */
    guestIdentity?: pulumi.Input<inputs.logicapps.IntegrationAccountAgreementGuestIdentity>;
    /**
     * The name of the guest Logic App Integration Account Partner.
     */
    guestPartnerName?: pulumi.Input<string>;
    /**
     * A `hostIdentity` block as documented below.
     */
    hostIdentity?: pulumi.Input<inputs.logicapps.IntegrationAccountAgreementHostIdentity>;
    /**
     * The name of the host Logic App Integration Account Partner.
     */
    hostPartnerName?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * The metadata of the Logic App Integration Account Agreement.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name which should be used for this Logic App Integration Account Agreement. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Agreement should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationAccountAgreement resource.
 */
export interface IntegrationAccountAgreementArgs {
    /**
     * The type of the Logic App Integration Account Agreement. Possible values are `AS2`, `X12` and `Edifact`.
     */
    agreementType: pulumi.Input<string>;
    /**
     * The content of the Logic App Integration Account Agreement.
     */
    content: pulumi.Input<string>;
    /**
     * A `guestIdentity` block as documented below.
     */
    guestIdentity: pulumi.Input<inputs.logicapps.IntegrationAccountAgreementGuestIdentity>;
    /**
     * The name of the guest Logic App Integration Account Partner.
     */
    guestPartnerName: pulumi.Input<string>;
    /**
     * A `hostIdentity` block as documented below.
     */
    hostIdentity: pulumi.Input<inputs.logicapps.IntegrationAccountAgreementHostIdentity>;
    /**
     * The name of the host Logic App Integration Account Partner.
     */
    hostPartnerName: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The metadata of the Logic App Integration Account Agreement.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name which should be used for this Logic App Integration Account Agreement. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Agreement should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
