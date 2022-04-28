import * as pulumi from "@pulumi/pulumi";
/**
 * Manages the Security Center Assessment Metadata for Azure Security Center.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.securitycenter.AssessmentPolicy("example", {
 *     description: "Test Description",
 *     displayName: "Test Display Name",
 *     severity: "Medium",
 * });
 * ```
 *
 * ## Import
 *
 * Security Assessments Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:securitycenter/assessmentPolicy:AssessmentPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Security/assessmentMetadata/metadata1
 * ```
 */
export declare class AssessmentPolicy extends pulumi.CustomResource {
    /**
     * Get an existing AssessmentPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssessmentPolicyState, opts?: pulumi.CustomResourceOptions): AssessmentPolicy;
    /**
     * Returns true if the given object is an instance of AssessmentPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AssessmentPolicy;
    /**
     * A list of the categories of resource that is at risk when the Security Center Assessment is unhealthy. Possible values are `Unknown`, `Compute`, `Data`, `IdentityAndAccess`, `IoT` and `Networking`.
     */
    readonly categories: pulumi.Output<string[]>;
    /**
     * The description of the Security Center Assessment.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The user-friendly display name of the Security Center Assessment.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The implementation effort which is used to remediate the Security Center Assessment. Possible values are `Low`, `Moderate` and `High`.
     */
    readonly implementationEffort: pulumi.Output<string | undefined>;
    /**
     * The GUID as the name of the Security Center Assessment Policy.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The description which is used to mitigate the security issue.
     */
    readonly remediationDescription: pulumi.Output<string | undefined>;
    /**
     * The severity level of the Security Center Assessment. Possible values are `Low`, `Medium` and `High`. Defaults to `Medium`.
     */
    readonly severity: pulumi.Output<string | undefined>;
    /**
     * A list of the threat impacts for the Security Center Assessment. Possible values are `AccountBreach`, `DataExfiltration`, `DataSpillage`, `DenialOfService`, `ElevationOfPrivilege`, `MaliciousInsider`, `MissingCoverage` and `ThreatResistance`.
     */
    readonly threats: pulumi.Output<string[] | undefined>;
    /**
     * The user impact of the Security Center Assessment. Possible values are `Low`, `Moderate` and `High`.
     */
    readonly userImpact: pulumi.Output<string | undefined>;
    /**
     * Create a AssessmentPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AssessmentPolicy resources.
 */
export interface AssessmentPolicyState {
    /**
     * A list of the categories of resource that is at risk when the Security Center Assessment is unhealthy. Possible values are `Unknown`, `Compute`, `Data`, `IdentityAndAccess`, `IoT` and `Networking`.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The description of the Security Center Assessment.
     */
    description?: pulumi.Input<string>;
    /**
     * The user-friendly display name of the Security Center Assessment.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The implementation effort which is used to remediate the Security Center Assessment. Possible values are `Low`, `Moderate` and `High`.
     */
    implementationEffort?: pulumi.Input<string>;
    /**
     * The GUID as the name of the Security Center Assessment Policy.
     */
    name?: pulumi.Input<string>;
    /**
     * The description which is used to mitigate the security issue.
     */
    remediationDescription?: pulumi.Input<string>;
    /**
     * The severity level of the Security Center Assessment. Possible values are `Low`, `Medium` and `High`. Defaults to `Medium`.
     */
    severity?: pulumi.Input<string>;
    /**
     * A list of the threat impacts for the Security Center Assessment. Possible values are `AccountBreach`, `DataExfiltration`, `DataSpillage`, `DenialOfService`, `ElevationOfPrivilege`, `MaliciousInsider`, `MissingCoverage` and `ThreatResistance`.
     */
    threats?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user impact of the Security Center Assessment. Possible values are `Low`, `Moderate` and `High`.
     */
    userImpact?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AssessmentPolicy resource.
 */
export interface AssessmentPolicyArgs {
    /**
     * A list of the categories of resource that is at risk when the Security Center Assessment is unhealthy. Possible values are `Unknown`, `Compute`, `Data`, `IdentityAndAccess`, `IoT` and `Networking`.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The description of the Security Center Assessment.
     */
    description: pulumi.Input<string>;
    /**
     * The user-friendly display name of the Security Center Assessment.
     */
    displayName: pulumi.Input<string>;
    /**
     * The implementation effort which is used to remediate the Security Center Assessment. Possible values are `Low`, `Moderate` and `High`.
     */
    implementationEffort?: pulumi.Input<string>;
    /**
     * The description which is used to mitigate the security issue.
     */
    remediationDescription?: pulumi.Input<string>;
    /**
     * The severity level of the Security Center Assessment. Possible values are `Low`, `Medium` and `High`. Defaults to `Medium`.
     */
    severity?: pulumi.Input<string>;
    /**
     * A list of the threat impacts for the Security Center Assessment. Possible values are `AccountBreach`, `DataExfiltration`, `DataSpillage`, `DenialOfService`, `ElevationOfPrivilege`, `MaliciousInsider`, `MissingCoverage` and `ThreatResistance`.
     */
    threats?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user impact of the Security Center Assessment. Possible values are `Low`, `Moderate` and `High`.
     */
    userImpact?: pulumi.Input<string>;
}
