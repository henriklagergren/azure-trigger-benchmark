import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages as an Azure Container Group instance.
 *
 * ## Example Usage
 *
 * This example provisions a Basic Container.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleGroup = new azure.containerservice.Group("exampleGroup", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ipAddressType: "public",
 *     dnsNameLabel: "aci-label",
 *     osType: "Linux",
 *     containers: [
 *         {
 *             name: "hello-world",
 *             image: "mcr.microsoft.com/azuredocs/aci-helloworld:latest",
 *             cpu: "0.5",
 *             memory: "1.5",
 *             ports: [{
 *                 port: 443,
 *                 protocol: "TCP",
 *             }],
 *         },
 *         {
 *             name: "sidecar",
 *             image: "mcr.microsoft.com/azuredocs/aci-tutorial-sidecar",
 *             cpu: "0.5",
 *             memory: "1.5",
 *         },
 *     ],
 *     tags: {
 *         environment: "testing",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Container Group's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:containerservice/group:Group containerGroup1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ContainerInstance/containerGroups/myContainerGroup1
 * ```
 */
export declare class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group;
    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Group;
    /**
     * The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
     */
    readonly containers: pulumi.Output<outputs.containerservice.GroupContainer[]>;
    /**
     * A `diagnostics` block as documented below.
     */
    readonly diagnostics: pulumi.Output<outputs.containerservice.GroupDiagnostics | undefined>;
    /**
     * A `dnsConfig` block as documented below.
     */
    readonly dnsConfig: pulumi.Output<outputs.containerservice.GroupDnsConfig | undefined>;
    /**
     * The DNS label/name for the container groups IP. Changing this forces a new resource to be created.
     */
    readonly dnsNameLabel: pulumi.Output<string | undefined>;
    /**
     * Zero or more `exposedPort` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly exposedPorts: pulumi.Output<outputs.containerservice.GroupExposedPort[]>;
    /**
     * The FQDN of the container group derived from `dnsNameLabel`.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.containerservice.GroupIdentity | undefined>;
    /**
     * A `imageRegistryCredential` block as documented below. Changing this forces a new resource to be created.
     */
    readonly imageRegistryCredentials: pulumi.Output<outputs.containerservice.GroupImageRegistryCredential[] | undefined>;
    /**
     * The IP address allocated to the container group.
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * Specifies the ip address type of the container. `Public`, `Private` or `None`. Changing this forces a new resource to be created. If set to `Private`, `networkProfileId` also needs to be set.
     */
    readonly ipAddressType: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Container Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Network profile ID for deploying to virtual network.
     */
    readonly networkProfileId: pulumi.Output<string | undefined>;
    /**
     * The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
     */
    readonly osType: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`. Changing this forces a new resource to be created.
     */
    readonly restartPolicy: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
     */
    containers?: pulumi.Input<pulumi.Input<inputs.containerservice.GroupContainer>[]>;
    /**
     * A `diagnostics` block as documented below.
     */
    diagnostics?: pulumi.Input<inputs.containerservice.GroupDiagnostics>;
    /**
     * A `dnsConfig` block as documented below.
     */
    dnsConfig?: pulumi.Input<inputs.containerservice.GroupDnsConfig>;
    /**
     * The DNS label/name for the container groups IP. Changing this forces a new resource to be created.
     */
    dnsNameLabel?: pulumi.Input<string>;
    /**
     * Zero or more `exposedPort` blocks as defined below. Changing this forces a new resource to be created.
     */
    exposedPorts?: pulumi.Input<pulumi.Input<inputs.containerservice.GroupExposedPort>[]>;
    /**
     * The FQDN of the container group derived from `dnsNameLabel`.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.containerservice.GroupIdentity>;
    /**
     * A `imageRegistryCredential` block as documented below. Changing this forces a new resource to be created.
     */
    imageRegistryCredentials?: pulumi.Input<pulumi.Input<inputs.containerservice.GroupImageRegistryCredential>[]>;
    /**
     * The IP address allocated to the container group.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Specifies the ip address type of the container. `Public`, `Private` or `None`. Changing this forces a new resource to be created. If set to `Private`, `networkProfileId` also needs to be set.
     */
    ipAddressType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Container Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Network profile ID for deploying to virtual network.
     */
    networkProfileId?: pulumi.Input<string>;
    /**
     * The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
     */
    osType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`. Changing this forces a new resource to be created.
     */
    restartPolicy?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * The definition of a container that is part of the group as documented in the `container` block below. Changing this forces a new resource to be created.
     */
    containers: pulumi.Input<pulumi.Input<inputs.containerservice.GroupContainer>[]>;
    /**
     * A `diagnostics` block as documented below.
     */
    diagnostics?: pulumi.Input<inputs.containerservice.GroupDiagnostics>;
    /**
     * A `dnsConfig` block as documented below.
     */
    dnsConfig?: pulumi.Input<inputs.containerservice.GroupDnsConfig>;
    /**
     * The DNS label/name for the container groups IP. Changing this forces a new resource to be created.
     */
    dnsNameLabel?: pulumi.Input<string>;
    /**
     * Zero or more `exposedPort` blocks as defined below. Changing this forces a new resource to be created.
     */
    exposedPorts?: pulumi.Input<pulumi.Input<inputs.containerservice.GroupExposedPort>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.containerservice.GroupIdentity>;
    /**
     * A `imageRegistryCredential` block as documented below. Changing this forces a new resource to be created.
     */
    imageRegistryCredentials?: pulumi.Input<pulumi.Input<inputs.containerservice.GroupImageRegistryCredential>[]>;
    /**
     * Specifies the ip address type of the container. `Public`, `Private` or `None`. Changing this forces a new resource to be created. If set to `Private`, `networkProfileId` also needs to be set.
     */
    ipAddressType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Container Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Network profile ID for deploying to virtual network.
     */
    networkProfileId?: pulumi.Input<string>;
    /**
     * The OS for the container group. Allowed values are `Linux` and `Windows`. Changing this forces a new resource to be created.
     */
    osType: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Container Group. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Restart policy for the container group. Allowed values are `Always`, `Never`, `OnFailure`. Defaults to `Always`. Changing this forces a new resource to be created.
     */
    restartPolicy?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
