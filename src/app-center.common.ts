import { ErrorReport } from './Models/error.model';

export interface InitOption {
  analytics: boolean;
  crashes: boolean;
  appSecret: string;
  distribute: boolean;
}

export interface TrackEventOption {
  eventName: string;
  properties?: any;
}

export interface PropertyOption {
  key: string;
  value: string;
}

export interface AnalyticsListener {
  onBeforeSending?: (log: any) => void;
  onSendingFailed?: (log: any, e: any) => void;
  onSendingSucceeded?: (log: any) => void;
}

export interface CrashesListener {
  shouldProcess?: (report: ErrorReport) => void;
  shouldAwaitUserConfirmation?: () => boolean;
  getErrorAttachments?: (report: ErrorReport) => any;
  onBeforeSending?: (report: ErrorReport) => void;
  onSendingFailed?: (report: ErrorReport, e: any) => void;
  onSendingSucceeded?: (report: ErrorReport) => void;
}
