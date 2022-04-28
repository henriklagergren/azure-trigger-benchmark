import * as pulumi from "@pulumi/pulumi";
/**
 * Associates a Spring Cloud Application with a MySQL Database.
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
 * });
 * const exampleServer = new azure.mysql.Server("exampleServer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     administratorLogin: "mysqladminun",
 *     administratorLoginPassword: "H@Sh1CoR3!",
 *     skuName: "B_Gen5_2",
 *     storageMb: 5120,
 *     version: "5.7",
 *     sslEnforcementEnabled: true,
 *     sslMinimalTlsVersionEnforced: "TLS1_2",
 * });
 * const exampleDatabase = new azure.mysql.Database("exampleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serverName: exampleServer.name,
 *     charset: "utf8",
 *     collation: "utf8_unicode_ci",
 * });
 * const exampleSpringCloudAppMysqlAssociation = new azure.appplatform.SpringCloudAppMysqlAssociation("exampleSpringCloudAppMysqlAssociation", {
 *     springCloudAppId: exampleSpringCloudApp.id,
 *     mysqlServerId: exampleServer.id,
 *     databaseName: exampleDatabase.name,
 *     username: exampleServer.administratorLogin,
 *     password: exampleServer.administratorLoginPassword,
 * });
 * ```
 *
 * ## Import
 *
 * Spring Cloud Application MySQL Association can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appplatform/springCloudAppMysqlAssociation:SpringCloudAppMysqlAssociation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourcegroup1/providers/Microsoft.AppPlatform/Spring/service1/apps/app1/bindings/bind1
 * ```
 */
export declare class SpringCloudAppMysqlAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudAppMysqlAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudAppMysqlAssociationState, opts?: pulumi.CustomResourceOptions): SpringCloudAppMysqlAssociation;
    /**
     * Returns true if the given object is an instance of SpringCloudAppMysqlAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SpringCloudAppMysqlAssociation;
    /**
     * Specifies the name of the MySQL Database which the Spring Cloud App should be associated with.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * Specifies the ID of the MySQL Server. Changing this forces a new resource to be created.
     */
    readonly mysqlServerId: pulumi.Output<string>;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the password which should be used when connecting to the MySQL Database from the Spring Cloud App.
     */
    readonly password: pulumi.Output<string>;
    /**
     * Specifies the ID of the Spring Cloud Application where this Association is created. Changing this forces a new resource to be created.
     */
    readonly springCloudAppId: pulumi.Output<string>;
    /**
     * Specifies the username which should be used when connecting to the MySQL Database from the Spring Cloud App.
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a SpringCloudAppMysqlAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudAppMysqlAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SpringCloudAppMysqlAssociation resources.
 */
export interface SpringCloudAppMysqlAssociationState {
    /**
     * Specifies the name of the MySQL Database which the Spring Cloud App should be associated with.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Specifies the ID of the MySQL Server. Changing this forces a new resource to be created.
     */
    mysqlServerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the password which should be used when connecting to the MySQL Database from the Spring Cloud App.
     */
    password?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Spring Cloud Application where this Association is created. Changing this forces a new resource to be created.
     */
    springCloudAppId?: pulumi.Input<string>;
    /**
     * Specifies the username which should be used when connecting to the MySQL Database from the Spring Cloud App.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SpringCloudAppMysqlAssociation resource.
 */
export interface SpringCloudAppMysqlAssociationArgs {
    /**
     * Specifies the name of the MySQL Database which the Spring Cloud App should be associated with.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Specifies the ID of the MySQL Server. Changing this forces a new resource to be created.
     */
    mysqlServerId: pulumi.Input<string>;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the password which should be used when connecting to the MySQL Database from the Spring Cloud App.
     */
    password: pulumi.Input<string>;
    /**
     * Specifies the ID of the Spring Cloud Application where this Association is created. Changing this forces a new resource to be created.
     */
    springCloudAppId: pulumi.Input<string>;
    /**
     * Specifies the username which should be used when connecting to the MySQL Database from the Spring Cloud App.
     */
    username: pulumi.Input<string>;
}
