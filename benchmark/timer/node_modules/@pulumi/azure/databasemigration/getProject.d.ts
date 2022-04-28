import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Database Migration Project.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.databasemigration.getProject({
 *     name: "example-dbms-project",
 *     resourceGroupName: "example-rg",
 *     serviceName: "example-dbms",
 * });
 * export const name = example.then(example => example.name);
 * ```
 */
export declare function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult>;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectArgs {
    /**
     * Name of the database migration project.
     */
    name: string;
    /**
     * Name of the resource group where resource belongs to.
     */
    resourceGroupName: string;
    /**
     * Name of the database migration service where resource belongs to.
     */
    serviceName: string;
}
/**
 * A collection of values returned by getProject.
 */
export interface GetProjectResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly serviceName: string;
    /**
     * The platform type of the migration source.
     */
    readonly sourcePlatform: string;
    /**
     * A mapping of tags to assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The platform type of the migration target.
     */
    readonly targetPlatform: string;
}
export declare function getProjectOutput(args: GetProjectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectResult>;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectOutputArgs {
    /**
     * Name of the database migration project.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group where resource belongs to.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the database migration service where resource belongs to.
     */
    serviceName: pulumi.Input<string>;
}
