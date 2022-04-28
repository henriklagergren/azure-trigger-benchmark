import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Management Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.management.getGroup({
 *     name: "00000000-0000-0000-0000-000000000000",
 * });
 * export const displayName = example.then(example => example.displayName);
 * ```
 */
/** @deprecated azure.managementgroups.getManagementGroup has been deprecated in favor of azure.management.getGroup */
export declare function getManagementGroup(args?: GetManagementGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupResult>;
/**
 * A collection of arguments for invoking getManagementGroup.
 */
export interface GetManagementGroupArgs {
    /**
     * Specifies the display name of this Management Group.
     */
    displayName?: string;
    /**
     * Specifies the name or UUID of this Management Group.
     *
     * @deprecated Deprecated in favour of `name`
     */
    groupId?: string;
    /**
     * Specifies the name or UUID of this Management Group.
     */
    name?: string;
}
/**
 * A collection of values returned by getManagementGroup.
 */
export interface GetManagementGroupResult {
    readonly displayName: string;
    /**
     * @deprecated Deprecated in favour of `name`
     */
    readonly groupId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * The ID of any Parent Management Group.
     */
    readonly parentManagementGroupId: string;
    /**
     * A list of Subscription IDs which are assigned to the Management Group.
     */
    readonly subscriptionIds: string[];
}
export declare function getManagementGroupOutput(args?: GetManagementGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetManagementGroupResult>;
/**
 * A collection of arguments for invoking getManagementGroup.
 */
export interface GetManagementGroupOutputArgs {
    /**
     * Specifies the display name of this Management Group.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies the name or UUID of this Management Group.
     *
     * @deprecated Deprecated in favour of `name`
     */
    groupId?: pulumi.Input<string>;
    /**
     * Specifies the name or UUID of this Management Group.
     */
    name?: pulumi.Input<string>;
}
