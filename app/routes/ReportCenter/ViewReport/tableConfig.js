export const columns = {
  'all-consultant': {
    columns: [
      'ParentId',
      'PersonID',
      'FirstName',
      'MiddleName',
      'LastName',
      'Companyname',
      'PhoneNumber',
      'Street1',
      'Street2',
      'City',
      'State/province',
      'PostalCode',
      'Country',
      'TranslationLanguages',
      'ReplicatedSIteUrl',
      'JoinDate',
      'DOB',
      'ConsultantType',
      'ConsultantStatus',
      'ConsultantRank',
      'PriceClassification',
      'TaxExempt',
      'EmailOption',
      'BlockWebsite',
      'BlockPortal',
    ],
    filters: [
      'ParentId',
      'PersonID',
      'FirstName',
      'MiddleName',
      'LastName',
      'Companyname',
      'PhoneNumber',
      'City',
      'State/province',
      'PostalCode',
      'Country',
      'TranslationLanguages',
      'ReplicatedSIteUrl',
      'JoinDate',
      'DOB',
      'ConsultantType',
      'ConsultantStatus',
      'ConsultantRank',
      'PriceClassification',
      'TaxExempt',
      'EmailOption',
      'BlockWebsite',
      'BlockPortal',
    ],
  },
  'cancelled-consultant': {
    columns: [
      'ConsultantID',
      'ConsultantStatus',
      'Name',
      'Rank',
      'OriginalParent',
      'PreviousParent',
      'CurrentParent',
      'CancelDate',
      'JoinDate',
    ],
    filters: ['CancelDate', 'ConsultantStatus', 'Genealogy'],
  },
  'consultant-last-order': {
    columns: [
      'ConsultantID',
      'FirstName',
      'LastName',
      'Email',
      'Phone',
      'LastPersonalOrderDate',
      'LastPersonalOrderID',
      'LastCustomerOrderDate',
      'Street1',
      'City',
      'State',
      'Zip',
      'JoinDate',
      'ConsultantStatus',
    ],
    filters: ['LastOrderDate', 'JoinDate', 'ConsultantID', 'ConsultantStatus'],
  },
  'consultant-rank-history': {
    columns: ['ConsultantID', 'Date', 'FirstName', 'LastName', 'CurrentRank', 'PayRank'],
    filters: ['ConsultantID', 'Date'],
  },
  'consultant-sky-wallet-balances': {
    columns: ['DisplayID', 'ConsultantName', 'Balance'],
    filters: ['SkyWalletType', 'BalanceGreaterThan', 'CurrencyType', 'DisplayID'],
  },
  'consultant-subscriptions': {
    columns: [
      'ConsultantName',
      'DisplayID',
      'Address',
      'City',
      'State\\Province',
      'PostalCode',
      'Country',
      'DateCreated',
      'NextSchedule',
      'Frequency',
      'PaymentMethod',
      'ProductName',
      'SKU',
      'Quantity',
      'Orders',
      'Active',
    ],
    filters: ['Active', 'Frequency', 'SKU', 'NextSchedule', 'Country', 'NextSchedule'],
  },
  'new-all-consultants-km': {
    columns: [
      'ParentId',
      'PersonID',
      'FirstName',
      'MiddleName',
      'LastName',
      'CompanyName',
      'PhoneNumber',
      'Street1',
      'Street2',
      'City',
      'State/Province',
      'PostalCode',
      'Country',
      'TranslationLanguages',
      'ReplicatedSIteUrl',
      'JoinDate',
      'DOB',
      'ConsultantType',
      'ConsultantStatus',
      'ConsultantRank',
      'PriceClassification',
      'TaxExempt',
      'EmailOption',
      'Email',
      'BlockWebsite',
      'BlockPortal',
    ],
    filters: [
      'ParentId',
      'PersonID',
      'FirstName',
      'MiddleName',
      'LastName',
      'CompanyName',
      'PhoneNumber',
      'City',
      'State/Province',
      'PostalCode',
      'Country',
      'TranslationLanguages',
      'ReplicatedSIteUrl',
      'JoinDate',
      'DOB',
      'ConsultantType',
      'ConsultantStatus',
      'ConsultantRank',
      'PriceClassification',
      'TaxExempt',
      'EmailOption',
      'Email',
      'BlockWebsite',
      'BlockPortal',
    ],
  },
  'rank-achievement': {
    columns: [
      'ConsultantDisplayID',
      'FirstName',
      'LastName',
      'PreviousRank',
      'NewRank',
      'EffectiveDate',
    ],
    filters: ['ConsultantDisplayID', 'FirstName', 'LastName', 'NewRank', 'EffectiveDate'],
  },
  'sales-by-product-jk': {
    columns: ['No records found'],
    filters: [
      'FirstName',
      'LastName',
      'PersonDisplayID',
      'DisplayName',
      'OrderDate',
      'OrderDisplayID',
    ],
  },
  'top-earners': {
    columns: ['Date'],
    filters: [
      'ConsultantID',
      'FirstName',
      'LastName',
      'Email',
      'JoinDate',
      'ConsultantRank',
      'ConsultantStatus',
      'Company',
      'Earnings',
    ],
  },
  'all-customers': {
    columns: ['No records found'],
    filters: [
      'JoinDate',
      'ParentId',
      'PersonID',
      'FirstName',
      'MiddleName',
      'LastName',
      'CompanyName',
      'PhoneNumber',
      'DOB',
      'City',
      'State/Province',
      'PostalCode',
      'Country',
      'CustomerStatus',
      'CustomerType',
      'EmailOption',
      'PriceClassification',
      'TaxExempt',
      'TranslationLanguages',
    ],
  },
  'customer-sky-wallet-balances': {
    columns: ['DisplayID', 'CustomerName', 'Balance'],
    filters: ['SkyWalletType', 'Balance', 'CurrencyType', 'DisplayID'],
  },
  'customer-subscriptions': {
    columns: [
      'CustomerName',
      'DisplayID',
      'Address',
      'City',
      'State\\Province',
      'PostalCode',
      'Country',
      'DateCreated',
      'NextSchedule',
      'Frequency',
      'PaymentMethod',
      'ProductName',
      'SKU',
      'Quantity',
      'Orders',
      'Active',
    ],
    filters: ['Country', 'NextSchedule'],
  },
  'all-orders': {
    filters: [
      'OrderID',
      'OrderDate',
      'PostedDate',
      'ShippedDate',
      'CommissionDate',
      'Commissionable',
      'OrderStatus',
      'OrderPaymentStatus',
      'CommissionPersonID',
      'ConsultantID',
      'PersonID',
      'PersonType',
      'FirstName',
      'LastName',
      'Locked',
      'Currency',
      'ShoppingCart',
      'EventID',
      'Subtotal',
      'ShippingTotal',
      'HandlingTotal',
      'TaxTotal',
      'DiscountTotal',
      'OrderTotal',
    ],
    columns: [
      'OrderID',
      'OrderDate',
      'PostedDate',
      'ShippedDate',
      'FinalPaymentDate',
      'CommissionDate',
      'Commissionable',
      'OrderStatus',
      'OrderPaymentStatus',
      'CommissionPersonID',
      'ConsultantID',
      'PersonID',
      'PersonType',
      'FirstName',
      'LastName',
      'Locked',
      'Currency',
      'ShoppingCart',
      'EventID',
      'Subtotal',
      'ShippingTotal',
      'HandlingTotal',
      'TaxTotal',
      'DiscountTotal',
      'OrderTotal',
    ],
  },
  'product-sales-by-customer': {
    filters: ['Filter not availables'],
    columns: [
      'OrderID',
      'OrderDate',
      'PostedDate',
      'ShippedDate',
      'DisplayID',
      'Name',
      'Email',
      'PhoneNumber',
      'Quantity',
      'PersonType',
    ],
  },
  'sales-tax-by-state': {
    filters: ['OrderDate', 'OrderStatus'],
    columns: [
      'State',
      'TotalPrice',
      'Subtotal',
      'Shipping',
      'Handling',
      'Discounts',
      'Taxable',
      'Tax',
    ],
  },
  'skywallet-transactions-with-detail-km': {
    filters: [
      'TransactionDate',
      'SkyWalletBalanceType',
      'PersonType',
      'PersonDisplayID',
      'FirstName',
      'LastName',
    ],
    columns: [
      'TransactionDate',
      'BalanceType',
      'SkyWalletTransactionID',
      'Details',
      'Amount',
      'Balance',
      'PersonDisplayID',
      'PersonType',
      'FirstName',
      'LastName',
    ],
  },
  'order-aging': {
    columns: [
      'OrderID',
      'OrderDate',
      'Status',
      'CartType',
      'PersonType',
      'PersonName',
      'Street1',
      'Street2',
      'City',
      'Province/State',
      'PostalCode',
      'Country',
      'Phone',
      'Email',
      'Currency',
      'DiscountTotal',
      'OrderTotal',
      'DatePosted',
      'Payments',
      'BalanceDue',
      'AgeDays',
    ],
    filters: [
      'OrderDate',
      'PersonType',
      'Country',
      'BalanceDue',
      'Currency',
      'Status',
      'PostedDate',
      'AgeDays',
    ],
  },
  'refunded-orders': {
    columns: ['OrderDate', 'OrderStatus', 'OrderPaymentStatus', 'Commissionable'],
    filters: [
      'OrderDisplayID',
      'FirstName',
      'LastName',
      'OrderDate',
      'Commissionable',
      'OrderPaymentStatus',
      'OrderStatus',
      'OrderTotal',
    ],
  },
  'sales-tax-by-city': {
    columns: ['No records found'],
    filters: ['Filter not availables'],
  },
  subscriptions: {
    filters: ['Active', 'Frequency', 'SKU', 'Next Schedule', 'Country', 'Person Type'],
    columns: [
      'PersonType',
      'PersonName',
      'DisplayID',
      'Address',
      'City',
      'StateProvince',
      'PostalCode',
      'Country',
      'DateCreated',
      'NextSchedule',
      'Frequency',
      'FrequencyDay',
      'PaymentMethod',
      'ProductName',
      'SKU',
      'Quantity',
      'Orders',
      'Active',
    ],
  },
  'order-invoices-v2': {
    filters: ['OrderDisplayID', 'Shipping State', 'Order Date'],
    columns: ['No records found'],
  },
  returns: {
    filters: ['RMA Date', 'RMAStatus', 'State/Province'],
    columns: [
      'OrderID',
      'RMA',
      'OrderDate',
      'RMADate',
      'RMAStatus',
      'Reason',
      'RefundOption',
      'Initiated By',
      'OwnerType',
      'OwnerID',
      'FirstName',
      'LastName',
      'State/Province',
    ],
  },
  'orders-with-payment-type': {
    filters: [
      'PaymentMethod',
      'PaymentType',
      'OrderID',
      'OrderDate',
      'PostedDate',
      'ShippedDate',
      'CommissionDate',
      'Commissionable',
      'OrderStatus',
      'PersonType',
      'CommissionPersonID',
      'PersonDisplayID',
    ],
    columns: [
      'PaymentMethod',
      'PaymentType',
      'PaymentDate',
      'Amount',
      'OrderID',
      'OrderDate',
      'PostedDate',
      'ShippedDate',
      'CommissionDate',
      'Commissionable',
      'OrderStatus',
      'PersonID',
      'CommissionPersonID',
      'PersonType',
      'FirstName',
      'LastName',
      'Email',
      'Street1',
      'Street2',
      'City',
      'State/Province',
      'PostalCode',
      'Locked',
      'ShoppingCart',
      'EventID',
      'OrderTotal',
    ],
  },
  'sales-by-product---corporate': {
    filters: [
      'Warehouse',
      'ProductType',
      'OrderStatus',
      'OrderDate',
      'PostedDate',
      'ShippedDate',
      'CommissionDate',
    ],
    columns: [
      'PrimarySKU',
      'SKU',
      'Product',
      'Status',
      'TotalSales',
      'QuantitySold',
      'TotalDiscounts',
      'Available',
      'OnHand',
      'SafetyStock',
      'Reserved',
    ],
  },
  'all-parties': {
    filters: [
      'EventID',
      'PartyStatus',
      'EventDate',
      'ConsultantID',
      'HostID',
      'HostPersonType',
      'EventType',
    ],
    columns: [
      'EventID',
      'EventDate',
      'EventType',
      'PartyStatus',
      'PartyCloseDate',
      'ConsultantID',
      'HostID',
      'HostName',
      'HostPersonType',
      'OrderCount',
      'SalesTotal',
    ],
  },

  'active-cost-tiers': {
    filters: ['SKU', 'PurchaseOrderID', 'ReceiveDate'],
    columns: [
      'SKU',
      'Description',
      'StartingQuantity',
      'RemainingQuantity',
      'UnitCost',
      'InventoryValue',
      'PurchaseOrderID',
      'ReceiveDate',
    ],
  },
  'inventory-availability': {
    filters: ['SKU', 'Product', 'Available'],
    columns: ['SKU', 'Product', 'Available', 'OnHand', 'SafetyStock', 'Reserved'],
  },
  'subscriptions-by-product': {
    filters: ['SKU', 'Country'],
    columns: [
      'PersonID',
      'FirstName',
      'LastName',
      'Company',
      'Email',
      'DateCreated',
      'StartDate',
      'Frequency',
      'Day',
      'Quantity',
      'PaymentMethod',
      'NextOrderDate',
      'DateCancelled',
    ],
  },
  'cost-of-goods-sold': {
    filters: ['OrderDate', 'ShippedDate', 'PostedDate', 'FirstShippedDate', 'OrderStatus'],
    columns: ['No records found'],
  },
  'inventory-availability-by-warehouse': {
    filters: ['Warehouse', 'SKU', 'Product', 'Available'],
    columns: [
      'SKU',
      'Product',
      'Available',
      'OnHand',
      'SafetyStock',
      'Reserved',
      'ProductBusinessUnitID',
    ],
  },
  'cost-of-goods-summary': {
    filters: ['OrderDate', 'OrderID', 'SKU'],
    columns: ['No records found'],
  },
  'inventory-availability-by-warehouse-bin': {
    filters: ['Warehouse', 'Bin', 'SKU', 'Product', 'Available'],
    columns: ['SKU', 'Product', 'Available', 'OnHand', 'SafetyStock', 'Reserved'],
  },
  'inventory-adjustment-audit': {
    filters: ['AdjustmentDate', 'WarehouseName', 'SKU', 'User', 'OrderDisplayID'],
    columns: [
      'SKU',
      'WarehouseName',
      'User',
      'AdjustmentDate',
      'AdjustmentReason',
      'AdjustmentQuantity',
      'QuantityOnHand',
      'CurrentQuantityOnHand',
      'OrderDisplayID',
      'Note',
    ],
  },
  'inventory-counts': {
    filters: ['SKU', 'Available', 'OnHand', 'SafetyStock', 'Reserved'],
    columns: ['SKU', 'Available', 'OnHand', 'SafetyStock', 'Reserved'],
  },
}


export const data = [
  {
    id: 1,
    ParentID: '1001',
    PersonID: '19416',
    FirstName: '7285',
    MiddleName: '',
    LastName: 'Test',
    CompanyName: 'N/A',
    PhoneNumber: '14777474747',
    Street1: '125 W Main St',
    Street2: '',
    City: 'Dallas',
    'State/Province': 'Texas',
    PostalCode: '75208',
    Country: 'United States',
    TranslationLanguage: 'English',
    ReplicatedSiteURL: '7285test',
    JoinDate: '06/01/2020',
    DateOfBirth: '12/21/1990',
    ConsultantType: 'Consultant',
    ConsultantStatus: 'Active',
    ConsultantRank: 'Consultant',
    PriceClassification: 'Consultant',
    TaxExempt: 'No',
    EmailOption: 'Deprecated',
    BlockWebsite: 'No',
    BlockPortal: 'No',
    Email: 'xyz@gmail.com',
  },
]