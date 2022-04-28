import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages the Security Center Assessment for Azure Security Center.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * const internal = new azure.network.Subnet("internal", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 * });
 * const exampleLinuxVirtualMachineScaleSet = new azure.compute.LinuxVirtualMachineScaleSet("exampleLinuxVirtualMachineScaleSet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "Standard_F2",
 *     instances: 1,
 *     adminUsername: "adminuser",
 *     adminSshKeys: [{
 *         username: "adminuser",
 *         publicKey: fs.readFileSync("~/.ssh/id_rsa.pub"),
 *     }],
 *     sourceImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     osDisk: {
 *         storageAccountType: "Standard_LRS",
 *         caching: "ReadWrite",
 *     },
 *     networkInterfaces: [{
 *         name: "example",
 *         primary: true,
 *         ipConfigurations: [{
 *             name: "internal",
 *             primary: true,
 *             subnetId: internal.id,
 *         }],
 *     }],
 * });
 * const exampleAssessmentPolicy = new azure.securitycenter.AssessmentPolicy("exampleAssessmentPolicy", {
 *     displayName: "Test Display Name",
 *     severity: "Medium",
 *     description: "Test Description",
 * });
 * const exampleAssessment = new azure.securitycenter.Assessment("exampleAssessment", {
 *     assessmentPolicyId: exampleAssessmentPolicy.id,
 *     targetResourceId: exampleLinuxVirtualMachineScaleSet.id,
 *     status: {
 *         code: "Healthy",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Security Assessment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:securitycenter/assessment:Assessment example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resGroup1/providers/Microsoft.Compute/virtualMachineScaleSets/vmss1/providers/Microsoft.Security/assessments/00000000-0000-0000-0000-000000000000
 * ```
 */
export declare class Assessment extends pulumi.CustomResource {
    /**
     * Get an existing Assessment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssessmentState, opts?: pulumi.CustomResourceOptions): Assessment;
    /**
     * Returns true if the given object is an instance of Assessment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Assessment;
    /**
     * A map of additional data to associate with the assessment.
     */
    readonly additionalData: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the security Assessment policy to apply to this resource. Changing this forces a new security Assessment to be created.
     */
    readonly assessmentPolicyId: pulumi.Output<string>;
    /**
     * A `status` block as defined below.
     */
    readonly status: pulumi.Output<outputs.securitycenter.AssessmentStatus>;
    /**
     * The ID of the target resource. Changing this forces a new security Assessment to be created.
     */
    readonly targetResourceId: pulumi.Output<string>;
    /**
     * Create a Assessment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Assessment resources.
 */
export interface AssessmentState {
    /**
     * A map of additional data to associate with the assessment.
     */
    additionalData?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the security Assessment policy to apply to this resource. Changing this forces a new security Assessment to be created.
     */
    assessmentPolicyId?: pulumi.Input<string>;
    /**
     * A `status` block as defined below.
     */
    status?: pulumi.Input<inputs.securitycenter.AssessmentStatus>;
    /**
     * The ID of the target resource. Changing this forces a new security Assessment to be created.
     */
    targetResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Assessment resource.
 */
export interface AssessmentArgs {
    /**
     * A map of additional data to associate with the assessment.
     */
    additionalData?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the security Assessment policy to apply to this resource. Changing this forces a new security Assessment to be created.
     */
    assessmentPolicyId: pulumi.Input<string>;
    /**
     * A `status` block as defined below.
     */
    status: pulumi.Input<inputs.securitycenter.AssessmentStatus>;
    /**
     * The ID of the target resource. Changing this forces a new security Assessment to be created.
     */
    targetResourceId: pulumi.Input<string>;
}
