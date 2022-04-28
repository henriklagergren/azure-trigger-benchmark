import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Spring Cloud Deployment with a Java runtime.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleSpringCloudService = new azure.appplatform.SpringCloudService("exampleSpringCloudService", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleSpringCloudApp = new azure.appplatform.SpringCloudApp("exampleSpringCloudApp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serviceName: exampleSpringCloudService.name,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleSpringCloudJavaDeployment = new azure.appplatform.SpringCloudJavaDeployment("exampleSpringCloudJavaDeployment", {
 *     springCloudAppId: exampleSpringCloudApp.id,
 *     instanceCount: 2,
 *     jvmOptions: "-XX:+PrintGC",
 *     quota: {
 *         cpu: "2",
 *         memory: "4Gi",
 *     },
 *     runtimeVersion: "Java_11",
 *     environmentVariables: {
 *         Foo: "Bar",
 *         Env: "Staging",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Spring Cloud Deployment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appplatform/springCloudJavaDeployment:SpringCloudJavaDeployment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourcegroup1/providers/Microsoft.AppPlatform/Spring/service1/apps/app1/deployments/deploy1
 * ```
 */
export declare class SpringCloudJavaDeployment extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudJavaDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudJavaDeploymentState, opts?: pulumi.CustomResourceOptions): SpringCloudJavaDeployment;
    /**
     * Returns true if the given object is an instance of SpringCloudJavaDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SpringCloudJavaDeployment;
    /**
     * Specifies the required cpu of the Spring Cloud Deployment. Possible Values are `500m`, `1`, `2`, `3` and `4`. Defaults to `1` if not specified.
     *
     * @deprecated This field has been deprecated in favour of `cpu` within `quota` and will be removed in a future version of the provider
     */
    readonly cpu: pulumi.Output<number>;
    /**
     * Specifies the environment variables of the Spring Cloud Deployment as a map of key-value pairs.
     */
    readonly environmentVariables: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the required instance count of the Spring Cloud Deployment. Possible Values are between `1` and `500`. Defaults to `1` if not specified.
     */
    readonly instanceCount: pulumi.Output<number | undefined>;
    /**
     * Specifies the jvm option of the Spring Cloud Deployment.
     */
    readonly jvmOptions: pulumi.Output<string | undefined>;
    /**
     * @deprecated This field has been deprecated in favour of `memory` within `quota` and will be removed in a future version of the provider
     */
    readonly memoryInGb: pulumi.Output<number>;
    /**
     * Specifies the name of the Spring Cloud Deployment. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `quota` block as defined below.
     */
    readonly quota: pulumi.Output<outputs.appplatform.SpringCloudJavaDeploymentQuota>;
    /**
     * Specifies the runtime version of the Spring Cloud Deployment. Possible Values are `Java_8` and `Java_11`. Defaults to `Java_8`.
     */
    readonly runtimeVersion: pulumi.Output<string | undefined>;
    /**
     * Specifies the id of the Spring Cloud Application in which to create the Deployment. Changing this forces a new resource to be created.
     */
    readonly springCloudAppId: pulumi.Output<string>;
    /**
     * Create a SpringCloudJavaDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudJavaDeploymentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SpringCloudJavaDeployment resources.
 */
export interface SpringCloudJavaDeploymentState {
    /**
     * Specifies the required cpu of the Spring Cloud Deployment. Possible Values are `500m`, `1`, `2`, `3` and `4`. Defaults to `1` if not specified.
     *
     * @deprecated This field has been deprecated in favour of `cpu` within `quota` and will be removed in a future version of the provider
     */
    cpu?: pulumi.Input<number>;
    /**
     * Specifies the environment variables of the Spring Cloud Deployment as a map of key-value pairs.
     */
    environmentVariables?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the required instance count of the Spring Cloud Deployment. Possible Values are between `1` and `500`. Defaults to `1` if not specified.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Specifies the jvm option of the Spring Cloud Deployment.
     */
    jvmOptions?: pulumi.Input<string>;
    /**
     * @deprecated This field has been deprecated in favour of `memory` within `quota` and will be removed in a future version of the provider
     */
    memoryInGb?: pulumi.Input<number>;
    /**
     * Specifies the name of the Spring Cloud Deployment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `quota` block as defined below.
     */
    quota?: pulumi.Input<inputs.appplatform.SpringCloudJavaDeploymentQuota>;
    /**
     * Specifies the runtime version of the Spring Cloud Deployment. Possible Values are `Java_8` and `Java_11`. Defaults to `Java_8`.
     */
    runtimeVersion?: pulumi.Input<string>;
    /**
     * Specifies the id of the Spring Cloud Application in which to create the Deployment. Changing this forces a new resource to be created.
     */
    springCloudAppId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SpringCloudJavaDeployment resource.
 */
export interface SpringCloudJavaDeploymentArgs {
    /**
     * Specifies the required cpu of the Spring Cloud Deployment. Possible Values are `500m`, `1`, `2`, `3` and `4`. Defaults to `1` if not specified.
     *
     * @deprecated This field has been deprecated in favour of `cpu` within `quota` and will be removed in a future version of the provider
     */
    cpu?: pulumi.Input<number>;
    /**
     * Specifies the environment variables of the Spring Cloud Deployment as a map of key-value pairs.
     */
    environmentVariables?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the required instance count of the Spring Cloud Deployment. Possible Values are between `1` and `500`. Defaults to `1` if not specified.
     */
    instanceCount?: pulumi.Input<number>;
    /**
     * Specifies the jvm option of the Spring Cloud Deployment.
     */
    jvmOptions?: pulumi.Input<string>;
    /**
     * @deprecated This field has been deprecated in favour of `memory` within `quota` and will be removed in a future version of the provider
     */
    memoryInGb?: pulumi.Input<number>;
    /**
     * Specifies the name of the Spring Cloud Deployment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `quota` block as defined below.
     */
    quota?: pulumi.Input<inputs.appplatform.SpringCloudJavaDeploymentQuota>;
    /**
     * Specifies the runtime version of the Spring Cloud Deployment. Possible Values are `Java_8` and `Java_11`. Defaults to `Java_8`.
     */
    runtimeVersion?: pulumi.Input<string>;
    /**
     * Specifies the id of the Spring Cloud Application in which to create the Deployment. Changing this forces a new resource to be created.
     */
    springCloudAppId: pulumi.Input<string>;
}
