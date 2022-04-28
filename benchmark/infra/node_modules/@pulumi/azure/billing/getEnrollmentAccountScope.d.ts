import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Enrollment Account Billing Scope.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.billing.getEnrollmentAccountScope({
 *     billingAccountName: "existing",
 *     enrollmentAccountName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getEnrollmentAccountScope(args: GetEnrollmentAccountScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetEnrollmentAccountScopeResult>;
/**
 * A collection of arguments for invoking getEnrollmentAccountScope.
 */
export interface GetEnrollmentAccountScopeArgs {
    /**
     * The Billing Account Name of the Enterprise Account.
     */
    billingAccountName: string;
    /**
     * The Enrollment Account Name in the above Enterprise Account.
     */
    enrollmentAccountName: string;
}
/**
 * A collection of values returned by getEnrollmentAccountScope.
 */
export interface GetEnrollmentAccountScopeResult {
    readonly billingAccountName: string;
    readonly enrollmentAccountName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
export declare function getEnrollmentAccountScopeOutput(args: GetEnrollmentAccountScopeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEnrollmentAccountScopeResult>;
/**
 * A collection of arguments for invoking getEnrollmentAccountScope.
 */
export interface GetEnrollmentAccountScopeOutputArgs {
    /**
     * The Billing Account Name of the Enterprise Account.
     */
    billingAccountName: pulumi.Input<string>;
    /**
     * The Enrollment Account Name in the above Enterprise Account.
     */
    enrollmentAccountName: pulumi.Input<string>;
}
