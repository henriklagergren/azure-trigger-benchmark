import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an App Service source control token.
 *
 * > **NOTE:** Source Control Tokens are configured at the subscription level, not on each App Service - as such this can only be configured Subscription-wide
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.appservice.SourceCodeToken("example", {
 *     token: "7e57735e77e577e57",
 *     type: "GitHub",
 * });
 * ```
 *
 * ## Import
 *
 * App Service Source Control Token's can be imported using the `type`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/sourceCodeToken:SourceCodeToken example GitHub
 * ```
 */
export declare class SourceCodeToken extends pulumi.CustomResource {
    /**
     * Get an existing SourceCodeToken resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SourceCodeTokenState, opts?: pulumi.CustomResourceOptions): SourceCodeToken;
    /**
     * Returns true if the given object is an instance of SourceCodeToken.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SourceCodeToken;
    /**
     * The OAuth access token.
     */
    readonly token: pulumi.Output<string>;
    /**
     * The OAuth access token secret.
     */
    readonly tokenSecret: pulumi.Output<string | undefined>;
    /**
     * The source control type. Possible values are `BitBucket`, `Dropbox`, `GitHub` and `OneDrive`.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SourceCodeToken resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SourceCodeTokenArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SourceCodeToken resources.
 */
export interface SourceCodeTokenState {
    /**
     * The OAuth access token.
     */
    token?: pulumi.Input<string>;
    /**
     * The OAuth access token secret.
     */
    tokenSecret?: pulumi.Input<string>;
    /**
     * The source control type. Possible values are `BitBucket`, `Dropbox`, `GitHub` and `OneDrive`.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SourceCodeToken resource.
 */
export interface SourceCodeTokenArgs {
    /**
     * The OAuth access token.
     */
    token: pulumi.Input<string>;
    /**
     * The OAuth access token secret.
     */
    tokenSecret?: pulumi.Input<string>;
    /**
     * The source control type. Possible values are `BitBucket`, `Dropbox`, `GitHub` and `OneDrive`.
     */
    type: pulumi.Input<string>;
}
