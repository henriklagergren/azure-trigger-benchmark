/// <reference types="node" />
import * as pulumi from "@pulumi/pulumi";
import * as azurefunctions from "@azure/functions";
import { FunctionApp } from "./functionApp";
import * as appservice from "../appservice";
import * as core from "../core";
import * as eventhubForTypesOnly from "../eventhub";
import * as storageForTypesOnly from "../storage";
import * as inputs from "../types/input";
/**
 * An object containing output binding data. This value will be passed to JSON.stringify unless it
 * is a string, Buffer, ArrayBufferView, or number.
 *
 * `void` can be specified as the Result type indicating that no value need be provided.
 */
export declare type Result = string | Buffer | ArrayBufferView | number | object | void;
export interface Context<R extends Result> extends azurefunctions.Context {
    /**
     * A callback function that signals to the runtime that your code has completed. If your
     * function is synchronous, you must call context.done at the end of execution. If your function
     * is asynchronous, you should not use this callback.
     *
     * @param err A user-defined error to pass back to the runtime. If present, your function
     * execution will fail.
     * @param result An object containing output binding data. `result` will be passed to
     *  JSON.stringify unless it is a string, Buffer, ArrayBufferView, or number.
     */
    done(err?: Error | string | null, result?: R): void;
}
/**
 * `Callback` is the signature for an Azure FunctionApp entrypoint.
 *
 * [context] Azure uses this parameter to provide details of your FunctionApp's execution. For more
 * information, see https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node
 *
 * [event] is the data passed in by specific services calling the FunctionApp (like `eventhub` or
 * `storage`).  The shape of it will be specific to individual services.
 *
 * This function can be synchronous or asynchronous function, though async is only supported with an
 * FunctionApps v2 or higher.  On v1 runtimes the function must be synchronous.  To signal
 * completion synchronously, call `context.done()` passing in an optional error or result value as
 * appropriate.  For async functions, `context.done()` does not need to be called, and instead a Promise
 * containing the result can be returned.
 */
export declare type Callback<C extends Context<R>, E, R extends Result> = (context: C, event: E, ...inputs: any[]) => Promise<R> | void;
/**
 * CallbackFactory is the signature for a function that will be called once to produce the function
 * that Azure FunctionApps will call into.  It can be used to initialize expensive state once that
 * can then be used across all invocations of the FunctionApp (as long as the FunctionApp is using
 * the same warm node instance).
 */
export declare type CallbackFactory<C extends Context<R>, E, R extends Result> = () => Callback<C, E, R>;
/** Arguments to pass either a callback or a callback factory to be used as an Azure Function body. */
export interface CallbackArgs<C extends Context<R>, E, R extends Result> {
    /**
     * The Javascript function instance to use as the entrypoint for the Azure FunctionApp.  Either
     * [callback] or [callbackFactory] must be provided.
     */
    callback?: Callback<C, E, R>;
    /**
     * The Javascript function instance that will be called to produce the function that is the
     * entrypoint for the Azure FunctionApp. Either [callback] or [callbackFactory] must be
     * provided.
     *
     * This form is useful when there is expensive initialization work that should only be executed
     * once.  The factory-function will be invoked once when the final Azure FunctionApp module is
     * loaded. It can run whatever code it needs, and will end by returning the actual function that
     * the Azure will call into each time the FunctionApp it is is invoked.
     */
    callbackFactory?: CallbackFactory<C, E, R>;
}
interface FunctionAppArgsBase {
    /**
     * The storage account to use where the zip-file blob for the FunctionApp will be located. If
     * not provided, a new storage account will create. It will be a 'Standard', 'LRS', 'StorageV2'
     * account.
     */
    readonly account?: storageForTypesOnly.Account;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    readonly authSettings?: pulumi.Input<inputs.appservice.FunctionAppAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     */
    readonly clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * Options to control which files and packages are included with the serialized FunctionApp code.
     */
    readonly codePathOptions?: pulumi.runtime.CodePathOptions;
    /**
     * An `connection_string` block as defined below.
     */
    readonly connectionStrings?: pulumi.Input<pulumi.Input<{
        name: pulumi.Input<string>;
        type: pulumi.Input<string>;
        value: pulumi.Input<string>;
    }>[]>;
    /**
     * The container to use where the zip-file blob for the FunctionApp will be located. If not
     * provided, the root container of the storage account will be used.
     */
    readonly container?: storageForTypesOnly.Container;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    readonly dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    readonly enableBuiltinLogging?: pulumi.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Host configuration options.
     */
    readonly hostSettings?: HostSettings;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity?: pulumi.Input<inputs.appservice.FunctionAppIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Function App.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Controls the value of WEBSITE_NODE_DEFAULT_VERSION in `appSettings`.  If not provided,
     * defaults to `~12`.
     */
    readonly nodeVersion?: pulumi.Input<string>;
    /**
     * A string indicating the Operating System type for this function app.
     */
    readonly osType?: pulumi.Input<string>;
    /**
     * The App Service Plan within which to create this Function App. Changing this forces a new
     * resource to be created.
     *
     * If not provided, a default "Consumption" plan will be created.  See:
     * https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#consumption-plan for
     * more details.
     */
    readonly plan?: appservice.Plan;
    /**
     * The resource group in which to create the event subscription. [resourceGroup] takes precedence over [resourceGroupName].
     */
    readonly resourceGroup?: core.ResourceGroup;
    /**
     * The name of the resource group in which to create the event subscription. [resourceGroup] takes precedence over [resourceGroupName].
     * Either [resourceGroupName] or [resourceGroup] must be supplied.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `site_config` object as defined below.
     */
    readonly siteConfig?: pulumi.Input<inputs.appservice.FunctionAppSiteConfig>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The runtime version associated with the Function App. Defaults to `~3`.
     */
    readonly version?: pulumi.Input<string>;
}
/**
 * Base arguments for all Azure Function components that are passed to MultiFunctionCallbackApp.
 */
export interface CallbackFunctionArgs<C extends Context<R>, E, R extends Result> extends InputOutputsArgs, CallbackArgs<C, E, R> {
}
/**
 * Base arguments for all single-Function subscription apps.
 */
export interface CallbackFunctionAppArgs<C extends Context<R>, E, R extends Result> extends CallbackFunctionArgs<C, E, R>, FunctionAppArgsBase {
}
/**
 * The host.json metadata file contains global configuration options that affect all functions for a
 * function app. These values can be provided here, or defaults will be used in their place.
 *
 * For more details see https://docs.microsoft.com/en-us/azure/azure-functions/functions-host-json
 */
export interface HostSettings {
    /**
     * Specifies how many function invocations are aggregated when calculating metrics for
     * Application Insights.
     *
     * See https://docs.microsoft.com/en-us/azure/azure-functions/functions-host-json#aggregator for
     * more details.
     */
    aggregator?: {
        /** Maximum number of requests to aggregate. Defaults to 1000 */
        batchSize: number;
        /** Maximum time period to aggregate.  Defaults to "00:00:30" */
        flushTimeout: string;
    };
    /**
     * Indicates the timeout duration for all functions. In a serverless Consumption plan, the valid
     * range is from 1 second to 10 minutes, and the default value is 5 minutes. In an App Service
     * plan, there is no overall limit and the default depends on the runtime version. In version
     * 2.x, the default value for an App Service plan is 30 minutes.
     */
    functionTimeout?: string;
    /**
     * Configuration settings for
     * [host-health-monitor](https://github.com/Azure/azure-webjobs-sdk-script/wiki/Host-Health-Monitor).
     */
    healthMonitor?: {
        /** Specifies whether the feature is enabled. Defaults to `true` */
        enabled: boolean;
        /** The time interval between the periodic background health checks. Defaults to 10 seconds. */
        healthCheckInterval: string;
        /**
         * A sliding time window used in conjunction with the `healthCheckThreshold` setting.
         * Defaults to 2 minutes.
         */
        healthCheckWindow: string;
        /**
         * Maximum number of times the health check can fail before a host recycle is initiated.  Defaults to `6`.
         */
        healthCheckThreshold: number;
        /**
         * The threshold at which a performance counter will be considered unhealthy.  Defaults to `0.80`.
         */
        counterThreshold: number;
    };
    /** Controls the logging behaviors of the function app, including Application Insights. */
    logging?: {
        /** Defines what level of file logging is enabled.  Defaults to `debugOnly` */
        fileLoggingMode: "never" | "only" | "debugOnly";
        logLevel: {
            default: string;
        };
        /** Controls the sampling feature in Application Insights. */
        applicationInsights: {
            samplingSettings: {
                /** Enables or disables sampling.  Defaults to `true` */
                isEnabled: boolean;
                /** The threshold at which sampling begins. Defaults to `5` */
                maxTelemetryItemsPerSecond: number;
            };
        };
    };
    /**
     * Configuration settings for Singleton lock behavior. For more information, see
     * [GitHub-issue](https://github.com/Azure/azure-webjobs-sdk-script/issues/912) about singleton
     * support.
     */
    singleton?: {
        /** The period that function level locks are taken for. The locks auto-renew. */
        lockPeriod: string;
        /** The period that listener locks are taken for. */
        listenerLockPeriod: string;
        /** The time interval used for listener lock recovery if a listener lock couldn't be
         * acquired on startup. */
        listenerLockRecoveryPollingInterval: string;
        /** The maximum amount of time the runtime will try to acquire a lock. */
        lockAcquisitionTimeout: string;
        /** The interval between lock acquisition attempts. */
        lockAcquisitionPollingInterval: string;
    };
    /** Extension-specific configuration options. */
    extensions?: {
        http?: appservice.HttpHostExtensions;
        serviceBus?: eventhubForTypesOnly.ServiceBusHostExtensions;
        queues?: storageForTypesOnly.QueueHostExtensions;
    };
}
/**
 * Represents a Binding that will be emitted into the function.json config file for the FunctionApp.
 * Individual services will have more specific information they will define in their own bindings.
 */
export declare type BindingDefinition = azurefunctions.BindingDefinition;
/**
 * Base interface for input bindings.
 */
export interface InputBindingDefinition extends BindingDefinition {
    /**
     * The direction of the binding. Must be 'in' for an input binding.
     */
    direction: "in";
}
/**
 * Base interface for output bindings.
 */
export interface OutputBindingDefinition extends BindingDefinition {
    /**
     * The direction of the binding. Must be 'out' for an output binding.
     */
    direction: "out";
}
/**
 * Azure Function Binding with the required corresponding application settings (e.g., a connection string setting).
 */
export interface BindingSettings<T extends BindingDefinition> {
    /**
     * A binding definition.
     */
    readonly binding: pulumi.Input<T>;
    /**
     * A dictionary of application settings to be applied to the Function App.
     */
    readonly settings: pulumi.Input<{
        [key: string]: any;
    }>;
}
export declare type InputBindingSettings = BindingSettings<InputBindingDefinition>;
export declare type OutputBindingSettings = BindingSettings<OutputBindingDefinition>;
export interface InputOutputsArgs {
    /**
     * Input bindings.
     */
    inputs?: InputBindingSettings[];
    /**
     * Output bindings.
     */
    outputs?: OutputBindingSettings[];
}
/**
 * Type alias for a response coming from an Azure Function callback, which applies to most Function types
 * (HTTP being a notable exception).
 * 'void' is returned when a Function has no output bindings.
 * For each output binding, the callback should define a property in the response record with the property
 * name matching the binding name. For instance, for an output binding called 'myoutput', the response could
 * be '{ myoutput: "My Value" }'.
 */
export declare type FunctionDefaultResponse = void | Record<string, any>;
/**
 * Azure Function base class.
 */
export declare abstract class Function<C extends Context<R>, E, R extends Result> {
    /**
     * Function name.
     */
    readonly name: string;
    /**
     * An array of function binding definitions.
     */
    readonly bindings: pulumi.Input<BindingDefinition[]>;
    /**
     * Function callback.
     */
    readonly callback: CallbackArgs<C, E, R>;
    /**
     * Application settings required by the function.
     */
    readonly appSettings?: pulumi.Input<{
        [key: string]: string;
    }>;
    constructor(name: string, trigger: pulumi.Input<InputBindingDefinition>, args: CallbackFunctionArgs<C, E, R>, settings?: pulumi.Input<{
        [key: string]: string;
    }>);
}
/**
 * Arguments to create a Function App component with multiple callback functions in it.
 */
export interface MultiCallbackFunctionAppArgs extends FunctionAppArgsBase {
    /**
     * The functions to deploy as parts of this application. At least 1 function is required.
     */
    functions: Function<any, any, any>[];
}
/**
 * Arguments to create a Function App component and deploy the specified raw archive package.
 */
export interface ArchiveFunctionAppArgs extends FunctionAppArgsBase {
    /**
     * The deployment package of a Function App to deploy as-is.
     */
    archive: pulumi.Input<pulumi.asset.Archive>;
}
/**
  * A CallbackFunctionApp is a special type of azure.appservice.FunctionApp that can be created out
  * of an actual JavaScript function instance.  The function instance will be analyzed and packaged
  * up (including dependencies) into a form that can be used by Azure Functions. See
  * https://github.com/pulumi/docs/blob/master/reference/serializing-functions.md for additional
  * details on this process.
 */
export declare class CallbackFunctionApp<C extends Context<R>, E, R extends Result> extends FunctionApp {
    /**
     * Storage account where the FunctionApp's zipBlob is uploaded to.
     */
    readonly account: storageForTypesOnly.Account;
    /**
     * Storage container where the FunctionApp's zipBlob is uploaded to.
     */
    readonly container: storageForTypesOnly.Container;
    /**
     * The blob containing all the code for this FunctionApp.
     */
    readonly zipBlob: storageForTypesOnly.Blob;
    /**
     * The plan this Function App runs under.
     */
    readonly plan: appservice.Plan;
    /**
     * Root HTTP endpoint of the Function App.
     */
    readonly endpoint: pulumi.Output<string>;
    constructor(name: string, bindingsOrFunc: pulumi.Input<BindingDefinition[]> | Function<C, E, R>, args: CallbackFunctionAppArgs<C, E, R>, opts?: pulumi.CustomResourceOptions);
}
/**
 * A base component for custom Function App components. It is required to provide a common parent
 * for all resources, so that they are logically grouped under the same root in the Pulumi resource
 * tree.
 */
export declare abstract class PackagedFunctionApp extends pulumi.ComponentResource {
    /**
     * Storage account where the FunctionApp's zipbBlob is uploaded to.
     */
    readonly account: storageForTypesOnly.Account;
    /**
     * Storage container where the FunctionApp's zipbBlob is uploaded to.
     */
    readonly container: storageForTypesOnly.Container;
    /**
     * The blob containing all the code for this FunctionApp.
     */
    readonly zipBlob: storageForTypesOnly.Blob;
    /**
     * The plan this Function App runs under.
     */
    readonly plan: appservice.Plan;
    /**
     * The Function App which contains the functions from the archive.
     */
    readonly functionApp: appservice.FunctionApp;
    /**
     * Root HTTP endpoint of the Function App.
     */
    readonly endpoint: pulumi.Output<string>;
    constructor(type: string, name: string, args: ArchiveFunctionAppArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
  * A ArchiveFunctionApp is a component that instantiates a azure.appservice.FunctionApp and all the required
  * dependencies and deploys the specified archive into it. The archive must contain the full artifact to be deployed
  * into the Function App.
 */
export declare class ArchiveFunctionApp extends PackagedFunctionApp {
    constructor(name: string, args: ArchiveFunctionAppArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
  * A MultiCallbackFunctionApp is a component that instantiates a azure.appservice.FunctionApp and all the required
  * dependencies out of multiple actual JavaScript functions. At least 1 function is required. The function instances
  * will be analyzed and packaged up (including dependencies) into a form that can be used by Azure Functions. See
  * https://github.com/pulumi/docs/blob/master/reference/serializing-functions.md for additional
  * details on this process.
 */
export declare class MultiCallbackFunctionApp extends PackagedFunctionApp {
    constructor(name: string, args: MultiCallbackFunctionAppArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * Base type for all subscription types.  An event subscription represents a connection between some
 * azure resource an an FunctionApp that will be triggered when something happens to that resource.
 */
export declare abstract class EventSubscription<C extends Context<R>, E, R extends Result> extends pulumi.ComponentResource {
    readonly functionApp: CallbackFunctionApp<C, E, R>;
    constructor(type: string, name: string, bindingsOrFunc: pulumi.Input<BindingDefinition[]> | Function<C, E, R>, args: CallbackFunctionAppArgs<C, E, R>, opts?: pulumi.ComponentResourceOptions);
}
/**
 * Keys associated with a Function App.
 */
export interface FunctionHostKeys {
    /** Master key. */
    masterKey: string;
    /** A dictionary of system keys, e.g. for Durable Functions or Event Grid. */
    systemKeys: {
        [key: string]: string;
    };
    /** Default function keys. */
    functionKeys: FunctionKeys;
}
/**
 * Keys associated with a single Function.
 */
export interface FunctionKeys {
    default: string;
    [key: string]: string;
}
declare module "./functionApp" {
    interface FunctionApp {
        /**
         * Retrieve the keys associated with the Function App.
         */
        getHostKeys(): pulumi.Output<FunctionHostKeys>;
        /**
         * Retrieve the keys associated with the given Function.
         */
        getFunctionKeys(functionName: pulumi.Input<string>): pulumi.Output<FunctionKeys>;
    }
}
export {};
