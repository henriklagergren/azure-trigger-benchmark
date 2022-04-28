import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing DataShareDataLakeGen1Dataset.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.datashare.getDatasetDataLakeGen1({
 *     name: "example-dsdsdlg1",
 *     dataShareId: "example-share-id",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getDatasetDataLakeGen1(args: GetDatasetDataLakeGen1Args, opts?: pulumi.InvokeOptions): Promise<GetDatasetDataLakeGen1Result>;
/**
 * A collection of arguments for invoking getDatasetDataLakeGen1.
 */
export interface GetDatasetDataLakeGen1Args {
    /**
     * The resource ID of the Data Share where this Data Share Data Lake Gen1 Dataset should be created.
     */
    dataShareId: string;
    /**
     * The name of the Data Share Data Lake Gen1 Dataset.
     */
    name: string;
}
/**
 * A collection of values returned by getDatasetDataLakeGen1.
 */
export interface GetDatasetDataLakeGen1Result {
    /**
     * The resource ID of the Data Lake Store to be shared with the receiver.
     */
    readonly dataLakeStoreId: string;
    readonly dataShareId: string;
    /**
     * The displayed name of the Data Share Dataset.
     */
    readonly displayName: string;
    /**
     * The file name of the data lake store to be shared with the receiver.
     */
    readonly fileName: string;
    /**
     * The folder path of the data lake store to be shared with the receiver.
     */
    readonly folderPath: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
}
export declare function getDatasetDataLakeGen1Output(args: GetDatasetDataLakeGen1OutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatasetDataLakeGen1Result>;
/**
 * A collection of arguments for invoking getDatasetDataLakeGen1.
 */
export interface GetDatasetDataLakeGen1OutputArgs {
    /**
     * The resource ID of the Data Share where this Data Share Data Lake Gen1 Dataset should be created.
     */
    dataShareId: pulumi.Input<string>;
    /**
     * The name of the Data Share Data Lake Gen1 Dataset.
     */
    name: pulumi.Input<string>;
}
