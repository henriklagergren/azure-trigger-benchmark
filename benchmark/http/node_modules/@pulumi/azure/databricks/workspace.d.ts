import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Import
 *
 * Databrick Workspaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:databricks/workspace:Workspace workspace1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Databricks/workspaces/workspace1
 * ```
 */
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace;
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * A `customParameters` block as documented below.
     */
    readonly customParameters: pulumi.Output<outputs.databricks.WorkspaceCustomParameters>;
    /**
     * Is the workspace enabled for customer managed key encryption? If `true` this enables the Managed Identity for the managed storage account. Possible values are `true` or `false`. Defaults to `false`. This field is only valid if the Databricks Workspace `sku` is set to `premium`. Changing this forces a new resource to be created.
     */
    readonly customerManagedKeyEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Is the Databricks File System root file system enabled with a secondary layer of encryption with platform managed keys? Possible values are `true` or `false`. Defaults to `false`. This field is only valid if the Databricks Workspace `sku` is set to `premium`. Changing this forces a new resource to be created.
     */
    readonly infrastructureEncryptionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource ID of the Outbound Load balancer Backend Address Pool for Secure Cluster Connectivity (No Public IP) workspace. Changing this forces a new resource to be created.
     */
    readonly loadBalancerBackendAddressPoolId: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID of the Managed Resource Group created by the Databricks Workspace.
     */
    readonly managedResourceGroupId: pulumi.Output<string>;
    /**
     * The name of the resource group where Azure should place the managed Databricks resources. Changing this forces a new resource to be created.
     */
    readonly managedResourceGroupName: pulumi.Output<string>;
    /**
     * Customer managed encryption properties for the Databricks Workspace managed resources(e.g. Notebooks and Artifacts). Changing this forces a new resource to be created.
     */
    readonly managedServicesCmkKeyVaultKeyId: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Databricks Workspace resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Does the data plane (clusters) to control plane communication happen over private link endpoint only or publicly? Possible values `AllRules`, `NoAzureDatabricksRules` or `NoAzureServiceRules`. Required when `publicNetworkAccessEnabled` is set to `false`. Changing this forces a new resource to be created.
     */
    readonly networkSecurityGroupRulesRequired: pulumi.Output<string>;
    /**
     * Allow public access for accessing workspace. Set value to `false` to access workspace only via private link endpoint. Possible values include `true` or `false`. Defaults to `true`. Changing this forces a new resource to be created.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Resource Group in which the Databricks Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The `sku` to use for the Databricks Workspace. Possible values are `standard`, `premium`, or `trial`. Changing this can force a new resource to be created in some circumstances.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A `storageAccountIdentity` block as documented below.
     */
    readonly storageAccountIdentities: pulumi.Output<outputs.databricks.WorkspaceStorageAccountIdentity[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The unique identifier of the databricks workspace in Databricks control plane.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
     */
    readonly workspaceUrl: pulumi.Output<string>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * A `customParameters` block as documented below.
     */
    customParameters?: pulumi.Input<inputs.databricks.WorkspaceCustomParameters>;
    /**
     * Is the workspace enabled for customer managed key encryption? If `true` this enables the Managed Identity for the managed storage account. Possible values are `true` or `false`. Defaults to `false`. This field is only valid if the Databricks Workspace `sku` is set to `premium`. Changing this forces a new resource to be created.
     */
    customerManagedKeyEnabled?: pulumi.Input<boolean>;
    /**
     * Is the Databricks File System root file system enabled with a secondary layer of encryption with platform managed keys? Possible values are `true` or `false`. Defaults to `false`. This field is only valid if the Databricks Workspace `sku` is set to `premium`. Changing this forces a new resource to be created.
     */
    infrastructureEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Resource ID of the Outbound Load balancer Backend Address Pool for Secure Cluster Connectivity (No Public IP) workspace. Changing this forces a new resource to be created.
     */
    loadBalancerBackendAddressPoolId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Managed Resource Group created by the Databricks Workspace.
     */
    managedResourceGroupId?: pulumi.Input<string>;
    /**
     * The name of the resource group where Azure should place the managed Databricks resources. Changing this forces a new resource to be created.
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * Customer managed encryption properties for the Databricks Workspace managed resources(e.g. Notebooks and Artifacts). Changing this forces a new resource to be created.
     */
    managedServicesCmkKeyVaultKeyId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Databricks Workspace resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Does the data plane (clusters) to control plane communication happen over private link endpoint only or publicly? Possible values `AllRules`, `NoAzureDatabricksRules` or `NoAzureServiceRules`. Required when `publicNetworkAccessEnabled` is set to `false`. Changing this forces a new resource to be created.
     */
    networkSecurityGroupRulesRequired?: pulumi.Input<string>;
    /**
     * Allow public access for accessing workspace. Set value to `false` to access workspace only via private link endpoint. Possible values include `true` or `false`. Defaults to `true`. Changing this forces a new resource to be created.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group in which the Databricks Workspace should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The `sku` to use for the Databricks Workspace. Possible values are `standard`, `premium`, or `trial`. Changing this can force a new resource to be created in some circumstances.
     */
    sku?: pulumi.Input<string>;
    /**
     * A `storageAccountIdentity` block as documented below.
     */
    storageAccountIdentities?: pulumi.Input<pulumi.Input<inputs.databricks.WorkspaceStorageAccountIdentity>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique identifier of the databricks workspace in Databricks control plane.
     */
    workspaceId?: pulumi.Input<string>;
    /**
     * The workspace URL which is of the format 'adb-{workspaceId}.{random}.azuredatabricks.net'
     */
    workspaceUrl?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * A `customParameters` block as documented below.
     */
    customParameters?: pulumi.Input<inputs.databricks.WorkspaceCustomParameters>;
    /**
     * Is the workspace enabled for customer managed key encryption? If `true` this enables the Managed Identity for the managed storage account. Possible values are `true` or `false`. Defaults to `false`. This field is only valid if the Databricks Workspace `sku` is set to `premium`. Changing this forces a new resource to be created.
     */
    customerManagedKeyEnabled?: pulumi.Input<boolean>;
    /**
     * Is the Databricks File System root file system enabled with a secondary layer of encryption with platform managed keys? Possible values are `true` or `false`. Defaults to `false`. This field is only valid if the Databricks Workspace `sku` is set to `premium`. Changing this forces a new resource to be created.
     */
    infrastructureEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Resource ID of the Outbound Load balancer Backend Address Pool for Secure Cluster Connectivity (No Public IP) workspace. Changing this forces a new resource to be created.
     */
    loadBalancerBackendAddressPoolId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group where Azure should place the managed Databricks resources. Changing this forces a new resource to be created.
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * Customer managed encryption properties for the Databricks Workspace managed resources(e.g. Notebooks and Artifacts). Changing this forces a new resource to be created.
     */
    managedServicesCmkKeyVaultKeyId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Databricks Workspace resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Does the data plane (clusters) to control plane communication happen over private link endpoint only or publicly? Possible values `AllRules`, `NoAzureDatabricksRules` or `NoAzureServiceRules`. Required when `publicNetworkAccessEnabled` is set to `false`. Changing this forces a new resource to be created.
     */
    networkSecurityGroupRulesRequired?: pulumi.Input<string>;
    /**
     * Allow public access for accessing workspace. Set value to `false` to access workspace only via private link endpoint. Possible values include `true` or `false`. Defaults to `true`. Changing this forces a new resource to be created.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group in which the Databricks Workspace should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The `sku` to use for the Databricks Workspace. Possible values are `standard`, `premium`, or `trial`. Changing this can force a new resource to be created in some circumstances.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
