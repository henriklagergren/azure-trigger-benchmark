import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Application Insights WebTest.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: "West Europe",
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleWebTest = new azure.appinsights.WebTest("exampleWebTest", {
 *     location: exampleInsights.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsightsId: exampleInsights.id,
 *     kind: "ping",
 *     frequency: 300,
 *     timeout: 60,
 *     enabled: true,
 *     geoLocations: [
 *         "us-tx-sn1-azr",
 *         "us-il-ch1-azr",
 *     ],
 *     configuration: `<WebTest Name="WebTest1" Id="ABD48585-0831-40CB-9069-682EA6BB3583" Enabled="True" CssProjectStructure="" CssIteration="" Timeout="0" WorkItemIds="" xmlns="http://microsoft.com/schemas/VisualStudio/TeamTest/2010" Description="" CredentialUserName="" CredentialPassword="" PreAuthenticate="True" Proxy="default" StopOnError="False" RecordedResultFile="" ResultsLocale="">
 *   <Items>
 *     <Request Method="GET" Guid="a5f10126-e4cd-570d-961c-cea43999a200" Version="1.1" Url="http://microsoft.com" ThinkTime="0" Timeout="300" ParseDependentRequests="True" FollowRedirects="True" RecordResult="True" Cache="False" ResponseTimeGoal="0" Encoding="utf-8" ExpectedHttpStatusCode="200" ExpectedResponseUrl="" ReportingName="" IgnoreHttpStatusCode="False" />
 *   </Items>
 * </WebTest>
 * `,
 * });
 * export const webtestId = exampleWebTest.id;
 * export const webtestsSyntheticId = exampleWebTest.syntheticMonitorId;
 * ```
 *
 * ## Import
 *
 * Application Insights Web Tests can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appinsights/webTest:WebTest my_test /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Insights/webTests/my_test
 * ```
 */
export declare class WebTest extends pulumi.CustomResource {
    /**
     * Get an existing WebTest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebTestState, opts?: pulumi.CustomResourceOptions): WebTest;
    /**
     * Returns true if the given object is an instance of WebTest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebTest;
    /**
     * The ID of the Application Insights component on which the WebTest operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: pulumi.Output<string>;
    /**
     * An XML configuration specification for a WebTest ([see here for more information](https://docs.microsoft.com/en-us/rest/api/application-insights/webtests/createorupdate/)).
     */
    readonly configuration: pulumi.Output<string>;
    /**
     * Purpose/user defined descriptive test for this WebTest.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Is the test actively being monitored.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Interval in seconds between test runs for this WebTest. Valid options are `300`, `600` and `900`. Defaults to `300`.
     */
    readonly frequency: pulumi.Output<number | undefined>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    readonly geoLocations: pulumi.Output<string[]>;
    /**
     * = (Required) The kind of web test that this web test watches. Choices are `ping` and `multistep`. Changing this forces a new resource to be created.
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created. It needs to correlate with location of parent resource (azurerm_application_insights).
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Application Insights WebTest. Changing this forces a
     * new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Application Insights WebTest. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Allow for retries should this WebTest fail.
     */
    readonly retryEnabled: pulumi.Output<boolean | undefined>;
    readonly syntheticMonitorId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Seconds until this WebTest will timeout and fail. Default is `30`.
     */
    readonly timeout: pulumi.Output<number | undefined>;
    /**
     * Create a WebTest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebTestArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WebTest resources.
 */
export interface WebTestState {
    /**
     * The ID of the Application Insights component on which the WebTest operates. Changing this forces a new resource to be created.
     */
    applicationInsightsId?: pulumi.Input<string>;
    /**
     * An XML configuration specification for a WebTest ([see here for more information](https://docs.microsoft.com/en-us/rest/api/application-insights/webtests/createorupdate/)).
     */
    configuration?: pulumi.Input<string>;
    /**
     * Purpose/user defined descriptive test for this WebTest.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the test actively being monitored.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Interval in seconds between test runs for this WebTest. Valid options are `300`, `600` and `900`. Defaults to `300`.
     */
    frequency?: pulumi.Input<number>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    geoLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * = (Required) The kind of web test that this web test watches. Choices are `ping` and `multistep`. Changing this forces a new resource to be created.
     */
    kind?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created. It needs to correlate with location of parent resource (azurerm_application_insights).
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Insights WebTest. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Application Insights WebTest. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Allow for retries should this WebTest fail.
     */
    retryEnabled?: pulumi.Input<boolean>;
    syntheticMonitorId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Seconds until this WebTest will timeout and fail. Default is `30`.
     */
    timeout?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a WebTest resource.
 */
export interface WebTestArgs {
    /**
     * The ID of the Application Insights component on which the WebTest operates. Changing this forces a new resource to be created.
     */
    applicationInsightsId: pulumi.Input<string>;
    /**
     * An XML configuration specification for a WebTest ([see here for more information](https://docs.microsoft.com/en-us/rest/api/application-insights/webtests/createorupdate/)).
     */
    configuration: pulumi.Input<string>;
    /**
     * Purpose/user defined descriptive test for this WebTest.
     */
    description?: pulumi.Input<string>;
    /**
     * Is the test actively being monitored.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Interval in seconds between test runs for this WebTest. Valid options are `300`, `600` and `900`. Defaults to `300`.
     */
    frequency?: pulumi.Input<number>;
    /**
     * A list of where to physically run the tests from to give global coverage for accessibility of your application.
     */
    geoLocations: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * = (Required) The kind of web test that this web test watches. Choices are `ping` and `multistep`. Changing this forces a new resource to be created.
     */
    kind: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created. It needs to correlate with location of parent resource (azurerm_application_insights).
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Insights WebTest. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Application Insights WebTest. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Allow for retries should this WebTest fail.
     */
    retryEnabled?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Seconds until this WebTest will timeout and fail. Default is `30`.
     */
    timeout?: pulumi.Input<number>;
}
