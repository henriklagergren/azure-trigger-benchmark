import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing API Management User.
 */
export declare function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult>;
/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserArgs {
    /**
     * The Name of the API Management Service in which this User exists.
     */
    apiManagementName: string;
    /**
     * The Name of the Resource Group in which the API Management Service exists.
     */
    resourceGroupName: string;
    /**
     * The Identifier for the User.
     */
    userId: string;
}
/**
 * A collection of values returned by getUser.
 */
export interface GetUserResult {
    readonly apiManagementName: string;
    /**
     * The Email Address used for this User.
     */
    readonly email: string;
    /**
     * The First Name for the User.
     */
    readonly firstName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Last Name for the User.
     */
    readonly lastName: string;
    /**
     * Any notes about this User.
     */
    readonly note: string;
    readonly resourceGroupName: string;
    /**
     * The current state of this User, for example `active`, `blocked` or `pending`.
     */
    readonly state: string;
    readonly userId: string;
}
export declare function getUserOutput(args: GetUserOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetUserResult>;
/**
 * A collection of arguments for invoking getUser.
 */
export interface GetUserOutputArgs {
    /**
     * The Name of the API Management Service in which this User exists.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Identifier for the User.
     */
    userId: pulumi.Input<string>;
}
