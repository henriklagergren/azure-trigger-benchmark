import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure File Share Backup Policy within a Recovery Services vault.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVault = new azure.recoveryservices.Vault("exampleVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const policy = new azure.backup.PolicyFileShare("policy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     recoveryVaultName: azurerm_recovery_services_vault.vault.name,
 *     timezone: "UTC",
 *     backup: {
 *         frequency: "Daily",
 *         time: "23:00",
 *     },
 *     retentionDaily: {
 *         count: 10,
 *     },
 *     retentionWeekly: {
 *         count: 7,
 *         weekdays: [
 *             "Sunday",
 *             "Wednesday",
 *             "Friday",
 *             "Saturday",
 *         ],
 *     },
 *     retentionMonthly: {
 *         count: 7,
 *         weekdays: [
 *             "Sunday",
 *             "Wednesday",
 *         ],
 *         weeks: [
 *             "First",
 *             "Last",
 *         ],
 *     },
 *     retentionYearly: {
 *         count: 7,
 *         weekdays: ["Sunday"],
 *         weeks: ["Last"],
 *         months: ["January"],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Azure File Share Backup Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:backup/policyFileShare:PolicyFileShare policy1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.RecoveryServices/vaults/example-recovery-vault/backupPolicies/policy1
 * ```
 */
export declare class PolicyFileShare extends pulumi.CustomResource {
    /**
     * Get an existing PolicyFileShare resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyFileShareState, opts?: pulumi.CustomResourceOptions): PolicyFileShare;
    /**
     * Returns true if the given object is an instance of PolicyFileShare.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PolicyFileShare;
    /**
     * Configures the Policy backup frequency and times as documented in the `backup` block below.
     */
    readonly backup: pulumi.Output<outputs.backup.PolicyFileShareBackup>;
    /**
     * Specifies the name of the policy. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    readonly recoveryVaultName: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Configures the policy daily retention as documented in the `retentionDaily` block below.
     */
    readonly retentionDaily: pulumi.Output<outputs.backup.PolicyFileShareRetentionDaily>;
    /**
     * Configures the policy monthly retention as documented in the `retentionMonthly` block below.
     */
    readonly retentionMonthly: pulumi.Output<outputs.backup.PolicyFileShareRetentionMonthly | undefined>;
    /**
     * Configures the policy weekly retention as documented in the `retentionWeekly` block below.
     */
    readonly retentionWeekly: pulumi.Output<outputs.backup.PolicyFileShareRetentionWeekly | undefined>;
    /**
     * Configures the policy yearly retention as documented in the `retentionYearly` block below.
     */
    readonly retentionYearly: pulumi.Output<outputs.backup.PolicyFileShareRetentionYearly | undefined>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the timezone. [the possible values are defined here](http://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/). Defaults to `UTC`
     */
    readonly timezone: pulumi.Output<string | undefined>;
    /**
     * Create a PolicyFileShare resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyFileShareArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PolicyFileShare resources.
 */
export interface PolicyFileShareState {
    /**
     * Configures the Policy backup frequency and times as documented in the `backup` block below.
     */
    backup?: pulumi.Input<inputs.backup.PolicyFileShareBackup>;
    /**
     * Specifies the name of the policy. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    recoveryVaultName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Configures the policy daily retention as documented in the `retentionDaily` block below.
     */
    retentionDaily?: pulumi.Input<inputs.backup.PolicyFileShareRetentionDaily>;
    /**
     * Configures the policy monthly retention as documented in the `retentionMonthly` block below.
     */
    retentionMonthly?: pulumi.Input<inputs.backup.PolicyFileShareRetentionMonthly>;
    /**
     * Configures the policy weekly retention as documented in the `retentionWeekly` block below.
     */
    retentionWeekly?: pulumi.Input<inputs.backup.PolicyFileShareRetentionWeekly>;
    /**
     * Configures the policy yearly retention as documented in the `retentionYearly` block below.
     */
    retentionYearly?: pulumi.Input<inputs.backup.PolicyFileShareRetentionYearly>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the timezone. [the possible values are defined here](http://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/). Defaults to `UTC`
     */
    timezone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PolicyFileShare resource.
 */
export interface PolicyFileShareArgs {
    /**
     * Configures the Policy backup frequency and times as documented in the `backup` block below.
     */
    backup: pulumi.Input<inputs.backup.PolicyFileShareBackup>;
    /**
     * Specifies the name of the policy. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the policy. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Configures the policy daily retention as documented in the `retentionDaily` block below.
     */
    retentionDaily: pulumi.Input<inputs.backup.PolicyFileShareRetentionDaily>;
    /**
     * Configures the policy monthly retention as documented in the `retentionMonthly` block below.
     */
    retentionMonthly?: pulumi.Input<inputs.backup.PolicyFileShareRetentionMonthly>;
    /**
     * Configures the policy weekly retention as documented in the `retentionWeekly` block below.
     */
    retentionWeekly?: pulumi.Input<inputs.backup.PolicyFileShareRetentionWeekly>;
    /**
     * Configures the policy yearly retention as documented in the `retentionYearly` block below.
     */
    retentionYearly?: pulumi.Input<inputs.backup.PolicyFileShareRetentionYearly>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the timezone. [the possible values are defined here](http://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/). Defaults to `UTC`
     */
    timezone?: pulumi.Input<string>;
}
