import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an AAD B2C Directory.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.aadb2c.Directory("example", {
 *     countryCode: "US",
 *     dataResidencyLocation: "United States",
 *     displayName: "example-b2c-tenant",
 *     domainName: "exampleb2ctenant.onmicrosoft.com",
 *     resourceGroupName: "example-rg",
 *     skuName: "PremiumP1",
 * });
 * ```
 *
 * ## Import
 *
 * AAD B2C Directories can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:aadb2c/directory:Directory example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/example-resource-group/providers/Microsoft.AzureActiveDirectory/b2cDirectories/directory-name
 * ```
 */
export declare class Directory extends pulumi.CustomResource {
    /**
     * Get an existing Directory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectoryState, opts?: pulumi.CustomResourceOptions): Directory;
    /**
     * Returns true if the given object is an instance of Directory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Directory;
    /**
     * The type of billing for the AAD B2C tenant. Possible values include: `MAU` or `Auths`.
     */
    readonly billingType: pulumi.Output<string>;
    /**
     * Country code of the B2C tenant. The `countryCode` should be valid for the specified `dataResidencyLocation`. See [official docs](https://aka.ms/B2CDataResidency) for valid country codes. Required when creating a new resource. Changing this forces a new AAD B2C Directory to be created.
     */
    readonly countryCode: pulumi.Output<string>;
    /**
     * Location in which the B2C tenant is hosted and data resides. The `dataResidencyLocation` should be valid for the specified `countryCode`. See [official docs](https://aka.ms/B2CDataResidenc) for more information. Changing this forces a new AAD B2C Directory to be created.
     */
    readonly dataResidencyLocation: pulumi.Output<string>;
    /**
     * The initial display name of the B2C tenant. Required when creating a new resource. Changing this forces a new AAD B2C Directory to be created.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Domain name of the B2C tenant, including the `.onmicrosoft.com` suffix. Changing this forces a new AAD B2C Directory to be created.
     */
    readonly domainName: pulumi.Output<string>;
    /**
     * The date from which the billing type took effect. May not be populated until after the first billing cycle.
     */
    readonly effectiveStartDate: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the AAD B2C Directory should exist. Changing this forces a new AAD B2C Directory to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Billing SKU for the B2C tenant. Must be one of: `PremiumP1` or `PremiumP2` (`Standard` is not supported). See [official docs](https://aka.ms/b2cBilling) for more information.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the AAD B2C Directory.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Tenant ID for the AAD B2C tenant.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a Directory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectoryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Directory resources.
 */
export interface DirectoryState {
    /**
     * The type of billing for the AAD B2C tenant. Possible values include: `MAU` or `Auths`.
     */
    billingType?: pulumi.Input<string>;
    /**
     * Country code of the B2C tenant. The `countryCode` should be valid for the specified `dataResidencyLocation`. See [official docs](https://aka.ms/B2CDataResidency) for valid country codes. Required when creating a new resource. Changing this forces a new AAD B2C Directory to be created.
     */
    countryCode?: pulumi.Input<string>;
    /**
     * Location in which the B2C tenant is hosted and data resides. The `dataResidencyLocation` should be valid for the specified `countryCode`. See [official docs](https://aka.ms/B2CDataResidenc) for more information. Changing this forces a new AAD B2C Directory to be created.
     */
    dataResidencyLocation?: pulumi.Input<string>;
    /**
     * The initial display name of the B2C tenant. Required when creating a new resource. Changing this forces a new AAD B2C Directory to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Domain name of the B2C tenant, including the `.onmicrosoft.com` suffix. Changing this forces a new AAD B2C Directory to be created.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The date from which the billing type took effect. May not be populated until after the first billing cycle.
     */
    effectiveStartDate?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the AAD B2C Directory should exist. Changing this forces a new AAD B2C Directory to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Billing SKU for the B2C tenant. Must be one of: `PremiumP1` or `PremiumP2` (`Standard` is not supported). See [official docs](https://aka.ms/b2cBilling) for more information.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the AAD B2C Directory.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Tenant ID for the AAD B2C tenant.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Directory resource.
 */
export interface DirectoryArgs {
    /**
     * Country code of the B2C tenant. The `countryCode` should be valid for the specified `dataResidencyLocation`. See [official docs](https://aka.ms/B2CDataResidency) for valid country codes. Required when creating a new resource. Changing this forces a new AAD B2C Directory to be created.
     */
    countryCode?: pulumi.Input<string>;
    /**
     * Location in which the B2C tenant is hosted and data resides. The `dataResidencyLocation` should be valid for the specified `countryCode`. See [official docs](https://aka.ms/B2CDataResidenc) for more information. Changing this forces a new AAD B2C Directory to be created.
     */
    dataResidencyLocation: pulumi.Input<string>;
    /**
     * The initial display name of the B2C tenant. Required when creating a new resource. Changing this forces a new AAD B2C Directory to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Domain name of the B2C tenant, including the `.onmicrosoft.com` suffix. Changing this forces a new AAD B2C Directory to be created.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the AAD B2C Directory should exist. Changing this forces a new AAD B2C Directory to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Billing SKU for the B2C tenant. Must be one of: `PremiumP1` or `PremiumP2` (`Standard` is not supported). See [official docs](https://aka.ms/b2cBilling) for more information.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the AAD B2C Directory.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
