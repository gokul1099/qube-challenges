export type  Location =  {
    city: string;
    state: string;
    country: string;
  }

export type  Appliance= {
    serialNo: string;
    theatreName: string;
    location: Location;
    bandwidth: string;
    avgBandwidth: string;
    deviceStatus: string;
    downloadStatus: string;
    osVersion: string;
  }
  export type Device = {
    serialNo: string;
    theatreName: string;
    location: Location,
    ispPaymentResponsibility: string;
    bandwidth: string;
    avgBandwidth: string;
    planStartDate: string;
    billingCycle: string;
    deviceStatus: string;
    downloadStatus: string;
    osVersion: string;
    storage: string;
  }