import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.cognitive.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "Face",
 *     skuName: "S0",
 *     tags: {
 *         Acceptance: "Test",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Cognitive Service Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cognitive/account:Account account1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.CognitiveServices/accounts/account1
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
     * The subdomain name used for token-based authentication. Changing this forces a new resource to be created.
     */
    readonly customSubdomainName: pulumi.Output<string | undefined>;
    /**
     * The endpoint used to connect to the Cognitive Service Account.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * List of FQDNs allowed for the Cognitive Account.
     */
    readonly fqdns: pulumi.Output<string[] | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.cognitive.AccountIdentity | undefined>;
    /**
     * Specifies the type of Cognitive Service Account that should be created. Possible values are `Academic`, `AnomalyDetector`, `Bing.Autosuggest`, `Bing.Autosuggest.v7`, `Bing.CustomSearch`, `Bing.Search`, `Bing.Search.v7`, `Bing.Speech`, `Bing.SpellCheck`, `Bing.SpellCheck.v7`, `CognitiveServices`, `ComputerVision`, `ContentModerator`, `CustomSpeech`, `CustomVision.Prediction`, `CustomVision.Training`, `Emotion`, `Face`,`FormRecognizer`, `ImmersiveReader`, `LUIS`, `LUIS.Authoring`, `MetricsAdvisor`, `Personalizer`, `QnAMaker`, `Recommendations`, `SpeakerRecognition`, `Speech`, `SpeechServices`, `SpeechTranslation`, `TextAnalytics`, `TextTranslation` and `WebLM`. Changing this forces a new resource to be created.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Whether local authentication methods is enabled for the Cognitive Account. Defaults to `true`.
     */
    readonly localAuthEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Azure AD Client ID (Application ID). This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    readonly metricsAdvisorAadClientId: pulumi.Output<string | undefined>;
    /**
     * The Azure AD Tenant ID. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    readonly metricsAdvisorAadTenantId: pulumi.Output<string | undefined>;
    /**
     * The super user of Metrics Advisor. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    readonly metricsAdvisorSuperUserName: pulumi.Output<string | undefined>;
    /**
     * The website name of Metrics Advisor. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    readonly metricsAdvisorWebsiteName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Cognitive Service Account. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `networkAcls` block as defined below.
     */
    readonly networkAcls: pulumi.Output<outputs.cognitive.AccountNetworkAcls | undefined>;
    readonly outboundNetworkAccessRestrited: pulumi.Output<boolean | undefined>;
    /**
     * A primary access key which can be used to connect to the Cognitive Service Account.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * Whether public network access is allowed for the Cognitive Account. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A URL to link a QnAMaker cognitive account to a QnA runtime.
     */
    readonly qnaRuntimeEndpoint: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which the Cognitive Service Account is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary access key which can be used to connect to the Cognitive Service Account.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * Specifies the SKU Name for this Cognitive Service Account. Possible values are `F0`, `F1`, `S`, `S0`, `S1`, `S2`, `S3`, `S4`, `S5`, `S6`, `P0`, `P1`, and `P2`.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A `storage` block as defined below.
     */
    readonly storages: pulumi.Output<outputs.cognitive.AccountStorage[] | undefined>;
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
     * The subdomain name used for token-based authentication. Changing this forces a new resource to be created.
     */
    customSubdomainName?: pulumi.Input<string>;
    /**
     * The endpoint used to connect to the Cognitive Service Account.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * List of FQDNs allowed for the Cognitive Account.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.cognitive.AccountIdentity>;
    /**
     * Specifies the type of Cognitive Service Account that should be created. Possible values are `Academic`, `AnomalyDetector`, `Bing.Autosuggest`, `Bing.Autosuggest.v7`, `Bing.CustomSearch`, `Bing.Search`, `Bing.Search.v7`, `Bing.Speech`, `Bing.SpellCheck`, `Bing.SpellCheck.v7`, `CognitiveServices`, `ComputerVision`, `ContentModerator`, `CustomSpeech`, `CustomVision.Prediction`, `CustomVision.Training`, `Emotion`, `Face`,`FormRecognizer`, `ImmersiveReader`, `LUIS`, `LUIS.Authoring`, `MetricsAdvisor`, `Personalizer`, `QnAMaker`, `Recommendations`, `SpeakerRecognition`, `Speech`, `SpeechServices`, `SpeechTranslation`, `TextAnalytics`, `TextTranslation` and `WebLM`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string>;
    /**
     * Whether local authentication methods is enabled for the Cognitive Account. Defaults to `true`.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Azure AD Client ID (Application ID). This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorAadClientId?: pulumi.Input<string>;
    /**
     * The Azure AD Tenant ID. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorAadTenantId?: pulumi.Input<string>;
    /**
     * The super user of Metrics Advisor. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorSuperUserName?: pulumi.Input<string>;
    /**
     * The website name of Metrics Advisor. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorWebsiteName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Cognitive Service Account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkAcls` block as defined below.
     */
    networkAcls?: pulumi.Input<inputs.cognitive.AccountNetworkAcls>;
    outboundNetworkAccessRestrited?: pulumi.Input<boolean>;
    /**
     * A primary access key which can be used to connect to the Cognitive Service Account.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * Whether public network access is allowed for the Cognitive Account. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * A URL to link a QnAMaker cognitive account to a QnA runtime.
     */
    qnaRuntimeEndpoint?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cognitive Service Account is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary access key which can be used to connect to the Cognitive Service Account.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this Cognitive Service Account. Possible values are `F0`, `F1`, `S`, `S0`, `S1`, `S2`, `S3`, `S4`, `S5`, `S6`, `P0`, `P1`, and `P2`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A `storage` block as defined below.
     */
    storages?: pulumi.Input<pulumi.Input<inputs.cognitive.AccountStorage>[]>;
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
     * The subdomain name used for token-based authentication. Changing this forces a new resource to be created.
     */
    customSubdomainName?: pulumi.Input<string>;
    /**
     * List of FQDNs allowed for the Cognitive Account.
     */
    fqdns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.cognitive.AccountIdentity>;
    /**
     * Specifies the type of Cognitive Service Account that should be created. Possible values are `Academic`, `AnomalyDetector`, `Bing.Autosuggest`, `Bing.Autosuggest.v7`, `Bing.CustomSearch`, `Bing.Search`, `Bing.Search.v7`, `Bing.Speech`, `Bing.SpellCheck`, `Bing.SpellCheck.v7`, `CognitiveServices`, `ComputerVision`, `ContentModerator`, `CustomSpeech`, `CustomVision.Prediction`, `CustomVision.Training`, `Emotion`, `Face`,`FormRecognizer`, `ImmersiveReader`, `LUIS`, `LUIS.Authoring`, `MetricsAdvisor`, `Personalizer`, `QnAMaker`, `Recommendations`, `SpeakerRecognition`, `Speech`, `SpeechServices`, `SpeechTranslation`, `TextAnalytics`, `TextTranslation` and `WebLM`. Changing this forces a new resource to be created.
     */
    kind: pulumi.Input<string>;
    /**
     * Whether local authentication methods is enabled for the Cognitive Account. Defaults to `true`.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Azure AD Client ID (Application ID). This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorAadClientId?: pulumi.Input<string>;
    /**
     * The Azure AD Tenant ID. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorAadTenantId?: pulumi.Input<string>;
    /**
     * The super user of Metrics Advisor. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorSuperUserName?: pulumi.Input<string>;
    /**
     * The website name of Metrics Advisor. This attribute is only set when kind is `MetricsAdvisor`. Changing this forces a new resource to be created.
     */
    metricsAdvisorWebsiteName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Cognitive Service Account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkAcls` block as defined below.
     */
    networkAcls?: pulumi.Input<inputs.cognitive.AccountNetworkAcls>;
    outboundNetworkAccessRestrited?: pulumi.Input<boolean>;
    /**
     * Whether public network access is allowed for the Cognitive Account. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * A URL to link a QnAMaker cognitive account to a QnA runtime.
     */
    qnaRuntimeEndpoint?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cognitive Service Account is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this Cognitive Service Account. Possible values are `F0`, `F1`, `S`, `S0`, `S1`, `S2`, `S3`, `S4`, `S5`, `S6`, `P0`, `P1`, and `P2`.
     */
    skuName: pulumi.Input<string>;
    /**
     * A `storage` block as defined below.
     */
    storages?: pulumi.Input<pulumi.Input<inputs.cognitive.AccountStorage>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
