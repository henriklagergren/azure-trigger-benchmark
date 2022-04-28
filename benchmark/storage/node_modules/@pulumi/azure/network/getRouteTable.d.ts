import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Route Table.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.network.getRouteTable({
 *     name: "myroutetable",
 *     resourceGroupName: "some-resource-group",
 * }));
 * ```
 */
export declare function getRouteTable(args: GetRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteTableResult>;
/**
 * A collection of arguments for invoking getRouteTable.
 */
export interface GetRouteTableArgs {
    /**
     * The name of the Route Table.
     */
    name: string;
    /**
     * The name of the Resource Group in which the Route Table exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getRouteTable.
 */
export interface GetRouteTableResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region in which the Route Table exists.
     */
    readonly location: string;
    /**
     * The name of the Route.
     */
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * One or more `route` blocks as documented below.
     */
    readonly routes: outputs.network.GetRouteTableRoute[];
    /**
     * The collection of Subnets associated with this route table.
     */
    readonly subnets: string[];
    /**
     * A mapping of tags assigned to the Route Table.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getRouteTableOutput(args: GetRouteTableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteTableResult>;
/**
 * A collection of arguments for invoking getRouteTable.
 */
export interface GetRouteTableOutputArgs {
    /**
     * The name of the Route Table.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Route Table exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
