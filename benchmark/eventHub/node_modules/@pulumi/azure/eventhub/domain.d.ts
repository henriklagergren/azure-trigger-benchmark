import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an EventGrid Domain
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDomain = new azure.eventgrid.Domain("exampleDomain", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * EventGrid Domains can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/domain:Domain domain1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventGrid/domains/domain1
 * ```
 *
 * @deprecated azure.eventhub.Domain has been deprecated in favor of azure.eventgrid.Domain
 */
export declare class Domain extends pulumi.CustomResource {
    /**
     * Get an existing Domain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainState, opts?: pulumi.CustomResourceOptions): Domain;
    /**
     * Returns true if the given object is an instance of Domain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Domain;
    /**
     * Whether to create the domain topic when the first event subscription at the scope of the domain topic is created. Defaults to `true`.
     */
    readonly autoCreateTopicWithFirstSubscription: pulumi.Output<boolean | undefined>;
    /**
     * Whether to delete the domain topic when the last event subscription at the scope of the domain topic is deleted. Defaults to `true`.
     */
    readonly autoDeleteTopicWithLastSubscription: pulumi.Output<boolean | undefined>;
    /**
     * The Endpoint associated with the EventGrid Domain.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.eventhub.DomainIdentity | undefined>;
    /**
     * One or more `inboundIpRule` blocks as defined below.
     */
    readonly inboundIpRules: pulumi.Output<outputs.eventhub.DomainInboundIpRule[] | undefined>;
    /**
     * A `inputMappingDefaultValues` block as defined below.
     */
    readonly inputMappingDefaultValues: pulumi.Output<outputs.eventhub.DomainInputMappingDefaultValues | undefined>;
    /**
     * A `inputMappingFields` block as defined below.
     */
    readonly inputMappingFields: pulumi.Output<outputs.eventhub.DomainInputMappingFields | undefined>;
    /**
     * Specifies the schema in which incoming events will be published to this domain. Allowed values are `CloudEventSchemaV1_0`, `CustomEventSchema`, or `EventGridSchema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
     */
    readonly inputSchema: pulumi.Output<string | undefined>;
    /**
     * Whether local authentication methods is enabled for the EventGrid Domain. Defaults to `true`.
     */
    readonly localAuthEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Primary Shared Access Key associated with the EventGrid Domain.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for this server. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Shared Access Key associated with the EventGrid Domain.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Domain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated azure.eventhub.Domain has been deprecated in favor of azure.eventgrid.Domain */
    constructor(name: string, args: DomainArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Domain resources.
 */
export interface DomainState {
    /**
     * Whether to create the domain topic when the first event subscription at the scope of the domain topic is created. Defaults to `true`.
     */
    autoCreateTopicWithFirstSubscription?: pulumi.Input<boolean>;
    /**
     * Whether to delete the domain topic when the last event subscription at the scope of the domain topic is deleted. Defaults to `true`.
     */
    autoDeleteTopicWithLastSubscription?: pulumi.Input<boolean>;
    /**
     * The Endpoint associated with the EventGrid Domain.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.eventhub.DomainIdentity>;
    /**
     * One or more `inboundIpRule` blocks as defined below.
     */
    inboundIpRules?: pulumi.Input<pulumi.Input<inputs.eventhub.DomainInboundIpRule>[]>;
    /**
     * A `inputMappingDefaultValues` block as defined below.
     */
    inputMappingDefaultValues?: pulumi.Input<inputs.eventhub.DomainInputMappingDefaultValues>;
    /**
     * A `inputMappingFields` block as defined below.
     */
    inputMappingFields?: pulumi.Input<inputs.eventhub.DomainInputMappingFields>;
    /**
     * Specifies the schema in which incoming events will be published to this domain. Allowed values are `CloudEventSchemaV1_0`, `CustomEventSchema`, or `EventGridSchema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
     */
    inputSchema?: pulumi.Input<string>;
    /**
     * Whether local authentication methods is enabled for the EventGrid Domain. Defaults to `true`.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Primary Shared Access Key associated with the EventGrid Domain.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Shared Access Key associated with the EventGrid Domain.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Domain resource.
 */
export interface DomainArgs {
    /**
     * Whether to create the domain topic when the first event subscription at the scope of the domain topic is created. Defaults to `true`.
     */
    autoCreateTopicWithFirstSubscription?: pulumi.Input<boolean>;
    /**
     * Whether to delete the domain topic when the last event subscription at the scope of the domain topic is deleted. Defaults to `true`.
     */
    autoDeleteTopicWithLastSubscription?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.eventhub.DomainIdentity>;
    /**
     * One or more `inboundIpRule` blocks as defined below.
     */
    inboundIpRules?: pulumi.Input<pulumi.Input<inputs.eventhub.DomainInboundIpRule>[]>;
    /**
     * A `inputMappingDefaultValues` block as defined below.
     */
    inputMappingDefaultValues?: pulumi.Input<inputs.eventhub.DomainInputMappingDefaultValues>;
    /**
     * A `inputMappingFields` block as defined below.
     */
    inputMappingFields?: pulumi.Input<inputs.eventhub.DomainInputMappingFields>;
    /**
     * Specifies the schema in which incoming events will be published to this domain. Allowed values are `CloudEventSchemaV1_0`, `CustomEventSchema`, or `EventGridSchema`. Defaults to `eventgridschema`. Changing this forces a new resource to be created.
     */
    inputSchema?: pulumi.Input<string>;
    /**
     * Whether local authentication methods is enabled for the EventGrid Domain. Defaults to `true`.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventGrid Domain resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
