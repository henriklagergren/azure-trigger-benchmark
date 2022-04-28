import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Policy within a Dev Test Policy Set.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLab = new azure.devtest.Lab("exampleLab", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         Sydney: "Australia",
 *     },
 * });
 * const examplePolicy = new azure.devtest.Policy("examplePolicy", {
 *     policySetName: "default",
 *     labName: exampleLab.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     factData: "",
 *     threshold: "999",
 *     evaluatorType: "MaxValuePolicy",
 *     tags: {
 *         Acceptance: "Test",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Dev Test Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devtest/policy:Policy policy1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DevTestLab/labs/lab1/policysets/default/policies/policy1
 * ```
 */
export declare class Policy extends pulumi.CustomResource {
    /**
     * Get an existing Policy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyState, opts?: pulumi.CustomResourceOptions): Policy;
    /**
     * Returns true if the given object is an instance of Policy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Policy;
    /**
     * A description for the Policy.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    readonly evaluatorType: pulumi.Output<string>;
    /**
     * The Fact Data for this Policy.
     */
    readonly factData: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    readonly labName: pulumi.Output<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    readonly policySetName: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Threshold for this Policy.
     */
    readonly threshold: pulumi.Output<string>;
    /**
     * Create a Policy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Policy resources.
 */
export interface PolicyState {
    /**
     * A description for the Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    evaluatorType?: pulumi.Input<string>;
    /**
     * The Fact Data for this Policy.
     */
    factData?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    labName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    policySetName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Threshold for this Policy.
     */
    threshold?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * A description for the Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * The Evaluation Type used for this Policy. Possible values include: 'AllowedValuesPolicy', 'MaxValuePolicy'. Changing this forces a new resource to be created.
     */
    evaluatorType: pulumi.Input<string>;
    /**
     * The Fact Data for this Policy.
     */
    factData?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Policy should be created. Changing this forces a new resource to be created.
     */
    labName: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Policy. Possible values are `GalleryImage`, `LabPremiumVmCount`, `LabTargetCost`, `LabVmCount`, `LabVmSize`, `UserOwnedLabPremiumVmCount`, `UserOwnedLabVmCount` and `UserOwnedLabVmCountInSubnet`. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Policy Set within the Dev Test Lab where this policy should be created. Changing this forces a new resource to be created.
     */
    policySetName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Threshold for this Policy.
     */
    threshold: pulumi.Input<string>;
}
