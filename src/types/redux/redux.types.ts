interface EntityObject {
  id: string;
  name: string;
}

export interface IMembershipInfo {
  expiredDate: string | undefined;
  activationDate: string | undefined;
  expiredWeeksLeft: string | undefined;
  membername: string | undefined;
  membershipEmail: string | undefined;
  membershipID: string | undefined;
  membershipType: EntityObject | undefined | string;
  isMainMemeber: boolean | undefined;
  membershipStatus?: number | string | undefined;
  membershipNumber?: string | undefined;
  draftMembershipId?: string | undefined;
  registrationType?: string | undefined;
  commercialRegistry?: string | undefined;
  contactTypeId?: string | undefined;
}

export interface ManagePeopleVariables {
  Companions?: {ntw_count: number}[] | number | null;
  GuestPacakgeId?: string | null;
  Dependents?: any[] | null;
  MembershipDuration?: string | null;
}

export interface IinitialStateUser {
  userModal: {open: boolean; type: string};
  displayMode: 'white' | 'dark';
  managePeopleCart: ManagePeopleVariables;
  langType: 'ar' | 'en';
  userInfo: {
    firsName: string;
    lastName: string;
    fullName: string;
    profilePhoto?: string | null;
  };
  membershipInfo: IMembershipInfo;
  appVersion: string;
}

export type Action = {
  payload: any;
  type: string;
};

export interface IinitialStateApp {
  count: number;
  stepperAction: string;
  FlightRegistrationId: string;
  sharedData: any;
  Loading: boolean;
  flightSharedData: any;
  langType: 'en' | 'ar';
  notifiactionsReadIds: string[] | any[];
}

export interface IinitialStatePayment {
  invoiceDetails: {
    totalAmount?: string;
    invoiceId?: string;
    invoiceNumber?: string;
    referenceId?: string;
    paymentChannelId?: string;
    paymentMehtodSelected?: string;
  };

  paymentRedirectInfo: {
    redirectUrl?: string;
  };
}
export interface IPaymentInvoiceTypes {
  totalAmount: string | undefined;
  invoiceId: string | undefined;
  invoiceNumber: string | undefined;
}
