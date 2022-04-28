import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Backup Policy to back up PostgreSQL.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const exampleBackupVault = new azure.dataprotection.BackupVault("exampleBackupVault", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     datastoreType: "VaultStore",
 *     redundancy: "LocallyRedundant",
 * });
 * const exampleBackupPolicyPostgresql = new azure.dataprotection.BackupPolicyPostgresql("exampleBackupPolicyPostgresql", {
 *     resourceGroupName: rg.name,
 *     vaultName: exampleBackupVault.name,
 *     backupRepeatingTimeIntervals: ["R/2021-05-23T02:30:00+00:00/P1W"],
 *     defaultRetentionDuration: "P4M",
 *     retentionRules: [
 *         {
 *             name: "weekly",
 *             duration: "P6M",
 *             priority: 20,
 *             criteria: {
 *                 absoluteCriteria: "FirstOfWeek",
 *             },
 *         },
 *         {
 *             name: "thursday",
 *             duration: "P1W",
 *             priority: 25,
 *             criteria: {
 *                 daysOfWeeks: ["Thursday"],
 *                 scheduledBackupTimes: ["2021-05-23T02:30:00Z"],
 *             },
 *         },
 *         {
 *             name: "monthly",
 *             duration: "P1D",
 *             priority: 15,
 *             criteria: {
 *                 weeksOfMonths: [
 *                     "First",
 *                     "Last",
 *                 ],
 *                 daysOfWeeks: ["Tuesday"],
 *                 scheduledBackupTimes: ["2021-05-23T02:30:00Z"],
 *             },
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Backup Policy PostgreSQLs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dataprotection/backupPolicyPostgresql:BackupPolicyPostgresql example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1/backupPolicies/backupPolicy1
 * ```
 */
export declare class BackupPolicyPostgresql extends pulumi.CustomResource {
    /**
     * Get an existing BackupPolicyPostgresql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupPolicyPostgresqlState, opts?: pulumi.CustomResourceOptions): BackupPolicyPostgresql;
    /**
     * Returns true if the given object is an instance of BackupPolicyPostgresql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupPolicyPostgresql;
    /**
     * Specifies a list of repeating time interval. It supports weekly back. It should follow `ISO 8601` repeating time interval. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    readonly backupRepeatingTimeIntervals: pulumi.Output<string[]>;
    /**
     * The duration of default retention rule. It should follow `ISO 8601` duration format. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    readonly defaultRetentionDuration: pulumi.Output<string>;
    /**
     * The name which should be used for this Backup Policy PostgreSQL. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Backup Policy PostgreSQL should exist. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `retentionRule` blocks as defined below. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    readonly retentionRules: pulumi.Output<outputs.dataprotection.BackupPolicyPostgresqlRetentionRule[] | undefined>;
    /**
     * The name of the Backup Vault where the Backup Policy PostgreSQL should exist. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    readonly vaultName: pulumi.Output<string>;
    /**
     * Create a BackupPolicyPostgresql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupPolicyPostgresqlArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackupPolicyPostgresql resources.
 */
export interface BackupPolicyPostgresqlState {
    /**
     * Specifies a list of repeating time interval. It supports weekly back. It should follow `ISO 8601` repeating time interval. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    backupRepeatingTimeIntervals?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The duration of default retention rule. It should follow `ISO 8601` duration format. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    defaultRetentionDuration?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Policy PostgreSQL. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Backup Policy PostgreSQL should exist. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `retentionRule` blocks as defined below. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    retentionRules?: pulumi.Input<pulumi.Input<inputs.dataprotection.BackupPolicyPostgresqlRetentionRule>[]>;
    /**
     * The name of the Backup Vault where the Backup Policy PostgreSQL should exist. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    vaultName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BackupPolicyPostgresql resource.
 */
export interface BackupPolicyPostgresqlArgs {
    /**
     * Specifies a list of repeating time interval. It supports weekly back. It should follow `ISO 8601` repeating time interval. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    backupRepeatingTimeIntervals: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The duration of default retention rule. It should follow `ISO 8601` duration format. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    defaultRetentionDuration: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Policy PostgreSQL. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Backup Policy PostgreSQL should exist. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `retentionRule` blocks as defined below. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    retentionRules?: pulumi.Input<pulumi.Input<inputs.dataprotection.BackupPolicyPostgresqlRetentionRule>[]>;
    /**
     * The name of the Backup Vault where the Backup Policy PostgreSQL should exist. Changing this forces a new Backup Policy PostgreSQL to be created.
     */
    vaultName: pulumi.Input<string>;
}
