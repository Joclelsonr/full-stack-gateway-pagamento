export type Invoice = {
  id: string;
  account_id: string;
  amount: number;
  status: "approved" | "pending" | "rejected";
  description: string;
  payment_type: string;
  card_last_digits: number;
  created_at: Date;
  updated_at: Date;
};
