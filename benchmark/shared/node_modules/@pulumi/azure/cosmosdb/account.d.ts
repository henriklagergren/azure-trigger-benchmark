import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a CosmosDB (formally DocumentDB) Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "westus"});
 * const ri = new random.RandomInteger("ri", {
 *     min: 10000,
 *     max: 99999,
 * });
 * const db = new azure.cosmosdb.Account("db", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     offerType: "Standard",
 *     kind: "MongoDB",
 *     enableAutomaticFailover: true,
 *     capabilities: [
 *         {
 *             name: "EnableAggregationPipeline",
 *         },
 *         {
 *             name: "mongoEnableDocLevelTTL",
 *         },
 *         {
 *             name: "MongoDBv3.4",
 *         },
 *         {
 *             name: "EnableMongo",
 *         },
 *     ],
 *     consistencyPolicy: {
 *         consistencyLevel: "BoundedStaleness",
 *         maxIntervalInSeconds: 300,
 *         maxStalenessPrefix: 100000,
 *     },
 *     geoLocations: [
 *         {
 *             location: _var.failover_location,
 *             failoverPriority: 1,
 *         },
 *         {
 *             location: rg.location,
 *             failoverPriority: 0,
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * CosmosDB Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/account:Account account1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DocumentDB/databaseAccounts/account1
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
     * Is write operations on metadata resources (databases, containers, throughput) via account keys enabled? Defaults to `true`.
     */
    readonly accessKeyMetadataWritesEnabled: pulumi.Output<boolean | undefined>;
    /**
     * An `analyticalStorage` block as defined below.
     */
    readonly analyticalStorage: pulumi.Output<outputs.cosmosdb.AccountAnalyticalStorage>;
    /**
     * Enable Analytical Storage option for this Cosmos DB account. Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly analyticalStorageEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `backup` block as defined below.
     */
    readonly backup: pulumi.Output<outputs.cosmosdb.AccountBackup>;
    /**
     * The capabilities which should be enabled for this Cosmos DB account. Value is a `capabilities` block as defined below. Changing this forces a new resource to be created.
     */
    readonly capabilities: pulumi.Output<outputs.cosmosdb.AccountCapability[]>;
    /**
     * A `capacity` block as defined below.
     */
    readonly capacity: pulumi.Output<outputs.cosmosdb.AccountCapacity>;
    /**
     * A list of connection strings available for this CosmosDB account.
     */
    readonly connectionStrings: pulumi.Output<string[]>;
    /**
     * Specifies a `consistencyPolicy` resource, used to define the consistency policy for this CosmosDB account.
     */
    readonly consistencyPolicy: pulumi.Output<outputs.cosmosdb.AccountConsistencyPolicy>;
    /**
     * A `corsRule` block as defined below.
     */
    readonly corsRule: pulumi.Output<outputs.cosmosdb.AccountCorsRule | undefined>;
    /**
     * The creation mode for the CosmosDB Account. Possible values are `Default` and `Restore`. Changing this forces a new resource to be created.
     */
    readonly createMode: pulumi.Output<string>;
    /**
     * The default identity for accessing Key Vault. Possible values are `FirstPartyIdentity`, `SystemAssignedIdentity` or start with `UserAssignedIdentity`. Defaults to `FirstPartyIdentity`.
     */
    readonly defaultIdentityType: pulumi.Output<string | undefined>;
    /**
     * Enable automatic fail over for this Cosmos DB account.
     */
    readonly enableAutomaticFailover: pulumi.Output<boolean | undefined>;
    /**
     * Enable Free Tier pricing option for this Cosmos DB account. Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly enableFreeTier: pulumi.Output<boolean | undefined>;
    /**
     * Enable multiple write locations for this Cosmos DB account.
     */
    readonly enableMultipleWriteLocations: pulumi.Output<boolean | undefined>;
    /**
     * The endpoint used to connect to the CosmosDB account.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * Specifies a `geoLocation` resource, used to define where data should be replicated with the `failoverPriority` 0 specifying the primary location. Value is a `geoLocation` block as defined below.
     */
    readonly geoLocations: pulumi.Output<outputs.cosmosdb.AccountGeoLocation[]>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.cosmosdb.AccountIdentity | undefined>;
    /**
     * CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    readonly ipRangeFilter: pulumi.Output<string | undefined>;
    /**
     * Enables virtual network filtering for this Cosmos DB account.
     */
    readonly isVirtualNetworkFilterEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A versionless Key Vault Key ID for CMK encryption. Changing this forces a new resource to be created.
     */
    readonly keyVaultKeyId: pulumi.Output<string | undefined>;
    /**
     * Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
     */
    readonly kind: pulumi.Output<string | undefined>;
    /**
     * Disable local authentication and ensure only MSI and AAD can be used exclusively for authentication. Defaults to `false`. Can be set only when using the SQL API.
     */
    readonly localAuthenticationDisabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Server Version of a MongoDB account. Possible values are `4.0`, `3.6`, and `3.2`.
     */
    readonly mongoServerVersion: pulumi.Output<string>;
    /**
     * Specifies the name of the CosmosDB Account. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * If azure services can bypass ACLs. Defaults to `false`.
     */
    readonly networkAclBypassForAzureServices: pulumi.Output<boolean | undefined>;
    /**
     * The list of resource Ids for Network Acl Bypass for this Cosmos DB account.
     */
    readonly networkAclBypassIds: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
     */
    readonly offerType: pulumi.Output<string>;
    /**
     * The Primary key for the CosmosDB Account.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * @deprecated This property has been renamed to `primary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    readonly primaryMasterKey: pulumi.Output<string>;
    /**
     * The Primary read-only Key for the CosmosDB Account.
     */
    readonly primaryReadonlyKey: pulumi.Output<string>;
    /**
     * @deprecated This property has been renamed to `primary_readonly_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    readonly primaryReadonlyMasterKey: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for this CosmosDB account.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A list of read endpoints available for this CosmosDB account.
     */
    readonly readEndpoints: pulumi.Output<string[]>;
    /**
     * The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `restore` block as defined below.
     */
    readonly restore: pulumi.Output<outputs.cosmosdb.AccountRestore | undefined>;
    /**
     * The Secondary key for the CosmosDB Account.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * @deprecated This property has been renamed to `secondary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    readonly secondaryMasterKey: pulumi.Output<string>;
    /**
     * The Secondary read-only key for the CosmosDB Account.
     */
    readonly secondaryReadonlyKey: pulumi.Output<string>;
    /**
     * @deprecated This property has been renamed to `secondary_readonly_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    readonly secondaryReadonlyMasterKey: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies a `virtualNetworkRules` resource, used to define which subnets are allowed to access this CosmosDB account.
     */
    readonly virtualNetworkRules: pulumi.Output<outputs.cosmosdb.AccountVirtualNetworkRule[] | undefined>;
    /**
     * A list of write endpoints available for this CosmosDB account.
     */
    readonly writeEndpoints: pulumi.Output<string[]>;
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
     * Is write operations on metadata resources (databases, containers, throughput) via account keys enabled? Defaults to `true`.
     */
    accessKeyMetadataWritesEnabled?: pulumi.Input<boolean>;
    /**
     * An `analyticalStorage` block as defined below.
     */
    analyticalStorage?: pulumi.Input<inputs.cosmosdb.AccountAnalyticalStorage>;
    /**
     * Enable Analytical Storage option for this Cosmos DB account. Defaults to `false`. Changing this forces a new resource to be created.
     */
    analyticalStorageEnabled?: pulumi.Input<boolean>;
    /**
     * A `backup` block as defined below.
     */
    backup?: pulumi.Input<inputs.cosmosdb.AccountBackup>;
    /**
     * The capabilities which should be enabled for this Cosmos DB account. Value is a `capabilities` block as defined below. Changing this forces a new resource to be created.
     */
    capabilities?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountCapability>[]>;
    /**
     * A `capacity` block as defined below.
     */
    capacity?: pulumi.Input<inputs.cosmosdb.AccountCapacity>;
    /**
     * A list of connection strings available for this CosmosDB account.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies a `consistencyPolicy` resource, used to define the consistency policy for this CosmosDB account.
     */
    consistencyPolicy?: pulumi.Input<inputs.cosmosdb.AccountConsistencyPolicy>;
    /**
     * A `corsRule` block as defined below.
     */
    corsRule?: pulumi.Input<inputs.cosmosdb.AccountCorsRule>;
    /**
     * The creation mode for the CosmosDB Account. Possible values are `Default` and `Restore`. Changing this forces a new resource to be created.
     */
    createMode?: pulumi.Input<string>;
    /**
     * The default identity for accessing Key Vault. Possible values are `FirstPartyIdentity`, `SystemAssignedIdentity` or start with `UserAssignedIdentity`. Defaults to `FirstPartyIdentity`.
     */
    defaultIdentityType?: pulumi.Input<string>;
    /**
     * Enable automatic fail over for this Cosmos DB account.
     */
    enableAutomaticFailover?: pulumi.Input<boolean>;
    /**
     * Enable Free Tier pricing option for this Cosmos DB account. Defaults to `false`. Changing this forces a new resource to be created.
     */
    enableFreeTier?: pulumi.Input<boolean>;
    /**
     * Enable multiple write locations for this Cosmos DB account.
     */
    enableMultipleWriteLocations?: pulumi.Input<boolean>;
    /**
     * The endpoint used to connect to the CosmosDB account.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * Specifies a `geoLocation` resource, used to define where data should be replicated with the `failoverPriority` 0 specifying the primary location. Value is a `geoLocation` block as defined below.
     */
    geoLocations?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountGeoLocation>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.cosmosdb.AccountIdentity>;
    /**
     * CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    ipRangeFilter?: pulumi.Input<string>;
    /**
     * Enables virtual network filtering for this Cosmos DB account.
     */
    isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
    /**
     * A versionless Key Vault Key ID for CMK encryption. Changing this forces a new resource to be created.
     */
    keyVaultKeyId?: pulumi.Input<string>;
    /**
     * Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string>;
    /**
     * Disable local authentication and ensure only MSI and AAD can be used exclusively for authentication. Defaults to `false`. Can be set only when using the SQL API.
     */
    localAuthenticationDisabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Server Version of a MongoDB account. Possible values are `4.0`, `3.6`, and `3.2`.
     */
    mongoServerVersion?: pulumi.Input<string>;
    /**
     * Specifies the name of the CosmosDB Account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * If azure services can bypass ACLs. Defaults to `false`.
     */
    networkAclBypassForAzureServices?: pulumi.Input<boolean>;
    /**
     * The list of resource Ids for Network Acl Bypass for this Cosmos DB account.
     */
    networkAclBypassIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
     */
    offerType?: pulumi.Input<string>;
    /**
     * The Primary key for the CosmosDB Account.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * @deprecated This property has been renamed to `primary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    primaryMasterKey?: pulumi.Input<string>;
    /**
     * The Primary read-only Key for the CosmosDB Account.
     */
    primaryReadonlyKey?: pulumi.Input<string>;
    /**
     * @deprecated This property has been renamed to `primary_readonly_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    primaryReadonlyMasterKey?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this CosmosDB account.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * A list of read endpoints available for this CosmosDB account.
     */
    readEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `restore` block as defined below.
     */
    restore?: pulumi.Input<inputs.cosmosdb.AccountRestore>;
    /**
     * The Secondary key for the CosmosDB Account.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * @deprecated This property has been renamed to `secondary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    secondaryMasterKey?: pulumi.Input<string>;
    /**
     * The Secondary read-only key for the CosmosDB Account.
     */
    secondaryReadonlyKey?: pulumi.Input<string>;
    /**
     * @deprecated This property has been renamed to `secondary_readonly_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    secondaryReadonlyMasterKey?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies a `virtualNetworkRules` resource, used to define which subnets are allowed to access this CosmosDB account.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountVirtualNetworkRule>[]>;
    /**
     * A list of write endpoints available for this CosmosDB account.
     */
    writeEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * Is write operations on metadata resources (databases, containers, throughput) via account keys enabled? Defaults to `true`.
     */
    accessKeyMetadataWritesEnabled?: pulumi.Input<boolean>;
    /**
     * An `analyticalStorage` block as defined below.
     */
    analyticalStorage?: pulumi.Input<inputs.cosmosdb.AccountAnalyticalStorage>;
    /**
     * Enable Analytical Storage option for this Cosmos DB account. Defaults to `false`. Changing this forces a new resource to be created.
     */
    analyticalStorageEnabled?: pulumi.Input<boolean>;
    /**
     * A `backup` block as defined below.
     */
    backup?: pulumi.Input<inputs.cosmosdb.AccountBackup>;
    /**
     * The capabilities which should be enabled for this Cosmos DB account. Value is a `capabilities` block as defined below. Changing this forces a new resource to be created.
     */
    capabilities?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountCapability>[]>;
    /**
     * A `capacity` block as defined below.
     */
    capacity?: pulumi.Input<inputs.cosmosdb.AccountCapacity>;
    /**
     * Specifies a `consistencyPolicy` resource, used to define the consistency policy for this CosmosDB account.
     */
    consistencyPolicy: pulumi.Input<inputs.cosmosdb.AccountConsistencyPolicy>;
    /**
     * A `corsRule` block as defined below.
     */
    corsRule?: pulumi.Input<inputs.cosmosdb.AccountCorsRule>;
    /**
     * The creation mode for the CosmosDB Account. Possible values are `Default` and `Restore`. Changing this forces a new resource to be created.
     */
    createMode?: pulumi.Input<string>;
    /**
     * The default identity for accessing Key Vault. Possible values are `FirstPartyIdentity`, `SystemAssignedIdentity` or start with `UserAssignedIdentity`. Defaults to `FirstPartyIdentity`.
     */
    defaultIdentityType?: pulumi.Input<string>;
    /**
     * Enable automatic fail over for this Cosmos DB account.
     */
    enableAutomaticFailover?: pulumi.Input<boolean>;
    /**
     * Enable Free Tier pricing option for this Cosmos DB account. Defaults to `false`. Changing this forces a new resource to be created.
     */
    enableFreeTier?: pulumi.Input<boolean>;
    /**
     * Enable multiple write locations for this Cosmos DB account.
     */
    enableMultipleWriteLocations?: pulumi.Input<boolean>;
    /**
     * Specifies a `geoLocation` resource, used to define where data should be replicated with the `failoverPriority` 0 specifying the primary location. Value is a `geoLocation` block as defined below.
     */
    geoLocations: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountGeoLocation>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.cosmosdb.AccountIdentity>;
    /**
     * CosmosDB Firewall Support: This value specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IP's for a given database account. IP addresses/ranges must be comma separated and must not contain any spaces.
     */
    ipRangeFilter?: pulumi.Input<string>;
    /**
     * Enables virtual network filtering for this Cosmos DB account.
     */
    isVirtualNetworkFilterEnabled?: pulumi.Input<boolean>;
    /**
     * A versionless Key Vault Key ID for CMK encryption. Changing this forces a new resource to be created.
     */
    keyVaultKeyId?: pulumi.Input<string>;
    /**
     * Specifies the Kind of CosmosDB to create - possible values are `GlobalDocumentDB` and `MongoDB`. Defaults to `GlobalDocumentDB`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string>;
    /**
     * Disable local authentication and ensure only MSI and AAD can be used exclusively for authentication. Defaults to `false`. Can be set only when using the SQL API.
     */
    localAuthenticationDisabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Server Version of a MongoDB account. Possible values are `4.0`, `3.6`, and `3.2`.
     */
    mongoServerVersion?: pulumi.Input<string>;
    /**
     * Specifies the name of the CosmosDB Account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * If azure services can bypass ACLs. Defaults to `false`.
     */
    networkAclBypassForAzureServices?: pulumi.Input<boolean>;
    /**
     * The list of resource Ids for Network Acl Bypass for this Cosmos DB account.
     */
    networkAclBypassIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Offer Type to use for this CosmosDB Account - currently this can only be set to `Standard`.
     */
    offerType: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this CosmosDB account.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which the CosmosDB Account is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `restore` block as defined below.
     */
    restore?: pulumi.Input<inputs.cosmosdb.AccountRestore>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies a `virtualNetworkRules` resource, used to define which subnets are allowed to access this CosmosDB account.
     */
    virtualNetworkRules?: pulumi.Input<pulumi.Input<inputs.cosmosdb.AccountVirtualNetworkRule>[]>;
}
