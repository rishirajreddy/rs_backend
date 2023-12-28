import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    isPremium: Attribute.Boolean & Attribute.DefaultTo<false>;
    phone: Attribute.String & Attribute.Required & Attribute.Unique;
    isAdmin: Attribute.Boolean & Attribute.DefaultTo<false>;
    orders: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::order.order'
    >;
    wishList: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::product.product'
    >;
    cart_products: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::cart-product.cart-product'
    >;
    addresses: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::address.address'
    >;
    resetTokenExpiration: Attribute.DateTime & Attribute.Private;
    subscriptions: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::subscription.subscription'
    >;
    wallets: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::wallet.wallet'
    >;
    wallet_balance: Attribute.Decimal & Attribute.DefaultTo<0>;
    transactions: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::transaction.transaction'
    >;
    countryCode: Attribute.String & Attribute.DefaultTo<'+91'>;
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
    fcmToken: Attribute.String;
    notifications: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::notification.notification'
    >;
    businessName: Attribute.String;
    businessLogo: Attribute.Media;
    ordersCount: Attribute.Integer;
    profit: Attribute.Decimal;
    shares: Attribute.Integer;
    activity_logs: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::activity-log.activity-log'
    >;
    lead_raiseds: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::lead.lead'
    >;
    metric: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::user-metric.user-metric'
    >;
    cart: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::cart.cart'
    >;
    otp: Attribute.String;
    otp_expiration: Attribute.DateTime;
    personal_id: Attribute.String;
    admin_subscriptions: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::admin-subscription.admin-subscription'
    >;
    imported_product: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::imported-product.imported-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCustomLinksCustomLink extends Schema.CollectionType {
  collectionName: 'custom-links';
  info: {
    name: 'custom-link';
    singularName: 'custom-link';
    pluralName: 'custom-links';
    displayName: 'Custom Links';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    uri: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    kind: Attribute.String;
    contentId: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::custom-links.custom-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::custom-links.custom-link',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCustomLinksTempuri extends Schema.CollectionType {
  collectionName: 'tempuri';
  info: {
    singularName: 'tempuri';
    pluralName: 'tempuri';
    displayName: 'tempuri';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    uri: Attribute.String &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::custom-links.tempuri',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::custom-links.tempuri',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiActivityLogActivityLog extends Schema.CollectionType {
  collectionName: 'activity_logs';
  info: {
    singularName: 'activity-log';
    pluralName: 'activity-logs';
    displayName: 'ActivityLog';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    description: Attribute.String;
    event: Attribute.Enumeration<
      [
        'ADMIN_LOG_IN',
        'RESELLER_LOG_IN',
        'ORDER_PLACED',
        'ORDER_ACCEPTED',
        'ORDER_DECLINED',
        'ORDER_SHIPPED',
        'ORDER_DELIVERED',
        'SUBSCRIPTION_ADDED',
        'NEW_CAMPAIGN_ADDED',
        'NEW_PRODUCT_ADDED',
        'NEW_COLLECTION_ADDED',
        'NEW_TUTORIAL_ADDED',
        'NEW_LEAD_ADDED',
        'NEW_GROUP_ADDED',
        'LEAD_COMPLETED',
        'LEAD_CALLED',
        'LEAD_CALLING',
        'LEAD_CONVERTED',
        'RESELLER_WITHDRAW',
        'RESELLER_PAYOUT',
        'WALLET_DEBIT',
        'WALLET_CREDIT'
      ]
    >;
    user: Attribute.Relation<
      'api::activity-log.activity-log',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::activity-log.activity-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::activity-log.activity-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    singularName: 'address';
    pluralName: 'addresses';
    displayName: 'Address';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    houseNumber: Attribute.String & Attribute.Required;
    addressLine1: Attribute.String & Attribute.Required;
    pincode: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
        maxLength: 6;
      }>;
    city: Attribute.String & Attribute.Required;
    state: Attribute.String & Attribute.Required;
    country: Attribute.String & Attribute.Required;
    addressLine2: Attribute.String;
    user: Attribute.Relation<
      'api::address.address',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    area: Attribute.String & Attribute.Required;
    email: Attribute.String;
    phone: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAdminSubscriptionAdminSubscription
  extends Schema.CollectionType {
  collectionName: 'admin_subscriptions';
  info: {
    singularName: 'admin-subscription';
    pluralName: 'admin-subscriptions';
    displayName: 'Admin Subscription';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    validFrom: Attribute.DateTime;
    validTo: Attribute.DateTime;
    payment_logs: Attribute.Relation<
      'api::admin-subscription.admin-subscription',
      'oneToMany',
      'api::payment-log.payment-log'
    >;
    paymentId: Attribute.String;
    orderId: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::admin-subscription.admin-subscription',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::admin-subscription.admin-subscription',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::admin-subscription.admin-subscription',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBannerBanner extends Schema.CollectionType {
  collectionName: 'banners';
  info: {
    singularName: 'banner';
    pluralName: 'banners';
    displayName: 'Banner';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    type: Attribute.Enumeration<['link', 'product', 'collection']> &
      Attribute.Required;
    data: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::banner.banner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBulkPricingBulkPricing extends Schema.CollectionType {
  collectionName: 'bulk_pricings';
  info: {
    singularName: 'bulk-pricing';
    pluralName: 'bulk-pricings';
    displayName: 'Bulk Pricing';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    from: Attribute.Integer;
    to: Attribute.Integer;
    price: Attribute.Decimal;
    premiumPrice: Attribute.Decimal;
    product_variant: Attribute.Relation<
      'api::bulk-pricing.bulk-pricing',
      'manyToOne',
      'api::product-variant.product-variant'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bulk-pricing.bulk-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bulk-pricing.bulk-pricing',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCampaignCampaign extends Schema.CollectionType {
  collectionName: 'campaigns';
  info: {
    singularName: 'campaign';
    pluralName: 'campaigns';
    displayName: 'Campaign';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    notification_title: Attribute.String;
    notification_body: Attribute.String;
    notification_image: Attribute.String;
    schedule_time: Attribute.DateTime;
    type: Attribute.Enumeration<['link', 'product', 'collection']>;
    data: Attribute.String;
    image_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::campaign.campaign',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::campaign.campaign',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCartCart extends Schema.CollectionType {
  collectionName: 'carts';
  info: {
    singularName: 'cart';
    pluralName: 'carts';
    displayName: 'Cart';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    user: Attribute.Relation<
      'api::cart.cart',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    cart_products: Attribute.Relation<
      'api::cart.cart',
      'oneToMany',
      'api::cart-product.cart-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCartProductCartProduct extends Schema.CollectionType {
  collectionName: 'cart_products';
  info: {
    singularName: 'cart-product';
    pluralName: 'cart-products';
    displayName: 'Cart Product';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    product_variant: Attribute.Relation<
      'api::cart-product.cart-product',
      'oneToOne',
      'api::product-variant.product-variant'
    >;
    quantity: Attribute.Integer;
    resellingPrice: Attribute.Decimal;
    cart: Attribute.Relation<
      'api::cart-product.cart-product',
      'manyToOne',
      'api::cart.cart'
    >;
    user: Attribute.Relation<
      'api::cart-product.cart-product',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cart-product.cart-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cart-product.cart-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.Unique;
    slug: Attribute.UID;
    products: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::product.product'
    >;
    thumbnail: Attribute.Media & Attribute.Required;
    sub_categories: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::sub-category.sub-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollectionCollection extends Schema.CollectionType {
  collectionName: 'collections';
  info: {
    singularName: 'collection';
    pluralName: 'collections';
    displayName: 'Collection';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tag: Attribute.String;
    products: Attribute.Relation<
      'api::collection.collection',
      'oneToMany',
      'api::product.product'
    >;
    thumbnail: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollectionStaticCollectionStatic
  extends Schema.CollectionType {
  collectionName: 'collection_statics';
  info: {
    singularName: 'collection-static';
    pluralName: 'collection-statics';
    displayName: 'Collection Static';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    tag: Attribute.String;
    products: Attribute.Relation<
      'api::collection-static.collection-static',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collection-static.collection-static',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::collection-static.collection-static',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConfigConfig extends Schema.SingleType {
  collectionName: 'configs';
  info: {
    singularName: 'config';
    pluralName: 'configs';
    displayName: 'Config';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sender: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::config.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::config.config',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCustomCourierCustomCourier extends Schema.CollectionType {
  collectionName: 'custom_couriers';
  info: {
    singularName: 'custom-courier';
    pluralName: 'custom-couriers';
    displayName: 'Custom Courier';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    image: Attribute.Media;
    trackingId: Attribute.String;
    courierName: Attribute.String & Attribute.Required;
    courierEmail: Attribute.String;
    phone: Attribute.String & Attribute.Required;
    order_product: Attribute.Relation<
      'api::custom-courier.custom-courier',
      'oneToOne',
      'api::order-product.order-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::custom-courier.custom-courier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::custom-courier.custom-courier',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDefaultPageDefaultPage extends Schema.SingleType {
  collectionName: 'default_pages';
  info: {
    singularName: 'default-page';
    pluralName: 'default-pages';
    displayName: 'Default Page';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    about_us: Attribute.RichText;
    terms_and_conditions: Attribute.RichText;
    privacy_policy: Attribute.RichText;
    refund_and_cancellation: Attribute.RichText;
    ship_and_delivery: Attribute.RichText;
    contact_us: Attribute.RichText;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::default-page.default-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::default-page.default-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFreePlanFreePlan extends Schema.SingleType {
  collectionName: 'free_plans';
  info: {
    singularName: 'free-plan';
    pluralName: 'free-plans';
    displayName: 'Free Plan';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    premiumPricing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    codAllowed: Attribute.Boolean & Attribute.DefaultTo<false>;
    prepaidAllowed: Attribute.Boolean & Attribute.DefaultTo<false>;
    productsAllowed: Attribute.Integer;
    productsListing: Attribute.Enumeration<['LATEST', 'OLD', 'RANDOM']>;
    codPrice: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::free-plan.free-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::free-plan.free-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    subscriptionPrice: Attribute.Decimal;
    codPrepaidAmount: Attribute.Decimal;
    shippingPrice: Attribute.Decimal;
    razorpayKey: Attribute.String;
    razorpaySecret: Attribute.String;
    withdrawLimit: Attribute.Decimal & Attribute.Required;
    razorpayXAccountNumber: Attribute.String;
    shiprocket_username: Attribute.String;
    shiprocket_password: Attribute.String & Attribute.Private;
    is_shiprocket_enabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    token: Attribute.Text;
    selected_payment_gateway: Attribute.Enumeration<
      ['RAZORPAY', 'CASHFREE', 'PHONEPE', 'NONE']
    > &
      Attribute.DefaultTo<'RAZORPAY'>;
    cashfree_client_secret: Attribute.String;
    cashfree_client_id: Attribute.String;
    phonepe_merchant_id: Attribute.String;
    phonepe_merchant_key: Attribute.String;
    phonepe_key_index: Attribute.String;
    firebase_auth: Attribute.JSON;
    user_verification_method: Attribute.Enumeration<['FIREBASE', 'MSG91']> &
      Attribute.DefaultTo<'MSG91'>;
    razorpayTestKey: Attribute.String;
    razorpayTestSecret: Attribute.String;
    return_request: Attribute.Boolean & Attribute.DefaultTo<true>;
    return_request_days: Attribute.Integer;
    codPrepaidAmountType: Attribute.Enumeration<['PRICE', 'PERCENTAGE']> &
      Attribute.DefaultTo<'PERCENTAGE'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalBrandGlobalBrand extends Schema.SingleType {
  collectionName: 'global_brands';
  info: {
    singularName: 'global-brand';
    pluralName: 'global-brands';
    displayName: 'Global Brand';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
    tagline: Attribute.String;
    whatsapp_number: Attribute.String;
    calling_number: Attribute.String;
    email: Attribute.String;
    address: Attribute.String;
    about_us: Attribute.RichText;
    domain: Attribute.String;
    facebook_page_url: Attribute.String;
    instagram_page_url: Attribute.String;
    telegram_page_url: Attribute.String;
    store_map_location: Attribute.String;
    theme_color: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global-brand.global-brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::global-brand.global-brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGroupGroup extends Schema.CollectionType {
  collectionName: 'groups';
  info: {
    singularName: 'group';
    pluralName: 'groups';
    displayName: 'Group';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::group.group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::group.group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiImportedProductImportedProduct
  extends Schema.CollectionType {
  collectionName: 'imported_products';
  info: {
    singularName: 'imported-product';
    pluralName: 'imported-products';
    displayName: 'Imported Product';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    product: Attribute.Relation<
      'api::imported-product.imported-product',
      'oneToOne',
      'api::product.product'
    >;
    reseller: Attribute.Relation<
      'api::imported-product.imported-product',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    reselling_price: Attribute.Decimal;
    reseller_margin: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::imported-product.imported-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::imported-product.imported-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLeadLead extends Schema.CollectionType {
  collectionName: 'leads';
  info: {
    singularName: 'lead';
    pluralName: 'leads';
    displayName: 'Lead';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    phone: Attribute.String;
    country_code: Attribute.String;
    status: Attribute.Enumeration<
      ['NEW', 'ASSIGNED', 'CALLING', 'CALLED', 'CONVERTED', 'COMPLETED']
    >;
    source: Attribute.Enumeration<
      [
        'WHATSAPP',
        'INSTAGRAM',
        'SOCIAL_SELLER_WEBSITE',
        'YOUTUBE_CHANNEL',
        'APP',
        'WEBSITE'
      ]
    >;
    user: Attribute.Relation<
      'api::lead.lead',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    product: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'api::product.product'
    >;
    assigned_to: Attribute.Relation<
      'api::lead.lead',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    consumer_note: Attribute.Text;
    staff_note: Attribute.Text;
    quantity: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::lead.lead', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::lead.lead', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiNotificationNotification extends Schema.CollectionType {
  collectionName: 'notifications';
  info: {
    singularName: 'notification';
    pluralName: 'notifications';
    displayName: 'Notification';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    type: Attribute.Enumeration<
      [
        'PRODUCT',
        'COLLECTION',
        'ORDER',
        'SUBSCRIPTION',
        'PROMOTION',
        'INFORMATION',
        'TRANSACTION'
      ]
    >;
    isRead: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Media;
    data: Attribute.String;
    users_permissions_user: Attribute.Relation<
      'api::notification.notification',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'Order';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    slug: Attribute.UID;
    isPaid: Attribute.Boolean & Attribute.DefaultTo<false>;
    paymentID: Attribute.String;
    paymentSignature: Attribute.Text;
    address: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'api::address.address'
    >;
    order_products: Attribute.Relation<
      'api::order.order',
      'oneToMany',
      'api::order-product.order-product'
    >;
    consumerName: Attribute.String & Attribute.Required;
    consumerPhone: Attribute.String;
    consumerEmail: Attribute.String;
    isResellerOrder: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    users_permissions_user: Attribute.Relation<
      'api::order.order',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    status: Attribute.Enumeration<
      [
        'NEW',
        'ACCEPTED',
        'DECLINED',
        'PROCESSING',
        'INTRANSIT',
        'OUT_FOR_DELIVERY',
        'DELIVERED',
        'COMPLETED',
        'RTO',
        'RETURN_REQUEST',
        'RETURN_ACCEPTED',
        'RETURN_DECLINED',
        'RETURN_RECEIVED',
        'RETURN_PENDING'
      ]
    >;
    payment_mode: Attribute.Enumeration<['COD', 'PREPAID', 'WALLET']> &
      Attribute.Required;
    rzpayOrderId: Attribute.String;
    statusUser: Attribute.Enumeration<
      [
        'CANCELLATION_REQUESTED',
        'CANCELLATION_ACCEPTED',
        'CANCELLATION_DECLINED'
      ]
    >;
    payment_log: Attribute.Relation<
      'api::order.order',
      'oneToMany',
      'api::payment-log.payment-log'
    >;
    wallet: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'api::wallet.wallet'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrderProductOrderProduct extends Schema.CollectionType {
  collectionName: 'order_products';
  info: {
    singularName: 'order-product';
    pluralName: 'order-products';
    displayName: 'OrderProduct';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    quantity: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    sellingPrice: Attribute.Decimal;
    order_price: Attribute.Decimal & Attribute.Required;
    product_variant: Attribute.Relation<
      'api::order-product.order-product',
      'oneToOne',
      'api::product-variant.product-variant'
    >;
    status: Attribute.Enumeration<
      [
        'NEW',
        'ACCEPTED',
        'DECLINED',
        'PROCESSING',
        'INTRANSIT',
        'OUT_FOR_DELIVERY',
        'DELIVERED',
        'CANCELLED',
        'COMPLETED',
        'PAYOUT_DONE',
        'RTO',
        'RETURN_REQUEST',
        'RETURN_ACCEPTED',
        'RETURN_DECLINED',
        'RETURN_RECEIVED',
        'RETURN_PENDING'
      ]
    >;
    is_cod_paid: Attribute.Boolean;
    order: Attribute.Relation<
      'api::order-product.order-product',
      'manyToOne',
      'api::order.order'
    >;
    custom_courier: Attribute.Relation<
      'api::order-product.order-product',
      'oneToOne',
      'api::custom-courier.custom-courier'
    >;
    shiprocket_order_item: Attribute.Relation<
      'api::order-product.order-product',
      'oneToOne',
      'api::shiprocket-order-item.shiprocket-order-item'
    >;
    note: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order-product.order-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order-product.order-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPaymentLogPaymentLog extends Schema.CollectionType {
  collectionName: 'payment_logs';
  info: {
    singularName: 'payment-log';
    pluralName: 'payment-logs';
    displayName: 'Payment Log';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    rzOrderCreationId: Attribute.String;
    rzpaymentId: Attribute.String;
    amount: Attribute.Float;
    status: Attribute.Enumeration<['AUTHORIZED', 'CAPTURED', 'FAILED']>;
    currency: Attribute.String & Attribute.DefaultTo<'INR'>;
    method: Attribute.String;
    vpa: Attribute.String;
    accountNumber: Attribute.String;
    ifscCode: Attribute.String;
    cardNetwork: Attribute.String;
    cardId: Attribute.String;
    cardNumber: Attribute.String;
    cardType: Attribute.String;
    bank: Attribute.String;
    order: Attribute.Relation<
      'api::payment-log.payment-log',
      'manyToOne',
      'api::order.order'
    >;
    email: Attribute.String;
    contact: Attribute.String;
    subscription: Attribute.Relation<
      'api::payment-log.payment-log',
      'manyToOne',
      'api::subscription.subscription'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-log.payment-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-log.payment-log',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPinCodePinCode extends Schema.CollectionType {
  collectionName: 'pin_codes';
  info: {
    singularName: 'pin-code';
    pluralName: 'pin-codes';
    displayName: 'PinCode';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    pincode: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
        maxLength: 6;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pin-code.pin-code',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pin-code.pin-code',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPlanPlan extends Schema.CollectionType {
  collectionName: 'plans';
  info: {
    singularName: 'plan';
    pluralName: 'plans';
    displayName: 'Plan';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    days: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    quantity: Attribute.Integer & Attribute.DefaultTo<0>;
    premiumPricing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    codAllowed: Attribute.Boolean & Attribute.DefaultTo<false>;
    prepaidAllowed: Attribute.Boolean & Attribute.DefaultTo<false>;
    isActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    subscriptions: Attribute.Relation<
      'api::plan.plan',
      'oneToMany',
      'api::subscription.subscription'
    >;
    price: Attribute.Decimal & Attribute.Required & Attribute.DefaultTo<0>;
    thumbnail: Attribute.Media;
    description: Attribute.Text;
    plan_metric: Attribute.Relation<
      'api::plan.plan',
      'oneToOne',
      'api::plan-metric.plan-metric'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::plan.plan', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::plan.plan', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiPlanMetricPlanMetric extends Schema.CollectionType {
  collectionName: 'plan_metrics';
  info: {
    singularName: 'plan-metric';
    pluralName: 'plan-metrics';
    displayName: 'Plan Metrics';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    plan: Attribute.Relation<
      'api::plan-metric.plan-metric',
      'oneToOne',
      'api::plan.plan'
    >;
    subscribers_count: Attribute.Integer;
    revenue_generated: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::plan-metric.plan-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::plan-metric.plan-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    slug: Attribute.UID & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    desc: Attribute.Text & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
    gallery: Attribute.Media;
    category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::category.category'
    >;
    product_variants: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product-variant.product-variant'
    >;
    sub_category: Attribute.Relation<
      'api::product.product',
      'manyToOne',
      'api::sub-category.sub-category'
    >;
    yt_video_link: Attribute.String;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    product_metric: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::product-metric.product-metric'
    >;
    shipping_price: Attribute.Decimal;
    cod_enabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    shipping: Attribute.Enumeration<
      ['SHIPPING_PRICE', 'SHIPPING_PERCENTAGE', 'FREE_SHIPPING']
    > &
      Attribute.Required;
    imported_product: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::imported-product.imported-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductMetricProductMetric extends Schema.CollectionType {
  collectionName: 'product_metrics';
  info: {
    singularName: 'product-metric';
    pluralName: 'product-metrics';
    displayName: 'Product Metrics';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    product: Attribute.Relation<
      'api::product-metric.product-metric',
      'oneToOne',
      'api::product.product'
    >;
    view_count: Attribute.Integer;
    ordered_count: Attribute.Integer;
    shares_count: Attribute.Integer;
    revenue_generated: Attribute.Decimal;
    profit_margin: Attribute.Decimal;
    premium_plan_orders: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-metric.product-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-metric.product-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductVariantProductVariant extends Schema.CollectionType {
  collectionName: 'product_variants';
  info: {
    singularName: 'product-variant';
    pluralName: 'product-variants';
    displayName: 'Product Variant';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    quantity: Attribute.Integer & Attribute.Required;
    price: Attribute.Decimal & Attribute.Required;
    strikePrice: Attribute.Decimal;
    premiumPrice: Attribute.Decimal;
    isActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    product: Attribute.Relation<
      'api::product-variant.product-variant',
      'manyToOne',
      'api::product.product'
    >;
    bulk_pricings: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToMany',
      'api::bulk-pricing.bulk-pricing'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-variant.product-variant',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPromotionalMessagePromotionalMessage
  extends Schema.CollectionType {
  collectionName: 'promotional_messages';
  info: {
    singularName: 'promotional-message';
    pluralName: 'promotional-messages';
    displayName: 'PromotionalMessages';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    content: Attribute.String;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    action: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::promotional-message.promotional-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::promotional-message.promotional-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiResellerCustomerResellerCustomer
  extends Schema.CollectionType {
  collectionName: 'reseller_customers';
  info: {
    singularName: 'reseller-customer';
    pluralName: 'reseller-customers';
    displayName: 'Reseller Customer';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    reseller: Attribute.Relation<
      'api::reseller-customer.reseller-customer',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    customer: Attribute.Relation<
      'api::reseller-customer.reseller-customer',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reseller-customer.reseller-customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reseller-customer.reseller-customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReturnOrderReturnOrder extends Schema.CollectionType {
  collectionName: 'return_orders';
  info: {
    singularName: 'return-order';
    pluralName: 'return-orders';
    displayName: 'Return Order';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    order_product: Attribute.Relation<
      'api::return-order.return-order',
      'oneToOne',
      'api::order-product.order-product'
    >;
    note: Attribute.String;
    media: Attribute.Media;
    user: Attribute.Relation<
      'api::return-order.return-order',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    status: Attribute.Enumeration<
      ['SUBMITTED', 'APPROVED', 'DECLINED', 'RETURNED']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::return-order.return-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::return-order.return-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShipRocketOrderShipRocketOrder
  extends Schema.CollectionType {
  collectionName: 'ship_rocket_orders';
  info: {
    singularName: 'ship-rocket-order';
    pluralName: 'ship-rocket-orders';
    displayName: 'ShipRocket Order';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    order_id: Attribute.String;
    order_date: Attribute.Date;
    pickup_location: Attribute.Text;
    billing_customer_name: Attribute.String;
    billing_city: Attribute.String;
    billing_pincode: Attribute.String;
    billing_state: Attribute.String;
    billing_country: Attribute.String;
    billing_email: Attribute.String;
    billing_phone: Attribute.String;
    payment_method: Attribute.String;
    shipping_charges: Attribute.Decimal;
    giftwrap_charges: Attribute.Decimal;
    transaction_charges: Attribute.Decimal;
    total_discount: Attribute.Decimal;
    order_items: Attribute.Relation<
      'api::ship-rocket-order.ship-rocket-order',
      'oneToMany',
      'api::shiprocket-order-item.shiprocket-order-item'
    >;
    sub_total: Attribute.Decimal;
    length: Attribute.Decimal;
    breadth: Attribute.Decimal;
    height: Attribute.Decimal;
    weight: Attribute.Decimal;
    billing_address: Attribute.Text;
    shiprocket_order_id: Attribute.String;
    shipment_id: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ship-rocket-order.ship-rocket-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ship-rocket-order.ship-rocket-order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiShiprocketOrderItemShiprocketOrderItem
  extends Schema.CollectionType {
  collectionName: 'shiprocket_order_items';
  info: {
    singularName: 'shiprocket-order-item';
    pluralName: 'shiprocket-order-items';
    displayName: 'Shiprocket OrderItem';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String;
    sku: Attribute.String;
    units: Attribute.Integer;
    selling_price: Attribute.Decimal;
    discount: Attribute.Decimal;
    tax: Attribute.Decimal;
    hsn: Attribute.String;
    order_item: Attribute.Relation<
      'api::shiprocket-order-item.shiprocket-order-item',
      'oneToOne',
      'api::order-product.order-product'
    >;
    ship_rocket_order: Attribute.Relation<
      'api::shiprocket-order-item.shiprocket-order-item',
      'manyToOne',
      'api::ship-rocket-order.ship-rocket-order'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shiprocket-order-item.shiprocket-order-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shiprocket-order-item.shiprocket-order-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStoreSettingStoreSetting extends Schema.SingleType {
  collectionName: 'store_settings';
  info: {
    singularName: 'store-setting';
    pluralName: 'store-settings';
    displayName: 'Store Setting';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    store_mode: Attribute.Enumeration<
      ['WHATSAPP', 'B2B', 'ECOM', 'RESELLER_ECOM']
    >;
    primary_color: Attribute.String;
    secondary_color: Attribute.String;
    bg_color: Attribute.String;
    text_color: Attribute.String;
    button_color: Attribute.String;
    is_app_enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    is_maintenance_mode: Attribute.Boolean & Attribute.DefaultTo<false>;
    is_store_active: Attribute.Boolean & Attribute.DefaultTo<true>;
    store_inactive_message: Attribute.Text;
    store_maintenance_message: Attribute.Text;
    is_pricing_visible: Attribute.Boolean & Attribute.DefaultTo<true>;
    is_cart_enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    is_wallet_enabled: Attribute.Boolean & Attribute.DefaultTo<true>;
    product_card_style: Attribute.Enumeration<['PORTRAIT', 'SQUARE']> &
      Attribute.DefaultTo<'SQUARE'>;
    category_card_style: Attribute.Enumeration<['LANDSCAPE', 'SQUARE']> &
      Attribute.DefaultTo<'SQUARE'>;
    product_list_span_mobile: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 1;
        max: 4;
      }> &
      Attribute.DefaultTo<2>;
    product_list_span_desktop: Attribute.Integer &
      Attribute.SetMinMax<{
        min: 2;
        max: 10;
      }> &
      Attribute.DefaultTo<4>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::store-setting.store-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::store-setting.store-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubCategorySubCategory extends Schema.CollectionType {
  collectionName: 'sub_categories';
  info: {
    singularName: 'sub-category';
    pluralName: 'sub-categories';
    displayName: 'Sub Category';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    thumbnail: Attribute.Media & Attribute.Required;
    category: Attribute.Relation<
      'api::sub-category.sub-category',
      'manyToOne',
      'api::category.category'
    >;
    products: Attribute.Relation<
      'api::sub-category.sub-category',
      'oneToMany',
      'api::product.product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sub-category.sub-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sub-category.sub-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubscriptionSubscription extends Schema.CollectionType {
  collectionName: 'subscriptions';
  info: {
    singularName: 'subscription';
    pluralName: 'subscriptions';
    displayName: 'Subscription';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    slug: Attribute.UID;
    validFrom: Attribute.Date;
    validTo: Attribute.Date;
    paymentId: Attribute.String;
    paymentSignature: Attribute.Text;
    users_permissions_user: Attribute.Relation<
      'api::subscription.subscription',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    plan: Attribute.Relation<
      'api::subscription.subscription',
      'manyToOne',
      'api::plan.plan'
    >;
    orderId: Attribute.String;
    payment_logs: Attribute.Relation<
      'api::subscription.subscription',
      'oneToMany',
      'api::payment-log.payment-log'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subscription.subscription',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::subscription.subscription',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTransactionTransaction extends Schema.CollectionType {
  collectionName: 'transactions';
  info: {
    singularName: 'transaction';
    pluralName: 'transactions';
    displayName: 'Transaction';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    purpose: Attribute.Enumeration<['PURCHASE', 'REFUND', 'ADDED_TO_WALLET']>;
    user: Attribute.Relation<
      'api::transaction.transaction',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    txn_type: Attribute.Enumeration<['DEBIT', 'CREDIT']>;
    txn_id: Attribute.String;
    remark: Attribute.String;
    mode: Attribute.Enumeration<['WALLET', 'MONEY']>;
    amount: Attribute.Decimal & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::transaction.transaction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::transaction.transaction',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTutorialTutorial extends Schema.CollectionType {
  collectionName: 'tutorials';
  info: {
    singularName: 'tutorial';
    pluralName: 'tutorials';
    displayName: 'Tutorial';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    thumbnail: Attribute.Media;
    name: Attribute.String & Attribute.Required;
    video_url: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiUserMetricUserMetric extends Schema.CollectionType {
  collectionName: 'user_metrics';
  info: {
    singularName: 'user-metric';
    pluralName: 'user-metrics';
    displayName: 'User Metrics';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    wallet_orders: Attribute.Integer;
    cod_orders: Attribute.Integer;
    prepaid_orders: Attribute.Integer;
    subscriptions_count: Attribute.Integer;
    user: Attribute.Relation<
      'api::user-metric.user-metric',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::user-metric.user-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::user-metric.user-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWalletWallet extends Schema.CollectionType {
  collectionName: 'wallets';
  info: {
    singularName: 'wallet';
    pluralName: 'wallets';
    displayName: 'Wallet';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amount: Attribute.Decimal;
    transaction_type: Attribute.Enumeration<['DEBIT', 'CREDIT']> &
      Attribute.Required;
    reasons: Attribute.Enumeration<
      ['PURCHASE', 'WITHDRAWL', 'ADDITION', 'PAYOUT_SENT']
    >;
    users_permissions_user: Attribute.Relation<
      'api::wallet.wallet',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    remark: Attribute.String;
    proof: Attribute.Media;
    order: Attribute.Relation<
      'api::wallet.wallet',
      'oneToOne',
      'api::order.order'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wallet.wallet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::wallet.wallet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::custom-links.custom-link': PluginCustomLinksCustomLink;
      'plugin::custom-links.tempuri': PluginCustomLinksTempuri;
      'api::activity-log.activity-log': ApiActivityLogActivityLog;
      'api::address.address': ApiAddressAddress;
      'api::admin-subscription.admin-subscription': ApiAdminSubscriptionAdminSubscription;
      'api::banner.banner': ApiBannerBanner;
      'api::bulk-pricing.bulk-pricing': ApiBulkPricingBulkPricing;
      'api::campaign.campaign': ApiCampaignCampaign;
      'api::cart.cart': ApiCartCart;
      'api::cart-product.cart-product': ApiCartProductCartProduct;
      'api::category.category': ApiCategoryCategory;
      'api::collection.collection': ApiCollectionCollection;
      'api::collection-static.collection-static': ApiCollectionStaticCollectionStatic;
      'api::config.config': ApiConfigConfig;
      'api::custom-courier.custom-courier': ApiCustomCourierCustomCourier;
      'api::default-page.default-page': ApiDefaultPageDefaultPage;
      'api::free-plan.free-plan': ApiFreePlanFreePlan;
      'api::global.global': ApiGlobalGlobal;
      'api::global-brand.global-brand': ApiGlobalBrandGlobalBrand;
      'api::group.group': ApiGroupGroup;
      'api::imported-product.imported-product': ApiImportedProductImportedProduct;
      'api::lead.lead': ApiLeadLead;
      'api::notification.notification': ApiNotificationNotification;
      'api::order.order': ApiOrderOrder;
      'api::order-product.order-product': ApiOrderProductOrderProduct;
      'api::payment-log.payment-log': ApiPaymentLogPaymentLog;
      'api::pin-code.pin-code': ApiPinCodePinCode;
      'api::plan.plan': ApiPlanPlan;
      'api::plan-metric.plan-metric': ApiPlanMetricPlanMetric;
      'api::product.product': ApiProductProduct;
      'api::product-metric.product-metric': ApiProductMetricProductMetric;
      'api::product-variant.product-variant': ApiProductVariantProductVariant;
      'api::promotional-message.promotional-message': ApiPromotionalMessagePromotionalMessage;
      'api::reseller-customer.reseller-customer': ApiResellerCustomerResellerCustomer;
      'api::return-order.return-order': ApiReturnOrderReturnOrder;
      'api::ship-rocket-order.ship-rocket-order': ApiShipRocketOrderShipRocketOrder;
      'api::shiprocket-order-item.shiprocket-order-item': ApiShiprocketOrderItemShiprocketOrderItem;
      'api::store-setting.store-setting': ApiStoreSettingStoreSetting;
      'api::sub-category.sub-category': ApiSubCategorySubCategory;
      'api::subscription.subscription': ApiSubscriptionSubscription;
      'api::transaction.transaction': ApiTransactionTransaction;
      'api::tutorial.tutorial': ApiTutorialTutorial;
      'api::user-metric.user-metric': ApiUserMetricUserMetric;
      'api::wallet.wallet': ApiWalletWallet;
    }
  }
}
