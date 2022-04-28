import * as pulumi from "@pulumi/pulumi";
import * as mod from ".";
/**
 * If a number, it must be between 0 to 7 (inclusive). (0 and 7 both represent Sunday).
 */
export declare type DayOfWeek = number | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
/**
 * If a number, it must be between 1 to 12 (inclusive).
 */
export declare type Month = number | "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
export interface ScheduleArgs {
    /** 0 to 59.  Leave undefined to indicate no specific value. */
    second?: number;
    /** 0 to 59.  Leave undefined to indicate no specific value. */
    minute?: number;
    /** 0 to 23.  Leave undefined to indicate no specific value.  All times UTC */
    hour?: number;
    /** 1 to 31.  Leave undefined to indicate no specific value. */
    dayOfMonth?: number;
    /** Month of the year to perform the scheduled action on.  Leave undefined to indicate no specific value. */
    month?: Month;
    /** Day of the week to perform the scheduled action on.  Leave undefined to indicate no specific value. */
    dayOfWeek?: DayOfWeek;
}
/**
 * Timer event data that will be passed to the timer callback.
 */
export interface TimerInfo {
    Schedule: {
        AdjustForDST: boolean;
    };
    ScheduleStatus: {
        Last: string;
        Next: string;
        LastUpdated: string;
    };
    IsPastDue: boolean;
}
/**
 * Data that will be passed along in the context object to the timer callback.
 */
export interface TimerContext extends mod.Context<mod.FunctionDefaultResponse> {
    invocationId: string;
    executionContext: {
        invocationId: string;
        functionName: string;
        functionDirectory: string;
    };
    bindings: {
        timer: TimerInfo;
    };
    bindingData: {
        timerTrigger: string;
        sys: {
            methodName: string;
            utcNow: string;
        };
        invocationId: string;
    };
}
export interface TimerFunctionArgs extends mod.CallbackFunctionArgs<TimerContext, TimerInfo, mod.FunctionDefaultResponse> {
    /**
     * A schedule or a CRON expression for the timer schedule, e.g. '0 * * * * *'.
     */
    schedule: pulumi.Input<string | ScheduleArgs>;
    /**
     * If true, the function is invoked when the runtime starts.
     */
    runOnStartup?: pulumi.Input<boolean>;
}
export interface TimerSubscriptionArgs extends TimerFunctionArgs, mod.CallbackFunctionAppArgs<TimerContext, TimerInfo, mod.FunctionDefaultResponse> {
}
export declare class TimerSubscription extends mod.EventSubscription<TimerContext, TimerInfo, mod.FunctionDefaultResponse> {
    constructor(name: string, args: TimerSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Azure Function triggered on a CRON schedule.
 */
export declare class TimerFunction extends mod.Function<TimerContext, TimerInfo, mod.FunctionDefaultResponse> {
    constructor(name: string, args: TimerFunctionArgs);
}
