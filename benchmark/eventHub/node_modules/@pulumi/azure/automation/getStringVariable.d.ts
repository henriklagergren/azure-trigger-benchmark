import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Automation String Variable.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.automation.getStringVariable({
 *     name: "tfex-example-var",
 *     resourceGroupName: "tfex-example-rg",
 *     automationAccountName: "tfex-example-account",
 * });
 * export const variableId = example.then(example => example.id);
 * ```
 */
export declare function getStringVariable(args: GetStringVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetStringVariableResult>;
/**
 * A collection of arguments for invoking getStringVariable.
 */
export interface GetStringVariableArgs {
    /**
     * The name of the automation account in which the Automation Variable exists.
     */
    automationAccountName: string;
    /**
     * The name of the Automation Variable.
     */
    name: string;
    /**
     * The Name of the Resource Group where the automation account exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getStringVariable.
 */
export interface GetStringVariableResult {
    readonly automationAccountName: string;
    /**
     * The description of the Automation Variable.
     */
    readonly description: string;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    readonly encrypted: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The value of the Automation Variable as a `string`.
     */
    readonly value: string;
}
export declare function getStringVariableOutput(args: GetStringVariableOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStringVariableResult>;
/**
 * A collection of arguments for invoking getStringVariable.
 */
export interface GetStringVariableOutputArgs {
    /**
     * The name of the automation account in which the Automation Variable exists.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of the Automation Variable.
     */
    name: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the automation account exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
