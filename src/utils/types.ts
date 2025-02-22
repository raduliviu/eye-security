export type TDetections = {
  id: string;
  eyed: string;
  pagerdutyIncidentId: string;
  status: 'triggered' | 'acknowledged' | 'resovled';
  resolutionStatus: 'TP' | 'FP';
  service: 'mcafee' | 'norton_antivirus' | 'defender_for_endpoint' | 'sentinel';
  title: string;
  severity: 'low' | 'high';
  createdAt: Date;
  updatedAt: Date;
  triggeredAt: Date;
  acknowledgedAt: Date;
  acknowledgedBy: string;
  resolvedAt: Date;
  resolvedBy: string;
  categoryRef:
    | 'malicious_behavior_on_a_system'
    | 'unusual_login_or_user_activity'
    | 'execution_with_malicious_intent'
    | 'unusual_software_activity'
    | 'unauthorized_data_access'
    | 'uncategorized';
};

export type TServerError = {
  error: string;
  message: string;
};
