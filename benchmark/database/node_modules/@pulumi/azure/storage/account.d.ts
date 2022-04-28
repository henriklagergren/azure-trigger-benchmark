import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Storage Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 * ### With Network Rules
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 *     serviceEndpoints: [
 *         "Microsoft.Sql",
 *         "Microsoft.Storage",
 *     ],
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 *     networkRules: {
 *         defaultAction: "Deny",
 *         ipRules: ["100.0.0.1"],
 *         virtualNetworkSubnetIds: [exampleSubnet.id],
 *     },
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Storage Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/account:Account storageAcc1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Storage/storageAccounts/myaccount
 * ```
 */
export declare class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountState, opts?: pulumi.CustomResourceOptions): Account;
    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Account;
    /**
     * Defines the access tier for `BlobStorage`, `FileStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
     */
    readonly accessTier: pulumi.Output<string>;
    /**
     * Defines the Kind of account. Valid options are `BlobStorage`, `BlockBlobStorage`, `FileStorage`, `Storage` and `StorageV2`. Changing this forces a new resource to be created. Defaults to `StorageV2`.
     */
    readonly accountKind: pulumi.Output<string | undefined>;
    /**
     * Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS`, `ZRS`, `GZRS` and `RAGZRS`. Changing this forces a new resource to be created when types `LRS`, `GRS` and `RAGRS` are changed to `ZRS`, `GZRS` or `RAGZRS` and vice versa.
     */
    readonly accountReplicationType: pulumi.Output<string>;
    /**
     * Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. For `BlockBlobStorage` and `FileStorage` accounts only `Premium` is valid. Changing this forces a new resource to be created.
     */
    readonly accountTier: pulumi.Output<string>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. Defaults to `false`.
     */
    readonly allowBlobPublicAccess: pulumi.Output<boolean | undefined>;
    /**
     * A `azureFilesAuthentication` block as defined below.
     */
    readonly azureFilesAuthentication: pulumi.Output<outputs.storage.AccountAzureFilesAuthentication | undefined>;
    /**
     * A `blobProperties` block as defined below.
     */
    readonly blobProperties: pulumi.Output<outputs.storage.AccountBlobProperties>;
    /**
     * A `customDomain` block as documented below.
     */
    readonly customDomain: pulumi.Output<outputs.storage.AccountCustomDomain | undefined>;
    /**
     * A `customerManagedKey` block as documented below.
     */
    readonly customerManagedKey: pulumi.Output<outputs.storage.AccountCustomerManagedKey>;
    /**
     * Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
     * for more information. Defaults to `true`.
     */
    readonly enableHttpsTrafficOnly: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.storage.AccountIdentity | undefined>;
    /**
     * Is infrastructure encryption enabled? Changing this forces a new resource to be created. Defaults to `false`.
     */
    readonly infrastructureEncryptionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
     */
    readonly isHnsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Is Large File Share Enabled?
     */
    readonly largeFileShareEnabled: pulumi.Output<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The minimum supported TLS version for the storage account. Possible values are `TLS1_0`, `TLS1_1`, and `TLS1_2`. Defaults to `TLS1_0` for new storage accounts.
     */
    readonly minTlsVersion: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the storage account. Changing this forces a new resource to be created. This must be unique across the entire Azure service, not just within the resource group.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `networkRules` block as documented below.
     */
    readonly networkRules: pulumi.Output<outputs.storage.AccountNetworkRules>;
    /**
     * Is NFSv3 protocol enabled? Changing this forces a new resource to be created. Defaults to `false`.
     */
    readonly nfsv3Enabled: pulumi.Output<boolean | undefined>;
    /**
     * The primary access key for the storage account.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * The connection string associated with the primary blob location.
     */
    readonly primaryBlobConnectionString: pulumi.Output<string>;
    /**
     * The endpoint URL for blob storage in the primary location.
     */
    readonly primaryBlobEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for blob storage in the primary location.
     */
    readonly primaryBlobHost: pulumi.Output<string>;
    /**
     * The connection string associated with the primary location.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The endpoint URL for DFS storage in the primary location.
     */
    readonly primaryDfsEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for DFS storage in the primary location.
     */
    readonly primaryDfsHost: pulumi.Output<string>;
    /**
     * The endpoint URL for file storage in the primary location.
     */
    readonly primaryFileEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for file storage in the primary location.
     */
    readonly primaryFileHost: pulumi.Output<string>;
    /**
     * The primary location of the storage account.
     */
    readonly primaryLocation: pulumi.Output<string>;
    /**
     * The endpoint URL for queue storage in the primary location.
     */
    readonly primaryQueueEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for queue storage in the primary location.
     */
    readonly primaryQueueHost: pulumi.Output<string>;
    /**
     * The endpoint URL for table storage in the primary location.
     */
    readonly primaryTableEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for table storage in the primary location.
     */
    readonly primaryTableHost: pulumi.Output<string>;
    /**
     * The endpoint URL for web storage in the primary location.
     */
    readonly primaryWebEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for web storage in the primary location.
     */
    readonly primaryWebHost: pulumi.Output<string>;
    /**
     * The encryption type of the queue service. Possible values are `Service` and `Account`. Changing this forces a new resource to be created. Default value is `Service`.
     */
    readonly queueEncryptionKeyType: pulumi.Output<string | undefined>;
    /**
     * A `queueProperties` block as defined below.
     */
    readonly queueProperties: pulumi.Output<outputs.storage.AccountQueueProperties>;
    /**
     * The name of the resource group in which to create the storage account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `routing` block as defined below.
     */
    readonly routing: pulumi.Output<outputs.storage.AccountRouting>;
    /**
     * The secondary access key for the storage account.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * The connection string associated with the secondary blob location.
     */
    readonly secondaryBlobConnectionString: pulumi.Output<string>;
    /**
     * The endpoint URL for blob storage in the secondary location.
     */
    readonly secondaryBlobEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for blob storage in the secondary location.
     */
    readonly secondaryBlobHost: pulumi.Output<string>;
    /**
     * The connection string associated with the secondary location.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The endpoint URL for DFS storage in the secondary location.
     */
    readonly secondaryDfsEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for DFS storage in the secondary location.
     */
    readonly secondaryDfsHost: pulumi.Output<string>;
    /**
     * The endpoint URL for file storage in the secondary location.
     */
    readonly secondaryFileEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for file storage in the secondary location.
     */
    readonly secondaryFileHost: pulumi.Output<string>;
    /**
     * The secondary location of the storage account.
     */
    readonly secondaryLocation: pulumi.Output<string>;
    /**
     * The endpoint URL for queue storage in the secondary location.
     */
    readonly secondaryQueueEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for queue storage in the secondary location.
     */
    readonly secondaryQueueHost: pulumi.Output<string>;
    /**
     * The endpoint URL for table storage in the secondary location.
     */
    readonly secondaryTableEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for table storage in the secondary location.
     */
    readonly secondaryTableHost: pulumi.Output<string>;
    /**
     * The endpoint URL for web storage in the secondary location.
     */
    readonly secondaryWebEndpoint: pulumi.Output<string>;
    /**
     * The hostname with port if applicable for web storage in the secondary location.
     */
    readonly secondaryWebHost: pulumi.Output<string>;
    readonly shareProperties: pulumi.Output<outputs.storage.AccountShareProperties>;
    /**
     * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is `true`.
     */
    readonly sharedAccessKeyEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `staticWebsite` block as defined below.
     */
    readonly staticWebsite: pulumi.Output<outputs.storage.AccountStaticWebsite | undefined>;
    /**
     * The encryption type of the table service. Possible values are `Service` and `Account`. Changing this forces a new resource to be created. Default value is `Service`.
     */
    readonly tableEncryptionKeyType: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * Defines the access tier for `BlobStorage`, `FileStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
     */
    accessTier?: pulumi.Input<string>;
    /**
     * Defines the Kind of account. Valid options are `BlobStorage`, `BlockBlobStorage`, `FileStorage`, `Storage` and `StorageV2`. Changing this forces a new resource to be created. Defaults to `StorageV2`.
     */
    accountKind?: pulumi.Input<string>;
    /**
     * Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS`, `ZRS`, `GZRS` and `RAGZRS`. Changing this forces a new resource to be created when types `LRS`, `GRS` and `RAGRS` are changed to `ZRS`, `GZRS` or `RAGZRS` and vice versa.
     */
    accountReplicationType?: pulumi.Input<string>;
    /**
     * Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. For `BlockBlobStorage` and `FileStorage` accounts only `Premium` is valid. Changing this forces a new resource to be created.
     */
    accountTier?: pulumi.Input<string>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. Defaults to `false`.
     */
    allowBlobPublicAccess?: pulumi.Input<boolean>;
    /**
     * A `azureFilesAuthentication` block as defined below.
     */
    azureFilesAuthentication?: pulumi.Input<inputs.storage.AccountAzureFilesAuthentication>;
    /**
     * A `blobProperties` block as defined below.
     */
    blobProperties?: pulumi.Input<inputs.storage.AccountBlobProperties>;
    /**
     * A `customDomain` block as documented below.
     */
    customDomain?: pulumi.Input<inputs.storage.AccountCustomDomain>;
    /**
     * A `customerManagedKey` block as documented below.
     */
    customerManagedKey?: pulumi.Input<inputs.storage.AccountCustomerManagedKey>;
    /**
     * Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
     * for more information. Defaults to `true`.
     */
    enableHttpsTrafficOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.storage.AccountIdentity>;
    /**
     * Is infrastructure encryption enabled? Changing this forces a new resource to be created. Defaults to `false`.
     */
    infrastructureEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
     */
    isHnsEnabled?: pulumi.Input<boolean>;
    /**
     * Is Large File Share Enabled?
     */
    largeFileShareEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum supported TLS version for the storage account. Possible values are `TLS1_0`, `TLS1_1`, and `TLS1_2`. Defaults to `TLS1_0` for new storage accounts.
     */
    minTlsVersion?: pulumi.Input<string>;
    /**
     * Specifies the name of the storage account. Changing this forces a new resource to be created. This must be unique across the entire Azure service, not just within the resource group.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkRules` block as documented below.
     */
    networkRules?: pulumi.Input<inputs.storage.AccountNetworkRules>;
    /**
     * Is NFSv3 protocol enabled? Changing this forces a new resource to be created. Defaults to `false`.
     */
    nfsv3Enabled?: pulumi.Input<boolean>;
    /**
     * The primary access key for the storage account.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * The connection string associated with the primary blob location.
     */
    primaryBlobConnectionString?: pulumi.Input<string>;
    /**
     * The endpoint URL for blob storage in the primary location.
     */
    primaryBlobEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for blob storage in the primary location.
     */
    primaryBlobHost?: pulumi.Input<string>;
    /**
     * The connection string associated with the primary location.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The endpoint URL for DFS storage in the primary location.
     */
    primaryDfsEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for DFS storage in the primary location.
     */
    primaryDfsHost?: pulumi.Input<string>;
    /**
     * The endpoint URL for file storage in the primary location.
     */
    primaryFileEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for file storage in the primary location.
     */
    primaryFileHost?: pulumi.Input<string>;
    /**
     * The primary location of the storage account.
     */
    primaryLocation?: pulumi.Input<string>;
    /**
     * The endpoint URL for queue storage in the primary location.
     */
    primaryQueueEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for queue storage in the primary location.
     */
    primaryQueueHost?: pulumi.Input<string>;
    /**
     * The endpoint URL for table storage in the primary location.
     */
    primaryTableEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for table storage in the primary location.
     */
    primaryTableHost?: pulumi.Input<string>;
    /**
     * The endpoint URL for web storage in the primary location.
     */
    primaryWebEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for web storage in the primary location.
     */
    primaryWebHost?: pulumi.Input<string>;
    /**
     * The encryption type of the queue service. Possible values are `Service` and `Account`. Changing this forces a new resource to be created. Default value is `Service`.
     */
    queueEncryptionKeyType?: pulumi.Input<string>;
    /**
     * A `queueProperties` block as defined below.
     */
    queueProperties?: pulumi.Input<inputs.storage.AccountQueueProperties>;
    /**
     * The name of the resource group in which to create the storage account. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `routing` block as defined below.
     */
    routing?: pulumi.Input<inputs.storage.AccountRouting>;
    /**
     * The secondary access key for the storage account.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * The connection string associated with the secondary blob location.
     */
    secondaryBlobConnectionString?: pulumi.Input<string>;
    /**
     * The endpoint URL for blob storage in the secondary location.
     */
    secondaryBlobEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for blob storage in the secondary location.
     */
    secondaryBlobHost?: pulumi.Input<string>;
    /**
     * The connection string associated with the secondary location.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The endpoint URL for DFS storage in the secondary location.
     */
    secondaryDfsEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for DFS storage in the secondary location.
     */
    secondaryDfsHost?: pulumi.Input<string>;
    /**
     * The endpoint URL for file storage in the secondary location.
     */
    secondaryFileEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for file storage in the secondary location.
     */
    secondaryFileHost?: pulumi.Input<string>;
    /**
     * The secondary location of the storage account.
     */
    secondaryLocation?: pulumi.Input<string>;
    /**
     * The endpoint URL for queue storage in the secondary location.
     */
    secondaryQueueEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for queue storage in the secondary location.
     */
    secondaryQueueHost?: pulumi.Input<string>;
    /**
     * The endpoint URL for table storage in the secondary location.
     */
    secondaryTableEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for table storage in the secondary location.
     */
    secondaryTableHost?: pulumi.Input<string>;
    /**
     * The endpoint URL for web storage in the secondary location.
     */
    secondaryWebEndpoint?: pulumi.Input<string>;
    /**
     * The hostname with port if applicable for web storage in the secondary location.
     */
    secondaryWebHost?: pulumi.Input<string>;
    shareProperties?: pulumi.Input<inputs.storage.AccountShareProperties>;
    /**
     * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is `true`.
     */
    sharedAccessKeyEnabled?: pulumi.Input<boolean>;
    /**
     * A `staticWebsite` block as defined below.
     */
    staticWebsite?: pulumi.Input<inputs.storage.AccountStaticWebsite>;
    /**
     * The encryption type of the table service. Possible values are `Service` and `Account`. Changing this forces a new resource to be created. Default value is `Service`.
     */
    tableEncryptionKeyType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * Defines the access tier for `BlobStorage`, `FileStorage` and `StorageV2` accounts. Valid options are `Hot` and `Cool`, defaults to `Hot`.
     */
    accessTier?: pulumi.Input<string>;
    /**
     * Defines the Kind of account. Valid options are `BlobStorage`, `BlockBlobStorage`, `FileStorage`, `Storage` and `StorageV2`. Changing this forces a new resource to be created. Defaults to `StorageV2`.
     */
    accountKind?: pulumi.Input<string>;
    /**
     * Defines the type of replication to use for this storage account. Valid options are `LRS`, `GRS`, `RAGRS`, `ZRS`, `GZRS` and `RAGZRS`. Changing this forces a new resource to be created when types `LRS`, `GRS` and `RAGRS` are changed to `ZRS`, `GZRS` or `RAGZRS` and vice versa.
     */
    accountReplicationType: pulumi.Input<string>;
    /**
     * Defines the Tier to use for this storage account. Valid options are `Standard` and `Premium`. For `BlockBlobStorage` and `FileStorage` accounts only `Premium` is valid. Changing this forces a new resource to be created.
     */
    accountTier: pulumi.Input<string>;
    /**
     * Allow or disallow public access to all blobs or containers in the storage account. Defaults to `false`.
     */
    allowBlobPublicAccess?: pulumi.Input<boolean>;
    /**
     * A `azureFilesAuthentication` block as defined below.
     */
    azureFilesAuthentication?: pulumi.Input<inputs.storage.AccountAzureFilesAuthentication>;
    /**
     * A `blobProperties` block as defined below.
     */
    blobProperties?: pulumi.Input<inputs.storage.AccountBlobProperties>;
    /**
     * A `customDomain` block as documented below.
     */
    customDomain?: pulumi.Input<inputs.storage.AccountCustomDomain>;
    /**
     * A `customerManagedKey` block as documented below.
     */
    customerManagedKey?: pulumi.Input<inputs.storage.AccountCustomerManagedKey>;
    /**
     * Boolean flag which forces HTTPS if enabled, see [here](https://docs.microsoft.com/en-us/azure/storage/storage-require-secure-transfer/)
     * for more information. Defaults to `true`.
     */
    enableHttpsTrafficOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.storage.AccountIdentity>;
    /**
     * Is infrastructure encryption enabled? Changing this forces a new resource to be created. Defaults to `false`.
     */
    infrastructureEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Is Hierarchical Namespace enabled? This can be used with Azure Data Lake Storage Gen 2 ([see here for more information](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-quickstart-create-account/)). Changing this forces a new resource to be created.
     */
    isHnsEnabled?: pulumi.Input<boolean>;
    /**
     * Is Large File Share Enabled?
     */
    largeFileShareEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum supported TLS version for the storage account. Possible values are `TLS1_0`, `TLS1_1`, and `TLS1_2`. Defaults to `TLS1_0` for new storage accounts.
     */
    minTlsVersion?: pulumi.Input<string>;
    /**
     * Specifies the name of the storage account. Changing this forces a new resource to be created. This must be unique across the entire Azure service, not just within the resource group.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkRules` block as documented below.
     */
    networkRules?: pulumi.Input<inputs.storage.AccountNetworkRules>;
    /**
     * Is NFSv3 protocol enabled? Changing this forces a new resource to be created. Defaults to `false`.
     */
    nfsv3Enabled?: pulumi.Input<boolean>;
    /**
     * The encryption type of the queue service. Possible values are `Service` and `Account`. Changing this forces a new resource to be created. Default value is `Service`.
     */
    queueEncryptionKeyType?: pulumi.Input<string>;
    /**
     * A `queueProperties` block as defined below.
     */
    queueProperties?: pulumi.Input<inputs.storage.AccountQueueProperties>;
    /**
     * The name of the resource group in which to create the storage account. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `routing` block as defined below.
     */
    routing?: pulumi.Input<inputs.storage.AccountRouting>;
    shareProperties?: pulumi.Input<inputs.storage.AccountShareProperties>;
    /**
     * Indicates whether the storage account permits requests to be authorized with the account access key via Shared Key. If false, then all requests, including shared access signatures, must be authorized with Azure Active Directory (Azure AD). The default value is `true`.
     */
    sharedAccessKeyEnabled?: pulumi.Input<boolean>;
    /**
     * A `staticWebsite` block as defined below.
     */
    staticWebsite?: pulumi.Input<inputs.storage.AccountStaticWebsite>;
    /**
     * The encryption type of the table service. Possible values are `Service` and `Account`. Changing this forces a new resource to be created. Default value is `Service`.
     */
    tableEncryptionKeyType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
