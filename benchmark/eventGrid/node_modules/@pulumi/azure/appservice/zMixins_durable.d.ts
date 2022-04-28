import * as pulumi from "@pulumi/pulumi";
import * as mod from ".";
export interface DurableOrchestratorFunctionContext extends mod.Context<mod.Result> {
    df: any;
}
export interface DurableOrchestratorFunctionArgs extends mod.CallbackFunctionArgs<DurableOrchestratorFunctionContext, void, void> {
}
/**
 * Azure Durable Orchestrator Function
 */
export declare class DurableOrchestratorFunction extends mod.Function<DurableOrchestratorFunctionContext, void, void> {
    constructor(name: string, args: DurableOrchestratorFunctionArgs);
}
export interface DurableActivityFunctionContext<TActivityInputBinding> extends mod.Context<mod.Result> {
    bindings: TActivityInputBinding;
}
export interface DurableActivityFunctionArgs<TActivityInputBinding> extends mod.CallbackFunctionArgs<DurableActivityFunctionContext<TActivityInputBinding>, void, mod.Result> {
    activityInputName: keyof TActivityInputBinding;
}
/**
 * Azure Durable Activity Function
 */
export declare class DurableActivityFunction<TActivityInputBinding> extends mod.Function<DurableActivityFunctionContext<TActivityInputBinding>, void, mod.Result> {
    constructor(name: string, args: DurableActivityFunctionArgs<TActivityInputBinding>);
}
export interface DurableEntityFunctionContext extends mod.Context<mod.Result> {
    df: any;
}
export interface DurableEntityFunctionArgs extends mod.CallbackFunctionArgs<DurableEntityFunctionContext, void, void> {
}
/**
 * Azure Durable Entity Function
 */
export declare class DurableEntityFunction extends mod.Function<DurableEntityFunctionContext, void, void> {
    constructor(name: string, args: DurableEntityFunctionArgs);
}
export declare class DurableOrchestrationClientInputBindingSettings implements mod.InputBindingSettings {
    binding: pulumi.Input<mod.InputBindingDefinition>;
    settings: pulumi.Input<{
        [key: string]: any;
    }>;
    constructor(name: string);
}
export declare class DurableEntityClientInputBindingSettings implements mod.InputBindingSettings {
    binding: pulumi.Input<mod.InputBindingDefinition>;
    settings: pulumi.Input<{
        [key: string]: any;
    }>;
    constructor(name: string);
}
