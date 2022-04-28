import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Active Azure Spring Cloud Deployment.
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
 *     cpu: 2,
 *     memoryInGb: 4,
 *     instanceCount: 2,
 *     jvmOptions: "-XX:+PrintGC",
 *     runtimeVersion: "Java_11",
 *     environmentVariables: {
 *         Env: "Staging",
 *     },
 * });
 * const exampleSpringCloudActiveDeployment = new azure.appplatform.SpringCloudActiveDeployment("exampleSpringCloudActiveDeployment", {
 *     springCloudAppId: exampleSpringCloudApp.id,
 *     deploymentName: exampleSpringCloudJavaDeployment.name,
 * });
 * ```
 *
 * ## Import
 *
 * Spring Cloud Active Deployment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appplatform/springCloudActiveDeployment:SpringCloudActiveDeployment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourcegroup1/providers/Microsoft.AppPlatform/Spring/service1/apps/app1
 * ```
 */
export declare class SpringCloudActiveDeployment extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudActiveDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudActiveDeploymentState, opts?: pulumi.CustomResourceOptions): SpringCloudActiveDeployment;
    /**
     * Returns true if the given object is an instance of SpringCloudActiveDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SpringCloudActiveDeployment;
    /**
     * Specifies the name of Spring Cloud Deployment which is going to be active.
     */
    readonly deploymentName: pulumi.Output<string>;
    /**
     * Specifies the id of the Spring Cloud Application. Changing this forces a new resource to be created.
     */
    readonly springCloudAppId: pulumi.Output<string>;
    /**
     * Create a SpringCloudActiveDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudActiveDeploymentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SpringCloudActiveDeployment resources.
 */
export interface SpringCloudActiveDeploymentState {
    /**
     * Specifies the name of Spring Cloud Deployment which is going to be active.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * Specifies the id of the Spring Cloud Application. Changing this forces a new resource to be created.
     */
    springCloudAppId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SpringCloudActiveDeployment resource.
 */
export interface SpringCloudActiveDeploymentArgs {
    /**
     * Specifies the name of Spring Cloud Deployment which is going to be active.
     */
    deploymentName: pulumi.Input<string>;
    /**
     * Specifies the id of the Spring Cloud Application. Changing this forces a new resource to be created.
     */
    springCloudAppId: pulumi.Input<string>;
}
